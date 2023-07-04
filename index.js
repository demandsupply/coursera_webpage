function ul(index) {
    console.log('click!' + index)

    var underlines = document.querySelectorAll(".underline-atop");

    for (var i = 0; i < underlines.length; i++) {
        underlines[i].style.transform = 'translate3d('+ index * 100 + '%,0,0)';
    }
}

const aa = document.querySelector('.aa');

aa.addEventListener('click', () => {
    aa.style.color = '#000';
});
