function sign_up(){
    var user_name = document.getElementById('name').value
    var user_passwork = document.getElementById('passwork').value

    var list_users=`LIST_USERS`
    var users={
        Name: user_name,
        Passwork : user_passwork
    }
    if(users.Name != '' && users.Passwork!=''){
        var js = JSON.stringify(users) 
        localStorage.setItem(users.Name,js)
        window.location.href='http://127.0.0.1:5500/form%20login/index.html'
    }else{
        alert("Enter a user name or password pls !")
    }
}

function login(){
    var user_name = document.getElementById('name').value
    var user_passwork = document.getElementById('passwork').value
    var user =localStorage.getItem(user_name)
    var data=JSON.parse(user)
    if(user==null){
        alert('Enter full information')
    }else if(data.Name==user_name&& data.Passwork==user_passwork){
        alert('Done')
    }else{
        alert('Correct the user name or passwork')
    }
   
}