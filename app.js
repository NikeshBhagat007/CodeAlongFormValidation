function formValidate()
{
    var name = document.forms["RegForm"]["Name"];
    var email = document.forms["RegForm"]["Email"];
    var phone = document.forms["RegForm"]["Phone"];
    var Password = document.forms["RegForm"]["Password"];
    var cpassword = document.forms["RegForm"]["cpassword"];
    var address = document.forms["RegForm"]["address"];

    var errname = document.getElementById("name");
    var erremail = document.getElementById("email");
    var errphone = document.getElementById("phone");
    var errpwd = document.getElementById("pwd");
    var errcpwd = document.getElementById("cpwd");
    var erraddress = document.getElementById("address");

    if(name.value.length < 4)
    {
        errname.innerText ="Atleast 4 characters required";
        name.focus();
        return false;
    }
    else 
    return true;

    if(address.value == "")
    {
        erraddress.innerText = "address cannot be empty";
        address.focus();
        return false;
    }
    else 
    return true;

    if(email.value == "")
    {
        erremail.innerText = "email cannot be empty";
        email.focus();
        return false;
    }
    //else if()
    else 
    return true;
}