function navigateTo(e) {
    document.querySelector('.nav-field:is(.active)').classList.remove('active');
    e = e || window.event;
    var target = e.target || e.srcElement;
    target.parentElement.classList.add('active');
}