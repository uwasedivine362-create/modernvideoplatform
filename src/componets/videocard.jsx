import { Link } from "react-router-dom";

function VideoCard({ video }) {
  if (!video?.id?.videoId) return null;

  return (
    <div className="video-card">
      <Link to={`/video/${video.id.videoId}`}>
        <img src={video.snippet.thumbnails.medium.url} />
      </Link>

      <Link to={`/video/${video.id.videoId}`}>
        <h4>{video.snippet.title}</h4>
      </Link>

      <Link to={`/channel/${video.snippet.channelId}`}>
        <p>{video.snippet.channelTitle}</p>
      </Link>
    </div>
  );
}

export default VideoCard;