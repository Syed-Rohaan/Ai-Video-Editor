// import { useState } from "react";
// import PreviewPlayer from "./PreviewPlayer";

// export default function VideoUploader({ video }) {
//   const [file, setFile] = useState(null);
//   const [processedVideo, setProcessedVideo] = useState(null);

//   const handleUpload = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const applyTemplate = () => {
//     // TEMP: backend will return processed video later
//     setProcessedVideo(URL.createObjectURL(file));
//   };

//   return (
//     <div className="mt-6">
//       <input type="file" accept="video/*" onChange={handleUpload} />

//       {file && (
//         <button
//           onClick={applyTemplate}
//           className="ml-4 px-4 py-2 bg-blue-600 text-white rounded"
//         >
//           Apply Template
//         </button>
//       )}

//       {processedVideo && <PreviewPlayer src={processedVideo} />}
//     </div>
//   );
// }


export default function VideoUploader({ onSelect }) {
  return (
    <div className="my-4">
      <label className="block text-gray-700 font-semibold mb-2">Upload Video</label>
      <input
        type="file"
        accept="video/*"
        onChange={(e) => onSelect(e.target.files[0])}
        className="border p-2 rounded w-full"
      />
    </div>
  );
}
