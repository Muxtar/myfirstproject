let ul = document.getElementsByClassName('parent-ul')[0];
let button = document.getElementsByClassName('show')[0];
let navImages = document.getElementsByClassName('nav-images')[0];
let image = navImages.getElementsByTagName('img')[0];
let header  = document.getElementsByTagName('header')[0];

button.addEventListener('click', show);

function show(){
    if(button.getAttribute('data-show') == 'show'){
        ul.style.left = '0';  
        document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
        image.style.opacity = '0.5'
        button.setAttribute('data-show', 'hidden');
    }
    else{
        ul.style.left = '-80%';
        document.body.style.backgroundColor = 'rgba(0, 0, 0, 0)'
        button.setAttribute('data-show', 'show');
        image.style.opacity = '1'

    }
}

document.addEventListener('click', function(e){
    
    if(e.composedPath().includes(header) == false){
        ul.style.left = '-80%';
        document.body.style.backgroundColor = 'rgba(0, 0, 0, 0)'
        button.setAttribute('data-show', 'show');
        image.style.opacity = '1'
    };
})

window.addEventListener('resize', function(e){
    if(window.innerWidth > 923){
        ul.style.left = '-80%';
        document.body.style.backgroundColor = 'rgba(0, 0, 0, 0)'
        // button.setAttribute('data-show', 'show');
        image.style.opacity = '1'
    }
})


// 
