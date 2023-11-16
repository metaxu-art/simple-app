import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        {/* ... other elements ... */}
      </div>

      {/* ... other elements ... */}

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        {/* Link Buttons except for 'Ask AI' */}
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border-2 border-gray-300 px-5 py-4 m-1 transition-colors hover:bg-gray-100 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* ... contents ... */}
        </a>
        {/* ... other link buttons ... */}

        {/* Updated 'Ask AI' link button */}
        <a
          href="https://chat.openai.com"
          className="group rounded-lg border-2 border-gray-300 px-5 py-4 m-1 transition-colors hover:bg-gray-100 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Ask AI{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Navigate to 'chat.openai.com' and explore the possibilities with AI.
          </p>
        </a>
      </div>
    </main>
  )
}
