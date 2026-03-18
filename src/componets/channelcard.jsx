import { Link } from "react-router-dom";

function ChannelCard({ channel }) {
  if (!channel?.id?.channelId) return null;

  return (
    <div className="channel-card">
      <Link to={`/channel/${channel.id.channelId}`}>
        <img src={channel.snippet.thumbnails.medium.url} alt={channel.snippet.title} />
        <p>{channel.snippet.title}</p>
      </Link>
    </div>
  );
}

export default ChannelCard;
