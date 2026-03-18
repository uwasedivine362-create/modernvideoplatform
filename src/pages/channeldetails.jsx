import { useParams } from "react-router-dom";

function ChannelDetails() {
  const { id } = useParams();

  return (
    <div>
      <h2>Channel ID: {id}</h2>
    </div>
  );
}

export default ChannelDetails;