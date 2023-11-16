import Image from 'next/image'

export default function Home() {
  // ...

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        // ...

        // ...

        // ...

        <a
          href="https://chat.openai.com"
          className="group rounded-lg border border-gray-300 px-5 py-4 transition-colors hover:bg-gray-100 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
          style={{padding: '2px'}} // Add inline padding
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

      // Rest of the code...
    </main>
  )
}
