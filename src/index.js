import { homeMeniu } from "./home";
import { mainMeniu } from "./meniu";
import { contactMeniu } from "./contact";

homeMeniu().banner();
homeMeniu().navBar();
homeMeniu().footer();
homeMeniu().homeContent();

const home = document.getElementById('home');
home.addEventListener('click', () => {
    document.querySelector('.meniu-content').remove();
    homeMeniu().homeContent();
    
});

const meniu = document.getElementById('meniu');
meniu.addEventListener('click', () => {
    document.querySelector('.meniu-content').innerHTML = "";
    document.querySelector('.meniu-content').remove();
    mainMeniu();
});


const contact = document.getElementById('contact');
contact.addEventListener('click', () => {
    document.querySelector('.meniu-content').remove();
    contactMeniu();
})