import React, { useState, useRef, useEffect } from "react";

const VideoIntro = ({ onVideoPause }) => {
  const videoRef = useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isVideoLoading, setIsVideoLoading] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          setIsVideoLoading(false);
        });
      }

      const handlePlaying = () => setIsVideoLoading(false);

      const handleTimeUpdate = () => {
        if (video.currentTime >= 8 || video.ended) {
          video.pause();
          setIsVideoPlaying(false);
          setIsVideoWaitBgViewed(true);
          onVideoPause();
        }
      };

      const handleError = () => {
        setIsVideoLoading(false);
        setTimeout(() => {
          setIsVideoPlaying(false);
          onVideoPause();
        }, 4000);
      };

      video.addEventListener("playing", handlePlaying);
      video.addEventListener("timeupdate", handleTimeUpdate);
      video.addEventListener("error", handleError);
      video.addEventListener("ended", handleTimeUpdate);

      const fallbackTimer = setTimeout(() => {
        if (isVideoPlaying) {
          setIsVideoPlaying(false);
          onVideoPause();
        }
      }, 8000);

      return () => {
        video.removeEventListener("playing", handlePlaying);
        video.removeEventListener("timeupdate", handleTimeUpdate);
        video.removeEventListener("error", handleError);
        video.removeEventListener("ended", handleTimeUpdate);
        clearTimeout(fallbackTimer);
      };
    }
  }, [onVideoPause, isVideoPlaying]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            !isVideoLoading && isVideoPlaying ? "opacity-100" : "opacity-0"
          }`}
          muted
          playsInline
          autoPlay
          style={{ objectPosition: "center" }}
          poster="/intro.png"
        >
          <source src="/intro.mp4" type="video/mp4" />
        </video>

        {isVideoLoading && (
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 transition-opacity duration-500 opacity-100">
            <div className="relative w-full h-full flex items-center justify-center z-10">
              <div className="text-center text-white p-4 md:p-8 max-w-md mx-auto">
                <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 md:mb-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <div className="text-4xl md:text-6xl">👋</div>
                </div>
                <h2 className="text-xl md:text-3xl font-bold mb-2 md:mb-4 animate-pulse px-2">
                  Добро пожаловать в Milky Dreams
                </h2>
                <p className="text-sm md:text-lg opacity-80 px-4">
                  Телефон включается...
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoIntro;
