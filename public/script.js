const responsiveIcons = document.querySelectorAll('.responsiveNav>*');
const wrapper = document.querySelector('#wrapper');
const sidebar = document.querySelector('aside');
const searchBar = document.querySelector('form#search');

function openItem(e){
    e.classList.add('show');
    wrapper.classList.add('show', 'close');
}

function closeItems(e){
    if(e.target.classList.contains("close")){
        switch(true){
            case sidebar.classList.contains('show'):
                sidebar.classList.remove('show');
                break;
            case searchBar.classList.contains('show'):
                searchBar.classList.remove('show');
                break;
        }
    } else return;
    
    wrapper.classList.remove('show', 'close');
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

const mainNav = document.querySelectorAll('.with-sub');

//console.log(mainNav);

function showToggler(e){
    const mininav = e.target.querySelector('.mininav');
    console.log(e.target)
    if(e.target.classList.contains('with-sub')){
        mininav.classList.toggle('show'); 
    }
    
    

}

mainNav.forEach(e => e.addEventListener('click',showToggler))
