const dropID = document.getElementById('dropID-menu');
dropID.addEventListener('click', function() {
    const showMenu = document.getElementById('myDropdown')
    showMenu.classList.toggle('show')
        //an hien symbol
    const symbolshow = document.querySelector('.symbol');
    symbolshow.classList.toggle('showSylb')
        // thay đổi vùng chọn
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
})

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        const symbolshow = document.querySelector('.symbol');

        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
                symbolshow.classList.toggle('showSylb');
            }
        }
    }
}




// Add active class to the current button (highlight it)
var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";

        const navshow = document.querySelector('.nav_links');
        navshow.classList.toggle('nav-active');
        // quay về mặc định
        const burgger = document.querySelector('.burgger');
        burgger.classList.toggle('toggle');

    });
}

// ẩn và hiện menubar
const burgger = document.querySelector('.burgger');

burgger.addEventListener('click', function() {
    const navshow = document.querySelector('.nav_links');
    navshow.classList.toggle('nav-active');
    burgger.classList.toggle('toggle');
})

const MenubarS = document.querySelector('.txt-menu');
MenubarS.addEventListener('click', function() {
    const navshow = document.querySelector('.nav_links');
    console.log(navshow);
    navshow.classList.toggle('nav-active');

})