import { Link } from "react-router-dom";
import SearchBar from "../../searchbar";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <h2>YouTube</h2>
      </Link>
      <SearchBar />
    </div>
  );
}

export default Navbar;
