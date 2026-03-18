import { useState } from "react";

function App() {
  const [video, setVideo] = useState(
    "https://www.w3schools.com/html/mov_bbb.mp4"
  );

  const videos = [
    {
      title: "Big Buck Bunny",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      title: "Sample Video",
      url: "https://www.w3schools.com/html/movie.mp4",
    },
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>🎬 Modern Video Platform</h1>

      {/* Video Player */}
      <video width="700" controls src={video} />

      <h2>📺 Video List</h2>

      {/* Video List */}
      <div>
        {videos.map((v, index) => (
          <div
            key={index}
            style={{
              margin: "10px 0",
              cursor: "pointer",
              padding: "10px",
              border: "1px solid gray",
            }}
            onClick={() => setVideo(v.url)}
          >
            {v.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;