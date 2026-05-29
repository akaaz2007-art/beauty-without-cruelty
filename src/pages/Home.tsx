import { useState } from "react";
import { FaInstagram } from "react-icons/fa";

export default function BeautyWithoutCrueltyWebsite() {
  const crueltyFree = [
    'NYX',
    'ELF',
    'Tarte',
    'Garnier',
    'The Ordinary',
    'The Body Shop',
    'Too Faced'
  ];

  const notCrueltyFree = [
    "L'Oreal",
    'Clinique',
    'Maybelline',
    'M.A.C',
    'Benefit'
  ];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [count, setCount] = useState(1284);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setSubmitted(true);
    setCount((c) => c + 1);
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <nav className="sticky top-0 z-50 bg-white shadow-md px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Beauty Without Cruelty</h1>
        <div className="flex gap-4 text-sm md:text-base items-center">
          <a href="#mission" className="hover:underline">Mission</a>
          <a href="#facts" className="hover:underline">Facts</a>
          <a href="#action" className="hover:underline">Take Action</a>
          <a href="#help" className="hover:underline">How You Can Help</a>
          <a href="#campaign" className="hover:underline">Campaign</a>
          <a href="#petition" className="hover:underline font-semibold">Sign the Petition</a>
          <a
            href="https://www.canva.com/design/DAHKPM-CEx0/NUIFBScpre7Xfv0f9lepAQ/view"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-gray-800 hover:text-pink-600 transition-colors"
          >
            <FaInstagram size={22} />
          </a>
        </div>
      </nav>

      <section className="px-6 py-20 text-center bg-gray-100">
        <h2 className="text-5xl font-extrabold mb-6">For those without a voice, for change through choice</h2>
        <p className="max-w-4xl mx-auto text-lg leading-8">
          Every year, hundreds of thousands of animals continue to suffer in cosmetic testing laboratories.
          Beauty Without Cruelty is committed to exposing the hidden cruelty behind cosmetic animal testing
          and promoting a future built on compassion instead of suffering.
        </p>
        <a
          href="#petition"
          className="mt-8 inline-block bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors"
        >
          Sign the Petition
        </a>
      </section>

      <section id="mission" className="px-6 py-16 max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
          <p className="leading-8 text-lg">
            The mission of Beauty Without Cruelty is to transform the beauty industry into something built
            off of compassion, not cruelty, by giving a voice to the animals who are silently suffering.
            Through awareness campaigns, advocacy, transparency, and education, we aim to end cosmetic
            testing on animals and encourage ethical consumer choices.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8">
          <h3 className="text-3xl font-bold mb-4">Our Goals</h3>
          <ul className="space-y-4 text-lg list-disc ml-6">
            <li>End cosmetic animal testing</li>
            <li>Promote cruelty-free brands</li>
            <li>Spread public awareness</li>
            <li>Advocate for industry reform</li>
            <li>Support New Approach Methodologies (NAMs)</li>
          </ul>
        </div>
      </section>

      <section id="facts" className="bg-gray-100 px-6 py-16">
        <h3 className="text-4xl font-bold text-center mb-12">The Reality Behind Animal Testing</h3>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h4 className="text-4xl font-bold mb-4">500,000+</h4>
            <p className="leading-7">
              An estimated 500,000 animals are still used worldwide every year for cosmetic testing.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h4 className="text-4xl font-bold mb-4">88%</h4>
            <p className="leading-7">
              Of the 50 largest cosmetic companies by market value, 88% fund animal testing.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h4 className="text-4xl font-bold mb-4">32%</h4>
            <p className="leading-7">
              Consumers reported they would likely stop supporting brands if they discovered they tested on animals.
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mt-14 bg-white rounded-3xl shadow-xl p-10">
          <h4 className="text-3xl font-bold mb-6">Why Does Animal Testing Continue?</h4>
          <p className="leading-8 text-lg">
            Cosmetic companies historically relied on animal testing to prove product safety. After the 1938
            U.S. Federal Food, Drug, and Cosmetic Act, safety testing became more standardized, indirectly
            increasing the use of animals in laboratories. Today, however, new technologies such as human
            cell testing, AI computer modeling, and organs-on-chips provide alternatives that can perform
            similarly or better than traditional animal testing in some situations.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        <div className="bg-white rounded-3xl shadow-xl p-8 border">
          <h3 className="text-3xl font-bold mb-6">Cruelty-Free Brands</h3>
          <div className="flex flex-wrap gap-3">
            {crueltyFree.map((brand) => (
              <span key={brand} className="px-4 py-2 rounded-full border text-lg">
                {brand}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 border">
          <h3 className="text-3xl font-bold mb-6">Brands That Are Not Cruelty-Free</h3>
          <div className="flex flex-wrap gap-3">
            {notCrueltyFree.map((brand) => (
              <span key={brand} className="px-4 py-2 rounded-full border text-lg">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="action" className="bg-gray-100 px-6 py-16">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-10">
          <h3 className="text-4xl font-bold mb-8 text-center">What We Do</h3>

          <div className="grid md:grid-cols-2 gap-8 text-lg">
            <div>
              <ul className="space-y-4 list-disc ml-6 leading-8">
                <li>Public awareness campaigns</li>
                <li>Educational social media outreach</li>
                <li>Cruelty-free shopping guides</li>
                <li>Transparency reports on cosmetic companies</li>
              </ul>
            </div>

            <div>
              <ul className="space-y-4 list-disc ml-6 leading-8">
                <li>Lobbying for legislation against animal testing</li>
                <li>Supporting research for NAMs</li>
                <li>Petitions and consumer boycotts</li>
                <li>Fundraisers for humane alternatives</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="help" className="px-6 py-20 text-center max-w-5xl mx-auto">
        <h3 className="text-5xl font-bold mb-8">How You Can Help</h3>

        <div className="grid md:grid-cols-4 gap-6 mt-12">
          <div className="bg-white shadow-lg rounded-3xl p-6">
            <h4 className="text-2xl font-bold mb-3">Buy Ethical</h4>
            <p>Support cruelty-free cosmetic brands.</p>
          </div>

          <div className="bg-white shadow-lg rounded-3xl p-6">
            <h4 className="text-2xl font-bold mb-3">Spread Awareness</h4>
            <p>Educate friends and family about animal testing.</p>
          </div>

          <div className="bg-white shadow-lg rounded-3xl p-6">
            <h4 className="text-2xl font-bold mb-3">Boycott</h4>
            <p>Avoid supporting companies that continue animal testing.</p>
          </div>

          <div className="bg-white shadow-lg rounded-3xl p-6">
            <h4 className="text-2xl font-bold mb-3">Donate</h4>
            <p>Support research into humane testing alternatives.</p>
          </div>
        </div>
      </section>

      {/* Multimedia Slogan Campaign */}
      <section id="campaign" className="bg-black text-white px-6 py-24 text-center">
        <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">Our Campaign</p>
        <h3 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          Beauty Shouldn't<br />Cost a Life.
        </h3>
        <p className="max-w-2xl mx-auto text-lg text-gray-300 leading-8 mb-10">
          We created a multimedia campaign to spread this message far and wide — across classrooms,
          social feeds, and communities. See the full campaign below.
        </p>
        <a
          href="https://canva.link/9o8ukxekkyzv58r"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-200 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
          </svg>
          View the Full Campaign
        </a>

        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-left">
          <div className="border border-gray-700 rounded-3xl p-8">
            <p className="text-3xl font-bold mb-3">"Choose Compassion."</p>
            <p className="text-gray-400">Every purchase is a vote. Choose brands that stand for life.</p>
          </div>
          <div className="border border-gray-700 rounded-3xl p-8">
            <p className="text-3xl font-bold mb-3">"Be the Change."</p>
            <p className="text-gray-400">Awareness starts with one conversation. Start yours today.</p>
          </div>
          <div className="border border-gray-700 rounded-3xl p-8">
            <p className="text-3xl font-bold mb-3">"Their Pain. Your Choice."</p>
            <p className="text-gray-400">Animals can't speak up. But you can — with every dollar you spend.</p>
          </div>
        </div>
      </section>

      {/* Instagram */}
      <section id="instagram" className="px-6 py-20 text-center">
        <h3 className="text-4xl font-bold mb-4">Follow Us on Instagram</h3>
        <p className="text-lg text-gray-600 mb-10">Stay updated on our campaign, cruelty-free tips, and advocacy work.</p>
        <a
          href="https://www.canva.com/design/DAHKPM-CEx0/NUIFBScpre7Xfv0f9lepAQ/view"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-col items-center gap-3 group"
          aria-label="Visit our Instagram page"
        >
          <span className="bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 p-5 rounded-2xl shadow-xl group-hover:scale-105 transition-transform">
            <FaInstagram size={56} className="text-white" />
          </span>
          <span className="text-lg font-semibold text-gray-700 group-hover:underline">@beautywithoutcruelty</span>
        </a>
      </section>

      <section id="petition" className="bg-gray-100 px-6 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-4xl font-extrabold mb-4">Sign the Petition</h3>
          <p className="text-lg leading-8 mb-8 text-gray-700">
            Add your name to our call urging cosmetic companies and lawmakers to ban animal testing once and for all.
          </p>

          <div className="bg-white rounded-3xl shadow-xl p-10">
            <div className="mb-8">
              <p className="text-5xl font-extrabold">{count.toLocaleString()}</p>
              <p className="text-gray-500 mt-1 text-lg">people have signed</p>
              <div className="mt-4 w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-black h-3 rounded-full transition-all duration-500"
                  style={{ width: `${Math.min((count / 2000) * 100, 100)}%` }}
                />
              </div>
              <p className="text-sm text-gray-500 mt-2">Goal: 2,000 signatures</p>
            </div>

            {submitted ? (
              <div className="py-6">
                <div className="text-5xl mb-4">✓</div>
                <h4 className="text-2xl font-bold mb-2">Thank you for signing!</h4>
                <p className="text-gray-600">Your name has been added. Share this petition to make an even bigger impact.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div>
                  <label className="block text-sm font-semibold mb-1" htmlFor="petition-name">Full Name</label>
                  <input
                    id="petition-name"
                    type="text"
                    placeholder="Jane Smith"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1" htmlFor="petition-email">Email Address</label>
                  <input
                    id="petition-email"
                    type="email"
                    placeholder="jane@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
                <p className="text-xs text-gray-400">Your information is only used to verify signatures. We do not share your data.</p>
                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 rounded-xl text-lg font-semibold hover:bg-gray-800 transition-colors"
                >
                  Sign the Petition
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <footer className="bg-black text-white px-6 py-10 text-center">
        <h4 className="text-2xl font-bold mb-4">Beauty Without Cruelty</h4>
        <p className="max-w-3xl mx-auto leading-7 mb-2 text-gray-400 text-sm uppercase tracking-widest">
          Non-profit organization founded by Timi Ajayi, Daniel Esquivel, Lyana Ferrino, and Isabella Panlilio
        </p>
        <p className="max-w-3xl mx-auto leading-8 text-lg mb-6">
          For those without a voice, for change through choice — together, we can build a beauty industry based on compassion rather than cruelty.
        </p>
        <a
          href="https://www.canva.com/design/DAHKPM-CEx0/NUIFBScpre7Xfv0f9lepAQ/view"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="inline-block text-white hover:text-pink-400 transition-colors"
        >
          <FaInstagram size={28} />
        </a>
      </footer>
    </div>
  );
}
