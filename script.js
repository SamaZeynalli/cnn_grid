
const button = document.getElementById('leftbtn'); 
const sidebar = document.querySelector('#sideBar'); 

button.addEventListener('click', () => {
    sidebar.classList.toggle('active-sidebar');
});