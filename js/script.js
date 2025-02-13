document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.querySelector(".header__login");
    const popupLogin = document.querySelector(".header__popup-login");
    // const closePopup = document.createElement("span");
    
    // closePopup.innerHTML = "&times;";
    // closePopup.classList.add("popup-close");
    // popupLogin.prepend(closePopup);
    
    loginButton.addEventListener("click", function () {
        popupLogin.classList.toggle("active");
    });
    
    closePopup.addEventListener("click", function () {
        popupLogin.classList.remove("active");
    });
    
    document.addEventListener("click", function (e) {
        if (!popupLogin.contains(e.target) && !loginButton.contains(e.target)) {
            popupLogin.classList.remove("active");
        }
    });
});
