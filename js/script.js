const header__change = document.querySelector(".header__change");

header__change.addEventListener('click', () =>{
    document.body.classList.toggle('dark-theme-variables');
    header__change.querySelector('span:nth-child(1)').classList.toggle('active');
    header__change.querySelector('span:nth-child(2)').classList.toggle('active');
});


$(document).ready(function(){
    $('.content__albums-list').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
        prevArrow: '<span class="prev-arrow"><i class="icons icon-prev-arrow"></i></span>',
        nextArrow: '<span class="next-arrow"><i class="icons icon-next-arrow"></i></span>',
    });
});



const audio = document.querySelector('.audio'),
      cover = document.querySelector('.player-photo'),
      playBtn = document.querySelector('.play'),
      nextBtn = document.querySelector('.next'),
      prevBtn = document.querySelector('.prev'),
      songList = document.querySelector('.content__songs-list'),
      title = document.querySelector('.player-song-name'),
      author = document.querySelector('.player-song-author'),
      volSlider = document.querySelector('.slider'),
      progressContainer = document.querySelector('.player-progress-container'),
      progress = document.querySelector('.player-progress-line')
     
      
      

let songArray = [];
let songImage = [];
let songHeading = '';
let songAuthor = '';
let songIndex = 0;
let isPlaying = false;


function loadAudio(){
    audio.src = songArray[songIndex];
    cover.src = songImage[songIndex];
    let songListItems = songList.getElementsByTagName('li');
    songHeading = songListItems[songIndex].getAttribute('data-name');
    songAuthor = songListItems[songIndex].getAttribute('data-author');
    title.innerText = songHeading;
    author.innerText = songAuthor;
    
    
    for(i=0;i<songListItems.length;i++){
        songListItems[i].classList.remove('content__songs-list-active');
        
    }
    
    songList.getElementsByTagName('li')[songIndex].classList.add('content__songs-list-active');
}


function loadSongs(){
    let songs = songList.getElementsByTagName('li');
    for(i=0;i<songs.length;i++){
        songArray.push(songs[i].getAttribute('data-src'));
        songImage.push(songs[i].getAttribute('image-src'));
    }
    
    loadAudio();
}

loadSongs();

function playAudio(){
    audio.play();
    playBtn.querySelector('i.icons').classList.remove('icon-play');
    playBtn.querySelector('i.icons').classList.add('icon-pause');
    isPlaying = true;
    
}

function pauseAudio(){
    audio.pause();
    playBtn.querySelector('i.icons').classList.remove('icon-pause');
    playBtn.querySelector('i.icons').classList.add('icon-play');
    isPlaying = false;
    
}

function nextSong(){
    songIndex++;
    if(songIndex > songArray.length - 1){
        songIndex = 0;
    };
    loadAudio();
    playAudio();
}

function prevSong(){
    songIndex--;
    if(songIndex < 0){
        songIndex =  songArray.length - 1;
    };
    loadAudio();
    playAudio();
}

playBtn.addEventListener('click', function(){
    if(isPlaying){
        pauseAudio();
    }
    else{
        playAudio();
    }
}, false);

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

songList.addEventListener('click', function(e){
    songIndex = e.target.closest('li').getAttribute('data-index');
    loadAudio();
    playAudio();
}, false);

audio.addEventListener('ended', nextSong);

volSlider.addEventListener('input', function(){
    audio.volume = volSlider.value / 100;
}, false);                                           


function updateProgress(e){
    const {duration, currentTime} = e.srcElement
    const progressPercent = (currentTime / duration) * 100
    progress.style.width = `${progressPercent}%`
}

audio.addEventListener('timeupdate', updateProgress);

function setProgress(e){
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration
    
    audio.currentTime = (clickX / width) *duration
}

progressContainer.addEventListener('click', setProgress);


var $slider = $('.slider');
var $fill = $('.fill');

function setBar(){
    $fill.css("width", $slider.val() + "%");
}

$slider.on("input", setBar);

setBar();







let Num3 = document.querySelectorAll('.be-added'),
    Num4 = document.querySelectorAll('.notification__button')
    
for(let i=0; i<Num3.length; i++){
    Num3[i].addEventListener('click', function(){
        let Num1 = document.getElementsByClassName('notification__bg');
        let Num5 = document.getElementsByClassName('notification');
        Num6 = Num5[0].style;
        Num6.display = "block";
        Num2 = Num1[0].style;
        Num2.opacity = "0.4";
        
    });
}
    
for(let i=0; i<Num4.length; i++){
    Num4[i].addEventListener('click', function(){
        let Num1 = document.getElementsByClassName('notification__bg');
        let Num5 = document.getElementsByClassName('notification');
        Num6 = Num5[0].style;
        Num6.display = "none";
        Num2 = Num1[0].style;
        Num2.opacity = "0.9";
    });
}




