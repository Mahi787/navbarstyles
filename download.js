             
             //IShat Noor Mahi//

/*==== Note : "give your Navbar container div an ID called 'navbar' (id="navbar")
                                &
       Navbar's Position Should be Fixed (position="fixed")" ===*/

/*============= Shringking Navbar ==============*/

    window.onscroll = function() {scrollFunction()};   
    function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.padding = "0px";
        document.getElementById("logo").style.width = "70%";
    } else {
        document.getElementById("navbar").style.padding = "10px";
        document.getElementById("logo").style.fontSize = "87%";
    }
    }

/*============= Sticky Navbar ==============*/

    window.onscroll = function() {myFunction()};     
    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;

    function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
    }

/*============= Hiding Navbar on Top scroll ==============*/

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
    }