import { useParams } from "react-router-dom";
import { fetchFromAPI } from "./utils/fetchfromapi";
import VideoCard from "../componets/videocard";
import Loader from "../loader";
import { useEffect, useState } from "react";

function SearchFeed() {
  const { searchTerm } = useParams();
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}&maxResults=12`)
      .then((data) => setVideos(data.items))
      .finally(() => setLoading(false));
  }, [searchTerm]);

  if (loading) return <Loader />;

  return (
    <div>
      <h2>Results for {searchTerm}</h2>
      {videos.map((video) => (
        <VideoCard key={video.id.videoId} video={video} />
      ))}
    </div>
  );
}

export default SearchFeed;
