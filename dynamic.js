let parentEle = document.getElementById('base');

let title='Article 1';
let pic='https://source.unsplash.com/440x220/?lamborgini';
let picAlt='lamborgini picture';

create_article(title,pic,picAlt);
create_article('Article 2','https://source.unsplash.com/440x220/?music','music picture');
create_article('Article 3','https://source.unsplash.com/440x220/?event','event picture');
create_article('Article 4','https://source.unsplash.com/440x220/?flower','flower picture');
create_article('Article 5','https://source.unsplash.com/440x220/?computer','computer picture');
create_article('Article 6','https://source.unsplash.com/440x220/?laptop','laptop picture');

function create_article(title,pic,picAlt)
{
    let article = document.createElement('div');
    article.classList.add('section');
    
    let heading = document.createElement('h2');
    heading.textContent=title;
    
    let image = document.createElement('img');
    image.src =pic;
    image.alt =picAlt;
    
    let para = document.createElement('p');
    para.textContent=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem nisi porro ipsum explicabo soluta ipsa, rerum quaerat facilis adipisci, alias velit esse. Cum maiores veritatis ab et sint officia beatae!";
    
    let sec_para = document.createElement('p');
    let click = document.createElement('span');
    click.classList.add('bor');
    click.textContent ='Learn More';
    sec_para.appendChild(click);
    
    article.insertAdjacentElement('afterbegin',heading);
    article.insertAdjacentElement('beforeend',image);
    article.insertAdjacentElement('beforeend',para);
    article.insertAdjacentElement('beforeend',sec_para);
    
    console.log(article);
    
    parentEle.appendChild(article);
}