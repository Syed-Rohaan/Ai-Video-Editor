import { useState } from "react";
import Dashboard from "../pages/Dashboard";
import Editor from "../pages/Editor";


export default function App() {
  const [template, setTemplate] = useState(null);

  return (
    <div className="bg-gray-50 min-h-screen">
      {template ? (
        <Editor template={template} />
      ) : (
        <Dashboard onSelect={setTemplate} />
      )}
    </div>
  );
}
