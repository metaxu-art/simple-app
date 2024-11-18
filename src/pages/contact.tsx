import React from 'react';

const ContactPage = () => {
  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-4">Get in touch with us!</h1>
      <p className="text-xl mb-8">
        Got a problem so complex it feels like trying to solve a Rubik's Cube blindfolded? &#x1F9F2;
        Don't worry, we're here to help. Reach out and let's make some magic happen!
      </p>
      <p>
        Tweet us your predicaments at &nbsp;
        <a
          href="https://twitter.com/fakehandle"
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          &#64;fakehandle
        </a>
      </p>
    </main>
  );
}

export default ContactPage;