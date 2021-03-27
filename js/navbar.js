window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar2").style.opacity= " 1";
   
  } else {
    document.getElementById("navbar2").style.opacity = "0";
  
  }
}