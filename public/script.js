const icon = document.getElementById('burger');
const menu = document.getElementById('menu');

icon.addEventListener('click', () => {

    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    }else{
        menu.classList.add('hidden');
    }
});