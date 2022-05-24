let nav = document.getElementsByClassName('nav-images')[0];
let buttonsNumber = document.getElementsByClassName('buttons-number')[0];
let buttons = buttonsNumber.getElementsByTagName('button');
let image1 = nav.getElementsByTagName('img')[0];

let images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
let index = 0;

buttons[index].style.backgroundColor = 'rgba(0, 0, 0, 1)'

function change(param){
    console.log('isledi')
    if(param == 'next'){
        index+=1;
        if(index == images.length){
            index = 0;
        }
    }
    else{
        index-=1;
        if(index < 0){
            index = images.length-1;
        }
    }
    image1.src = `../static/images/${images[index]}`
    for(i of buttons){
        i.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
    }
    buttons[index].style.backgroundColor = 'rgba(0, 0, 0, 1)'
}

a = setInterval(function(){
    index+=1;
    if(index == images.length){
        index=0;
    }
    image1.src = `../static/images/${images[index]}`

    for(i of buttons){
        i.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
    }
    buttons[index].style.backgroundColor = 'rgba(0, 0, 0, 1)'
    
}, 2000)