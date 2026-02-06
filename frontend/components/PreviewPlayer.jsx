// export default function PreviewPlayer({ src }) {
//   return (
//     <div className="mt-6">
//       <h3 className="font-semibold mb-2">Preview</h3>
//       <video src={src} controls className="w-full rounded" />
//     </div>
//   );
// }


export default function PreviewPlayer({ src }) {
  if (!src) return null;

  return (
    <div className="my-4">
      <video src={src} controls className="rounded-lg shadow-md w-full max-w-xl" />
      <a
        href={src}
        download
        className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Download Video
      </a>
    </div>
  );
}
