import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import "./App.css";

// const BASE = import.meta.env.BASE_URL;

// 🔊 All your songs with their own accent colors
const tracks = [
    {
        id: "new-way-forward",
        title: "The New Way Forward Theme",
        cover: "https://tmonatisa.github.io/apwa-music-site/img/the-new-way-forward.png",
        src: "https://tmonatisa.github.io/apwa-music-site/audio/the-new-way-forward.mp3",
        link: "https://linktr.ee/APWA_Official",
        accent: "#d29a00",
    },
    // },
    // {
    //     id: "the-great-william",
    //     title: "The Great William",
    //     cover: `${BASE}img/the-new-way-forward.png`,
    //     src: `${BASE}audio/the-new-way-forward.mp3`,
    //     link: "https://linktr.ee/APWA_Official",
    //     accent: "#4a90e2",
    // },
    // {
    //     id: "vusi-storm",
    //     title: "Vusi Storm",
    //     cover: `${BASE}img/the-new-way-forward.png`,
    //     src: `${BASE}audio/the-new-way-forward.mp3`,
    //     link: "https://linktr.ee/APWA_Official",
    //     accent: "#4a90e2",
    // },
    // {
    //     id: "wade-alucard",
    //     title: "Wade Alucard",
    //     cover: `${BASE}img/the-new-way-forward.png`,
    //     src: `${BASE}audio/the-new-way-forward.mp3`,
    //     link: "https://linktr.ee/APWA_Official",
    //     accent: "#4a90e2",
    // },
    // {
    //     id: "alex-desire",
    //     title: "Alex Desire",
    //     cover: `${BASE}img/the-new-way-forward.png`,
    //     src: `${BASE}audio/the-new-way-forward.mp3`,
    //     link: "https://linktr.ee/APWA_Official",
    //     accent: "#4a90e2",
    // },
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
    const navigate = useNavigate();
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

                <button className="back-button" onClick={() => navigate("/")}>
                    ← All tracks
                </button>
            </main>
        </div>
    );
}

function HomePage() {
    return (
        <div className="home">
            <h1 className="home-title">Tracks</h1>
            <div className="home-grid">
                {tracks.map((track) => (
                    <Link
                        key={track.id}
                        to={`/track/${track.id}`}
                        className="home-card-link"
                    >
                        <div className="home-card">
                            <img src={track.cover} alt={track.title} />
                            <div className="home-card-title">{track.title}</div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/track/:trackId" element={<TrackPage />} />
            {/* default to first track */}
            <Route path="*" element={<TrackPage />} />
        </Routes>
    );
}
