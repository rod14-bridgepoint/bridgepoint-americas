export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">

      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-serif text-blue-900">
              BridgePoint
            </h1>
            <p className="tracking-[0.4em] text-amber-600 text-sm">
              AMERICAS
            </p>
          </div>

          #contact
            Get In Touch
          </a>
        </div>
      </nav>

      <section className="bg-gradient-to-r from-blue-950 to-blue-800 text-white py-28">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-6xl font-serif max-w-4xl">
            Your Strategic Partner for Growth Across the Americas
          </h1>

          <p className="mt-8 text-xl max-w-3xl">
            BridgePoint Americas provides strategic representation
            and business development services for companies seeking
            to establish and expand their presence across the
            Caribbean, Central America and South America.
          </p>

          <div className="mt-10 flex gap-4">
            #contact
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <section className="bg-blue-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">

          <div>
            <h3 className="text-4xl text-amber-500 font-bold">40+</h3>
            <p>
              Countries covered throughout the Caribbean,
              Central America, and South America.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              Trusted Partner
            </h3>
            <p>
              Long-term relationships built on integrity,
              discretion, and results.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              Market Growth
            </h3>
            <p>
              Helping companies unlock new opportunities
              across emerging markets.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              Local Expertise
            </h3>
            <p>
              Regional knowledge and business networks that
              accelerate market entry.
            </p>
          </div>

        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-serif text-blue-900 mb-12">
            Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="p-8 rounded-2xl shadow-lg">
              <h3 className="font-semibold text-xl mb-4">
                Market Representation
              </h3>
              <p>
                Acting as your eyes and ears on the ground,
                representing your company with professionalism
                and integrity.
              </p>
            </div>

            <div className="p-8 rounded-2xl shadow-lg">
              <h3 className="font-semibold text-xl mb-4">
                Business Development
              </h3>
              <p>
                Developing opportunities, partnerships,
                distributors, and strategic relationships.
              </p>
            </div>

            <div className="p-8 rounded-2xl shadow-lg">
              <h3 className="font-semibold text-xl mb-4">
                Regional Expansion
              </h3>
              <p>
                Supporting sustainable growth throughout the
                Caribbean, Central America, and South America.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="bg-slate-100 py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-serif text-blue-900 mb-8">
            About The Founder
          </h2>

          <p className="text-lg leading-8 max-w-4xl">
            BridgePoint Americas was founded to help
            international companies establish meaningful
            commercial relationships throughout the region.
            Through local insight, trusted connections,
            and hands-on business development support,
            we help companies convert opportunity into growth.
          </p>

        </div>
      </section>

      <section id="contact" className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-serif text-blue-900 mb-10">
            Contact Us
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            <div>
              <p className="mb-4">
                Ready to expand across the Americas?
              </p>

              <p>
                Email:
                bridgepointamericas@gmail.com
              </p>

              <p>
                Location:
                Doral, Florida, USA
              </p>
            </div>

            <form className="space-y-4">
              <input
                className="w-full border p-3 rounded-lg"
                placeholder="Name"
              />
              <input
                className="w-full border p-3 rounded-lg"
                placeholder="Company"
              />
              <input
                className="w-full border p-3 rounded-lg"
                placeholder="Email"
              />
              <textarea
                rows="5"
                className="w-full border p-3 rounded-lg"
                placeholder="Message"
              />
              <button
                className="bg-amber-500 text-white px-6 py-3 rounded-xl"
              >
                Send Message
              </button>
            </form>

          </div>

        </div>
      </section>

      <footer className="bg-blue-950 text-white py-6 text-center">
        © 2026 BridgePoint Americas
      </footer>

    </div>
  );
}
