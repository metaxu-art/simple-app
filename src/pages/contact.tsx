import React from 'react';

const Contact = () => (
  <div className="container mx-auto my-12 p-8 bg-white shadow-lg max-w-lg rounded">
    <h1 className="text-3xl mb-2">Don't be shy, say hi! 😄</h1>
    <p className="text-lg">
      We love to chat! Whether you've got a question, an idea, or just want to say hello, drop us a line.
    </p>
    <a href="https://twitter.com/NotReallyTwitterHandle" className="inline-block mt-4 px-6 py-2 text-white bg-blue-500 hover:bg-blue-700 rounded">
      Tweet @NotReallyTwitterHandle
    </a>
  </div>
);

export default Contact;