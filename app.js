
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

            // console.log(response);
            // let responseData = {
            //     userName: response.userName,
            //     email: response.email,
            //     address: response.address
            // }
            // console.log("yae response ha " + responseData)
            response.data.forEach((data) => {
             
                    var saveData = `
                    <tr>
                    <td id="userName_">${data.userName}</td>
                    <td id="email_">${data.email}</td>
                    <td id="address_">${data.address}</td>
                    <td><button href="javascript:void(0)" onclick=get_record("${data.userName}","${data.email}","${data.address}","${data._id}"); id="edit" >EDIT</td>
                    <td><button href="javascript:void(0)" onclick=delete_data("${data._id}"); id="delete" >DELETE</td>
                    </tr>`
                
                // console.log(saveData);
                document.getElementById('tblper').innerHTML += saveData;
                // console.log(document.getElementById('tblper'));
            })


        })
        .catch((error) => {
            console.log(error);

        })
        .then(() => {
            console.log()
        });
}


function get_record(userName_,email_,address_,_id) {
    // document.getElementById('userName').value= e.userName;
    // let id = e._id;
    // let email =e.email;
    // let address = e.address;

    // console.log("yar check karo"+userName, user_id, id, document.getElementById('userName_' + id));
    console.log(userName_);
    console.log(email_);
    console.log(address_);
    console.log(_id);
    console.log("kuch nhi");

    document.getElementById('userName').value = userName_;
    document.getElementById('email').value = email_;
    document.getElementById('address').value = address_;
    document.getElementById('user_id').value = _id;
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
function delete_data(_id) {
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