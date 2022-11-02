let share = document.querySelector('.ShareOnSM');

let shareImg = document.querySelector('[data-shareIcon]');

shareImg.addEventListener('click', function () {
   if(share.style.opacity === "0"){
    share.style.opacity = "1";
   }else{
    share.style.opacity = "0";
   }
});


