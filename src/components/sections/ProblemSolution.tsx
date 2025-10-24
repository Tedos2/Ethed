export default function ProblemSolution() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Built for Business Owners Who Can't Afford to Hire
        </h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">The Challenge</h3>
            <ul className="space-y-3 text-gray-700">
              <li>• Need help to grow but can't afford staff</li>
              <li>• High salary and training costs</li>
              <li>• Inconsistent performance</li>
              <li>• Management overhead</li>
            </ul>
          </div>
          <div className="bg-black text-white p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Our Solution</h3>
            <ul className="space-y-3">
              <li>• AI agents that work 24/7</li>
              <li>• Fraction of the cost of hiring</li>
              <li>• Perfect consistency</li>
              <li>• Built-in KPI tracking</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
