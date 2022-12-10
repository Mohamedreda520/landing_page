//toggel spin class on icon
document.querySelector(".toggle-settings .fa-gear").onclick = function () {
    //toggle class fa-spin
    this.classList.toggle ("fa-spin");
    //toggle class open on settig-box
   document.querySelector(".setting-box").classList.toggle("open");
    
}; 


//switch color
const colorsli = document.querySelectorAll(".colors-list li");

colorsli.forEach(li => {

    li.addEventListener("click", (e) => {
         
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);
    });

});




//select landing page Alements
var landingpage = document.querySelector(".landing-page");

//get Array of images
let imagsArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];



setInterval(function()  {
//Random Number
const randomNumber = Math.floor(Math.random()*imagsArray.length);

   
//change background image url
landingpage.style.backgroundImage = 'url("imags/'+imagsArray[randomNumber]+'")';

}, 10000);



// code menubar
let menubar = document.getElementById("menubar")
let link = document.getElementById("linkue")
menubar.addEventListener("click", function (){
  let span  = document.createElement("span")
  span.style.cssText = `width: 100%; height: 3px; color: #fff; font-weight: bold`
 menubar.classList.toggle("active")
  link.classList.toggle("active") ; 
})