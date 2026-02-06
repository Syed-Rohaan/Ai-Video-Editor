export default function Sidebar({ niche, setNiche }) {
  const niches = ["fitness", "tech", "motivation"];

  return (
    <div className="w-56 bg-white border-r p-4">
      <h2 className="font-bold mb-4">Niches</h2>

      {niches.map((n) => (
        <button
          key={n}
          onClick={() => setNiche(n)}
          className={`block w-full text-left px-3 py-2 rounded mb-2
            ${niche === n ? "bg-blue-600 text-white" : "hover:bg-gray-100"}`}
        >
          {n.charAt(0).toUpperCase() + n.slice(1)}
        </button>
      ))}
    </div>
  );
}
