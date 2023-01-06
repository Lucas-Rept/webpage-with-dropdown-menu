let dropdowns = document.getElementsByClassName("dropdown-activer");
let mobileDrops = document.getElementsByClassName("m-drop");
let navToggle = document.getElementById("navToggler");
let navCloser = document.getElementById("closer");
let MobileNav = document.getElementById("mobile-nav");
let darken = document.getElementsByClassName("darken")[0];

navToggle.addEventListener("click", toggle);
navCloser.addEventListener("click", toggle);

function toggle(){
    if(darken.style.display != "block"){
        darken.style.display = "block";
        MobileNav.classList.add("slideIn");
    }
    else{
        MobileNav.classList.remove("slideIn");
        darken.style.display = "none";
    }
}

for(dropdown of dropdowns){
    dropdown.addEventListener("click", showDropdown);
}

for(mobileDrop of mobileDrops){
    mobileDrop.addEventListener("click", showMDrops);
}

function showDropdown(event){
    let activer = event.currentTarget;
    let child = Array.from(activer.children);
    arrow = child[0];
    container = child[1];


    if(arrow.classList.contains("arrow-active") == true){
        arrow.classList.remove("arrow-active");
    }
    else{
        arrow.classList.add("arrow-active");
    }

    if(container.classList.contains("show") == true){
        container.classList.remove("show");
    }
    else{
        container.classList.add("show");
    }


}

function showMDrops(event){
    activer = event.currentTarget;
    arrow = Array.from(activer.children);
    arrow = arrow[0];
    if(activer.nextElementSibling.classList.contains("droper-active") == false){
        activer.nextElementSibling.classList.add("droper-active");
        arrow.classList.add("arrow-active");
    }
    else{
        activer.nextElementSibling.classList.remove("droper-active");
        arrow.classList.remove("arrow-active");
    }
}