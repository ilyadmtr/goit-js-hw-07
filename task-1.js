"use strict"

//////////////1\\\\\\\\\\\\\\\
// const lentghList = document.getElementsByClassName('item').length;
// console.log(`В списке ${lentghList} категории`);

// const ul = Array.from(document.querySelector('#categories').children);
// for (let elem of ul) {
//     let category = elem.firstElementChild.textContent;
//     let quantityElem = elem.lastElementChild.children.length;
//     console.log(`Категория: ${category} \nКоличество элементов: ${quantityElem}`);
// };

//////////////2\\\\\\\\\\\\\\\
// const ingredients = [
//   'Картошка',
//   'Грибы',
//   'Чеснок',
//   'Помидоры',
//   'Зелень',
//   'Приправы',
// ];

// const ul = document.getElementById('ingredients')
// for(let ingredient of ingredients ){
// const li = document.createElement('li')
// li.textContent = ingredient;
// ul.append(li);
// }

/////////////////3\\\\\\\\\\\\\\\\
const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },

];

const ul = document.getElementById('gallery')

const arrMap = images.map(image => {
  const img = document.createElement('img')
  img.setAttribute('src', image.url)
  img.setAttribute('alt', image.alt)
  img.classList.add('img-js')
  const li = document.createElement('li');
  li.classList.add('li-js')
  const h2 = document.createElement('h2')
  h2.textContent = image.alt
  h2.classList.add('h2-js')
  const p = document.createElement('p')
  p.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, cupiditate sunt. Amet ad quibusdam assumenda illum labore vel aliquam esse. Eum, quo? Rem, quasi recusandae fugit repellat minus libero non!`
  p.classList.add('p-js')
  li.append(img);
  li.insertAdjacentElement('beforeend', h2)
  h2.insertAdjacentElement("afterend", p)
  ul.append(li)
})
console.log(document)

