export default function JaimeNieriWebsite() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-4">
              Online Guitar Lessons
            </p>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Learn Guitar With Confidence
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Structured online guitar lessons for adults who want to improve
              rhythm, technique, musical understanding, and confidence.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-black text-white px-6 py-3 rounded-2xl text-lg hover:opacity-90 transition"
              >
                Book a Free Trial Lesson
              </a>

              <a
                href="#pricing"
                className="border border-gray-300 px-6 py-3 rounded-2xl text-lg hover:bg-gray-100 transition"
              >
                View Pricing
              </a>
            </div>
          </div>

          {/* PHOTO (CORRECTA) */}
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
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

          <div>
            <h3 className="text-3xl font-bold">15+</h3>
            <p className="text-gray-600 mt-2">Years Teaching</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">20+</h3>
            <p className="text-gray-600 mt-2">Years Playing</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">Berklee</h3>
            <p className="text-gray-600 mt-2">Graduate</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">Online</h3>
            <p className="text-gray-600 mt-2">Worldwide Lessons</p>
          </div>

        </div>
      </section>

      {/* About */}
      <section className="max-w-5xl mx-auto px-6 py-24">

        <div className="grid md:grid-cols-2 gap-14 items-start">

          <div>
            <h2 className="text-4xl font-bold mb-6">About Jaime</h2>

            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              I’m a Berklee College of Music graduate with over 15 years of
              teaching experience and more than 20 years playing guitar.
            </p>

            <p className="text-gray-700 leading-relaxed text-lg">
              My lessons are designed especially for adults and self-taught
              players who want structure, consistency, and real progress.
              Whether your goal is improving rhythm, understanding music
              theory, learning songs faster, or becoming a more confident
              musician, lessons are tailored to your level and goals.
            </p>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200">

            <h3 className="text-2xl font-semibold mb-6">
              What You’ll Improve
            </h3>

            <ul className="space-y-4 text-lg text-gray-700">
              <li>• Rhythm and timing</li>
              <li>• Guitar technique</li>
              <li>• Musical understanding</li>
              <li>• Ear training</li>
              <li>• Confidence while playing</li>
              <li>• Learning songs more efficiently</li>
            </ul>

          </div>

        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-24 px-6">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4">Student Testimonials</h2>
            <p className="text-gray-600 text-lg">
              Feedback from adult students and musicians.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <p className="text-gray-700 leading-relaxed mb-6">
                “Jaime helped me finally understand rhythm and timing. I went from struggling to actually playing with confidence.”
              </p>
              <p className="font-semibold">— Randy - Guitar Student</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <p className="text-gray-700 leading-relaxed mb-6">
                “Very structured lessons. Everything is explained clearly and I can finally see real progress every week.”
              </p>
              <p className="font-semibold">— Hannah - Bass Student</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <p className="text-gray-700 leading-relaxed mb-6">
                “I stopped practicing randomly and now I know exactly what to work on. Huge improvement in my playing.”
              </p>
              <p className="font-semibold">— Tom - Guitar Student and Music Theory</p>
            </div>

          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-6xl mx-auto px-6 py-24">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-4">Lesson Pricing</h2>
          <p className="text-gray-600 text-lg">
            Online lessons tailored to your goals and level.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="border border-gray-200 rounded-3xl p-10 text-center">
            <h3 className="text-2xl font-semibold mb-4">30 Minutes</h3>
            <p className="text-5xl font-bold mb-6">$45</p>
            <p className="text-gray-600">
              Great for focused weekly practice and busy schedules.
            </p>
          </div>

          <div className="border-2 border-black rounded-3xl p-10 text-center shadow-xl">
            <h3 className="text-2xl font-semibold mb-4">45 Minutes</h3>
            <p className="text-5xl font-bold mb-6">$60</p>
            <p className="text-gray-600">
              The best balance between depth, progress, and consistency.
            </p>
          </div>

          <div className="border border-gray-200 rounded-3xl p-10 text-center">
            <h3 className="text-2xl font-semibold mb-4">60 Minutes</h3>
            <p className="text-5xl font-bold mb-6">$80</p>
            <p className="text-gray-600">
              Ideal for advanced students and in-depth learning.
            </p>
          </div>

        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-black text-white py-24 px-6">

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Learning?
          </h2>

          <p className="text-xl text-gray-300 mb-10">
            Book a free trial lesson and start building confidence,
            consistency, and musical understanding.
          </p>

          <a
            href="mailto:your@email.com"
            className="bg-white text-black px-8 py-4 rounded-2xl text-lg font-medium"
          >
            Email Me
          </a>

        </div>
      </section>

    </div>
  );
}