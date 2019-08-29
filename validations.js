function validations(){
    var username=document.getElementById("e");
    var password=document.getElementById("p");
    
    if(username=="" && password=="")
    {
        document.getElementById('error').innerHTML="username and password is invalid";
        return false;
    }
    alert(hello);
    return false;
}