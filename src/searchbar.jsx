import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (search) {
      navigate(`/search/${search}`);
      setSearch("");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search videos"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;