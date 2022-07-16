/*for toggel ****************/
    if(window.screen.width>550){
        $(document).ready(function(){
            $(".btn").click(function(){
              $(".mnue").toggle(500,"swing");
            });
        });
    }

/*for class .div.text To display the phrase "Welcome dear".  ******************/

const text = document.querySelector(".text");
const str = text.textContent;
const split = str.split("");


text.textContent ="";

for(let i=0; i<split.length; i++){
    text.innerHTML += "<span class='al'>" + split[i] + "</span>";
}
var a=0;
let timer= setInterval(ontick,50);
function ontick(){
    const span = text.querySelectorAll('span')[a];
    span.classList.add('fg');
    a++;
    if(a === split.length){
        setTimeout(()=>{
            let lenth = document.querySelectorAll(".fg")
            for(i=0;i<lenth.length;i++){
                lenth[i].classList.remove('fg');
            }
            a=0;
        },3000)

        
    }
};
/*
        function complete(){
        clearInterval(timer);
            timer=null;
            
        }
*/


/*for anime****************/
/*for class .m15 To display the phrase "ali mohammad".  ******************/
anime.timeline({loop: true})
  .add({
    targets: '.ml5 .line',
    opacity: [0.5,1],
    scaleX: [0, 1],
    easing: "easeInOutExpo",
    duration: 700
  }).add({
    targets: '.ml5 .line',
    duration: 600,
    easing: "easeOutExpo",
    translateY: (el, i) => (-0.625 + 0.625*2*i) + "em"
  }).add({
    targets: '.ml5 .ampersand',
    opacity: [0,1],
    scaleY: [0.5, 1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  }).add({
    targets: '.ml5 .letters-left',
    opacity: [0,1],
    translateX: ["0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=300'
  }).add({
    targets: '.ml5 .letters-right',
    opacity: [0,1],
    translateX: ["-0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  }).add({
    targets: '.ml5',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
/***********/ 
/*for class .m19 To display the phrase "ali hayajneh".  ******************/
var textWrapper = document.querySelector('.ml9 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<samp class='letter'>$&</samp>");

anime.timeline({loop: true})
  .add({
    targets: '.ml9 .letter',
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: (el, i) => 45 * (i+1)
  }).add({
    targets: '.ml9',
    opacity: 0,
    duration: 5000,
    easing: "easeOutExpo",
    delay: 1000
  });


/** for button top */
const topp = document.querySelector(".top");

window.addEventListener("scroll",()=>{
    if(window.pageYOffset>10){
        topp.classList.add("active");
        console.log("top");
    }else{
        topp.classList.remove("active");
        console.log("r");
    }
});


