
//  const url = process.env.PORT||3000;
function postC() {
    let userName = document.getElementById("userName").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;

    axios.post('crud-opperation-production.up.railway.app', {

        userName: userName, email: email, address: address
    })
        .then((response) => {
            // if (response.data.status === 200) {
            console.log(response)
            alert("user succesfully added")
            document.getElementById("userName").value = "";
            document.getElementById("email").value = "";
            document.getElementById("address").value = "";
            getC();
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
            document.getElementById("tblper").innerHTML=" "
            response.data.forEach((data) => {
             
                    var saveData = `
                    <tr id="${data._id}">
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
    document.getElementById(_id).innerHTML = `
    <tr id="${_id}"> 
        
         
         
            <td><input type="text" id="${_id}-userName_" value="${userName_}" /></td>
            <td><input type="text" id="${_id}-email_" value="${email_}" /></td>
            <td><input type="text" id="${_id}-address_" value="${address_}" /></td>
            <td>
                <button type="button" onclick="updateC('${_id}')" class="btn btn-success">Update</button>
            </td>
        </tr>`;

    // document.getElementById('userName').value = userName_;
    // document.getElementById('email').value = email_;
    // document.getElementById('address').value = address_;
    document.getElementById('user_id').value = _id;
}


function updateC(_id) {
    let userName = document.getElementById(`${_id}-userName_`).value;
    let email = document.getElementById(`${_id}-email_`).value;
    let address = document.getElementById(`${_id}-address_`).value;
    let id = document.getElementById("user_id").value;

    axios.put("https://crud-opperation.herokuapp.com/user/" + id, {
        userName: userName,
        email: email,
        address: address,
    })
        .then((response) => {
            alert("user updated");
            console.log(response)
            getC();
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
            getC();
        })
        .catch((error) => {
            console.log(error);
        })
        .then(() => {
            console.log();
        })
}
getC();
