// Lista de canciones (puedes agregar más)
const songs = [ 
   {title: "Let You Down", artist: "NF nathan", src: "NF - Let You Down - NFVEVO.mp3",  duration: "3:36",
        cover: "https://i1.sndcdn.com/artworks-P5LCkzVggC1g-0-t500x500.jpg",
        background: "https://i1.sndcdn.com/artworks-P5LCkzVggC1g-0-t500x500.jpg",
    }, {title: "Racing Hearts", artist: "Mattie Maguire", src: "Música de Tecnonauta  Racing Hearts- Mattie Maguire - StarUp.mp3",  duration: "3:01",
        cover: "https://i1.sndcdn.com/artworks-NeKTV02HdHfj-0-t500x500.png",
        background: "https://i1.sndcdn.com/artworks-NeKTV02HdHfj-0-t500x500.png",
    }, {title: "PILLOWTALK", artist: "ZAYN", src: "ZAYN - PILLOWTALK (Official Video) - ZaynVEVO.mp3",  duration: "3:27",
        cover: "https://i.ytimg.com/vi/C_3d6GntKbk/maxresdefault.jpg",
        background: "https://i.ytimg.com/vi/C_3d6GntKbk/maxresdefault.jpg",
    }, {title: "CHROMATICS GIRLS JUST WANNA HAVE SOME", artist: "Cromáticos", src: "CHROMATICS GIRLS JUST WANNA HAVE SOME - Italians Do It Better Music.mp3",  duration: "3:44",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbEj59QVq5Nv8DL7OsTA2YwVCrScx7lxo31Q&s",
        background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbEj59QVq5Nv8DL7OsTA2YwVCrScx7lxo31Q&s",
    }, {title: "Cheri Cheri Lady", artist: "Modern Talking", src: "Modern Talking - Cheri Cheri Lady (slowed + reverb) - Its Julia.mp3",  duration: "4:26",
        cover: "https://i.ytimg.com/vi/4Pte3DbBSyM/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGGUgZShlMA8=&rs=AOn4CLCFw3iuvyk8rV5ZwEfUqEHgmwW7Cw",
        background: "https://i.ytimg.com/vi/4Pte3DbBSyM/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGGUgZShlMA8=&rs=AOn4CLCFw3iuvyk8rV5ZwEfUqEHgmwW7Cw",
    },   {title: "Release", artist: "Ason ID", src: "Ason ID - Release - Ason ID - Royalty Free Music.mp3",  duration: "3:42",
        cover: "https://i1.sndcdn.com/avatars-000050480682-fi4d4l-t1080x1080.jpg",
        background: "https://i1.sndcdn.com/avatars-000050480682-fi4d4l-t1080x1080.jpg",
    }, {title: "Where Have You Been", artist: "Rihanna", src: "Rihanna - Where Have You Been (Orchestra Remix) DJ Tristan & Drinks On Me - Car Tunes.mp3",  duration: "4:08",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH7rOpcCq2a1FuD-S6gtra60hwuyitx71dlA&s",
        background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH7rOpcCq2a1FuD-S6gtra60hwuyitx71dlA&s",
    }, {title: "One More Time ", artist: "Daft Punk", src: "Daft Punk - One More Time (Official Video) - Daft Punk.mp3",  duration: "5:22",
        cover: "https://i.ytimg.com/vi/FGBhQbmPwH8/maxresdefault.jpg",
        background: "https://i.ytimg.com/vi/FGBhQbmPwH8/maxresdefault.jpg",
    }, { title: "Got Us Fallin' In Love", artist: "Usher - Pitbull", src: "Usher - DJ Got Us Fallin' In Love (Official Music Video) ft. Pitbull - UsherVEVO.mp3",  duration: "4:07",
        cover:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6eMWleZW67KoR4lgnf1duDPIWjF_3bvIukw&s",
        background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6eMWleZW67KoR4lgnf1duDPIWjF_3bvIukw&s",
    }, { title: "ENCARA VIDA", artist: "KVRMVD", src: "ENCARA VIDA - KVRMVD.mp3",  duration: "1:28",
        background:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpC-mo6H-Rwy2Ubjhs7FxZuzTQlv-1u9MQ-A&s",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpC-mo6H-Rwy2Ubjhs7FxZuzTQlv-1u9MQ-A&s",
    }, { title: "Do Ya Like x Resonance", artist: "marcella", src: "Do Ya Like x Resonance - marcella.mp3",  duration: "3:40",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ5xb3RSzCXFzro6BR0bSdwajZmMswpjhE9A&s",
        background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ5xb3RSzCXFzro6BR0bSdwajZmMswpjhE9A&s",
    }, {
        title: " Sure Thing ", artist: "Miguel", src: "Miguel - Sure Thing (Official Video) - MiguelVEVO.mp3",  duration: "3:22",
        cover: "https://i.ytimg.com/vi/esKJ8BbauGk/maxresdefault.jpg",
        background: "https://i.ytimg.com/vi/esKJ8BbauGk/maxresdefault.jpg",
     }, {
        title: "Whatcha Say", artist: "Jason", src: "Jason Derulo - Whatcha Say [Official Music Video] - Jason Derulo.mp3",  duration: "3:43",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLbhJPJmLmjqpRzr7Qun3Y_qaL6Fxc5mq16Q&s",
        background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLbhJPJmLmjqpRzr7Qun3Y_qaL6Fxc5mq16Q&s",
     },{
        title: " CAN'T STOP THE FEELING", artist: "Justin Timberlake", src: "Justin Timberlake - CAN'T STOP THE FEELING! (from DreamWorks Animation's TROLLS) (Official Video) - justintimberlakeVEVO.mp3",  duration: "3:46",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUOF3fH8Ptz4DNOE42h3kmvT3LvDZGMZPLDg&s",
        background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUOF3fH8Ptz4DNOE42h3kmvT3LvDZGMZPLDg&s",
     }, {
        title: "Narvent - Memory Reboot", artist: "VØJ", src: "VØJ, Narvent - Memory Reboot (Sped Up  4K Music Video) - Narvent.mp3",  duration: "2:47",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe_kW62IAuW3s2dE9ehWDTEkp8v1hT8idUVA&s",
        background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe_kW62IAuW3s2dE9ehWDTEkp8v1hT8idUVA&s",
     }, {
        title: "#voyuitwaaien", artist: "latex fruit", src: "voyuitwaaien (SUPER slowed + reverb) - latex fruit.mp3",  duration: "2:00",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwi6RjObi8gfJfydASsTnhX00dttn8GpPBgQ&s",
        background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwi6RjObi8gfJfydASsTnhX00dttn8GpPBgQ&s",
     }, {
        title: "Death Is No More", artist: "NEDOSTUPNOSTЬ", src: "BLESSED MANE - Death Is No More - NEDOSTUPNOSTЬ.mp3",  duration: "2:19",
        cover: "https://i.ytimg.com/vi/pZQfInj_UNo/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGDggWyhyMA8=&rs=AOn4CLCkn4DSB4XN5oTyVWjKWjeXXeRg6g",
        background: "https://i.ytimg.com/vi/pZQfInj_UNo/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGDggWyhyMA8=&rs=AOn4CLCkn4DSB4XN5oTyVWjKWjeXXeRg6g",
     }, {
        title: " Montagem Mysterious", artist: "LXNGVX", src: "LXNGVX - Montagem Mysterious Game (Official Music) - LXNGVX.mp3",  duration: "1:43",
        cover: "https://i.scdn.co/image/ab67616d0000b273478d1f4434f354e244f6ec06",
        background: "https://i.scdn.co/image/ab67616d0000b273478d1f4434f354e244f6ec06",
     }, {
        title: "smezir_2 (Slowed)", artist: "ilyhiryu", src: "ilyhiryu - smezir_2 (Slowed) - void.mp3",  duration: "4:00",
        cover: "https://i.scdn.co/image/ab67616d0000b2733e0e5b15b6a6a0d054277043",
        background: "https://i.scdn.co/image/ab67616d0000b2733e0e5b15b6a6a0d054277043",
     }, {
        title: "Work ft. Drake ", artist: "Rihanna", src: "Rihanna - Work ft. Drake - LatinHype.mp3",  duration: "3:36",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9SOOYfgtqlZXS8Ga_hHGiAQLuseONC3wQ9A&s",
        background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9SOOYfgtqlZXS8Ga_hHGiAQLuseONC3wQ9A&s",
        
     },  {
        title: "Another Rhythm Records", artist: "Boy North", src: "Boy North - Was It The Wind That Stirred The Trees - Another Rhythm Records.mp3",  duration: "5:37",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW5Nzd-DC36sXaf1SJzg6W6ZZezV12bK5scA&s",
        background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW5Nzd-DC36sXaf1SJzg6W6ZZezV12bK5scA&s",
     },

    {
        title: "Interstellar ", artist:  "Hans Zimmer", src: "Interstellar Official Soundtrack  No Time For Caution – Hans Zimmer  WaterTower - WaterTower Music.mp3",  duration: "4:07",
        cover: "https://i.ytimg.com/vi/kpK4cDk2bRs/sddefault.jpg", 
        background: "https://i.ytimg.com/vi/kpK4cDk2bRs/sddefault.jpg",
     }, {
        title: "In For It - ", artist: "Tory Lanez", src: "In For It - Tory Lanez.mp3",  duration: "4:54",
        cover: "https://i.ytimg.com/vi/Amp86v4Nd8Q/maxresdefault.jpg",
        background: "https://i.ytimg.com/vi/Amp86v4Nd8Q/maxresdefault.jpg",
     },
    
    {
        title: "oh mi Angel",
        artist: "Bertha Tillman",
        src: "oh mi Angel.mp3",
        cover: "https://i.scdn.co/image/ab67616d0000b273ce3f7a5726537f3fd14f2188",
        background: "https://i.scdn.co/image/ab67616d0000b273ce3f7a5726537f3fd14f2188",
        duration: "2:18"
    },
    {
        title: "Travis Scott",
        artist: "travis",
        src: "travis.mp3",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpVgByNdbDntccUbO5tWmaVCCGVm_EPlCx8w&s",
        background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpVgByNdbDntccUbO5tWmaVCCGVm_EPlCx8w&s",
        duration: "4:12"
    },
    {
        title: "November South",
        artist: "Will Harrison",
        src: "Our Father’s Sins (Official Lyric Video) - November South.mp3",
        cover: "https://i.scdn.co/image/ab676161000051746c08d788686ad7b2f84d9800",
        background: "https://i.scdn.co/image/ab676161000051746c08d788686ad7b2f84d9800",
        duration: "3:16"
    },
    {
        title: " You’re Gonna Go Far ",
        artist: "Noah Kahan",
        src: "Noah Kahan - You’re Gonna Go Far (Official Lyric Video) - NoahKahanVEVO.mp3",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR_kKJbSMfVMVm873vbzqFqokVjkpEG5aHvA&s",
        background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR_kKJbSMfVMVm873vbzqFqokVjkpEG5aHvA&s",
       duration: "4:46"
    },
    {
        title: "Star Eater",
        artist: "Daniel Deluxe",
        src: "Star Eater - Daniel Deluxe.mp3 ",
        cover: "https://cdn-images.dzcdn.net/images/cover/80acb36159cb75f910d44155a0b5df98/500x500-000000-80-0-0.jpg", 
        background: "https://cdn-images.dzcdn.net/images/cover/80acb36159cb75f910d44155a0b5df98/500x500-000000-80-0-0.jpg",
       duration: "4:32"
    },
    {
        title: "VEKI VEKI",
        artist: "DJZRX",
        src: "VEKI VEKI (Slowed) - DJZRX.mp3 ",
        cover: "https://i.ytimg.com/vi/rpSe5mCdj4k/maxresdefault.jpg",
        background: "https://i.ytimg.com/vi/rpSe5mCdj4k/maxresdefault.jpg",
       duration: "1:34"
    },
    {
        title: "Long Distance ",
        artist: "BigBoa",
        src: "Long Distance - BigBoa.mp3 ",
        cover: "https://i.scdn.co/image/ab67616d0000b273c635af22a8b9296d4be223f4",
        background: "https://i.scdn.co/image/ab67616d0000b273c635af22a8b9296d4be223f4",
       duration: "1:57"
    },
    {
        title: "Welcome and Goodbye",
        artist: "Dream, Ivory",
        src: "Dream, Ivory - Welcome and Goodbye - David Dean Burkhart.mp3 ",
        cover: "https://cdn-images.dzcdn.net/images/cover/5f4f2cbf313f2f604783a7c608727b83/1900x1900-000000-80-0-0.jpg",
        background: "https://cdn-images.dzcdn.net/images/cover/5f4f2cbf313f2f604783a7c608727b83/1900x1900-000000-80-0-0.jpg",
       duration: "2:21"
    },
    {
        title: "Big Enough (feat. Alex Cameron)",
        artist: "Kirin J Callinan",
        src: "Kirin J Callinan - Big Enough (feat. Alex Cameron) - TERRIBLE RECORDS.mp3 ",
        cover: "https://i.ytimg.com/vi/sgNeF3eCp_g/mqdefault.jpg",
        background: "https://i.ytimg.com/vi/sgNeF3eCp_g/mqdefault.jpg",
       duration: "4:44"
    },
    {
        title: "magic - ",
        artist: "Medasin",
        src: "magic - Medasin.mp3 ",
        cover: "https://i1.sndcdn.com/artworks-fYc5QnZF88cM-0-t500x500.jpg",
        background: "https://i1.sndcdn.com/artworks-fYc5QnZF88cM-0-t500x500.jpg",
       duration: "5:57"
    },
    {
        title: " Let Go",
        artist: "Ark Patrol",
        src: "Ark Patrol - Let Go (feat. Veronika Redd) - MrSuicideSheep.mp3 ",
        cover: "https://i.scdn.co/image/ab67616d0000b27331e9a5c86d008b6422462d40",
        background: "https://i.scdn.co/image/ab67616d0000b27331e9a5c86d008b6422462d40",
       duration: "4:08"
    },
    {
        title: "[Official Visualiser]",
        artist: "BIOS - Zorrovian",
        src: "BIOS - Zorrovian [Official Visualiser] - Zorrovian.mp3",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0sgJ-M5rQ6krNGSSdXqcNX4Bi06AueyLphA&s.jpg",
        background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0sgJ-M5rQ6krNGSSdXqcNX4Bi06AueyLphA&s.jpg",
        duration: "5:13"
    },
    {
        title: "You're Perfect",
        artist: "Charly Black",
        src: "Charly Black - You're Perfect (Official Video) - CharlyBlackVEVO.mp3",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb2kl-qeWBsBcrmEDYPBNEdupunGScGh6ZEg&s.jpg",
        background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb2kl-qeWBsBcrmEDYPBNEdupunGScGh6ZEg&s.jpg",
        duration: "3:19"
    },
    {
        title: "Suffocation x Goth (mashup)",
        artist: "Jake Lee",
        src: "Suffocation x Goth (mashup) - Crystals Castles and Sidewalks and Skeletons - Just chill.mp3",
        cover: "https://i.ytimg.com/vi/Fw2fMqw9Q1w/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGCYgXih_MA8=&rs=AOn4CLBws2Dn6bi17ZA8PFDJHUDRU69JHQ.jpg",
        background: "https://i.ytimg.com/vi/Fw2fMqw9Q1w/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGCYgXih_MA8=&rs=AOn4CLBws2Dn6bi17ZA8PFDJHUDRU69JHQ.jpg",
        duration: "3:12"
    },
    {
        title: "The Mamas & The Papas",
        artist: "John Phillips",
        src: "The Mamas & The Papas - California Dreamin' - Folk Experience.mp3",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-vTNfq7qN-RHIrA_AfdnrIrhTTr6deVpkfw&s.jpg",
       background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-vTNfq7qN-RHIrA_AfdnrIrhTTr6deVpkfw&s.jpg",
        duration: "2:38"
    },
    {
        title: " Dancing Queen",
        artist: "ABBA",
        src: "ABBA - Dancing Queen (Official Music Video) - AbbaVEVO.mp3",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk9N29Tpr3oSSjJflNzbqlkQ4o9pNg6ygn1Q&s.jpg",
        background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk9N29Tpr3oSSjJflNzbqlkQ4o9pNg6ygn1Q&s.jpg",
        duration: "3:53"
    },
    {
        title: "From Eden",
        artist: "Hozier ",
        src: "Hozier - From Eden - Hozier.mp3",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJAXJUIi2ftGOmTWOMsI7eol0PZCzP5XtlRA&s.jpg",
        background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJAXJUIi2ftGOmTWOMsI7eol0PZCzP5XtlRA&s.jpg",
        duration: "3:43"
    },
    {
        title: " Michael Stein - Kids ",
        artist: "Kyle Dixon",
        src: "Kyle Dixon & Michael Stein - Kids - Intensive Drops Network.mp3",
        cover: "https://i.ytimg.com/vi/Ha2OcL_0gtM/sddefault.jpg",
        background: "https://i.ytimg.com/vi/Ha2OcL_0gtM/sddefault.jpg",
        duration: "2:38"
    },
    {
        title: "IRIS",
        artist: "PASTEL GHOST",
        src: "PASTEL GHOST _ IRIS - PASTEL GHOST.mp3",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb7nhKx6SjVOqB0my8ByW19Kr11T-CS0E7IA&s.jpg",
        background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb7nhKx6SjVOqB0my8ByW19Kr11T-CS0E7IA&s.jpg",
        duration: "3:38"
    },
    {
        title: "She Is",
        artist: " The Fray",
        src: "She Is - The Fray.mp3",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrxjTkqpE7Slpr78xS7iZBLhmtljj901VAug&s.jpg",
        background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrxjTkqpE7Slpr78xS7iZBLhmtljj901VAug&s.jpg",
        duration: "3:57"
    },
   
    {
        title: "Memory Reboot",
        artist: "VØJ",
        src: "VØJ, Narvent - Memory Reboot (4K Music Video) - Narvent.mp3",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpwocosrgaBuJEX92vPBC1cermuzyy-NyJ7g&s.jpg",
        background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpwocosrgaBuJEX92vPBC1cermuzyy-NyJ7g&s.jpg",
        duration: "3:57"
    },
    {
        title: " MORTEN - Never Be Alone",
        artist: "David Guetta",
        src: "David Guetta & MORTEN - Never Be Alone (feat Aloe Blacc) - David Guetta.mp3",
        cover: "https://m.media-amazon.com/images/I/41aMP8x0yjL._UXNaN_FMjpg_QL85_.jpg",
        background: "https://m.media-amazon.com/images/I/41aMP8x0yjL._UXNaN_FMjpg_QL85_.jpg",
        duration: "2:59"
    },
     {
        title: "You Are the Woman ",
        artist: "Firefall",
        src: "You Are the Woman - Firefall.mp3",
        cover: "https://i.ytimg.com/vi/lakFEx_9cT4/hqdefault.jpg",
        background: "https://i.ytimg.com/vi/lakFEx_9cT4/hqdefault.jpg",
        duration: "3:54"
    },
     {
        title: "Heads Will Roll",
        artist: "Yeah Yeahs",
        src: "Heads Will Roll (A-Trak Remix) - Yeah Yeah Yeahs.mp3",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhHH39tl3Y8c2KVt6P-hW3FgCJS57DlWHj_Q&s.jpg",
        background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhHH39tl3Y8c2KVt6P-hW3FgCJS57DlWHj_Q&s.jpg",
        duration: "6:24"
    },
     {
        title: "Girl You Loud (Lyrics)",
        artist: "Chris Brown",
        src: "Chris Brown - Girl You Loud (Lyrics) ft. Tyga - R&BHype.mp3",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK7R_o3bY0UaFXbCSeao2E9TJJs02SEgxVxw&s.jpg",
        background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK7R_o3bY0UaFXbCSeao2E9TJJs02SEgxVxw&s.jpg",
        duration: "3:34"
    },
     {
        title: "Sharon den Adel ",
        artist: "Armin van Buuren",
        src: "Armin van Buuren feat. Sharon den Adel - In And Out Of Love (Official Music Video) - Armada Music TV.mp3",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKtqNj5rR91l0fZ8BVCtDiYnS2lLRdJTsYMg&s.jpg",
        background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKtqNj5rR91l0fZ8BVCtDiYnS2lLRdJTsYMg&s.jpg",
        duration: "3:08"
    },
     {
        title: " Solitude",
        artist: "juno, blindheart ",
        src: "juno, blindheart - Solitude - Kurate Music.mp3",
        cover: "https://i.ytimg.com/vi/PlKB7yc_RwA/sddefault.jpg",
       background: "https://i.ytimg.com/vi/PlKB7yc_RwA/sddefault.jpg",
        duration: "2:32"
    },
     {
        title: "Dramamine",
        artist: "Flawed Mangoes",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM7Q98V-YGB6v2grlhLFelP8b08JKYKjTGDQ&s.jpg",
        src: "Flawed Mangoes - Dramamine (Visualizer) - Flawed Mangoes.mp3",
        background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM7Q98V-YGB6v2grlhLFelP8b08JKYKjTGDQ&s.jpg",
        duration: "3:26"
    },
     {
        title: "Ever Fallen In Love",
        artist: "Pete Yorn",
        src: "Pete Yorn - Ever Fallen In Love - Pete Yorn.mp3",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYViGpQZPmPoYQmG9W4bDvn1HmlLf5qcyPPQ&s.jpg",
    background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYViGpQZPmPoYQmG9W4bDvn1HmlLf5qcyPPQ&s.jpg",
        duration: "2:33"
    },
     {
        title: "U Weren't Here ",
        artist: "Cult Member",
        src: "U Weren't Here I Really Miss You - Cult Member.mp3",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQWHQhcRPdee9Bn_xC7lVwd0d5sT2da3IZrg&s.jpg",
        background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQWHQhcRPdee9Bn_xC7lVwd0d5sT2da3IZrg&s.jpg",
        duration: "2:41"    
    }
    ,
     {
        title: "Scott Street ",
        artist: "Phoebe Bridgers",
        src: "Phoebe Bridgers - Scott Street (Official Video) - Phoebe Bridgers.mp3",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbawIKSU7hkCNyYj4v1tI0y3Ds3MgE-zofjw&s.jpg",
        background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbawIKSU7hkCNyYj4v1tI0y3Ds3MgE-zofjw&s.jpg",
        duration: "5:07"
    },
     {
        title: " Me And You",
        artist: "Brenton Wood",
        src: "Me And You - Brenton Wood from the album Baby You Got It - The Bicycle Music Company.mp3",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdRFFmaFCMKby-hMoWxnboSjrvu6cE5gIjQA&s.jpg",
        background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdRFFmaFCMKby-hMoWxnboSjrvu6cE5gIjQA&s.jpg",
        duration: "3:00"
    },
     {
        title: " I'm God",
        artist: "Clams Casino",
        src: "I'm God - Clams Casino.mp3",
        cover: "https://i.ytimg.com/vi/1Hoi9eVWLW0/mqdefault.jpg",
        background: "https://i.ytimg.com/vi/1Hoi9eVWLW0/mqdefault.jpg",
        duration: "4:38"
    },
     {
        title: "Killer",
        artist: " Mareux",
        src: "Mareux - Killer (Official Lyric Video) - Mareux.mp3",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTirTxlVjdpf-gRFV9X3Nd7KnRWGbQVJb9sMg&s.jpg",
        background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTirTxlVjdpf-gRFV9X3Nd7KnRWGbQVJb9sMg&s.jpg",
        duration: "3:04"
    },
     {
        title: "Seve (Slow",
        artist: "Tez Cadey",
        src: "Seve (Slow Version) - Tez Cadey.mp3",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgTcUKqujdeBpsqNVEvMIYiV3GdqJzKsM9xw&s.jpg",
        background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgTcUKqujdeBpsqNVEvMIYiV3GdqJzKsM9xw&s.jpg",
        duration: "5:34"
    },
     {
        title: "Heat Waves",
        artist: "Glass Animals",
        src: "Glass Animals - Heat Waves (Official Video) - GlassAnimalsVEVO.mp3",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrJiENv-mRQNHg0vhUy_PLSwM0Rwdk2KPDvg&s.jpg",
        background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrJiENv-mRQNHg0vhUy_PLSwM0Rwdk2KPDvg&s.jpg",
        duration: "3:56"
    },
    {
        title: "Drive",
        artist: "The Cars",
        src: "The Cars - Drive (Official Music Video) - RHINO.mp3",
        cover: "https://i.ytimg.com/vi/xuZA6qiJVfU/sddefault.jpg",
        background: "https://i.ytimg.com/vi/xuZA6qiJVfU/sddefault.jpg",
        duration: "3:55"
    },
     {
        title: " Thinkin Bout U ",
        artist: "NVOY ",
        src: "NVOY - Thinkin Bout U (VIP Mix) - Selected..mp3",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzx0hUUFs0788JIJO0tyAXNMXSyupQL55iSg&s.jpg",
        background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzx0hUUFs0788JIJO0tyAXNMXSyupQL55iSg&s.jpg",
        duration: "4:16"
    },
     {
        title: "Before It's Too Late",
        artist: "Goo Goo Dolls",
        src: "Goo Goo Dolls - Before It's Too Late (Sam and Mikaela's Theme) [Official Music Video] - Goo Goo Dolls.mp3",
        cover: "https://i.ytimg.com/vi/SVl4_hxMDcA/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AH-BIAC4AOKAgwIABABGH8gWyggMA8=&rs=AOn4CLAOj_JqVlQty80Dwb6ec5Yj1vEn8g.jpg",
        background: "https://i.ytimg.com/vi/SVl4_hxMDcA/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AH-BIAC4AOKAgwIABABGH8gWyggMA8=&rs=AOn4CLAOj_JqVlQty80Dwb6ec5Yj1vEn8g.jpg",
        duration: "3:20"
    },
     {
        title: "Resonance",
        artist: "HOME",
        src: "HOME - Resonance - Electronic Gems.mp3",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkFvCQXRjFBVGRSlJr4jeKuxDSGbaeYATMaA&s.jpg",
        background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkFvCQXRjFBVGRSlJr4jeKuxDSGbaeYATMaA&s.jpg",
        duration: "3:33"
    },
     {
        title: "i feel lost ",
        artist: "Aaron Hibell",
        src: "Aaron Hibell - i feel lost [official audio] - Aaron Hibell.mp3",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHMd6LldQAZlZyc5UcTgOYDrTon_IJbK1R7w&s.jpg",
        background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHMd6LldQAZlZyc5UcTgOYDrTon_IJbK1R7w&s.jpg",
        duration: "3:28"
    },
     {
        title: "Stray.wav ",
        artist: "uNDOWN",
        src: "undown - Stray.wav - Kurate Music.mp3",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQCHIRd-PPPoaThB6_mh6ZxOToiGmNDBq7Pg&s.jpg",
        background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQCHIRd-PPPoaThB6_mh6ZxOToiGmNDBq7Pg&s.jpg",
        duration: "1:42"
    },
     {
        title: "If I Got U",
        artist: "Max Bering ",
        src: "Max Bering - If I Got U - Sirup Music.mp3",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxKM5zvWsvE9jYkqJxFKDvh0jPJ60gFBt_yw&s.jpg",
        background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxKM5zvWsvE9jYkqJxFKDvh0jPJ60gFBt_yw&s.jpg",
        duration: "2:43"
    },
     {
        title: "Sidewalks and Skeletons",
        artist: "Goth",
        src: "Goth (Slowed + Reverb) - Sidewalks and Skeletons.mp3",
        cover: "https://cdn-images.dzcdn.net/images/cover/234f0b5f7d0dc3417243ae16c371f770/500x500.jpg",
        background: "https://cdn-images.dzcdn.net/images/cover/234f0b5f7d0dc3417243ae16c371f770/500x500.jpg",
        duration: "4:13"
    },
     {
        title: "You look lonely",
        artist: "Music Listener",
        src: "You look lonely  i can fix that x Home   Resonance x Rain slowed to literal perfection + reverb - Music Listener.mp3",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzMXIHx5vztgBPPf0EilU5UHjBKt19lpufUQ&s.jpg",
        background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzMXIHx5vztgBPPf0EilU5UHjBKt19lpufUQ&s.jpg",
        duration: "5:18"
    },
    {
        title: "Ten Toes ",
        artist: "Angel Numbers",
        src: "Chris Brown - Angel Numbers _ Ten Toes (Official Video) - ChrisBrownVEVO.mp3",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSZdJ3iGz-WXdtxKYA5mcU29TKJjM51HKDsw&s.jpg",
        background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSZdJ3iGz-WXdtxKYA5mcU29TKJjM51HKDsw&s.jpg",
        duration: "5:08"
    },
     {
        title: "Baby Come Back ",
        artist: "Player ",
        src: "Player - Baby Come Back (Lyrics) - PHANTOM RECORDS.mp3",
        cover: "https://akamai.sscdn.co/uploadfile/letras/albuns/d/2/e/5/535031474381568.jpg",
        background: "https://akamai.sscdn.co/uploadfile/letras/albuns/d/2/e/5/535031474381568.jpg",
        duration: "4:14"
    },
     {
        title: "Party Anthem ",
        artist: "Monkeys",
        src: "No. 1 Party Anthem - Arctic Monkeys.mp3",
        cover: "https://i.ytimg.com/vi/mGUjVbsYG6E/maxresdefault.jpg",
        background: "https://i.ytimg.com/vi/mGUjVbsYG6E/maxresdefault.jpg",
        duration: "4:04"
    },
     {
        title: "Eyes Without A Face", artist: "Billy Idol", src: "Billy Idol - Eyes Without A Face - BillyIdolVEVO.mp3",  duration: "4:55",
        cover: "https://i.ytimg.com/vi/9OFpfTd0EIs/maxresdefault.jpg",
        background: "https://i.ytimg.com/vi/9OFpfTd0EIs/maxresdefault.jpg",
     },
     {
        title: " Too Many Nights", artist: "Metro Boomin", src: "Metro Boomin, Don Toliver, Future - Too Many Nights (Official Video) - Metro Boomin.mp3",  duration: "3:23",
        cover: "https://i.scdn.co/image/ab67616d0000b2738b1c1ed89416696a71a8ae4f",
        background: "https://i.scdn.co/image/ab67616d0000b2738b1c1ed89416696a71a8ae4f",
     },
     {
        title: "Walker Texas Ranger", artist: "The Tennessee Warblers", src: "Walker Texas Ranger - The Eyes of the Ranger - CAT Music Maker.mp3",  duration: "2:50",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHviggAnMHBy6tIW3IlSde1VObZKAPF63jXA&s",
        background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHviggAnMHBy6tIW3IlSde1VObZKAPF63jXA&s",
     },
     {
        title: "crystal castles", artist: "suffocation", src: "crystal castles - suffocation (sped up + reverb) - evangeline.mp3",  duration: "3:41",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo5edCODvaGWUDBcEdOjnuLSmhRaQ3aJQ2jg&s",
        background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo5edCODvaGWUDBcEdOjnuLSmhRaQ3aJQ2jg&s",
     },
     {
        title: "Safe and Sound ", artist: "Capital Cities", src: "Capital Cities - Safe and Sound (DiscoTech Remix) - Capital Cities.mp3",  duration: "3:44",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjwNdUrSIDcFst_3uE1p6a2vIMD8V8b4tUOw&s",
        background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjwNdUrSIDcFst_3uE1p6a2vIMD8V8b4tUOw&s",
     },
    {
        title: "Disclosur", artist: "Sam Smith", src: "Disclosure - Latch ft. Sam Smith - DisclosureVEVO.mp3",  duration: "4:17",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIFI71Ri6LEaTMiWfY_h8sNDKl1j93UkLIWw&s",
       background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIFI71Ri6LEaTMiWfY_h8sNDKl1j93UkLIWw&s",
     },
     {
        title: "Young Black & Rich", artist: "Melly Mike", src: "Melly Mike - Young Black & Rich (Official Music Video) - Melly Mike.mp3",  duration: "2:32",
        cover: "https://i.ytimg.com/vi/F3qWBh7jZZ0/maxresdefault.jpg",
        background: "https://i.ytimg.com/vi/F3qWBh7jZZ0/maxresdefault.jpg",
     },
     {
        title: " Distant Echoes", artist: "VXLLAIN", src: "VXLLAIN, VØJ, Narvent - Distant Echoes (4K Official Music Video) - VXLLAIN.mp3",  duration: "3:04",
        cover: "https://i.scdn.co/image/ab67616d0000b273ae71c97bfe3e39d1f63e7ebc",
        background: "https://i.scdn.co/image/ab67616d0000b273ae71c97bfe3e39d1f63e7ebc",
     },
     {
        title: "crier, sixnite", artist: "DJ Anemia", src: "DJ Anemia, crier, sixnite — archangel (Slowed) (Official Visualizer) - DJ Anemia.mp3",  duration: "3:07",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyuzgH9TQyc8Axw4E2_-vNCpcW0c9IJCvXKA&s",
        background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyuzgH9TQyc8Axw4E2_-vNCpcW0c9IJCvXKA&s",
     },
     {
        title: " Free-Russian Roulette", artist: "PRXD. TRXVEL", src: " Free-Russian Roulette (nothing,nowhere_guccihighwater type beat) - PRXD. TRXVEL.mp3",  duration: "2:45",
        cover: "https://i.ytimg.com/vi/cHy-rm3jVQw/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGGUgXihUMA8=&rs=AOn4CLCZamkod7qedzASAJqcpO_5khNtrw",
        background: "https://i.ytimg.com/vi/cHy-rm3jVQw/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGGUgXihUMA8=&rs=AOn4CLCZamkod7qedzASAJqcpO_5khNtrw",
     },
     {
        title: "& Rebūke", artist: "Anyma", src: " Anyma & Rebūke - Syren [Live from Afterlife Tomorrowland] - Afterlife.mp3",  duration: "2:17",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbrzBO8gvXQQf24Z7Hh-9Ld0DOwWOu9I0rtQ&s",
        background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbrzBO8gvXQQf24Z7Hh-9Ld0DOwWOu9I0rtQ&s",
     },
     {
        title: "Infinity ", artist: "Dj Tiesto", src: " Dj Tiesto   Infinity - diego zamora.mp3",  duration: "3:09",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOrR5RBZBu3YT6Tbqb3s0yixEcVALZSoPIjw&s",
        background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOrR5RBZBu3YT6Tbqb3s0yixEcVALZSoPIjw&s",
     },

     {
        title: "No Money ", artist: "Galantis", src: " Galantis - No Money (Official Video) - Galantis.mp3",  duration: "3:32",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFP2GuXTjH-2AvxslfmbfsoxohTM-Uicb5JQ&s",
        background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFP2GuXTjH-2AvxslfmbfsoxohTM-Uicb5JQ&s",
     },  {
        title: "Runaway ", artist: "Galantis", src: " Galantis - Runaway (U & I) (Official Video) - Galantis.mp3",  duration: "4:24",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCmSqgMgzlE45R8svVlZjV09bVKB9hp1fQOA&s",
        background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCmSqgMgzlE45R8svVlZjV09bVKB9hp1fQOA&s",
     }, {
        title: "childhood", artist: "Daniel Vogel", src: " childhood - daniel.mp3.mp3",  duration: "2:10",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFI-IivPoSWft_KNonN-lN8SBI6nWYqgLPzA&s",
       background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFI-IivPoSWft_KNonN-lN8SBI6nWYqgLPzA&s",
     }, {
        title: "Mine", artist: "Bazzi", src: " Bazzi – Mine (Lyrics) 🎵 - Pixl Networks.mp3",  duration: "2:15",
        cover: "https://www.billboard.com/wp-content/uploads/media/Bazzi-Mine-screenshot-billboard-1548.jpg",
        background: "https://www.billboard.com/wp-content/uploads/media/Bazzi-Mine-screenshot-billboard-1548.jpg",
     }, {
        title: "You look lonely", artist: "mikeeysmind", src: " Simpsonwave (You look lonely) - mikeeysmind.mp3",  duration: "2:43",
        cover: "https://i1.sndcdn.com/artworks-rqPypCPqZBuf-0-t500x500.jpg",
        background: "https://i1.sndcdn.com/artworks-rqPypCPqZBuf-0-t500x500.jpg",
     }, {
        title: "Carton – On& On ", artist: "Daniel Levi", src: " Carton – On& On (feat. Daniel Levi)[No Copyright Music][Music safe]-audio4K [FREE]♫ - audio 4k    For Creator 🎧.mp3",  duration: "2:29",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/6/60/Cartoon_-_On_%26_On.png/250px-Cartoon_-_On_%26_On.png",
       background: "https://upload.wikimedia.org/wikipedia/en/thumb/6/60/Cartoon_-_On_%26_On.png/250px-Cartoon_-_On_%26_On.png",
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
const coverImage = document.getElementById('cover-image');
const playlistEl = document.getElementById('playlist');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const body = document.body;



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
    coverImage.src = song.cover;
            
    audioPlayer.src = song.src;
    durationEl.textContent = song.duration;
    body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('${song.background}')`;
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

// sonido de button play 
document.getElementById('play-btn').addEventListener('click', function() {
    var audio = document.getElementById('myAudio');
    audio.currentTime = 0; // Reinicia el sonido si ya se estaba reproduciendo
    audio.play();});
     document.getElementById('menu').addEventListener('click', function() {
            var audio = document.getElementById('myAudio');
            audio.currentTime = 0; // Reinicia el sonido si ya se estaba reproduciendo
            audio.play();
            setTimeout(() => {
                // Cambia esta URL por la de tu sistema real
                window.location.href = "indexx.html";
            }, 2000);
        });

// ocultar lista de musica
document.addEventListener('DOMContentLoaded', function() {
    const toggleDiv = document.getElementById('toggleDiv');
    const showButton = document.getElementById('toggleButton');
    const countdownEl = document.getElementById('countdown');
    
    let countdown;
    let secondsLeft = 59;
    
    // Función para iniciar el contador de ocultado automático
    function startCountdown() {
        secondsLeft = 59;
        countdownEl.textContent = ` ${secondsLeft}`;
        
        clearInterval(countdown);
        
        countdown = setInterval(function() {
            secondsLeft--;
            countdownEl.textContent =  `${secondsLeft} `;
            
            if (secondsLeft <= 0) {
                clearInterval(countdown);
                hideDiv();
            }
        }, 1000);
    }
    
    // Función para ocultar el div
    function hideDiv() {
        toggleDiv.classList.remove('visible');
        toggleDiv.classList.add('hidden');
        showButton.disabled = false;
        countdownEl.textContent = '';
    }
    
    // Función para mostrar el div
    function showDiv() {
        toggleDiv.classList.remove('hidden');
        toggleDiv.classList.add('visible');
        showButton.disabled = true;
        
        // Iniciar el contador para ocultar automáticamente
        startCountdown();
    }
    
    // Configurar el evento click para el botón
    showButton.addEventListener('click', showDiv);
    
    // Iniciar el contador inicial
    startCountdown();
});


class OnlineStatus {
    constructor() {
        this.statusDot = document.getElementById('statusDot');
        this.statusText = document.getElementById('statusText');
        this.init();
    }

    init() {
        // Verificar estado inicial
        this.checkOnlineStatus();
        
        // Escuchar cambios en la conexión
      
        window.addEventListener('online', () => this.handleOnline());
        window.addEventListener('offline', () => this.handleOffline());
        
        // Verificar periódicamente (cada 30 segundos)
        setInterval(() => this.checkOnlineStatus(), 90000);
    }

    checkOnlineStatus() {
        if (navigator.onLine) {
            this.handleOnline();
        } else {
            this.handleOffline();
        }
    }

    handleOnline() {
        this.statusDot.className = 'status-doyo status-online';
        this.statusText.textContent = '';
        this.showNotification('', 'success');
    }

    handleOffline() {
        this.statusDot.className = 'status-doyo status-offline';
        this.statusText.textContent = 'No hay conexión';
        this.showNotification('', 'error');
    }

    showNotification(message, type) {
        // Crear notificación temporal
        const notification = document.createElement('div');
        notification.style.cssText = `
           
        `;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        // Remover después de 3 segundos
        setTimeout(() => {
            notification.style.opacity = '0';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
}

// Función para simular cambios de conexión (solo para pruebas)
function simulateConnectionChange() {
    if (navigator.onLine) {
        // Simular offline
        const offlineEvent = new Event('offline');
        window.dispatchEvent(offlineEvent);
    } else {
        // Simular online
        const onlineEvent = new Event('online');
        window.dispatchEvent(onlineEvent);
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    new OnlineStatus();
});




const connectionStatus = document.getElementById('connectionStatus');
        const onlineMessage = document.getElementById('onlineMessage');
        const statusIndicator = document.getElementById('status-indicator');
        const statusText = document.getElementById('status-text');
        
        // Botones de simulación
        const simulateOfflineBtn = document.getElementById('simulate-offline');
        const simulateOnlineBtn = document.getElementById('simulate-online');
        
        // Función para mostrar la barra de carga
        function showLoadingBar() {
            connectionStatus.classList.add('visible');
            onlineMessage.style.display = 'none';
            
            // Actualizar indicador de estado
            statusIndicator.className = 'status-indicator offline';
            statusText.textContent = 'Sin conexión a Internet';
            
        }
        
        // Función para mostrar el mensaje de reconexión
        function showOnlineMessage() {
            onlineMessage.style.display = 'block';
            
            // Ocultar después de 3 segundos
            setTimeout(() => {
                connectionStatus.classList.remove('visible');
                
                // Actualizar indicador de estado
                statusIndicator.className = 'status-indicator online';
                statusText.textContent = 'Conectado a Internet';
            }, 3000);
        }
        
        // Detectar cambios en la conexión real
        window.addEventListener('online', () => {
            showOnlineMessage();
        });
        
        window.addEventListener('offline', () => {
            showLoadingBar();
        });
        
        // Simulación manual
        simulateOfflineBtn.addEventListener('click', () => {
            showLoadingBar();
        });
        
        simulateOnlineBtn.addEventListener('click', () => {
            showOnlineMessage();
        });
        
        // Verificar estado inicial
        if (!navigator.onLine) {
            showLoadingBar();
        }
