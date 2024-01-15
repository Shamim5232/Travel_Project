let bars= document.querySelector('#bars');
let main_menu=document.querySelector('.main_menu');

bars.addEventListener('click',()=>{
  bars.classList.toggle('fa-times');
  main_menu.classList.toggle('active');
})