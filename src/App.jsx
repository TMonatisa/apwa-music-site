import { Routes, Route, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import "./App.css";

// 🔊 All your songs with their own accent colors
const IMG_BASE = "https://tmonatisa.github.io/apwa-music-site/img";
const AUDIO_BASE = "https://tmonatisa.github.io/apwa-music-site/audio";
const APWA_LINK = "https://linktr.ee/APWA_Official";

const tracks = [
    {
        slug: "alex-desire",
        title: "Alex Desire - Desire the Fire",
        cover: `${IMG_BASE}/Alex_WMIV.png`,
        src: `${AUDIO_BASE}/'Alex Desire - Desire the Fire.mp3'`,
        link: APWA_LINK,
        accent: "#d29a00", // special highlight
    },
    {
        slug: "ananzi",
        title: "Ananzi - Mythological Hero",
        cover: `${IMG_BASE}/Ananzi_WMIV.png`,
        src: `${AUDIO_BASE}/'Ananzi - Mythological Hero.mp3'`,
        link: APWA_LINK,
        accent: "#d29a00",
    },
    {
        slug: "caleb-janssens",
        title: "Caleb Janssens - The Oncoming Storm",
        cover: `${IMG_BASE}/Caleb_WMIV.png`,
        src: `${AUDIO_BASE}/'Caleb Janssens - The Oncoming Storm.mp3'`,
        link: APWA_LINK,
        accent: "#d29a00",
    },
    {
        slug: "chris-k",
        title: "Chris K - The Golden Gift",
        cover: `${IMG_BASE}/Chris_WMIV.png`,
        src: `${AUDIO_BASE}/'Chris K - The Golden Gift.mp3'`,
        link: APWA_LINK,
        accent: "#d29a00",
    },
    {
        slug: "don-flamingo",
        title: "Don Flamingo - The Flamingo",
        cover: `${IMG_BASE}/Don_WMIV.png`,
        src: `${AUDIO_BASE}/'Don Flamingo - The Flamingo.mp3'`,
        link: APWA_LINK,
        accent: "#d29a00",
    },
    {
        slug: "faith",
        title: "Faith - Dancing with Faith",
        cover: `${IMG_BASE}/Faith_WMIV.png`,
        src: `${AUDIO_BASE}/'Faith - Dancing with Faith.mp3'`,
        link: APWA_LINK,
        accent: "#d29a00",
    },
    {
        slug: "immanuel-khoza",
        title: "Immanuel Khoza - King Khoza",
        cover: `${IMG_BASE}/Imman_WMIV.png`,
        src: `${AUDIO_BASE}/'Immanuel Khoza - King Khoza.mp3'`,
        link: APWA_LINK,
        accent: "#d29a00",
    },
    {
        slug: "jadi-jardel",
        title: "Jadi Jardel - El Elegido",
        cover: `${IMG_BASE}/Jadi_WMIV.png`,
        src: `${AUDIO_BASE}/'Jadi Jardel - El Elegido.mp3'`,
        link: APWA_LINK,
        accent: "#d29a00",
    },
    {
        slug: "johnny-b",
        title: "Johnny B. - The New Way Forward",
        cover: `${IMG_BASE}/Johnny_WMIV.png`,
        src: `${AUDIO_BASE}/'Johnny B. - The New Way Forward.mp3'`,
        link: APWA_LINK,
        accent: "#d29a00",
    },
    {
        slug: "jp-die-boer",
        title: "JP Die Boer - Hart van Staal",
        cover: `${IMG_BASE}/JP_WMIV.png`,
        src: `${AUDIO_BASE}/'JP Die Boer - Hart van Staal.mp3'`,
        link: APWA_LINK,
        accent: "#d29a00",
    },
    {
        slug: "leon",
        title: "Die Boer Pad Voorentoe Theme",
        cover: `${IMG_BASE}/Leon_WMIV.png`,
        src: `${AUDIO_BASE}/'Die Boer Pad Voorentoe Theme.mp3'`,
        link: APWA_LINK,
        accent: "#d29a00",
    },
    {
        slug: "mohammed-the-law",
        title: 'Mohammed The Law - The Lawgiver',
        cover: `${IMG_BASE}/Mohammed_WMIV.png`,
        src: `${AUDIO_BASE}/'Mohammed The Law - The Lawgiver.mp3'`,
        link: APWA_LINK,
        accent: "#d29a00",
    },
    {
        slug: "prince-matthews",
        title: "Prince Matthews - The New Way Forward",
        cover: `${IMG_BASE}/Prince_WMIV.png`,
        src: `${AUDIO_BASE}/'Prince Matthews - The New Way Forward.mp3'`,
        link: APWA_LINK,
        accent: "#d29a00",
    },
    {
        slug: "rj-jansen-van",
        title: "RJ Jansen Van Rensburg - Man Van Die Plaas",
        cover: `${IMG_BASE}/RJ_WMIV.png`,
        src: `${AUDIO_BASE}/'RJ Jansen Van Rensburg - Man Van Die Plaas.mp3'`,
        link: APWA_LINK,
        accent: "#d29a00",
    },
    {
        slug: "ryan-cage",
        title: "Ryan Cage - Bulletproof",
        cover: `${IMG_BASE}/Ryan_WMIV.png`,
        src: `${AUDIO_BASE}/'Ryan Cage - Bulletproof.mp3'`,
        link: APWA_LINK,
        accent: "#d29a00",
    },
    {
        slug: "saam",
        title: "Saam - No Forgotten Sands",
        cover: `${IMG_BASE}/SAAM_WMIV.png`,
        src: `${AUDIO_BASE}/'Saam - No Forgotten Sands.mp3'`,
        link: APWA_LINK,
        accent: "#d29a00",
    },
    {
        slug: "the-fighting-springboks",
        title: "The Fighting Springbucks",
        cover: `${IMG_BASE}/The_Fighting_Springboks_WMIV.png`,
        src: `${AUDIO_BASE}/'The Fighting Springbucks Theme.mp3'`,
        link: APWA_LINK,
        accent: "#d29a00",
    },
    {
        slug: "the-new-way-forward",
        title: "The New Way Forward Theme",
        cover: `${IMG_BASE}/The_New_Way_Forward_WMIV.png`,
        src: `${AUDIO_BASE}/the-new-way-forward.mp3`,
        link: APWA_LINK,
        accent: "#d29a00",
    },
    {
        slug: "thunder-hawk",
        title: "Thunder Hawk - Feel My Rage",
        cover: `${IMG_BASE}/Thunder_WMIV.png`,
        src: `${AUDIO_BASE}/'Thunder Hawk - Feel My Rage.mp3'`,
        link: APWA_LINK,
        accent: "#d29a00",
    },
    {
        slug: "tii",
        title: "Stand on Business - Tii",
        cover: `${IMG_BASE}/Tii_WMIV.png`,
        src: `${AUDIO_BASE}/'Stand on Business - Tii.mp3'`,
        link: APWA_LINK,
        accent: "#d29a00",
    },
    {
        slug: "vusi-storm",
        title: "Vusi Storm - Fury of the Storm",
        cover: `${IMG_BASE}/Vusi_WMIV.png`,
        src: `${AUDIO_BASE}/'Vusi Storm - Fury of the Storm.mp3'`,
        link: APWA_LINK,
        accent: "#d29a00",
    },
    {
        slug: "wade-alucard",
        title: "Wade Alucard - DEXDMXNS PXRXDISE",
        cover: `${IMG_BASE}/Wade_WMIV.png`,
        src: `${AUDIO_BASE}/'Wade Alucard - DEXDMXNS PXRXDISE.mp3'`,
        link: APWA_LINK,
        accent: "#d29a00",
    },
    {
        slug: "wiese",
        title: "Wiese - The Goat Puncher",
        cover: `${IMG_BASE}/WIESE_WMIV.png`,
        src: `${AUDIO_BASE}/'Wiese - The Goat Puncher.mp3'`,
        link: APWA_LINK,
        accent: "#d29a00",
    },
    {
        slug: "william",
        title: "The Great William - Just Find Him",
        cover: `${IMG_BASE}/William_WMIV.png`,
        src: `${AUDIO_BASE}/'The Great William - Just Find Him.mp3'`,
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
