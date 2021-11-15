
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

            alert(response)
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
            $html = '';
            console.log(response);
            // var i = 0;
            response.data.forEach((data) => {
                if (data.userName != undefined) {
                    $html += '<tr>';
                    $html += '<td id="userName_">'+data.userName+'</td>';
                    $html += '<td id="email_">'+data.email+'</td>';
                    $html += '<td id="address_">'+data.address+'</td>';
                    $html += '<td><a href="javascript:void(0)" onclick="get_record(this);" id='+_id+'>View</td>'
                    $html += '</tr>'
                }
                // i++;
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


function get_record($obj) {
    // var id = $obj.getAttribute('id');
    // id = parseInt(id);
    let userName = document.getElementById('userName_' + _id).innerHTML;
    let email = document.getElementById('email_' + _id).innerHTML;
    let address = document.getElementById("address_" + _id).innerHTML;

    console.log(userName, user_id, id,document.getElementById('userName_' + _id));

    document.getElementById('userName').value = userName;
    document.getElementById('email').value = email;
    document.getElementById('address').value = address;
    document.getElementById('user_id').value = _id;
}


function updateC() {
    let userName = document.getElementById("userName").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let id = document.getElementById("user_id").value;

    axios.put("https://crud-opperation.herokuapp.com/user/" + _id, {
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
            // console.log(err);

        });
}
function delete_data() {
    let id = document.getElementById("user_id").value;
    axios.delete('https://crud-opperation.herokuapp.com/user/'+ _id)
        .then((response) => {
        console.log(response);
        alert(response.data)
        get();
        })
        .catch((error)=>{
            console.log(error);
        })
        .then(()=>{
            console.log("always excicuted");
        })
}