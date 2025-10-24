export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          The Perfect Employee,<br />Without the Cost of Hiring
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          AI-powered automations and chatbots tailored for small businesses.
          Reliable, affordable, and built to deliver measurable results.
        </p>
        <button className="bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors">
          Book a Free Discovery Call
        </button>
      </div>
    </section>
  );
}
