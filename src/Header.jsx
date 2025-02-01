import React, { useState, useRef, useEffect } from 'react';

function Welcome() {
  const tracks = [
    { id: 1, name: "Song 1", src: "/music/1.mp3" },
    { id: 2, name: "Song 2", src: "/music/2.mp3" },
    { id: 3, name: "Song 3", src: "/music/3.mp3" },
    { id: 4, name: "Song 4", src: "/music/4.mp3" },
    { id: 5, name: "Song 5", src: "/music/5.mp3" },
    { id: 6, name: "Song 6", src: "/music/6.mp3" },
    { id: 7, name: "Song 7", src: "/music/7.mp3" },
  ];

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const [showVideo2, setShowVideo2] = useState(false);
  const [videoFadeOut, setVideoFadeOut] = useState(false);

  const audioRef = useRef(new Audio(tracks[currentTrackIndex].src));
  const intervalRef = useRef(null);
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    const nextIndex = (currentTrackIndex + 1) % tracks.length;
    setCurrentTrackIndex(nextIndex);
  };

  const previousTrack = () => {
    const prevIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    setCurrentTrackIndex(prevIndex);
  };

  const updateProgress = () => {
    const currentTime = audioRef.current.currentTime;
    const duration = audioRef.current.duration;
    if (duration > 0) {
      const currentProgress = (currentTime / duration) * 100;
      setProgress(currentProgress);
    }

    if (currentTrackIndex === 3 && currentTime.toFixed(1) === "267.2") {
      setShowVideo(true);
      setShowVideo2(false);
      setVideoFadeOut(false);

      const videoDuration = 29000;
      setTimeout(() => {
        setShowVideo(false);
        setVideoFadeOut(false);
      }, videoDuration);
    }

    if (currentTrackIndex === 4 && currentTime.toFixed(1) === "1.0") {
      setShowVideo(false);
      setShowVideo2(true);
      setVideoFadeOut(false);

      const videoDuration = 46000;
      setTimeout(() => {
        setShowVideo2(false);
        setVideoFadeOut(false);
      }, videoDuration);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    audio.src = tracks[currentTrackIndex].src;
    if (isPlaying) {
      audio.play();
    }
  }, [currentTrackIndex, isPlaying]);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(updateProgress, 100);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPlaying]);

  const handleVideoTimeUpdate = (videoRef) => {
    const video = videoRef.current;
    if (video && video.duration - video.currentTime <= 1) {
      setVideoFadeOut(true);
    }
  };

  const handleVideoEnd = () => {
    setShowVideo(false);
    setShowVideo2(false);
    setVideoFadeOut(false);
  };

  return (
    <div className="Header">
      {showVideo && (
        <video
          ref={videoRef1}
          className={`background-video ${videoFadeOut ? "fade-out" : ""}`}
          autoPlay
          muted
          onEnded={handleVideoEnd}
          onTimeUpdate={() => handleVideoTimeUpdate(videoRef1)}
        >
          <source src="resources/Virgil.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      {showVideo2 && (
        <video
          ref={videoRef2}
          className={`background-video ${videoFadeOut ? "fade-out" : ""}`}
          autoPlay
          muted
          onEnded={handleVideoEnd}
          onTimeUpdate={() => handleVideoTimeUpdate(videoRef2)}
        >
          <source src="resources/ACE.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      <h1 className="font">Abderezak-Lamari</h1>

      <div className="Musicbox">
        <div className="controls">
          <button className="Player" onClick={previousTrack}>
            &lt;&lt;
          </button>
          <button className="Player" onClick={togglePlayPause}>
            {isPlaying ? "Pause" : "Play"}
          </button>
          <button className="Player" onClick={nextTrack}>
            &gt;&gt;
          </button>
          <input
            type="range"
            value={progress}
            max="100"
            className="ProgressBar"
            onChange={(e) => {
              const newProgress = e.target.value;
              setProgress(newProgress);
              audioRef.current.currentTime =
                (newProgress / 100) * audioRef.current.duration;
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Welcome;
