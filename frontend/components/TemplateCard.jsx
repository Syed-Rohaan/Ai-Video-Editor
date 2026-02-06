// export default function TemplateCard({ template, onClick }) {
//   return (
//     <div
//       onClick={onClick}
//       className="bg-white p-4 rounded shadow hover:shadow-lg cursor-pointer"
//     >
//       <div className="h-32 bg-gray-200 rounded mb-3 flex items-center justify-center">
//         <span className="text-gray-500">Preview</span>
//       </div>

//       <h3 className="font-semibold">{template.name}</h3>
//       <p className="text-sm text-gray-500">{template.duration}s</p>
//     </div>
//   );
// }


export default function TemplateCard({ template, onSelect }) {
  return (
    <div
      onClick={() => onSelect(template)}
      className="bg-white shadow-lg rounded-lg p-4 m-2 cursor-pointer hover:scale-105 transition-transform"
    >
      <h3 className="font-bold text-lg text-blue-600">{template.name}</h3>
      <p className="text-gray-600">{template.description}</p>
      <p className="text-sm text-gray-400 mt-1">Duration: {template.cut_duration}s</p>
    </div>
  );
}

