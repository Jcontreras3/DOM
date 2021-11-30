let rotationBtn = document.getElementById('rotationBtn');
rotationBtn.addEventListener('click', function(e){
    rotationTxt.classList.add("rotation","red");
    console.log(rotationTxt.classList);
    console.log(e);
});
console.log(rotationTxt.className);

let pulseTxt = document.getElementById('pulseTxt');

let pulseBtn = document.getElementById('pulseBtn');
pulseBtn.addEventListener('click',function(e){
    pulseTxt.classList.add("pulse","green","a");
    console.log(pulseTxt.classList);
    console.log(e);
});
console.log(pulseTxt.className)


 let wiggleBtn = document.getElementById('wiggleBtn');
 wiggleBtn.addEventListener('click',function(e){
    wiggleTxt.classList.add("wiggle", "blue");
     console.log(e);
 })
 console.log(wiggleTxt.className);

 let poundBtn = document.getElementById('poundBtn');
 poundBtn.addEventListener('click', function(e){
     poundTxt.classList.add("pound","orange");
     console.log(e);
 })
 console.log(poundTxt.className);

 let zoomerBtn = document.getElementById('zoomerBtn');
 zoomerBtn.addEventListener('click', function(e){
     zoomerTxt .classList.add("zoomer","purple");
     console.log(e);
 })
 console.log(zoomerTxt.className);

 let floaterBtn = document.getElementById('floaterBtn');
 floaterBtn.addEventListener('click' , function(e){
     floaterTxt.classList.add("floater","gold");
     console.log(e);
 })
 console.log(floaterTxt.className)

 let heartBtn = document.getElementById('heartBtn')
 heartBeatBtn.addEventListener('click', function(e){
    heartBeatTxt.classList.add("heartbeat","black");
    console.log(e);
 })
 console.log(heartBeatTxt.className)

 let slideUpBtn =document.getElementById('slideUpBtn');
 slideUpBtn.addEventListener('click',function(e){
     slideUpTxt.classList.add("slideUp","gray");
     console.log(e);
 })
 console.log(slideUpTxt.className)

 let rotateRightBtn = document.getElementById('rotateRightBtn');
 rotateRightBtn.addEventListener('click', function(e){
     rotateRightTxt.classList.add("rotateInRight","maroon");
     console.log(e);
 })
 console.log(rotateRightTxt.className);

 let rotateLeftBtn = document.getElementById('rotateLeftBtn');
 rotateLeftBtn.addEventListener('click', function(e){
     rotateLeftTxt.classList.add("rotateInLeft","springGreen");
     console.log(e)
 })
 console.log(rotateLeftTxt.className);