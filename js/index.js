// nav animation
window.onscroll = () =>{navScroll()};

// function navScroll(){
//     if(document.body.scrollTop > 20){
//         document.querySelector("nav").className = "navAnim";
//     } else{
//         document.querySelector("nav").className = "";
//     }
// };

function navScroll() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.querySelector("nav").className = "navAnim";
    } else {
      document.querySelector("nav").className = "";
    }
  }


  


// magnific pipup js
$("document").ready(function () {
    $(".gallerys").magnificPopup({
        type: "image",
        delegate: "a",
        gallery: {
            enabled: true
        }
    });
});


// work section view more 

$(document).ready(function () {
    $("figure").slice(0, 7).show();
    $("#viewMore").on("click", function (e) {
        e.preventDefault();
        $("figure:hidden").slice(0, 9).slideDown();
    });

})


// toggle nav

const fullNav = document.querySelector("ul#nav");
const togglebtn = document.querySelector("#btn");

togglebtn.addEventListener("click", ()=>{
    fullNav.classList.toggle("active");
    togglebtn.classList.toggle("active");
});


