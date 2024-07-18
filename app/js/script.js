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



