const ButtonMenu = document.getElementById('button-menu');
const navbar = document.getElementById('navbar-item');
const stick = document.querySelectorAll('.Stick')
ButtonMenu.addEventListener('click', function(){
    stick.forEach(f => {
        f.classList.toggle('active');
    })
    navbar.classList.toggle('slide');
})

const logo = document.querySelector('.logo-client').cloneNode(true);
document.querySelector('.container-client-content').appendChild(logo)

//login button//
document.querySelector('.Login-Button').addEventListener('click', function() {
    window.location.href = 'https://quickcert.alphabetincubator.id/login';
    
});
document.querySelector('.button-secondary').addEventListener('click', function() {
    window.location.href = 'https://quickcert.alphabetincubator.id/login';
})

// HUBUNGI KAMI//
const ButtonHub = document.querySelector('.hubungi-kami');
const  modalitem = document.querySelector('#modal-content');

ButtonHub.onclick = (e) => {
    modalitem.style.display = 'flex';
    e.preventDefault();
}
//close modal button
document.querySelector('.button-close').onclick = function(e){
    modalitem.style.display = 'none';
    e.preventDefault();
}
document.querySelector('.modal-close').onclick = function(e){
    modalitem.style.display = 'none';
    e.preventDefault();
}
//animation scrool//
ScrollReveal({ 
    reset: false,
    distance: '200px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.home',{ origin: 'left' });
ScrollReveal().reveal('.home-container-side',{ origin: 'left' });
ScrollReveal().reveal('.container-deskription',{ origin: 'left' });
ScrollReveal().reveal('.blog-content',{ origin: 'right' });

//scroll behavior//
const navlinks = document.querySelectorAll('.nav-links');

navlinks.forEach(link =>{
    link.addEventListener('click',function(e){
        e.preventDefault();


        const targetID = this.getAttribute('href');
        const targetSections = document.querySelector(targetID);

       targetSections.scrollIntoView({
        behavior:'smooth'
       });
    })
})

