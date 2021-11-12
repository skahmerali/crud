
//  const url = process.env.PORT||3000;
function postC() {
    let userName = document.getElementById("userName").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;

    axios('https://crud-opperation.herokuapp.com/user', {
        // method: 'post',
        // url=url + '/',
        userName: userName,
        email: email,
        address: address
    })

        // data: {

        // },
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
            alert(error)

        });

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
    var id = $obj.getAttribute('user_id');
    id = parseInt(id);
    let userName = document.getElementById("userName" + id).innerHTML;
    let email = document.getElementById("email" + id).innerHTML;
    let address = document.getElementById("address" + id).innerHTML;

    console.log(userName, id, document.getElementById('UserName : ' + id));

    document.getElementById('userName').value = userName;
    document.getElementById('email').value = email;
    document.getElementById('address').value = address;
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
    let id = document.getElementById("user_id").value;
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