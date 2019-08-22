const characters = [];
let list = document.getElementById('list');
let search = document.querySelector('input');

fetch('https://www.swapi.co/api/people')
    .then(response => response.json())
    .then(response => {
        characters.push(...response.results);
    })

function appearList () {
      list.style.visibility = "visible";
}

function filterText () {

    appearList();

    // Convert all characters to lower case, and map into li tags.
    const filtered = characters.filter(i => i.name.toLowerCase().includes
    (this.value.toLowerCase()))
    .map(i => `<li>${i.name}</li>`);

    if (filtered.length){
        render (filtered);
    }
}

function render (arr) {
    let html = arr.join('');
    list.innerHTML = html;
}


search.addEventListener('keyup', filterText);



