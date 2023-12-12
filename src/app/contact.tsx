import Image from 'next/image'

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex">
        <p className="font-bold text-2xl mb-4">
          Phone: 123-456-7890
        </p>
        <p>
          Joke: Why don't scientists trust atoms? Because they make up everything!
        </p>
      </div>
    </main>
  )
}
