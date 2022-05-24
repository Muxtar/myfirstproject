let booksDiv = document.getElementsByClassName('books')[0];

let books = [
    {
        name: 'Sefiller',
        author: 'Viktor Huqo',
        image: "book1.jpg"

    },
    {
        name: 'Bir umman nifret',
        author: 'Cingiz Abdullayec',
        image: "book2.jpg"
    },
    {
        name: 'Sefiller2',
        author: 'Viktor Huqo',
        image: "book3.jpg"

    },
    {
        name: 'dsdsds2',
        author: 'Viktor Huqo',
        image: "book3.jpg"

    },
    {
        name: 'Sefiller2',
        author: 'Viktor Huqo',
        image: "book1.jpg"

    },


];
for(i of books){
    let book = document.createElement('div');

    let img = document.createElement('img');
    let p = document.createElement('p');
    let a = document.createElement('a');

    book.classList.add('book')
    img.src = `../static/images/${i.image}`
    p.innerHTML = `${i.name}`
    a.setAttribute('href', `${i.name}.html`)
    a.innerHTML = 'Haqqinda'

    book.appendChild(img);
    book.appendChild(p)
    book.appendChild(a)

    booksDiv.appendChild(book);
}


kitab = {
    name: 'Sefiller',
    author: 'Viktor Huqo',
    image: "book1.jpg"

} 
async function apiReturn(){

    let api = new XMLHttpRequest();
    api.open("GET", 'http://httpbin.org/get?test=chakram');
    api.onload = function(){
        console.log(typeof this.responseText);
        console.log(this.responseText)
        

    }

    api.send()
}

apiReturn()
