const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

var mainbtn1 = document.getElementById("mainbtn1")
var isScrolling = false;

mainbtn1.addEventListener("click", function()
{
    if (!isScrolling) 
    { 
        isScrolling = true;
        var targetElement = document.getElementById("myjourney");
        var targetOffsetTop = targetElement.offsetTop;

        targetOffsetTop += 250;

        window.scrollTo({
        top: targetOffsetTop,
        behavior: "smooth"
        });

        setTimeout(function(){
        isScrolling = false;
        }, 50);
    }
})

window.addEventListener("scroll", function() {
    if (isScrolling) 
    {
      mainbtn1.disabled = true;
    } else 
    {
      mainbtn1.disabled = false;
    }
  });
    



