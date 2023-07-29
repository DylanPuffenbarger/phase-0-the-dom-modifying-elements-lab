// Write your code here!

// Removes <main> elements w/ id 'main'
document.getElementById('main').remove();

// Creates new header
const body = document.getElementsByTagName('body')[0];
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerHTML = 
    "Dylan is the champion";
body.append(newHeader);