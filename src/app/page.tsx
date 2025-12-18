export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-950 text-white">
      <section className="max-w-2xl px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Hi, I’m Dhruv Rastogi
        </h1>

        <p className="text-lg text-gray-300 mb-6">
          Software Engineer | SAP Labs India  
          <br />
          Full-Stack Developer • Systems & Backend Enthusiast
        </p>

        <p className="text-gray-400 leading-relaxed">
          I build scalable backend systems, work on modern web & mobile
          applications, and enjoy solving real-world engineering problems.
          Currently exploring distributed systems, React, and backend
          architecture.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="https://github.com/"
            target="_blank"
            className="px-5 py-2 rounded-lg border border-gray-700 hover:bg-gray-800 transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            className="px-5 py-2 rounded-lg border border-gray-700 hover:bg-gray-800 transition"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}
