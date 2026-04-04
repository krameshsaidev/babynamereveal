const scenes=document.querySelectorAll(".scene");
const music=document.getElementById("music");
let current=0;
const timings=[3200,3200,3200,3500,5000];
function startExperience(){
 music.volume=0;
 music.play().catch(()=>{});
 let vol=0;
 let fade=setInterval(()=>{
  if(vol<0.4){vol+=0.02;music.volume=vol;}
  else clearInterval(fade);
 },200);
 nextScene();
}
function nextScene(){
 if(current<scenes.length-1){
  setTimeout(()=>{
   scenes[current].classList.remove("active");
   current++;
   scenes[current].classList.add("active");
   nextScene();
  },timings[current]);
 }
}
setTimeout(startExperience,1200);