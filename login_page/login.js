
document. = function(){
    let login_data = sessionStorage.getItem('login_info')
    if(! login_data === undefined){
        window.location.replace("http://127.0.0.1:5500/home_page/home.html");
    }
}
let user_login = {
    username:'',
    password:''
}


let userinfo = {
    userid:0,
    email:'',
    username:'',
    password:'',
    profile_picture:null,
    opinions:[]
}

let opinion = {
    opinion_topic:'',
    opinion_text:'',
    opinion_id:0,
    opinion_ownerid:0,
    opinion_date:''
}



let user_name_login = document.getElementById('username_input')
let password_login = document.getElementById('password_input')
let user_name_reg = document.getElementById('rusername_input')
let password_reg = document.getElementById('rpassword_input')

let loginbutton = document.getElementById('loginbutton')
let regbutton = document.getElementById('regbutton')





loginbutton.onclick = function(){
    if(user_name_login.value && password_login.value){
        let inputusername = user_name_login.value
        let inputpass = password_login.value
        let users_nametoid = {
            'abooodgmaing':1
        }
        let users = {
            1:{user_name:'abooodgmaing',password:'wow123'}
        };
        if(users_nametoid[inputusername]){
            let userid = users_nametoid[inputusername]
            if(users[userid]['password'] == inputpass){
                sessionStorage.setItem('login_info',{user_name:inputusername,password:inputpass})
                window.location.replace("http://127.0.0.1:5500/home_page/home.html");
            }
        }
    }
    user_name_login.value = ''
    password_login.value = ''
}