function success(){
   
    alert("succcessful");
}
function validate(e){
e.preventDefault()
let pass=document.getElementById("password").value;
let cpass=document.getElementById("cpassword").value;
if(pass!=cpass){
   alert("password should not match");
   return false;
}else{
    return true;
}

}
function cvalidate(e){
  e.preventDefault()
    let check=document.getElementById("password").value;
    let check1=document.getElementById("cpassword").value;
    if(check.length<6){
        alert("password should atleast contain 6 letters");
        return false;
    }else if(check1.length<6){
alert("password should atleast contain 6 letters");
    }else{
        return true;
    }
}
function validate(){

let pass=document.getElementById("password").value;
let cpass=document.getElementById("cpassword").value;
if(pass!=cpass){
   alert("password should not match");
   return false;
}else{
    return true;
}

}
function cvalidate(){
 
    let pass=document.getElementById("password").value;
    let cpass=document.getElementById("cpassword").value;
    if(pass.length<6){
        alert("password should atleast contain 6 letters");
        return false;
    }else if(cpass.length<6){
 alert("password should atleast contain 6 letters");
    }else{
        return true;
    }}
    function handleSubmit(event) {
    
            if (!cvalidate() || !validate()) {
                event.preventDefault(); 
                return false;
            }
            alert("Password changed successfully");
    e.target.submit();
        }
        function evalidate(){
           
            let email=document.getElementById("email").value;
            let password=document.getElementById("pass").value;
            let restriction=/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/
            let res=restriction.test(email);
            if(!res){
                alert("invalid email");
                return false;
            }
        
            if(password.length<6){
              alert("invalid password");
              return false;
            }return true;}


