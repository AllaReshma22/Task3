burger = document.querySelector('.navbar-toggler')
wallfeed = document.querySelector('.wall-feed')
searchbar=document.querySelector(".search-bar")
wall=document.querySelector(".wall")
container=document.querySelector(".container")

burger.addEventListener('click',()=>{
    wallfeed.classList.toggle("v-class-resp");
    searchbar.classList.toggle("v-class-resp");
    wallfeed.classList.toggle("h-nav-resp");
    wall.classList.toggle("v-class-resp");
    container.classList.toggle("v-class-resp");
    wall.classList.toggle("h-nav-resp");

})