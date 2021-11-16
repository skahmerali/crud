
//  const url = process.env.PORT||3000;
function postC() {
    let userName = document.getElementById("userName").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;

    axios.post('https://crud-opperation.herokuapp.com/user', {

        userName: userName, email: email, address: address
    })
        .then((response) => {
            // if (response.data.status === 200) {

            alert(response.message)
            document.getElementById("userName").value = "";
            document.getElementById("email").value = "";
            document.getElementById("address").value = "";
            put();
            // }
        })
        .catch((error) => {
            console.log(error)
            alert(error)

        })

}



function getC() {
    axios.get('https://crud-opperation.herokuapp.com/users')
        .then((response) => {

            console.log(response);
            // let responseData = {
            //     userName: response.userName,
            //     email: response.email,
            //     address: response.address
            // }
            // console.log("yae response ha " + responseData)
            if(data.userName !=undefined){
                 response.data.forEach((data) => {
                    console.log(date);
                   var saveData = `
                 <tr>
                 <td id="userName_">${data.userName}</td>
                 <td id="email_">${data.email}</td>
                 <td id="address_">${data.address}</td>
                 <td><a href="javascript:void(0)" onclick="get_record(this);" id="edit" >EDIT</td>
                 <td><a href="javascript:void(0)" onclick="delete_data(this);" id="delete" >DELETE</td>
                 </tr>
                 <br />`
                 
                 // console.log(saveData);
                 document.getElementById('tblper').innerHTML = saveData;
                })
                console.log(document.getElementById('tblper'));
            }


        })
        .catch((error) => {
            console.log(error);

        })
        .then(() => {
            console.log()
        });
}


function get_record(e) {
    let id = `${e._id}`
    let userName = document.getElementById('userName_' + id).innerHTML;
    let email = document.getElementById('email_' + id).innerHTML;
    let address = document.getElementById("address_" + id).innerHTML;

    console.log("yar check karo"+userName, user_id, id, document.getElementById('userName_' + id));
    console.log(e._id);

    document.getElementById('userName').value = userName;
    document.getElementById('email').value = email;
    document.getElementById('address').value = address;
    document.getElementById('user_id').value = id;
}


function updateC() {
    let userName = document.getElementById("userName").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let id = document.getElementById("user_id").value;

    axios.put("https://crud-opperation.herokuapp.com/user/" + id, {
        userName: userName,
        email: email,
        address: address,
    })
        .then((response) => {
            alert("user updated" + response);
            get();
        })
        .catch((error) => {
            console.log(error);
            console.log(err);

        });
}
function delete_data() {
    // let id = document.getElementById("user_id").value;
    axios.delete('https://crud-opperation.herokuapp.com/user/' + _id)
        .then((response) => {
            console.log(response);
            alert(response.data)
            get();
        })
        .catch((error) => {
            console.log(error);
        })
        .then(() => {
            console.log();
        })
}