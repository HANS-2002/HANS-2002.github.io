var themeBtn = document.querySelector(".themeBtn");
var themeLink = document.querySelector("#themeLink");

function changeTheme(){
    if(themeBtn.classList.contains('fa-moon')){
        themeBtn.classList.remove('fa-moon');
        themeBtn.classList.add('fa-lightbulb');
        themeLink.href = "assets/styles/lightTheme.css";
    }
    else if(themeBtn.classList.contains('fa-lightbulb')){
        themeBtn.classList.remove('fa-lightbulb');
        themeBtn.classList.add('fa-moon');
        themeLink.href = "assets/styles/darkTheme.css";
    }
}