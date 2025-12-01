import { Routes, Route, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import "./App.css";

// 🔊 All your songs with their own accent colors
const IMG_BASE = "https://tmonatisa.github.io/apwa-music-site/img";
const AUDIO_BASE = "https://tmonatisa.github.io/apwa-music-site/audio";
const APWA_LINK = "https://linktr.ee/APWA_Official";

const tracks = [
    {
        id: "alex-desire",
        title: "Alex Desire - Desire the Fire",
        cover: `https://tmonatisa.github.io/apwa-music-site/img/Alex_WMIV.png`,
        src: `https://tmonatisa.github.io/apwa-music-site/audio/'Alex Desire - Desire the Fire.mp3'`,
        link: APWA_LINK,
        accent: "#d29a00", // special highlight
    },
    {
        id: "ananzi",
        title: "Ananzi",
        cover: `https://tmonatisa.github.io/apwa-music-site/img/Ananzi_WMIV.png`,
        src: `https://tmonatisa.github.io/apwa-music-site/audio/'Ananzi.mp3'`,
        link: APWA_LINK,
        accent: "#d29a00",
    },
    {
        id: "caleb-janssens",
        title: "Caleb Janssens",
        cover: `https://tmonatisa.github.io/apwa-music-site/img/Caleb_WMIV.png`,
        src: `https://tmonatisa.github.io/apwa-music-site/audio/'Caleb Janssens.mp3'`,
        link: APWA_LINK,
        accent: "#d29a00",
    },
    {
        id: "chris-k",
        title: "Chris K",
        cover: `https://tmonatisa.github.io/apwa-music-site/img/Chris_WMIV.png`,
        src: `https://tmonatisa.github.io/apwa-music-site/audio/'Chris K.mp3'`,
        link: APWA_LINK,
        accent: "#d29a00",
    },
    {
        id: "don-flamingo",
        title: "Don Flamingo",
        cover: `https://tmonatisa.github.io/apwa-music-site/img/Don_WMIV.png`,
        src: `https://tmonatisa.github.io/apwa-music-site/audio/'Don Flamingo.mp3'`,
        link: APWA_LINK,
        accent: "#d29a00",
    },
    {
        id: "faith",
        title: "Faith",
        cover: `https://tmonatisa.github.io/apwa-music-site/img/Faith_WMIV.png`,
        src: `https://tmonatisa.github.io/apwa-music-site/audio/'Faith.mp3'`,
        link: APWA_LINK,
        accent: "#d29a00",
    },
    {
        id: "immanuel-khoza",
        title: "Immanuel Khoza",
        cover: `https://tmonatisa.github.io/apwa-music-site/img/Imman_WMIV.png`,
        src: `https://tmonatisa.github.io/apwa-music-site/audio/'Immanuel Khoza.mp3'`,
        link: APWA_LINK,
        accent: "#d29a00",
    },
    {
        id: "jadi-jardel",
        title: "Jadi Jardel",
        cover: `https://tmonatisa.github.io/apwa-music-site/img/Jadi_WMIV.png`,
        src: `https://tmonatisa.github.io/apwa-music-site/audio/'Jadi Jardel.mp3'`,
        link: APWA_LINK,
        accent: "#d29a00",
    },
    {
        id: "johnny-b",
        title: "Johnny B.",
        cover: `https://tmonatisa.github.io/apwa-music-site/img/Johnny_WMIV.png`,
        src: `https://tmonatisa.github.io/apwa-music-site/audio/'Johnny B..mp3'`,
        link: APWA_LINK,
        accent: "#d29a00",
    },
    {
        id: "jp-die-boer",
        title: "JP Die Boer",
        cover: `https://tmonatisa.github.io/apwa-music-site/img/JP_WMIV.png`,
        src: `https://tmonatisa.github.io/apwa-music-site/audio/'JP Die Boer.mp3'`,
        link: APWA_LINK,
        accent: "#d29a00",
    },
    {
        id: "leon",
        title: "Leon",
        cover: `https://tmonatisa.github.io/apwa-music-site/img/Leon_WMIV.png`,
        src: `https://tmonatisa.github.io/apwa-music-site/audio/'Leon.mp3'`,
        link: APWA_LINK,
        accent: "#d29a00",
    },
    {
        id: "mohammed-the-law",
        title: 'Mohammed "The Law"',
        cover: `https://tmonatisa.github.io/apwa-music-site/img/Mohammed_WMIV.png`,
        src: `https://tmonatisa.github.io/apwa-music-site/audio/'Mohammed The Law.mp3'`,
        link: APWA_LINK,
        accent: "#d29a00",
    },
    {
        id: "prince-matthews",
        title: "Prince Matthews",
        cover: `https://tmonatisa.github.io/apwa-music-site/img/Prince_WMIV.png`,
        src: `https://tmonatisa.github.io/apwa-music-site/audio/'Prince Matthews.mp3'`,
        link: APWA_LINK,
        accent: "#d29a00",
    },
    {
        id: "rj-jansen-van",
        title: "RJ Jansen Van",
        cover: `https://tmonatisa.github.io/apwa-music-site/img/RJ_WMIV.png`,
        src: `https://tmonatisa.github.io/apwa-music-site/audio/'RJ Jansen Van.mp3'`,
        link: APWA_LINK,
        accent: "#d29a00",
    },
    {
        id: "ryan-cage",
        title: "Ryan Cage",
        cover: `https://tmonatisa.github.io/apwa-music-site/img/Ryan_WMIV.png`,
        src: `https://tmonatisa.github.io/apwa-music-site/audio/'Ryan Cage.mp3'`,
        link: APWA_LINK,
        accent: "#d29a00",
    },
    {
        id: "saam",
        title: "Saam - No Forgotten...",
        cover: `https://tmonatisa.github.io/apwa-music-site/img/SAAM_WMIV.png`,
        src: `https://tmonatisa.github.io/apwa-music-site/audio/'Saam - No Forgotten....mp3'`,
        link: APWA_LINK,
        accent: "#d29a00",
    },
    {
        id: "the-fighting-springboks",
        title: "The Fighting Springboks",
        cover: `https://tmonatisa.github.io/apwa-music-site/img/The_Fighting_Springboks_WMIV.png`,
        src: `https://tmonatisa.github.io/apwa-music-site/audio/'The Fighting Springboks.mp3'`,
        link: APWA_LINK,
        accent: "#d29a00",
    },
    {
        id: "the-new-way-forward",
        title: "The New Way Forward Theme",
        cover: `https://tmonatisa.github.io/apwa-music-site/img/The_New_Way_Forward_WMIV.png`,
        src: `https://tmonatisa.github.io/apwa-music-site/audio/'The New Way Forward Theme.mp3'`,
        link: APWA_LINK,
        accent: "#d29a00",
    },
    {
        id: "thunder-hawk",
        title: "Thunder Hawk",
        cover: `https://tmonatisa.github.io/apwa-music-site/img/Thunder_WMIV.png`,
        src: `https://tmonatisa.github.io/apwa-music-site/audio/'Thunder Hawk.mp3'`,
        link: APWA_LINK,
        accent: "#d29a00",
    },
    {
        id: "tii",
        title: "Tii",
        cover: `https://tmonatisa.github.io/apwa-music-site/img/Tii_WMIV.png`,
        src: `https://tmonatisa.github.io/apwa-music-site/audio/'Tii.mp3'`,
        link: APWA_LINK,
        accent: "#d29a00",
    },
    {
        id: "vusi-storm",
        title: "Vusi Storm",
        cover: `https://tmonatisa.github.io/apwa-music-site/img/Vusi_WMIV.png`,
        src: `https://tmonatisa.github.io/apwa-music-site/audio/'Vusi Storm.mp3'`,
        link: APWA_LINK,
        accent: "#d29a00",
    },
    {
        id: "wade-alucard",
        title: "Wade Alucard",
        cover: `https://tmonatisa.github.io/apwa-music-site/img/Wade_WMIV.png`,
        src: `https://tmonatisa.github.io/apwa-music-site/audio/'Wade Alucard.mp3'`,
        link: APWA_LINK,
        accent: "#d29a00",
    },
    {
        id: "wiese",
        title: "Wiese - The Goat",
        cover: `https://tmonatisa.github.io/apwa-music-site/img/WIESE_WMIV.png`,
        src: `https://tmonatisa.github.io/apwa-music-site/audio/'Wiese - The Goat.mp3'`,
        link: APWA_LINK,
        accent: "#d29a00",
    },
    {
        id: "william",
        title: "The Great William",
        cover: `https://tmonatisa.github.io/apwa-music-site/img/William_WMIV.png`,
        src: `https://tmonatisa.github.io/apwa-music-site/audio/'The Great William.mp3'`,
        link: APWA_LINK,
        accent: "#d29a00",
    },
];

function formatTime(time) {
    if (!time || Number.isNaN(time)) return "00:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    const m = minutes < 10 ? `0${minutes}` : minutes;
    const s = seconds < 10 ? `0${seconds}` : seconds;
    return `${m}:${s}`;
}

function TrackPage() {
    const { trackId } = useParams();
    const track = tracks.find((t) => t.id === trackId) || tracks[0]; // fallback

    const accent = track.accent || "#d29a00";

    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const handleLoaded = () => setDuration(audio.duration || 0);
        const handleTimeUpdate = () => setCurrentTime(audio.currentTime || 0);
        const handleEnded = () => setIsPlaying(false);

        audio.addEventListener("loadedmetadata", handleLoaded);
        audio.addEventListener("timeupdate", handleTimeUpdate);
        audio.addEventListener("ended", handleEnded);

        return () => {
            audio.removeEventListener("loadedmetadata", handleLoaded);
            audio.removeEventListener("timeupdate", handleTimeUpdate);
            audio.removeEventListener("ended", handleEnded);
        };
    }, [trackId]);

    const togglePlay = () => {
        const audio = audioRef.current;
        if (!audio) return;

        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying((p) => !p);
    };

    const handleSeek = (e) => {
        const audio = audioRef.current;
        if (!audio || !duration) return;

        const rect = e.currentTarget.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const percent = clickX / rect.width;
        const newTime = percent * duration;

        audio.currentTime = newTime;
        setCurrentTime(newTime);
    };

    const progress = duration ? (currentTime / duration) * 100 : 0;

    return (
        <div className="page" style={{ "--accent": accent }}>
            <div className="angle-bg" />

            <main className="card">
                <img src={track.cover} alt={track.title} className="cover" />

                <p className="subtitle">{track.title}</p>
                <h1 className="title">{track.title}</h1>

                <div className="player">
                    <button
                        className="play-button"
                        onClick={togglePlay}
                        aria-label={isPlaying ? "Pause" : "Play"}
                    >
                        {isPlaying ? "❚❚" : "▶"}
                    </button>

                    <div className="timeline">
                        <div className="progress" onClick={handleSeek}>
                            <div
                                className="progress-inner"
                                style={{ width: `${progress}%` }}
                            />
                        </div>

                        <div className="time-row">
                            <span className="time">{formatTime(currentTime)}</span>
                            <span className="time">{formatTime(duration)}</span>
                        </div>
                    </div>
                </div>

                <audio ref={audioRef} src={track.src} preload="metadata" />

                <div className="button-row">
                    <a className="download-button" href={track.src} download>
                        ⬇ Download
                    </a>

                    <a
                        className="link-button"
                        href={track.link}
                        target="_blank"
                        rel="noreferrer"
                    >
                        linktr.ee
                    </a>
                </div>
            </main>
        </div>
    );
}

export default function App() {
    return (
        <Routes>
            {/* default track if you visit just the root/hash */}
            <Route path="/" element={<TrackPage />} />
            {/* explicit per-track URLs if you want to use them */}
            <Route path="/track/:trackId" element={<TrackPage />} />
            {/* catch-all → first track */}
            <Route path="*" element={<TrackPage />} />
        </Routes>
    );
}
