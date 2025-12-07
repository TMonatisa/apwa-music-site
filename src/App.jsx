// App.jsx
import { Routes, Route, Navigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import "./App.css";
import logo from "../public/img/APWA_Full_Logo_Shadow_2025.png";

// 🔊 Tracks: note mp3 names are kept EXACTLY as you defined them
const tracks = [
    {
        id: "new-way-forward",
        title: "The New Way Forward Theme",
        cover:
            "https://tmonatisa.github.io/apwa-music-site/img/The_New_Way_Forward_WMIV.png",
        src:
            "https://tmonatisa.github.io/apwa-music-site/audio/the-new-way-forward.mp3",
        link: "https://linktr.ee/APWA_Official",
        accent: "#d29a00",
    },
    {
        id: "bmV3LXdheS1mb3J3YXJk", // base64 id, also fine
        title: "The New Way Forward Theme",
        cover:
            "https://tmonatisa.github.io/apwa-music-site/img/the-new-way-forward.png",
        src:
            "https://tmonatisa.github.io/apwa-music-site/audio/the-new-way-forward.mp3",
        link: "https://linktr.ee/APWA_Official",
        accent: "#d29a00",
    },
    // ...add the rest here, same pattern

    // --- A ---
    {
        id: "alex-desire",
        title: "Alex Desire",
        subTitle: "Desire the Fire",
        cover:
            "https://tmonatisa.github.io/apwa-music-site/img/Alex_WMIV.png",
        // 👇 keep the filename, just don't wrap it in quotes in the URL
        src:
            "https://tmonatisa.github.io/apwa-music-site/audio/Alex Desire - Desire the Fire.mp3",
        link: "https://linktr.ee/APWA_Official",
        accent: "#d29a00",
    },
    {
        id: "ananzi",
        title: "Ananzi",
        subTitle: "Mythological Hero.mp3",
        cover:
            "https://tmonatisa.github.io/apwa-music-site/img/Ananzi_WMIV.png",
        // TODO: replace ??? with your exact mp3 name
        src:
            "https://tmonatisa.github.io/apwa-music-site/audio/Ananzi - Mythological Hero.mp3",
        link: "https://linktr.ee/APWA_Official",
        accent: "#d29a00",
    },

    // --- C ---
    {
        id: "caleb-janssens",
        title: "Caleb Janssens",
        subTitle: "The Oncoming Storm",
        cover:
            "https://tmonatisa.github.io/apwa-music-site/img/Caleb_WMIV.png",
        // TODO: replace ??? with your exact mp3 name
        src:
            "https://tmonatisa.github.io/apwa-music-site/audio/Caleb Janssens - The Oncoming Storm.mp3",
        link: "https://linktr.ee/APWA_Official",
        accent: "#d29a00",
    },
    {
        id: "chris-k",
        title: "Chris K",
        subTitle: "The Golden Gift",
        cover:
            "https://tmonatisa.github.io/apwa-music-site/img/Chris_WMIV.png",
        // TODO: replace ??? with your exact mp3 name
        src:
            "https://tmonatisa.github.io/apwa-music-site/audio/Chris K - The Golden Gift.mp3",
        link: "https://linktr.ee/APWA_Official",
        accent: "#d29a00",
    },

    // --- D ---
    {
        id: "don-flamingo",
        title: "Don Flamingo",
        subTitle: "The Flamingo",
        cover:
            "https://tmonatisa.github.io/apwa-music-site/img/Don_WMIV.png",
        // TODO: replace ??? with your exact mp3 name
        src:
            "https://tmonatisa.github.io/apwa-music-site/audio/Don Flamingo - The Flamingo.mp3",
        link: "https://linktr.ee/APWA_Official",
        accent: "#d29a00",
    },

    // --- F ---
    {
        id: "faith",
        title: "Faith",
        subTitle: "Dancing with Faith",
        cover:
            "https://tmonatisa.github.io/apwa-music-site/img/Faith_WMIV.png",
        // TODO: replace ??? with your exact mp3 name
        src:
            "https://tmonatisa.github.io/apwa-music-site/audio/Faith - Dancing with Faith.mp3",
        link: "https://linktr.ee/APWA_Official",
        accent: "#d29a00",
    },

    // --- I ---
    {
        id: "immanuel-khoza",
        title: "Immanuel Khoza",
        subTitle: "King Khoza",
        cover:
            "https://tmonatisa.github.io/apwa-music-site/img/Imman_WMIV.png",
        // TODO: replace ??? with your exact mp3 name
        src:
            "https://tmonatisa.github.io/apwa-music-site/audio/Immanuel Khoza - King Khoza.mp3",
        link: "https://linktr.ee/APWA_Official",
        accent: "#d29a00",
    },

    // --- J ---
    {
        id: "jadi-jardel",
        title: "Jadi Jardel",
        subTitle: "El Elegido",
        cover:
            "https://tmonatisa.github.io/apwa-music-site/img/Jadi_WMIV.png",
        // TODO: replace ??? with your exact mp3 name
        src:
            "https://tmonatisa.github.io/apwa-music-site/audio/Jadi Jardel - El Elegido.mp3",
        link: "https://linktr.ee/APWA_Official",
        accent: "#d29a00",
    },
    {
        id: "johnny-b",
        title: "Johnny B.",
        subTitle: "The New Way Forward",
        cover:
            "https://tmonatisa.github.io/apwa-music-site/img/Johnny_WMIV.png",
        // TODO: replace ??? with your exact mp3 name
        src:
            "https://tmonatisa.github.io/apwa-music-site/audio/Johnny B. - The New Way Forward.mp3",
        link: "https://linktr.ee/APWA_Official",
        accent: "#d29a00",
    },
    {
        id: "jp-die-boer",
        title: "JP Die Boer",
        subTitle: "Hart van Staal",
        cover:
            "https://tmonatisa.github.io/apwa-music-site/img/JP_WMIV.png",
        // 👇 your exact mp3 name, unchanged
        src:
            "https://tmonatisa.github.io/apwa-music-site/audio/JP Die Boer - Hart van Staal.mp3",
        link: "https://linktr.ee/APWA_Official",
        accent: "#d29a00",
    },

    // --- L ---
    {
        id: "leon",
        title: "Leon",
        subTitle: "Die Boer Pad Voorentoe Theme",
        cover:
            "https://tmonatisa.github.io/apwa-music-site/img/Leon_WMIV.png",
        // TODO: replace ??? with your exact mp3 name
        src:
            "https://tmonatisa.github.io/apwa-music-site/audio/Die Boer Pad Voorentoe Theme.mp3",
        link: "https://linktr.ee/APWA_Official",
        accent: "#d29a00",
    },

    // --- M ---
    {
        id: "mohammed-the-law",
        title: 'Mohammed "The Law"',
        subTitle: "The Lawgiver",
        cover:
            "https://tmonatisa.github.io/apwa-music-site/img/Mohammed_WMIV.png",
        // TODO: replace ??? with your exact mp3 name
        src:
            "https://tmonatisa.github.io/apwa-music-site/audio/Mohammed The Law - The Lawgiver.mp3",
        link: "https://linktr.ee/APWA_Official",
        accent: "#d29a00",
    },

    // --- P ---
    {
        id: "prince-matthews",
        title: "Prince Matthews",
        subTitle: "The New Way Forward",
        cover:
            "https://tmonatisa.github.io/apwa-music-site/img/Prince_WMIV.png",
        // TODO: replace ??? with your exact mp3 name
        src:
            "https://tmonatisa.github.io/apwa-music-site/audio/Prince Matthews - The New Way Forward.mp3",
        link: "https://linktr.ee/APWA_Official",
        accent: "#d29a00",
    },

    // --- R ---
    {
        id: "rj-jansen-van",
        title: "RJ Jansen Van Rensburg",
        subTitle: "Man Van Die Plaas",
        cover:
            "https://tmonatisa.github.io/apwa-music-site/img/RJ_WMIV.png",
        // TODO: replace ??? with your exact mp3 name
        src:
            "https://tmonatisa.github.io/apwa-music-site/audio/RJ Jansen Van Rensburg - Man Van Die Plaas.mp3",
        link: "https://linktr.ee/APWA_Official",
        accent: "#d29a00",
    },
    {
        id: "ryan-cage",
        title: "Ryan Cage",
        subTitle: "Bulletproof",
        cover:
            "https://tmonatisa.github.io/apwa-music-site/img/Ryan_WMIV.png",
        // TODO: replace ??? with your exact mp3 name
        src:
            "https://tmonatisa.github.io/apwa-music-site/audio/Ryan Cage - Bulletproof.mp3",
        link: "https://linktr.ee/APWA_Official",
        accent: "#d29a00",
    },

    // --- S ---
    {
        id: "saam",
        title: "Saam",
        subTitle: "No Forgotten Sands",
        cover:
            "https://tmonatisa.github.io/apwa-music-site/img/SAAM_WMIV.png",
        // TODO: adjust to your exact file name if it differs
        src:
            "https://tmonatisa.github.io/apwa-music-site/audio/Saam - No Forgotten Sands.mp3",
        link: "https://linktr.ee/APWA_Official",
        accent: "#d29a00",
    },

    // --- T ---
    {
        id: "the-fighting-springbucks",
        title: "Ananzi & Ryan Cage",
        subTitle: "The Fighting Springbucks",
        cover:
            "https://tmonatisa.github.io/apwa-music-site/img/The_Fighting_Springbucks_WMIV.png",
        // TODO: replace ??? with your exact mp3 name
        src:
            "https://tmonatisa.github.io/apwa-music-site/audio/The Fighting Springbucks Theme.mp3",
        link: "https://linktr.ee/APWA_Official",
        accent: "#d29a00",
    },
    {
        id: "the-great-william",
        title: "The Great William",
        subTitle: "Just Find Him",
        cover:
            "https://tmonatisa.github.io/apwa-music-site/img/William_WMIV.png",
        // TODO: replace ??? with your exact mp3 name (if different)
        src:
            "https://tmonatisa.github.io/apwa-music-site/audio/The Great William - Just Find Him.mp3",
        link: "https://linktr.ee/APWA_Official",
        accent: "#d29a00",
    },
    {
        id: "thunder-hawk",
        title: "Thunder Hawk",
        subTitle: "Feel My Rage",
        cover:
            "https://tmonatisa.github.io/apwa-music-site/img/Thunder_WMIV.png",
        // TODO: replace ??? with your exact mp3 name
        src:
            "https://tmonatisa.github.io/apwa-music-site/audio/Thunder Hawk - Feel My Rage.mp3",
        link: "https://linktr.ee/APWA_Official",
        accent: "#d29a00",
    },
    {
        id: "tii",
        title: "Tii",
        subTitle: "Stand on Business",
        cover:
            "https://tmonatisa.github.io/apwa-music-site/img/Tii_WMIV.png",
        // TODO: replace ??? with your exact mp3 name
        src:
            "https://tmonatisa.github.io/apwa-music-site/audio/Stand on Business - Tii.mp3",
        link: "https://linktr.ee/APWA_Official",
        accent: "#d29a00",
    },

    // --- V ---
    {
        id: "vusi-storm",
        title: "Vusi Storm",
        subTitle: "Fury of the Storm",
        cover:
            "https://tmonatisa.github.io/apwa-music-site/img/Vusi_WMIV.png",
        // TODO: adjust if your exact file name differs
        src:
            "https://tmonatisa.github.io/apwa-music-site/audio/Vusi Storm - Fury of the Storm.mp3",
        link: "https://linktr.ee/APWA_Official",
        accent: "#d29a00",
    },

    // --- W ---
    {
        id: "wade-alucard",
        title: "Wade Alucard",
        subTitle: "DEXDMXNS PXRXDISE",
        cover:
            "https://tmonatisa.github.io/apwa-music-site/img/Wade_WMIV.png",
        // TODO: replace ??? with your exact mp3 name
        src:
            "https://tmonatisa.github.io/apwa-music-site/audio/Wade Alucard - DEXDMXNS PXRXDISE.mp3",
        link: "https://linktr.ee/APWA_Official",
        accent: "#d29a00",
    },
    {
        id: "wiese",
        title: "Wiese",
        subTitle: "The Goat Puncher",
        cover:
            "https://tmonatisa.github.io/apwa-music-site/img/WIESE_WMIV.png",
        // keeping the one you mentioned
        src:
            "https://tmonatisa.github.io/apwa-music-site/audio/Wiese - The Goat Puncher.mp3",
        link: "https://linktr.ee/APWA_Official",
        accent: "#d29a00",
    },


];

function LoadingScreen() {
    return (
        <div className="loading-screen">
            <img
                src={logo}
                alt="APWA Wrestling Entertainment"
                className="loading-logo"
            />
        </div>
    );
}

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
    const track = tracks.find((t) => t.id === trackId);

    // ❌ No fallback – only show data if the id matches a track
    if (!track) {
        return (
            <div className="page">
                <main className="card">
                    <h1>Track not found</h1>
                    <p>No track matches id: <code>{trackId}</code></p>
                </main>
            </div>
        );
    }

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

                <h1 className="title">{track.title}</h1>
                <p className="subtitle">{track.subTitle}</p>

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
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // how long to show the loading screen (ms)
        const timer = setTimeout(() => setIsLoading(false), 5000);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <LoadingScreen />;
    }

    return (
        <Routes>
            {/* Redirect root → a real track URL (so URL always has an id) */}
            <Route
                path="/"
                element={<Navigate to="/track/new-way-forward" replace />}
            />

            {/* Only this route actually renders TrackPage */}
            <Route path="/track/:trackId" element={<TrackPage />} />

            {/* Unknown routes also redirect to a valid id */}
            <Route
                path="*"
                element={<Navigate to="/track/new-way-forward" replace />}
            />
        </Routes>
    );
}

