import { NextPage } from 'next';

const Contact: NextPage = () => (
  <main className="flex min-h-screen flex-col items-center justify-center p-24">
    <h1 className="text-5xl font-bold">Contact Dr. Whatnot!</h1>
    <p className="mt-4 text-xl">Do you have any bizarre questions, ideas, or just need to chat about quantum unicorns? Drop a message to the one and only <strong>Dr. Whatnot</strong> at <a href="mailto:dr.whatnot@imaginary.io" className="text-blue-600 hover:underline">dr.whatnot@imaginary.io</a>.</p>
  </main>
);

export default Contact;