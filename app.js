const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

/* Life Button Code*/
var mainbtn1 = document.getElementById("lifebtn")
var isScrolling = false;

mainbtn1.addEventListener("click", function()
{
    if (!isScrolling) 
    { 
        isScrolling = true;
        var targetElement = document.getElementById("myjourney");
        var screenHeight = window.innerHeight;
        var targetOffsetPercent = 0.18;

        var targetRect = targetElement.getBoundingClientRect();

        var targetOffsetTop = window.pageYOffset + targetRect.top - window.innerHeight + (screenHeight * targetOffsetPercent);

    
        var documentHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
        if (targetOffsetTop > documentHeight - screenHeight) {
          targetOffsetTop = documentHeight - screenHeight;
        }

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

  /* Home Button Code */
  var mainbtn1 = document.getElementById("homebtn")
  var isScrolling = false;

  mainbtn1.addEventListener("click", function()
    {
    if (!isScrolling) 
    { 
        isScrolling = true;
        var targetElement = document.getElementById("myjourney");
        var screenHeight = window.innerHeight;
        var targetOffsetPercent = -1;

        var targetRect = targetElement.getBoundingClientRect();

        var targetOffsetTop = window.pageYOffset + targetRect.top - window.innerHeight + (screenHeight * targetOffsetPercent);

    
        var documentHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
        if (targetOffsetTop > documentHeight - screenHeight) {
          targetOffsetTop = documentHeight - screenHeight;
        }

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

  /* Contacs Button Code */

var mainbtn1 = document.getElementById("contactsbtn")
var isScrolling = false;

  mainbtn1.addEventListener("click", function()
    {
    if (!isScrolling) 
    { 
        isScrolling = true;
        var targetElement = document.getElementById("myjourney");
        var screenHeight = window.innerHeight;
        var targetOffsetPercent = 3;

        var targetRect = targetElement.getBoundingClientRect();

        var targetOffsetTop = window.pageYOffset + targetRect.top - window.innerHeight + (screenHeight * targetOffsetPercent);

    
        var documentHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
        if (targetOffsetTop > documentHeight - screenHeight) {
          targetOffsetTop = documentHeight - screenHeight;
        }

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

  
    



