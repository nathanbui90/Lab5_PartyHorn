// main.js

// TODO
var slide = document.getElementById("volume-slider");
var num = document.getElementById("volume-number");
var audio = document.getElementById("horn-sound");
var icon = document.getElementById("volume-image");
var image = document.getElementById("sound-image");
var button = document.getElementById("honk-btn");

// Volume Slider Event Detection
document.getElementById("volume-slider").addEventListener("input", function(){
    num.value = slide.value;
    audio.volume = (slide.value/100);
    
    if(slide.value > 66 && slide.value < 101){
        icon.src = "./assets/media/icons/volume-level-3.svg";
        button.disabled = false;
    } 
    else if(slide.value > 33 && slide.value < 67){
        icon.src = "./assets/media/icons/volume-level-2.svg";
        button.disabled = false;
    }
    else if(slide.value > 0 && slide.value < 34){
        icon.src = "./assets/media/icons/volume-level-1.svg";
        button.disabled = false;
    }
    else if(slide.value == 0){
        icon.src = "./assets/media/icons/volume-level-0.svg";
        button.disabled = true;
    }
});

// Volume Number Event Detection
document.getElementById("volume-number").addEventListener("input", function(){
    slide.value = num.value;
    audio.volume = (num.value/100);
    
    if(num.value > 66 && num.value < 101){
        icon.src = "./assets/media/icons/volume-level-3.svg";
        button.disabled = false;
    } 
    else if(num.value > 33 && num.value < 67){
        icon.src = "./assets/media/icons/volume-level-2.svg";
        button.disabled = false;
    }
    else if(num.value > 0 && num.value < 34){
        icon.src = "./assets/media/icons/volume-level-1.svg";
        button.disabled = false;
    }
    else if(num.value == 0){
        icon.src = "./assets/media/icons/volume-level-0.svg";
        button.disabled = true;
    }
});

// Radio Air Horn Input Event Detection
document.getElementById("radio-air-horn").addEventListener("input", function(){
    image.src = "./assets/media/images/air-horn.svg";
    audio.src = "./assets/media/audio/air-horn.mp3";
});

// Radio Car Horn Input Event Detection
document.getElementById("radio-car-horn").addEventListener("input", function(){
    image.src = "./assets/media/images/car.svg";
    audio.src = "./assets/media/audio/car-horn.mp3";
});

// Radio Party Horn Input Event Detection
document.getElementById("radio-party-horn").addEventListener("input", function(){
    image.src = "./assets/media/images/party-horn.svg";
    audio.src = audio.src = "./assets/media/audio/party-horn.mp3";
});

// Button Click Detection and Event
document.getElementById("honk-btn").onclick = function(event){
    event.preventDefault();
    audio.play();
};