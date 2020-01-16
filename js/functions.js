function openChat(isOpen) {
    //alert(isOpen);
    let chat = document.getElementById("chat");
    let aside = document.getElementsByTagName("aside")[0];
    alert(chat);
    if (isOpen == 0) {
        chat.style.display = "";
        aside.onclick = function () {openChat(1)};
    } else if ( isOpen == 1 ) {
        chat.style.display = "none";
        aside.onclick = function () {openChat(0)};
    }
}
//TODO: allgemeine Funktionen hier einbetten

function navigation(nav, logged) {
    let navItem;
    let navItems;
    switch (nav) {
        case "filme":
            navItem = document.getElementById("navFilme");
            $("main").load("video.html");
            break;
        case "serien":
            navItem = document.getElementById("navSerien");
            $("main").load("video.html");
            break;
        case "login":
            //open a popup window

            //get window center
            let height = ($(window).height() - 185) / 2;
            let width = ($(window).width() - 280) / 2;

            window.open('login.html','_blank', "top=" + height + ",left=" + width + ",height=185,width=280");
            break;
        case "register":
            $("main").load("register.html");
            break;
        case "profile":
            navItem = document.getElementById("navLogin");
            $("main").load("profile.html");
            break;
        case "group":
            $("main").load("group.html");
            break;
        case "videos":
            $("main").load("videolist.html");
            break;
        case "main":
            $("main").load("main.html");
            break;
        case "events":
            //TODO
            break;
        default :
            alert("Unknown handler: " + nav)
    }

    if (logged === true) {
        setProfile();
    } else if (logged === false) {
        setLogin();
    }

    if (navItem) {
        navItems = document.getElementsByClassName("link");
        Array.prototype.forEach.call(navItems, item => {item.style.backgroundColor="#555"})
        navItem.style.backgroundColor = "#444";
    }
}

function setProfile (profileName) {
    let damn = document.getElementById("navLogin");
    damn.onclick = function () {
        navigation('profile');
    }
    damn.innerText = profileName;
}

function setLogin () {
    let damn = document.getElementById("navLogin");
    damn.onclick = function () {
        navigation('login');
    }
    damn.innerText = "Login";
}