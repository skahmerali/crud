import express from "express";
import cors from "cors"
// import axios from "axios";
import morgan from "morgan";

const app = express();
// const axios = axios();

app.use(cors());
app.use(express.json());
app.use(morgan());


const port = process.env.PORT || 3000;


let users = [];
app.use((req, res, next) => {
    console.log("yae req ha user ki trf se", req.body)
    next();
})

app.get("/users", (req, res) => {
    res.send(users)
})
// app.post((req, res, next) => {
//     console.log("user is here", req.body)
//     res.send(req.body);
//     next();
// })


// app.get('/users', (req, res) => {
//     res.send(users)
//   })


app.get('/user:id', (req, res) => {
    if (users[req.params.id]) {
        res.send(users[req.params.id])
    } else {

        res.send("user not found")
    }

})
app.post('/user', (req, res) => {
    if (!req.body.userName || !req.body.email || !req.body.address) {
        res.status(400).send("invalid data");
    } else {
        users.push({
            userName: req.body.userName,
            email: req.body.email,
            address: req.body.address,

        })

        console.log("yae array ha" + users)
        res.send("user created successfully")
    }
})
app.put('user/:id', (req, res) => {
    if (users[req.params.id]) {
        if (req.body.userName) {
            users[req.params.id].userName = req.body.userName;
        } if (req.body.email) {
            users[req.params.id].email = req.body.email;
        }
        //     if(req.body.userName){
        //     users[req.params.id].userName=req.body.;
        // }
        if (req.body.address) {
            users[req.params.id].address = address;

        }
        res.send(users[req.params.id])

    }
    else {
        res.send("user not found")
    }

})

app.delete('/user/:id', (req, res) => {

    if (users[req.params.id]) {
        users[req.params.id] === {};
        res.send("userDeleted")
    } else {
        res.send("user not found")
    }
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
