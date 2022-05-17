const responsiveIcons = document.querySelectorAll('.mininav>*');
const wrapper = document.querySelector('#wrapper');
const sidebar = document.querySelector('aside');
const searchBar = document.querySelector('form#search');

function openItem(e){
    console.log(e);
    e.classList.toggle('show');
    wrapper.classList.toggle('show');
}

function closeItems(e){
    if(e.target.id != "wrapper"){
        return;
    }
    console.log('FUCK!')
    switch(true){
        case sidebar.classList.contains('show'):
            sidebar.classList.remove('show');
            break;
        case searchBar.classList.contains('show'):
            searchBar.classList.remove('show');
            break;
    }
    wrapper.classList.remove('show');
    wrapper.removeEventListener('click',closeItems);
}

function showSelector(e){
    const eClass = e.target.classList;

    switch(true){
        case eClass.contains('nav'):
            openItem(sidebar);
            break;
        case eClass.contains('searchbar'):
            openItem(searchBar);
            break;
    }
}
wrapper.addEventListener('click', closeItems, {capture: true, useCapture: true});
responsiveIcons.forEach(e => e.addEventListener('click', showSelector));

// NAV COLAPSE x EXPAND

const mainNav = document.querySelectorAll('.mainnav li');
console.log(mainNav);

function showToggler(e){

    console.log(e.target);
}

mainNav.forEach(e => e.addEventListener('click',showToggler))
