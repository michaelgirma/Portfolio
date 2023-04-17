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
        var screenHeight = window.innerHeight;
        var targetOffsetPercent = 0.2;

        var targetRect = targetElement.getBoundingClientRect();

    // Calculate the target offset top based on the current window height and the target element's position
        var targetOffsetTop = window.pageYOffset + targetRect.top - window.innerHeight + (screenHeight * targetOffsetPercent);

    // Check if target offset exceeds document height and adjust accordingly
        var documentHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
        if (targetOffsetTop > documentHeight - screenHeight) {
          targetOffsetTop = documentHeight - screenHeight;
        }

        //var targetOffsetTop = targetElement.offsetTop + (screenHeight * targetOffsetPercent);
        //var documentHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
        //if (targetOffsetTop > documentHeight - screenHeight) {
          //targetOffsetTop = documentHeight - screenHeight;

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
    



