let btn = document.querySelector('#btn');
let sidebar = document.querySelector('.sidebar');
let searchBtn = document.querySelector('.bx-search');

btn.onclick = function(){
    sidebar.classList.toggle('active');
    sidebar.classList != 'sidebar active' ? btn.classList = 'bx bx-menu' :  btn.classList = 'bx bx-menu-alt-right';
}
searchBtn.onclick =function(){
    sidebar.classList.toggle('active');
    sidebar.classList != 'sidebar active' ? btn.classList = 'bx bx-menu' :  btn.classList = 'bx bx-menu-alt-right';
}