
//  const url = process.env.PORT||3000;
function postC() {
    let userName = document.getElementById("userName").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;

    axios.post('https://crud-opperation.herokuapp.com/user', {
        
        userName: userName,email: email,address: address
    })
      .then((response) => {
            // if (response.data.status === 200) {

            alert(response.data)
            document.getElementById("userName").value = "";
            document.getElementById("email").value = "";
            document.getElementById("address").value = "";
            put();
            // }
        })
        .catch((error) => {
            console.log(error)
            // alert(error)

        })

}



function getC() {
    axios.get('https://crud-opperation.herokuapp.com/users')
        .then((response) => {
            $html = '';
            console.log(response);
            var i = 0;
            response.data.forEach((data) => {
                if (data.userName != undefined) {
                    $html += '<tr>';
                    $html += '<td id="userName"' + i + '">' + data.userName + '</td>';
                    $html += '<td id="email"' + i + '">' + data.email + '</td>';
                    $html += '<td id="address"' + i + '">' + data.address + '</td>';
                    $html += '<td><a href="javascript:void(0)" onclick="record(this);" id=' + i + '>'
                    $html += '</tr>'
                }
                i++;
            })
            console.log($html);
            console.log(document.getElementById('tblper'));
            document.getElementById('tblper').innerHTML = $html;
        })
        .catch((error) => {
            console(error);

        })
        .then(() => {
            console.log()
        });
}


function record($obj) {
    var user_id = $obj.getAttribute('user_id');
    user_id = parseInt(user_id);
    let userName = document.getElementById("userName" + user_id).innerHTML;
    let email = document.getElementById("email" + user_id).innerHTML;
    let address = document.getElementById("address" + user_id).innerHTML;

    console.log(userName, user_id, document.getElementById('UserName : ' + id));

    document.getElementById('userName').value = userName;
    document.getElementById('email').value = email;
    document.getElementById('address').value = address;
    document.getElementById('user_id').value = user_id;
}


function updateC() {
    let userName = document.getElementById("userName").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let user_id = document.getElementById("user_id").value;

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
    let user_id = document.getElementById("user_id").value;
    axios.delete("https://crud-opperation.herokuapp.com/user/" + id)
        .then((response) => {
        console.log(response);
        alert(response.data)
        get();
        })
        .catch((error)=>{
            console.log(error);
        })
        .then(()=>{
            console.log();
        })
}