let playBtn = document.getElementById('play'),
    pauseBtn = document.getElementById('pause'),
    f5Btn = document.getElementById('f5'),
    b5Btn = document.getElementById('b5'),
    volumeBtn = document.getElementById('volume'),
    volumeInputElement = document.getElementById('volume-slider'),
    muteBtn = document.getElementById('mute'),
    unmuteBtn = document.getElementById('unmute'),
    downloadBtn = document.getElementById('download'),
    swapBtn = document.getElementById('swap'),
    fullScreenBtn = document.getElementById('full-screen'),
    video = document.getElementById('main-video');

function play1(){
    console.log('play the video',video);
    video.play();
}
function pause(){
    console.log('pause the video',video);
    video.pause();
}
function f5(){
    //get the current time
    let cTime = video.currentTime;
    //add 5 secs
    cTime = cTime + 5;
    //play from the new video
    video.currentTime = cTime;
}
function b5(){
    //get the current time
    let cTime = video.currentTime;
    //reduce 5 secs
    cTime = cTime - 5;
    //play from the new video
    video.currentTime = cTime;
}
function volumeUpdate(){
    //get slider value
    let volumeInput = volumeInputElement.value;
    console.log(volumeInput);

    //0=> 0; 100 => 1
    volumeInput = volumeInput/ 100 ;
    console.log(volumeInput);

    //apply to the video
     video.volume = volumeInput;
}
function mute(){
    console.log('mute video');
    video.muted = true;
}
function unmute(){
    console.log('unmute video');
    video.muted = false;
}
function download(){
    
    //get the file path 
    let filePath = video.getAttribute('src');
    //TODO: update href value in a tag
    downloadBtn.setAttribute("href", filePath);
    downloadBtn.setAttribute("download", filePath);
    //TODO: trigger click event for that a tag
    console.log(filePath);
   
}
function swap(){
    //TODO: get selected video
    let targetPath = this.value;
    console.log(targetPath)
        cTime = video.currentTime;
    //TODO: change filepath of video
    video.setAttribute('src',targetPath);
    //TODO: change current time
    video.currentTime = cTime;
    play1();
}
function fullScreen(){
    video.requestFullscreen();
}

playBtn.addEventListener('click',play1);
pauseBtn.addEventListener('click',pause);
f5Btn.addEventListener('click',f5);
b5Btn.addEventListener('click',b5);
volumeInputElement.addEventListener('click',volumeUpdate);
muteBtn.addEventListener('click',mute);
unmuteBtn.addEventListener('click',unmute);
downloadBtn.addEventListener('click',download);
swapBtn.addEventListener('change',swap);
fullScreenBtn.addEventListener('click',fullScreen);
