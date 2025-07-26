//validation of sign in page

// let uname="example@gmail.com"
// let pwd="123"
// function validate(e){
//     e.preventDefault()
//     let email=document.getElementById("usname").value
//     let password=document.getElementById("pass").value
//     if(uname===email && pwd===password){
// console.log("valid");
//     }
//     else{
//         console.log("invalid")
//     }
// }


function validate(e){
    e.preventDefault()
    let uname="example@gmail.com"
    let pwd="123"
    let email=document.getElementById("usname").value
    
    let restriction=/^[a-z0-9]+@[a-z]+\.[a-z]{2.3}$/
    let res=restriction.test(email)
    if(res){
        let password=document.getElementById("pass").value
        if(uname===email && pwd===password){
        // console.log("valid");
        document.getElementById("msg").innerHTML="valid"
        document.getElementById("msg").style.color="green"
                 }
                 else{
                    //console.log("invalid")
                            document.getElementById("msg").innerHTML="invalid"
                             document.getElementById("msg").style.color="red"
                }}else{
                    //console.log("please enter valid mail id");
                            document.getElementById("msg").innerHTML="please enter valid mail id"
                             document.getElementById("msg").style.color="red"
                }
}