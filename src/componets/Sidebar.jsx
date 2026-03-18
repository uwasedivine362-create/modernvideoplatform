const categories = [
  "Coding",
  "Music",
  "Gaming",
  "News",
  "Live",
  "Sport",
  "Education",
];

function Sidebar({ selectedCategory, setSelectedCategory }) {
  return (
    <div className="sidebar">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setSelectedCategory(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default Sidebar;