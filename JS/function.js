let card = document.querySelectorAll('.card');
//card.getAttribute('id');
//console.log(card);


card.forEach(carta => {
    carta.addEventListener('click', () => {
        let validador = carta.id;
        console.log(validador);
        
        switch(validador){
            case 'pro1':
                window.location ='https://proweb-animation.github.io/Stio-Web/index.html';
            break;
            case 'pro2':
                window.location ='https://proweb-animation.github.io/Stio-Web/index.html';
            break;
            case 'pro3':
                window.location ='https://html5cpp.github.io/e-commerceevn-502/index.html';
            break;
            case 'pro4':
                window.location ='https://html5cpp.github.io/PRK-Caps/';
            break;
        }
    })
})

