export default function CreateProof() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-2xl font-bold mb-4">Create a new Proof</h1>
      <textarea
        placeholder="What do you Believe in?"
        className="w-full h-40 p-4 bg-gray-900 text-white border border-gray-700 rounded-lg"
      />
      <button className="mt-4 px-6 py-2 bg-white text-black rounded hover:bg-gray-200 transition">Publish</button>
    </div>
  )
}
