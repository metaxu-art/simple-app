import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      ...
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        ...
        <a
          className="group rounded-lg border-2 border-gray-300 px-5 py-4 transition-colors hover:bg-gray-100 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginRight: '2px', marginLeft: '2px' }}
        >
          {...}
        </a>

        ...

        <a
          href="https://chat.openai.com"
          className="group rounded-lg border-2 border-gray-300 px-5 py-4 transition-colors hover:bg-gray-100 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginRight: '2px' }}
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Ask AI{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  )
}
