"use strict"

//////////////1\\\\\\\\\\\\\\\
const lentghList = document.getElementsByClassName('item').length;
console.log(`В списке ${lentghList} категории`);

const ulCategories = Array.from(document.querySelector('#categories').children);
for (let elem of ulCategories) {
    let category = elem.firstElementChild.textContent;
    let quantityElem = elem.lastElementChild.children.length;
    console.log(`Категория: ${category} \nКоличество элементов: ${quantityElem}`);
};

//////////////2\\\\\\\\\\\\\\\
// const ingredients = [
//   'Картошка',
//   'Грибы',
//   'Чеснок',
//   'Помидоры',
//   'Зелень',
//   'Приправы',
// ];

// const ulIngredients = document.getElementById('ingredients')
// for(let ingredient of ingredients ){
// const liIngredients = document.createElement('li')
// liIngredients.textContent = ingredient;
// ulIngredients.append(li);
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

const ulImages = document.getElementById('gallery')

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
  ulImages.append(li)
})
console.log(document)

//4
const decrementCount = document.querySelector('button[data-action = "decrement"]');
console.log(decrementCount)
const incrementCount = document.querySelector('button[data-action = "increment"]');
const counter = document.getElementById('value');

let counterValue = 0;

decrementCount.addEventListener("click", decrement )
incrementCount.addEventListener("click", increment)

function decrement(){
  counterValue--;
  counter.textContent = counterValue;
}
function increment(){
  counterValue++;
  counter.textContent = counterValue;
}

//5
const inputRef = document.getElementById("name-input");
const spanRef = document.getElementById("name-output");

inputRef.addEventListener("input", forInputListener )

function forInputListener(event){
  spanRef.textContent = event.target.value;
  if(event.target.value == ""){
    spanRef.textContent = "незнакомец"
  }
}

//6
const inputValidation = document.getElementById('validation-input')

const inputValidLength = inputValidation.dataset.length;


inputValidation.addEventListener("focus", inputValidFunc )



function inputValidFunc(){
  if(inputValidation.value.length == inputValidLength){
  
  inputValidation.classList.add('valid')
  inputValidation.classList.remove('invalid')
}
else{
inputValidation.classList.add("invalid")
}
}
inputValidation.addEventListener('blur', () =>{
  inputValidation.classList.remove('invalid')
  inputValidation.classList.remove('valid')
})



