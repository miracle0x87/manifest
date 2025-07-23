import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 text-center">
      <Head>
        <title>Manifest</title>
      </Head>
      <h1 className="text-5xl font-bold mb-6">Welcome to Manifest</h1>
      <p className="mb-4 max-w-xl text-lg">
        A Web3 Social Network for Believers. Publish your Proofs. Connect with those who Believe in you.
      </p>
      <Link href="/feed">
        <button className="px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition">
          Enter Manifest
        </button>
      </Link>
    </div>
  )
}
