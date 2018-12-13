window.onload = Set;

function Set(){
    document.getElementById("logo-cont").className = "logo-cont-shown";
    document.getElementById("about-cont").className = "hidden";
    document.getElementById("skills-cont").className = "hidden";
    document.getElementById("contact-cont").className = "hidden";
    document.getElementById("tab").className = "hidden";
    document.getElementById("tab2").className = "hidden";
    document.getElementById("tab3").className = "hidden";
    return;
}

document.getElementById("home").onclick = function() {home()};
document.getElementById("about").onclick = function() {about()};
var clickedON = "";

function home() {
    // hide and show main content
    document.getElementById("logo-cont").className = "logo-cont-shown";
    document.getElementById("about-cont").className = "hidden";
    document.getElementById("skills-cont").className = "hidden";
    document.getElementById("contact-cont").className = "hidden";
    document.getElementById("tab").className = "tab-out";
    document.getElementById("tab2").className = "tab2-out";
    document.getElementById("tab3").className = "tab3-out";

    // select and unselect links
    document.getElementById("home").className = "home-link-clicked";
    document.getElementById("about").className = "link";
    document.getElementById("skills").className = "link";
    document.getElementById("tutorials").className = "link";
    document.getElementById("contact").className = "link";
    var clickedON = "home";
}

function about() {
    // hide and show main content
    document.getElementById("logo-cont").className = "hidden";
    document.getElementById("about-cont").className = "about-cont-shown";
    document.getElementById("tab").className = "tab-in";
    document.getElementById("skills-cont").className = "hidden";
    document.getElementById("contact-cont").className = "hidden";
    document.getElementById("tab2").className = "tab2-out";
    document.getElementById("tab3").className = "tab3-out";

    // select and unselect links
    document.getElementById("home").className = "link";
    document.getElementById("about").className = "about-link-clicked";
    document.getElementById("skills").className = "link";
    document.getElementById("tutorials").className = "link";
    document.getElementById("contact").className = "link";

    var clickedON = "about";
}

function skills() {
    // hide and show main content
    document.getElementById("logo-cont").className = "hidden";
    document.getElementById("skills-cont").className = "skills-cont-shown";
    document.getElementById("contact-cont").className = "hidden";
    document.getElementById("tab").className = "tab-in";
    document.getElementById("tab2").className = "tab2-in";
    document.getElementById("tab3").className = "tab3-out";

    // select and unselect links
    document.getElementById("home").className = "link";
    document.getElementById("about").className = "link";
    document.getElementById("skills").className = "skills-link-clicked";
    document.getElementById("tutorials").className = "link";
    document.getElementById("contact").className = "link";

    var clickedON = "skills";
}

function tutorials() {
    // Link to codewithjulia.codes
    window.location.href = "http://codewithjulia.codes";
    var clickedON = "tutorials";
}

function contact() {
    // hide and show main content
    document.getElementById("logo-cont").className = "hidden";
    document.getElementById("contact-cont").className = "contact-cont-shown";
    document.getElementById("tab").className = "tab-in";
    document.getElementById("tab2").className = "tab2-in";
    document.getElementById("tab3").className = "tab3-in";
    // select and unselect links
    document.getElementById("home").className = "link";
    document.getElementById("about").className = "link";
    document.getElementById("skills").className = "link";
    document.getElementById("tutorials").className = "link";
    document.getElementById("contact").className = "contact-link-clicked";

    var clickedON = "contact";
}


