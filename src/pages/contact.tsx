import React from 'react'

export default function Contact() {
  return (
    <main className="flex h-screen items-center justify-center text-center p-4">
      <div>
        <h1 className="text-4xl font-bold mb-4">Get in Touch!</h1>
        <p>Our inbox is always open. For any inquiries, suggestions, or just to say hi, don't hesitate to reach out to us. We might not be psychics, but we'd love to hear your thoughts!</p>
        <a href="https://twitter.com/FakeTwitterHandle" target="_blank" rel="noopener noreferrer" className="inline-block mt-8 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">Tweet Us @FakeTwitterHandle</a>
      </div>
    </main>
  )
}
