console.log('hello there');

const name = document.getElementById('name')

console.log(name)

const paragraph = document.createElement("p");
const text = document.createTextNode("This is some text");
paragraph.appendChild(text);
name.appendChild(paragraph);