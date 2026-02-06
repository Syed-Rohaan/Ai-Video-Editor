// import { useState } from "react";
// import TemplateGrid from "../components/TemplateGrid";
// import VideoUploader from "../components/VideoUploader";

// export default function Dashboard() {
//   const [niche, setNiche] = useState("");
//   const [video, setVideo] = useState(null);

//   return (
//     <div className="p-6 max-w-6xl mx-auto">
//       <h1 className="text-3xl font-bold mb-4">AI Video Editor</h1>

//       {/* Niche Selection */}
//       <select
//         className="p-2 border rounded mb-6"
//         value={niche}
//         onChange={(e) => setNiche(e.target.value)}
//       >
//         <option value="">Select Niche</option>
//         <option value="fitness">Fitness</option>
//         <option value="tech">Tech</option>
//         <option value="motivation">Motivation</option>
//       </select>

//       {niche && <TemplateGrid niche={niche} onVideoSelect={setVideo} />}
//       {video && <VideoUploader video={video} />}
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { fetchTemplates } from "../services/api";
import TemplateCard from "../components/TemplateCard";

export default function Dashboard({ onSelect }) {
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    fetchTemplates().then(setTemplates);
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {templates.map((t) => (
        <TemplateCard key={t._id} template={t} onSelect={onSelect} />
      ))}
    </div>
  );
}
