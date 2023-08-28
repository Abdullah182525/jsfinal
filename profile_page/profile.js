let user_data = {
    profile_picture_src : "https://yt3.googleusercontent.com/Mim3iwjDVC8KZQulQpqQr3YwDSwC4gmW1Ajn4Qb8BdRNUaHKxF-Zy2UIPGNjeuZbfqnggm4S-A=s900-c-k-c0x00ffffff-no-rj",
    user_name:'abooodgmaing',
    email_:'wow@wow.com',
    date_of_creation:'2023/8/24'
};



let profile_picture = document.getElementById('profile_picture')
let username = document.getElementById('username')
let email = document.getElementById('email')
let doc = document.getElementById('doc')

let update_input = document.getElementById('update_input')

let update_picture = document.getElementById('update_button')



profile_picture.src = user_data['profile_picture_src']
username.innerHTML = `username: ${user_data['user_name']}`
email.innerHTML = `email: ${user_data['email_']}`
doc.innerHTML = `date of creation: ${user_data['date_of_creation']}`


update_picture.onclick = function(){
    if(update_input.value.length >= 1){
        user_data['profile_picture_src'] = update_input.value
        profile_picture.src = user_data['profile_picture_src']
        update_input.value = ''
    }
}