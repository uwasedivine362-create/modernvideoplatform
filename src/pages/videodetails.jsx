import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";

function VideoDetails() {
  const { id } = useParams();

  return (
    <div>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${id}`}
        controls
        width="100%"
      />
    </div>
  );
}

export default VideoDetails;