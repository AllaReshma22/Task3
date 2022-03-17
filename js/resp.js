burger = document.querySelector('.navbar-toggler')
wallfeed = document.querySelector('.wall-feed')
searchbar=document.querySelector(".search-bar")

burger.addEventListener('click',()=>{
    wallfeed.classList.toggle("v-class-resp");
    searchbar.classList.toggle("v-class-resp");
    wallfeed.classList.toggle("h-nav-resp");

})