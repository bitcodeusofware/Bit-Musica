// Lista de canciones (puedes agregar más)
const songs = [
    {
        title: "oh mi Angel",
        artist: "Artista 1",
        src: "oh mi Angel.mp3",
        cover: "https://i.scdn.co/image/ab67616d0000b273ce3f7a5726537f3fd14f2188",
        duration: "2:18"
    },
    {
        title: "Travis Scott",
        artist: "Artista 2",
        src: "travis.mp3",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpVgByNdbDntccUbO5tWmaVCCGVm_EPlCx8w&s",
        duration: "4:12"
       
    },
    {
        title: "November South",
        artist: "Artista 3",
        src: "Our Father’s Sins (Official Lyric Video) - November South.mp3",
        cover: "https://i.scdn.co/image/ab676161000051746c08d788686ad7b2f84d9800",
        duration: "3:16"
    },
    {
        title: "Noah Kahan",
        artist: "Artista 4",
        src: "Noah Kahan - You’re Gonna Go Far (Official Lyric Video) - NoahKahanVEVO.mp3",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR_kKJbSMfVMVm873vbzqFqokVjkpEG5aHvA&s",
       duration: "4:46"
    },
    {
        title: "Star Eater",
        artist: "Artista 5",
        src: "Star Eater - Daniel Deluxe.mp3 ",
        cover: "https://cdn-images.dzcdn.net/images/cover/80acb36159cb75f910d44155a0b5df98/500x500-000000-80-0-0.jpg",
       duration: "4:32"
    },
    {
        title: "VEKI VEKI",
        artist: "Artista 6",
        src: "VEKI VEKI (Slowed) - DJZRX.mp3 ",
        cover: "https://i.ytimg.com/vi/rpSe5mCdj4k/maxresdefault.jpg",
       duration: "1:34"
    },
    {
        title: "BigBoa",
        artist: "Artista 7",
        src: "Long Distance - BigBoa.mp3 ",
        cover: "https://i.ytimg.com/vi/7xrwTlPEN5I/0.jpg",
       duration: "1:57"
    },
    {
        title: "Dream, Ivory",
        artist: "Artista 8",
        src: "Dream, Ivory - Welcome and Goodbye - David Dean Burkhart.mp3 ",
        cover: "https://i.ytimg.com/vi/4J0eu55kYWY/0.jpg",
       duration: "2:21"
    },
    {
        title: "Kirin J Callinan",
        artist: "Artista 9",
        src: "Kirin J Callinan - Big Enough (feat. Alex Cameron) - TERRIBLE RECORDS.mp3 ",
        cover: "https://i.ytimg.com/vi/L6RsYvaGAIo/0.jpg",
       duration: "4:44"
    },
    {
        title: "magic - Medasin",
        artist: "Artista 10",
        src: "magic - Medasin.mp3 ",
        cover: "https://i.ytimg.com/vi/9ytiyD_QA2s/0.jpg",
       duration: "5:57"
    },
    {
        title: "Ark Patrol - Let Go",
        artist: "Artista 11",
        src: "Ark Patrol - Let Go (feat. Veronika Redd) - MrSuicideSheep.mp3 ",
        cover: "https://i.ytimg.com/vi/Ts5ZiojkOe4/0.jpg",
       duration: "4:08"
    },
    {
        title: "BIOS - Zorrovian",
        artist: "Artista 12",
        src: "BIOS - Zorrovian [Official Visualiser] - Zorrovian.mp3",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0sgJ-M5rQ6krNGSSdXqcNX4Bi06AueyLphA&s.jpg",
        duration: "5:13"
    },
    {
        title: "Charly Black",
        artist: "Artista 13",
        src: "Charly Black - You're Perfect (Official Video) - CharlyBlackVEVO.mp3",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb2kl-qeWBsBcrmEDYPBNEdupunGScGh6ZEg&s.jpg",
        duration: "3:19"
    },
    {
        title: "Suffocation x Goth (mashup)",
        artist: "Artista 14",
        src: "Suffocation x Goth (mashup) - Crystals Castles and Sidewalks and Skeletons - Just chill.mp3",
        cover: "https://i.ytimg.com/vi/Fw2fMqw9Q1w/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGCYgXih_MA8=&rs=AOn4CLBws2Dn6bi17ZA8PFDJHUDRU69JHQ.jpg",
        duration: "3:12"
    },
    {
        title: "The Mamas & The Papas",
        artist: "Artista 15",
        src: "The Mamas & The Papas - California Dreamin' - Folk Experience.mp3",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-vTNfq7qN-RHIrA_AfdnrIrhTTr6deVpkfw&s.jpg",
        duration: "2:38"
    },
    {
        title: "ABBA - Dancing Queen",
        artist: "Artista 16",
        src: "ABBA - Dancing Queen (Official Music Video) - AbbaVEVO.mp3",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk9N29Tpr3oSSjJflNzbqlkQ4o9pNg6ygn1Q&s.jpg",
        duration: "3:53"
    },
    {
        title: "Hozier - From Eden",
        artist: "Artista 17",
        src: "Hozier - From Eden - Hozier.mp3",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJAXJUIi2ftGOmTWOMsI7eol0PZCzP5XtlRA&s.jpg",
        duration: "3:43"
    },
    {
        title: "Kyle Dixon",
        artist: "Artista 18",
        src: "Kyle Dixon & Michael Stein - Kids - Intensive Drops Network.mp3",
        cover: "https://i.ytimg.com/vi/Ha2OcL_0gtM/sddefault.jpg",
        duration: "2:38"
    },
    {
        title: "PASTEL GHOST",
        artist: "Artista 19",
        src: "PASTEL GHOST _ IRIS - PASTEL GHOST.mp3",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb7nhKx6SjVOqB0my8ByW19Kr11T-CS0E7IA&s.jpg",
        duration: "3:38"
    },
    {
        title: "She Is - The Fray",
        artist: "Artista 20",
        src: "She Is - The Fray.mp3",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrxjTkqpE7Slpr78xS7iZBLhmtljj901VAug&s.jpg",
        duration: "3:57"
    },
   
    {
        title: "Memory Reboot",
        artist: "Artista 21",
        src: "VØJ, Narvent - Memory Reboot (4K Music Video) - Narvent.mp3",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpwocosrgaBuJEX92vPBC1cermuzyy-NyJ7g&s.jpg",
        duration: "3:57"
    },
    {
        title: "David Guetta",
        artist: "Artista 22",
        src: "David Guetta & MORTEN - Never Be Alone (feat Aloe Blacc) - David Guetta.mp3",
        cover: "https://m.media-amazon.com/images/I/41aMP8x0yjL._UXNaN_FMjpg_QL85_.jpg",
        duration: "2:59"
    },
     {
        title: "You Are the Woman ",
        artist: "Artista 23",
        src: "You Are the Woman - Firefall.mp3",
        cover: "https://i.ytimg.com/vi/lakFEx_9cT4/hqdefault.jpg",
        duration: "3:54"
    },
     {
        title: "Heads Will Roll",
        artist: "Artista 24",
        src: "Heads Will Roll (A-Trak Remix) - Yeah Yeah Yeahs.mp3",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhHH39tl3Y8c2KVt6P-hW3FgCJS57DlWHj_Q&s.jpg",
        duration: "6:24"
    },
     {
        title: "Chris Brown",
        artist: "Artista 25",
        src: "Chris Brown - Girl You Loud (Lyrics) ft. Tyga - R&BHype.mp3",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK7R_o3bY0UaFXbCSeao2E9TJJs02SEgxVxw&s.jpg",
        duration: "3:34"
    },
     {
        title: "Armin van Buuren feat",
        artist: "Artista 28",
        src: "Armin van Buuren feat. Sharon den Adel - In And Out Of Love (Official Music Video) - Armada Music TV.mp3",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKtqNj5rR91l0fZ8BVCtDiYnS2lLRdJTsYMg&s.jpg",
        duration: "3:08"
    },
     {
        title: " Solitude juno, blindheart",
        artist: "Artista 27",
        src: "juno, blindheart - Solitude - Kurate Music.mp3",
        cover: "https://i.ytimg.com/vi/PlKB7yc_RwA/sddefault.jpg",
        duration: "2:32"
    },
     {
        title: "Flawed Mangoes ",
        artist: "Artista 28",
        src: "Flawed Mangoes - Dramamine (Visualizer) - Flawed Mangoes.mp3",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM7Q98V-YGB6v2grlhLFelP8b08JKYKjTGDQ&s.jpg",
        duration: "3:26"
    },
     {
        title: " Pete Yorn",
        artist: "Artista 29",
        src: " Pete Yorn - Ever Fallen In Love - Pete Yorn.mp3",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYViGpQZPmPoYQmG9W4bDvn1HmlLf5qcyPPQ&s.jpg",
        duration: "2:33"
    },
     {
        title: "U Weren't Here ",
        artist: "Artista 30",
        src: "U Weren't Here I Really Miss You - Cult Member.mp3",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQWHQhcRPdee9Bn_xC7lVwd0d5sT2da3IZrg&s.jpg",
        duration: "2:41"
    },
     {
        title: " Phoebe Bridgers - Scott Street ",
        artist: "Artista 31",
        src: "Phoebe Bridgers - Scott Street (Official Video) - Phoebe Bridgers.mp3",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbawIKSU7hkCNyYj4v1tI0y3Ds3MgE-zofjw&s.jpg",
        duration: "5:07"
    },
     {
        title: " Me And You",
        artist: "Artista 32",
        src: "Me And You - Brenton Wood from the album Baby You Got It - The Bicycle Music Company.mp3",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdRFFmaFCMKby-hMoWxnboSjrvu6cE5gIjQA&s.jpg",
        duration: "3:00"
    },
     {
        title: " I'm God - Clams Casino",
        artist: "Artista 33",
        src: "I'm God - Clams Casino.mp3",
        cover: "https://i.scdn.co/image/ab67616d0000b2739ae69c2c5802b7bb96df8832.jpg",
        duration: "4:38"
    },
     {
        title: " Mareux - Killer",
        artist: "Artista 34",
        src: "Mareux - Killer (Official Lyric Video) - Mareux.mp3",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTirTxlVjdpf-gRFV9X3Nd7KnRWGbQVJb9sMg&s.jpg",
        duration: "3:04"
    },
     {
        title: "Seve (Slow,
        artist: "Artista 35",
        src: "Seve (Slow Version) - Tez Cadey.mp3",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgTcUKqujdeBpsqNVEvMIYiV3GdqJzKsM9xw&s.jpg",
        duration: "5:34"
    },
     {
        title: "Glass Animals",
        artist: "Artista 36",
        src: "Glass Animals - Heat Waves (Official Video) - GlassAnimalsVEVO.mp3",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrJiENv-mRQNHg0vhUy_PLSwM0Rwdk2KPDvg&s.jpg",
        duration: "3:56"
    },

    
    // Agrega más canciones según necesites
];

// Elementos del DOM
const audioPlayer = document.getElementById('audio-player');
const playBtn = document.getElementById('play-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const shuffleBtn = document.getElementById('shuffle-btn');
const repeatBtn = document.getElementById('repeat-btn');
const progressBar = document.getElementById('progress-bar');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const songTitle = document.getElementById('song-title');
const artistEl = document.getElementById('artist');
const coverEl = document.getElementById('cover');
const playlistEl = document.getElementById('playlist');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');

// Variables de estado
let currentSongIndex = 0;
let isPlaying = false;
let isShuffled = false;
let isRepeated = false;
let originalPlaylist = [...songs];
let currentPlaylist = [...songs];

// Inicializar el reproductor
function initPlayer() {
    loadSong(currentPlaylist[currentSongIndex]);
    renderPlaylist();
}

// Cargar canción
function loadSong(song) {
    songTitle.textContent = song.title;
    artistEl.textContent = song.artist;
    coverEl.src = song.cover;
    audioPlayer.src = song.src;
    durationEl.textContent = song.duration;
    
    // Actualizar la clase 'playing' en la lista
    updatePlayingClass();
}

// Reproducir canción
function playSong() {
    isPlaying = true;
    audioPlayer.play();
    playBtn.innerHTML = '<i class="fas fa-pause"></i>';
    document.querySelector('.player').classList.add('playing');
}

// Pausar canción
function pauseSong() {
    isPlaying = false;
    audioPlayer.pause();
    playBtn.innerHTML = '<i class="fas fa-play"></i>';
    document.querySelector('.player').classList.remove('playing');
}

// Siguiente canción
function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % currentPlaylist.length;
    loadSong(currentPlaylist[currentSongIndex]);
    if (isPlaying) playSong();
}

// Canción anterior
function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + currentPlaylist.length) % currentPlaylist.length;
    loadSong(currentPlaylist[currentSongIndex]);
    if (isPlaying) playSong();
}

// Barra de progreso
function updateProgress() {
    const { currentTime, duration } = audioPlayer;
    const progressPercent = (currentTime / duration) * 100;
    progressBar.value = progressPercent;
    
    // Formatear tiempo
    const currentMinutes = Math.floor(currentTime / 60);
    const currentSeconds = Math.floor(currentTime % 60).toString().padStart(2, '0');
    currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`;
}

// Establecer progreso
function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audioPlayer.duration;
    audioPlayer.currentTime = (clickX / width) * duration;
}

// Renderizar lista de reproducción
function renderPlaylist() {
    playlistEl.innerHTML = '';
    currentPlaylist.forEach((song, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${song.title} - ${song.artist}</span>
            <span class="song-duration">${song.duration}</span>
        `;
        li.addEventListener('click', () => {
            currentSongIndex = index;
            loadSong(song);
            playSong();
        });
        playlistEl.appendChild(li);
    });
    updatePlayingClass();
}

// Actualizar clase 'playing' en la lista
function updatePlayingClass() {
    const items = playlistEl.querySelectorAll('li');
    items.forEach((item, index) => {
        if (index === currentSongIndex) {
            item.classList.add('playing');
        } else {
            item.classList.remove('playing');
        }
    });
}

// Barajar lista
function shufflePlaylist() {
    isShuffled = !isShuffled;
    shuffleBtn.style.color = isShuffled ? '#1db954' : 'white';
    
    if (isShuffled) {
        currentPlaylist = [...originalPlaylist].sort(() => Math.random() - 0.5);
    } else {
        currentPlaylist = [...originalPlaylist];
    }
    
    // Encontrar la canción actual en la nueva lista
    const currentSong = originalPlaylist[currentSongIndex];
    currentSongIndex = currentPlaylist.findIndex(song => 
        song.title === currentSong.title && song.artist === currentSong.artist);
    
    renderPlaylist();
}

// Repetir canción
function toggleRepeat() {
    isRepeated = !isRepeated;
    repeatBtn.style.color = isRepeated ? '#1db954' : 'white';
}

// Buscar canción
function searchSong() {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === '') {
        currentPlaylist = [...originalPlaylist];
    } else {
        currentPlaylist = originalPlaylist.filter(song => 
            song.title.toLowerCase().includes(searchTerm) || 
            song.artist.toLowerCase().includes(searchTerm)
        );
    }
    renderPlaylist();
}

// Event listeners
playBtn.addEventListener('click', () => {
    isPlaying ? pauseSong() : playSong();
});

nextBtn.addEventListener('click', nextSong);
prevBtn.addEventListener('click', prevSong);

audioPlayer.addEventListener('timeupdate', updateProgress);
audioPlayer.addEventListener('ended', () => {
    if (isRepeated) {
        audioPlayer.currentTime = 0;
        playSong();
    } else {
        nextSong();
    }
});

progressBar.addEventListener('input', (e) => {
    const seekTime = (e.target.value / 100) * audioPlayer.duration;
    audioPlayer.currentTime = seekTime;
});

shuffleBtn.addEventListener('click', shufflePlaylist);
repeatBtn.addEventListener('click', toggleRepeat);

searchBtn.addEventListener('click', searchSong);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') searchSong();
});

// Inicializar
initPlayer();
