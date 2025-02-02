let iconEl = document.getElementById("icon");



iconEl.addEventListener("click", function(){
  document.body.classList.toggle("darkmode")
  if(document.body.classList.contains("darkmode")){
    iconEl.src = "./images/sun.png"
  }else{
    iconEl.src = "./images/moon.png"
  }
});