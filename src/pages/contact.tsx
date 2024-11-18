import React from 'react';

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-4">Let's Taco 'Bout It 🍎</h1>
      <p className="text-xl mb-8">
        Got a question or just want to say hi? We're all ears - and tacos! <br/>
        Slide into our DMs or drop us a tweet; we might share a taco recipe, or just taco 'bout life.
      </p>
      <a
        href="https://twitter.com/funnytacotalks"
        className="text-blue-500 hover:underline"
        target="_blank"
        rel="noreferrer"
      >
        Tweet @funnytacotalks
      </a>
    </main>
  );
}