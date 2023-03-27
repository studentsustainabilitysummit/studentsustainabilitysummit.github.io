//Constants
const btnHambrgr = document.querySelector('#btnHambrgr');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.fade');
const details = document.querySelectorAll("details");

//To make mobile menu appear/disappear
btnHambrgr.addEventListener('click', function(){

    if(header.classList.contains('open')){
        console.log('close hamburger');
        header.classList.remove('open'); //animates burger to close on click
        //fade-out the overlay and mobile menu
        fadeElems.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
    }
    else{
        console.log('open hamburger');
        header.classList.add('open'); //animates burger to open on click

        //fade-in the overlay and mobile menu
        fadeElems.forEach(function(element){
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });
    }

});

//To only allow one summmary in details to be open at a time
details.forEach((targetDetail) =>{
    targetDetail.addEventListener("click", () =>{
        details.forEach( (detail) => {
            //close summary if it is not the current one
            if (detail !== targetDetail){  
                detail.removeAttribute("open");
            }//end if
        });//end inner for each
    });//end targetDetail.addEventListener
});



/*May be Useful

----attempt at sticky navigation bar-----
//const stickyNav = document.querySelector('.head');

//variables
var sticky = 0;

//Keep navigation at the top as you scroll 
header.addEventListener('scroll', function(){
    if(window.scrollY >= sticky ){
        stickyNav.classList.add("stick-to-top");
    }
    else{
        stickyNav.classList.remove("stick-to-top");
    }
});

----Older version of hamburger that includes no-scroll---

//Constants
const btnHambrgr = document.querySelector('#btnHambrgr');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.fade');
const body = document.querySelector('body');

btnHambrgr.addEventListener('click', function(){

    if(header.classList.contains('open')){
        console.log('close hamburger');
        header.classList.remove('open'); //animates burger to close on click
        body.classList.remove('no-scroll');//allows scrolling when mobile menu is closed
        //fade-out the overlay and mobile menu
        fadeElems.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
    }
    else{
        console.log('open hamburger');
        header.classList.add('open'); //animates burger to open on click
        body.classList.add('no-scroll');//doe not allow scrolling when mobile menu is closed

        //fade-in the overlay and mobile menu
        fadeElems.forEach(function(element){
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });
    }

});


*/