
function validate(){

    let name = document.myform.name.value ;
    let email = document.myform.email.value ;
    let password = document.myform.password.value ;

    if( name=="" || email=="" || password==""){
        document.getElementById("pass1").innerHTML = "Please  refresh and fill all the details ";
        bool = false;
        return false;    
    }else{
        return true;
    }
   
}
function s_validate(){
    let name = document.sform.name.value ;
    let email = document.sform.email.value ;
    let password = document.sform.pass.value ;

    if( name=="" || email=="" || password==""){
        document.getElementById("pass2").innerHTML = "Please  refresh and fill all the details ";
        bool = false;
        return false;    
    }else{
        return true;
    }
}
function pass_validate(){
    var pass = document.sform.pass.value;
    var Cpass = document.sform.Cpass.value;
    if(pass==Cpass){
        
        return true;
    }else{
        document.getElementById("pass2").innerHTML = "Password is not matched";
        return false;
        
    }
}
let data
let user = []

function check(){
    
    let name = document.myform.name.value ;
    let email = document.myform.email.value ;
    let password = document.myform.password.value ;
    let i;
    for(i=0; i<5; i++){
        if(name==user[i]&& email==user[i] && password==user[i]){
            return true;
        }
    }
    document.getElementById("pass3").innerHTML = "User is not registered";
    return false;
}


