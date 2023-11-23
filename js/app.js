
// search section start

let search_open_btn = document.querySelector('#search')
let search_close_btn = document.querySelector('#search_close_btn')
let search_box = document.querySelector('#search_section')

search_open_btn.addEventListener('click',()=>{
    search_box.style.transform = 'scale(1)'
})

search_close_btn.addEventListener('click',()=>{
    search_box.style.transform = 'scale(0)'
})
// search section End


//  aside section start 
let bag = document.querySelector('#bag');
let bag_close_btn = document.querySelector('#bag_close_btn');
let aside = document.querySelector('aside');

bag.addEventListener('click',()=>{
    aside.style.transform = 'scale(1)'
})
bag_close_btn.addEventListener('click',()=>{
    aside.style.transform = 'scale(0)'
})
// aside section End 

// login section start

let login = document.querySelector('#login')
let login_section = document.querySelector('.login_section')
let login_close_btn = document.querySelector('.login_close_btn')

login.addEventListener('click',()=>{
    login_section.style.transform = 'scale(1)'
})
login_close_btn.addEventListener('click',()=>{
    login_section.style.transform = 'scale(0)'
})



let pass_show_hide = document.querySelector('#pass_show_hide');

let password = document.querySelector('#password');

pass_show_hide.addEventListener('click',()=>{
   if( password.type == 'password'){
    password.type = 'text';
    pass_show_hide.innerHTML = '<i class="fa-solid fa-eye"></i>';
   }else{
    password.type = 'password';
    pass_show_hide.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
   }
})
// login section End