function validate(){
    var regName = /[A-Za-z]+$/;
    var name = document.getElementById('fname').value;
    if(!regName.test(name)){
        alert('Please enter your full name (first & last name).');
        document.getElementById('fname').focus();
        return false;
    }else{
        alert('Valid name given.');
        return true;
    }
}