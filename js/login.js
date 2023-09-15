
function validate(){

    let name = document.myform.name.value ;
    let email = document.myform.email.value ;
    let password = document.myform.pass.value ;

    if( name=="" || email=="" || password==""){
        document.getElementById("pass1").innerHTML = "Please  refresh and fill all the details ";

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

let user =[["","",""]];
let list1 = ["demoName","demo@gmail.com",1234]
user.push(list1);
 var users=0;
function check(){
    let name = document.myform.name.value ;
    let email = document.myform.email.value ;
    let password = document.myform.pass.value ;
    let i;
    for(i=0; i<users; i++){
        if(name==user[i][0]&& email==user[i][1] && password==user[i][2]){
            return true;
        }
    }
    document.getElementById("pass3").innerHTML = "User is not registered";
    return true;
}

function store(){
    let name = document.getElementById("fname");
    let email = document.getElementById("floatingInput");
    let password = document.getElementById("floatingPassword1") ;
    let list = [name,email,password];
    user.push(list);
    users++;
    return true;
}
console.log(user);

