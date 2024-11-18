import React from 'react';

const Contact = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Get In Touch!</h1>
      <p className="mb-8 text-center text-xl">
        Don't be a stranger, just say hello! <br />
        Feel free to drop us a message on our Twitter handle <a href="https://twitter.com/funnydev" className="text-blue-500">@funnydev</a>.
      </p>
    </div>
  );
};

export default Contact;