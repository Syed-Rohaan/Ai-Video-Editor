export default function Timeline({ duration }) {
  return (
    <div className="bg-gray-100 p-2 rounded my-2">
      <p className="text-gray-700 font-medium">Cut Duration: {duration}s</p>
    </div>
  );
}
