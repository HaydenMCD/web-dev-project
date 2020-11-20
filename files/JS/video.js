document.getElementById("video-button").addEventListener("click",myfunction);
function myfunction(){
    const videocontainer=document.createElement("div");
    const video=document.createElement("div");
    const blackbackground=document.createElement("div");

    videocontainer.id="videocontainer";
    blackbackground.id="blackbackground";
    video.id="showvideo";

    video.appendChild(document.createElement("iframe")).src="https://www.youtube.com/embed/GEntbNhk09A";
blackbackground.addEventListener("click",(e)=>{
    blackbackground.remove();
    video.remove();
    videocontainer.remove();
})
  
    videocontainer.appendChild(blackbackground);
    videocontainer.appendChild(video);
    document.querySelector(".main").append(videocontainer);
}