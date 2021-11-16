import express from "express";
import cors from "cors"
// import axios from "axios";
import morgan from "morgan";
import mongoose from "mongoose";
const app = express();
// const axios = axios();
// const dburi = process.env.DBURI
const dburi = "mongodb+srv://ahmerali:ahmerali@cluster0.slkv6.mongodb.net/ahmerali"

// this is a line to connect ur app with database 
mongoose.connect(dburi);
const CrudUser = mongoose.model('CrudUser', {
    userName: String,
    email: String,
    address: String,
});




app.use(cors('short'));
app.use(express.json());
app.use(morgan());


const port = process.env.PORT || 3000;


// let users = [];
app.use((req, res, next) => {
    console.log("yae req ha user ki trf se", req.body)
    next();
})

app.get("/users", (req, res) => {
    CrudUser.find({}, (err, data) => {
        if (!err) {

            res.send(data)
        }
        else {
            res.status(500).send("Error Excuted")
        }
    })
})
// app.post((req, res, next) => {
//     console.log("user is here", req.body)
//     res.send(req.body);
//     next();
// })


// app.get('/users', (req, res) => {
//     res.send(users)
//   })


app.get('/user/:id', (req, res) => {
    CrudUser.findOne({ _id: req.params.id }, (err, data) => {
        if (!err) {
            res.send(data)

        }
        else {
            res.status(505).send("Invalid Data")
        }
    })

    // if (users[req.params.id]) {
    //     res.send(users[req.params.id])
    // } else {

    //     res.send("user not found")
    // }

})
app.post('/user', (req, res) => {
    if (!req.body.userName || !req.body.email || !req.body.address) {
        res.status(400).send("invalid data");
    } else {
        const newUser = new CrudUser({
            userName: req.body.userName,
            email: req.body.email,
            address: req.body.address,
        });
        newUser.save().then(() => {
            console.log('user created success')
            res.send("users created");
        })

    }
})
//  {
//     users.push({
//         userName: req.body.userName,
//         email: req.body.email,
//         address: req.body.address,

//     })

// console.log("yae array ha" + users)
//     res.send("user created successfully")
// }
// })
app.put('/user/:id', (req, res) => {
    let updateObj = {}
    if (req.body.userName) {
      
        updateObj.userName = req.body.userName
        }
        if (req.body.email) {
            updateObj.email = req.body.email
        }
        if (req.body.address) {
            updateObj.address = req.body.address
        }
        CrudUser.findByIdAndUpdate(req.params.id,updateObj, { new: true },
            (err, data) => {
                if (!err) {
                    res.send(data)
                } else {
                    res.status(500).send("error happened")
                }
            })
   
})



//     if (users[req.params.id]) {
//         if (req.body.userName) {
//             users[req.params.id].userName = req.body.userName;
//         }
//         if (req.body.email) {
//             users[req.params.id].email = req.body.email;
//         }
//         //     if(req.body.userName){
//         //     users[req.params.id].userName=req.body.;
//         // }
//         if (req.body.address) {
//             users[req.params.id].address = address;

//         }
//     res.send(users[req.params.id])

//     }

//     else {
//         res.send("user not found")
//     }

// })

app.delete('/user/:id', (req, res) => {

    CrudUser.findByIdAndRemove(req.params.id, (err, data) => {
        if (!err) {
            res.send("user deleted")
        } else {
            res.status(500).send("error exicuted")
        }
    })

    // if (users[req.params.id]) {
    //     users[req.params.id] = {};
    //     res.send("userDeleted")
    // } else {
    //     res.send("user not found")
    // }
})

//   app.get('/', (req, res) => {
//     res.send('Hi I am a hello world Server program')
//   })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
// axios.get("/user")
//     .then((res) => {
//         res.data.user
//     })
