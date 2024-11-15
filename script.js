document.addEventListener('DOMContentLoaded', function () {
    var tabContent = document.querySelectorAll('.tabContent > div');
    tabContent.forEach(function (div) {
        div.style.display = 'none';
    });
    tabContent[0].style.display = 'block';

    var tabs = document.querySelectorAll('.tabs a');
    tabs.forEach((tab) => {
        tab.addEventListener('click', function (e) {
            e.preventDefault();
            var target = document.querySelector(this.getAttribute('href'));
            var others = this.closest('li').parentNode.querySelectorAll('a');
            others.forEach((other) => {
                other.classList.remove('active');
            });
            this.classList.add('active');
            tabContent.forEach( (div) => {
                div.style.display = 'none';
            });
            target.style.display = 'block';
        });
    });
});