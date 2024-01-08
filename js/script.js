const displayList = document.createElement('ul');
const list = ['latte', 'uova', 'formaggio', 'pesce', 'pane', 'cioccolato', 'frutta'];

let i = 0;

while (i < list.length) {
    const item = `<li>${list[i]}</li>`;
    displayList.innerHTML += item;
    i++;
}
document.body.appendChild(displayList);
