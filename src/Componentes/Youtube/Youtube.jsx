import { useState } from "react";
import "./Youtube.css";
import "./YoutubeResponsividade.css";

const Youtube = () => {
  // 3 estados, um para cada vídeo
  const [showVideo1, setShowVideo1] = useState(false);
  const [showVideo2, setShowVideo2] = useState(false);
  const [showVideo3, setShowVideo3] = useState(false);

  return (
    <div className="caixa-video-1">
      <div className="caixa-iframe">
        {!showVideo1 ? (
          <img
            className="img-video"
            src="capa-Youtube-1.avif"
            alt="Capa do vídeo 1"
            onClick={() => setShowVideo1(true)}
          />
        ) : (
          <iframe
            className="iframe"
            id="yt-video-1"
            src="https://www.youtube.com/embed/lVhXaoX25AE?autoplay=1&rel=0&modestbranding=1&playsinline=1"
            title="YouTube video 1"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>

      <div className="caixa-iframe">
        {!showVideo2 ? (
          <img
            className="img-video"
            src="capa-Youtube-2.avif"
            alt="Capa do vídeo 2"
            onClick={() => setShowVideo2(true)}
          />
        ) : (
          <iframe
            className="iframe"
            id="yt-video-2"
            src="https://www.youtube.com/embed/lkdV6NxPOLc?start=22&autoplay=1&rel=0&modestbranding=1&playsinline=1"
            title="YouTube video 2"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>

      <div className="caixa-iframe">
        {!showVideo3 ? (
          <img
            className="img-video"
            src="capa-Youtube-3.avif"
            alt="Capa do vídeo 3"
            onClick={() => setShowVideo3(true)}
          />
        ) : (
          <iframe
            className="iframe"
            id="yt-video-3"
            src="https://www.youtube.com/embed/crDUx5suLm4"
            title="YouTube video 3"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>

      <img src="" alt="" />
    </div>
  );
};

export default Youtube;
