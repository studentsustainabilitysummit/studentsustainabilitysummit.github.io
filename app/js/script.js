//Constants
const btnHambrgr = document.querySelector('#btnHambrgr');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.fade');

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