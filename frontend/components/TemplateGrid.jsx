import { useEffect, useState } from "react";

export default function TemplateGrid() {
  const [templates, setTemplates] = useState([]); // MUST be array

  useEffect(() => {
    // Temporary dummy data (API later)
    setTemplates([
      {
        id: 1,
        title: "Motivation Reel",
        thumbnail: "https://via.placeholder.com/300"
      },
      {
        id: 2,
        title: "Tech Explainer",
        thumbnail: "https://via.placeholder.com/300"
      },
      {
        id: 3,
        title: "Podcast Clip",
        thumbnail: "https://via.placeholder.com/300"
      }
    ]);
  }, []);

  if (!Array.isArray(templates)) {
    return <p>Error loading templates</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {templates.map((template) => (
        <div
          key={template.id}
          className="bg-white rounded-xl shadow hover:shadow-lg transition p-4"
        >
          <img
            src={template.thumbnail}
            alt={template.title}
            className="rounded-lg mb-3"
          />
          <h2 className="text-lg font-semibold">{template.title}</h2>
          <button className="mt-3 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800">
            Use Template
          </button>
        </div>
      ))}
    </div>
  );
}
