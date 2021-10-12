
var queue = [];

var addButton = document.getElementById('addButton');
var getRandomButton = document.getElementById('getRandomButton');
var optionContainer = document.getElementById('optionContainer');
var input = document.getElementById('text');

addButton.addEventListener('click', function(){
  add();
})

getRandomButton.addEventListener('click', function(){

  if (queue.length > 0) {
    const random = Math.floor(Math.random() * queue.length);
    const win = queue[random].name
    alert('Wygrywa: ' + win + ', gratulujemy!')
  }

})

document.body.onkeydown = function(e) {
  if (e.keyCode == 13)
    add();
};


function add() {

  if (input.value) {
    queue.push({name: input.value});
    let element = createElement(input.value);
    optionContainer.appendChild(element)
    input.value = ''
  } 
  
}

function createElement(name) {
  let p = document.createElement('p');
  p.textContent = name;
  p.className = "item"
  p.id = name;
    return p;
}

