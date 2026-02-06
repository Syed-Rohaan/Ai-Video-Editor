import { useState } from "react";

export default function VideoPanel({ template }) {
  const [video, setVideo] = useState(null);

  return (
    <div className="w-80 bg-white border-l p-4">
      <h2 className="font-bold mb-3">Editor</h2>

      {!template && (
        <p className="text-sm text-gray-500">
          Select a template to start
        </p>
      )}

      {template && (
        <>
          <p className="text-sm mb-2">
            Template: <strong>{template.name}</strong>
          </p>

          <input
            type="file"
            accept="video/*"
            onChange={(e) =>
              setVideo(URL.createObjectURL(e.target.files[0]))
            }
          />

          {video && (
            <video
              src={video}
              controls
              className="mt-4 rounded w-full"
            />
          )}

          <button
            className="mt-4 w-full bg-blue-600 text-white py-2 rounded"
          >
            Apply Template
          </button>
        </>
      )}
    </div>
  );
}
