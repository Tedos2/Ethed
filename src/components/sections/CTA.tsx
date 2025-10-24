export default function CTA() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Build Your Perfect Employee?
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Book a free discovery call and get guaranteed value - even if we don't work together.
        </p>
        <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors">
          Schedule Your Call Now
        </button>
        <p className="text-sm text-gray-400 mt-4">
          No commitments. No sky-high retainers. Just tailored solutions at fair prices.
        </p>
      </div>
    </section>
  );
}
