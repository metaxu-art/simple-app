import React from 'react';

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-6xl font-bold">Get in touch!</h1>
      <p className="mt-4 text-xl">
        Have a question or just want to say hi? Our inbox is always open.
        Tweet us at <a href="https://twitter.com/funnydevs" className="text-blue-600">@funnydevs</a> and let's start chatting!
      </p>
    </main>
  );
}