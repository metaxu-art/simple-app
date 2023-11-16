import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      { /* ... other code remains unchanged ... */ }

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        { /* ... other buttons remain unchanged ... */ }

        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-gray-300 px-5 py-4 transition-colors hover:bg-gray-100 hover:dark:bg-neutral-800/30 m-2"
          target="_blank"
          rel="noopener noreferrer"
          // 2px padding added around buttons
        >
          { /* ... inner content remains unchanged ... */ }
        </a>

        { /* ... other buttons remain unchanged ... */ }

        <a
          href="https://chat.openai.com"
          className="group rounded-lg border border-gray-300 px-5 py-4 transition-colors hover:bg-gray-100 hover:dark:bg-neutral-800/30 m-2"
          // Added consistent grey outline and 2px padding
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Ask AI{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
            // Text updated to 'Ask AI'
          </p>
        </a>
      </div>
    </main>
  )
}