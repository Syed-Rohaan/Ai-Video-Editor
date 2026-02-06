// import { useState } from "react";
// import Sidebar from "../components/Sidebar";
// import TemplateGrid from "../components/TemplateGrid";
// import VideoPanel from "../components/VideoPanel";

// export default function Editor() {
//   const [niche, setNiche] = useState("fitness");
//   const [selectedTemplate, setSelectedTemplate] = useState(null);

//   return (
//     <div className="h-screen flex bg-gray-100">
//       <Sidebar niche={niche} setNiche={setNiche} />

//       <div className="flex-1 p-6 overflow-y-auto">
//         <h1 className="text-2xl font-bold mb-4">
//           Templates · {niche.toUpperCase()}
//         </h1>

//         <TemplateGrid
//           niche={niche}
//           onSelectTemplate={setSelectedTemplate}
//         />
//       </div>

//       <VideoPanel template={selectedTemplate} />
//     </div>
//   );
// }


import { useState } from "react";
import VideoUploader from "../components/VideoUploader";
import PreviewPlayer from "../components/PreviewPlayer";
import { processVideo, getVideoURL } from "../services/api";
import Timeline from "../components/TimeLine";

export default function Editor({ template }) {
  const [video, setVideo] = useState(null);
  const [output, setOutput] = useState(null);
  const [status, setStatus] = useState("");

  async function handleProcess() {
    if (!video) return alert("Please upload a video first");

    setStatus("Processing...");
    const fd = new FormData();
    fd.append("video", video);
    fd.append("cut_duration", template.cut_duration);
    fd.append("text", template.text);
    fd.append("text_position", template.text_position);

    try {
      const res = await processVideo(fd);
      setStatus("Video processed! Check download link below.");
      // For production, implement polling for real output filename
      // For now, mock preview using backend static output folder
    } catch (err) {
      setStatus("Processing failed. Try again.");
    }
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">{template.name}</h2>
      <p className="mb-2 text-gray-700">{template.description}</p>

      <Timeline duration={template.cut_duration} />
      <VideoUploader onSelect={setVideo} />

      <button
        onClick={handleProcess}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
      >
        Generate Video
      </button>

      <p className="my-2 text-gray-700">{status}</p>
      <PreviewPlayer src={output && getVideoURL(output)} />
    </div>
  );
}
