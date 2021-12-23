const audio = document.querySelector('audio');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const progress = document.getElementById('progress');

let isPlaying = false;
let songIndex = 0;

let songs = [
    {
        name: 'bernice-1',
        displayName: 'In Christ Alone',
        artist: 'Adrienne Liesching'
    },
    {
        name: 'bernice-2',
        displayName: 'You Are God Alone',
        artist: 'William Mcdowell'
    },
    {
        name: 'bernice-3',
        displayName: 'You are beautiful Lord',
        artist: 'Keith Green'
    },
    {
        name: 'bernice-4',
        displayName: 'Worship Medley',
        artist: 'Joe Mettle'
    }
];

function playSong(){
    isPlaying = true;
    playBtn.classList.replace('fa-play', 'fa-pause');
    playBtn.setAttribute('title', 'Pause');
    audio.play();
}

function pauseSong(){
    isPlaying = false;
    playBtn.classList.replace('fa-pause', 'fa-play');
    playBtn.setAttribute('title', 'Play');
    audio.pause()
}

playBtn.addEventListener('click', ()=>(isPlaying ? pauseSong() : playSong() ));

function loadSong(song){
    image.src = `img/${song.name}.jpg`;
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    audio.src=`music/${song.name}.mp3`
}

loadSong(songs[songIndex])

prevBtn.addEventListener('click',prevSong);
nextBtn.addEventListener('click',nextSong);

function prevSong(){
    songIndex --;
    if(songIndex < 0){
        songIndex = songs.length -1;
    }
    loadSong(songs[songIndex])
}

function nextSong(){
    songIndex ++;
    if(songIndex > songs.length - 1){
        songIndex =0;
    }
    loadSong(songs[songIndex])
}

audio.addEventListener('timeupdate', updatedTime);

function updatedTime(e) {
    const {currentTime, duration} = e.srcElement;
    console.log(currentTime, duration);

    //update progress bar
    let progressPercentage = (currentTime/duration) * 100;
    progress.style.width = `${progressPercentage}%`

    


};

