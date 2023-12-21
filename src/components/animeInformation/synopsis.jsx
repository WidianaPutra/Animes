export default function Synopsis({ response }) {
  return (
    <div className="synopsis p-2">
      <h3 className="text-white text-xl py-1">Synopsis: </h3>
      <p className="text-white">{response.data?.synopsis}</p>
    </div>
  );
}
