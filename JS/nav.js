var anchoPantalla = window.innerWidth;

let menu = document.getElementsByTagName('nav');
let pacman = document.getElementById('menumobil_open');
let fantasma = document.getElementById('menumobil_close');


if(anchoPantalla <= 600){
    fantasma.style.display="none";
    pacman.classList.add('animacion');

    pacman.addEventListener('click', Abrir);
    fantasma.addEventListener('click', Cerrar);

    function Abrir(){
        fantasma.style.display="block";
        fantasma.classList.toggle('animacion');
        pacman.style.display="none";
        pacman.classList.remove('animacion');
        menu[0].style.height="370px";
    }

    function Cerrar(){
        fantasma.style.display="none";
        fantasma.classList.remove('animacion');
        pacman.style.display="block";
        pacman.classList.toggle('animacion');
        menu[0].style.height="70px";
    }
}
else{
    fantasma.style.display="none";
    pacman.style.display="none";
}
