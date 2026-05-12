export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left Side */}
          <div>
            <p className="uppercase tracking-[0.2em] text-gray-500 mb-4">
              Online Guitar Lessons
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Jaime Nieri
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Berklee College of Music alumni helping adult guitar players
              improve rhythm, technique, confidence, and musicality through
              structured online lessons.
            </p>

            <div className="flex gap-4">
              <button className="bg-black text-white px-8 py-4 rounded-2xl text-lg hover:opacity-80 transition">
                Book a Lesson
              </button>

              <button className="border border-black px-8 py-4 rounded-2xl text-lg hover:bg-black hover:text-white transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Side - Photo */}
          <div>
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/jaime.png"
                alt="Jaime Nieri"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-gray-200 py-10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-3 text-center gap-8">
          
          <div>
            <h3 className="text-3xl font-bold">20+</h3>
            <p className="text-gray-600">Years Playing</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">15+</h3>
            <p className="text-gray-600">Years Teaching</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">100+</h3>
            <p className="text-gray-600">Students</p>
          </div>

        </div>
      </section>

    </main>
  );
}