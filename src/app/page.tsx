'use client';
import { FaLinkedin } from 'react-icons/fa';
import { HiOutlineDocumentDownload } from 'react-icons/hi';

export default function Home() {
  return (
    <main className="bg-background text-text font-sans min-h-screen flex">
      {/* Static Left Panel */}
      <aside className="hidden lg:flex w-1/3 h-screen sticky top-0 flex-col justify-center items-start px-8 border-r border-border bg-background">
        <div>
          <h1 className="text-5xl font-heading italic text-primary mb-4"><span className="not-italic font-semibold">Swathi Pallikala</span></h1>
          <p className="text-slate-600 text-base font-medium tracking-tight mb-2">
            AI Engineer
          </p>
          <p className="text-slate-600 text-base font-medium tracking-tight mb-6">
            SDE (7+ YOE) | Ex: BlueYonder, Google, ModelN
          </p>

          <nav className="flex flex-col space-y-4 text-sm font-medium text-accent mb-6">
            <a href="#about" className="hover:text-accentHover transition-all">About</a>
            <a href="#experience" className="hover:text-accentHover transition-all">Experience</a>
            <a href="#writing" className="hover:text-accentHover transition-all">Writing & Publications</a>
            <a href="#contact" className="hover:text-accentHover transition-all">Contact</a>
          </nav>

          <div className="flex items-center space-x-6 mt-6 text-accent">
          <a
  href="https://drive.google.com/file/d/1wXmKcmDWjpt6AOo0HHxE2whDl9C1X_fO/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="group flex items-center space-x-2 hover:text-accentHover transition-colors"
  aria-label="Resume"
>
  <HiOutlineDocumentDownload size={22} />
  <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">Resume</span>
</a>

          
            <a
              href="https://www.linkedin.com/in/swathi-pallikala"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-2 hover:text-accentHover transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={22} />
              <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">LinkedIn</span>
            </a>
          </div>
        </div>
      </aside>

      {/* Scrollable Right Panel */}
      <section className="w-full lg:w-2/3 overflow-y-auto">
        {/* About Section */}
        <section id="about" className="px-6 py-24 max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold text-black mb-6">About Me</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            I am Swathi Pallikala, a Software Development Engineer with over 7 years of experience building large-scale, intelligent systems at companies like Google, Blue Yonder, and ModelN. A gold medalist in Engineering, I have led impactful projects ranging from UPI automation and predictive demand optimization to pricing system revamps, while mentoring teams and driving engineering excellence.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            I am currently pursuing my Masters in Computer Science with a concentration in Artificial Intelligence and Machine Learning at California State University, East Bay. My academic focus centers around designing intelligent agents and tooling that combine architectural clarity with reasoning adaptivity.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            I am also the creator of <em>AI Sync with Swathi</em>, a tech first AI newsletter where I break down complex AI systems into actionable, engineering-first concepts. I write to empower learners and professionals with limited access to formal AI education, sharing insights from both industry and academia.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            My goal is to build socially conscious, real-world AI tools that are human-aware and context-driven. I care deeply about how we can use intelligent systems to amplify human potential, especially in domains like accessibility, education, and developer experience.
          </p>
        </section>

        {/* Experience Section */}
        <section id="experience" className="px-6 py-24 max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold text-black mb-6">Experience</h2>
          <div className="space-y-10">
 <div>
              <h3 className="text-xl font-semibold text-accent mb-1">Blue Yonder</h3>
              <p className="text-slate-600 text-sm mb-2">Software Engineer II</p>
              <ul className="list-disc list-inside text-slate-600 text-sm space-y-1">
                <li>Developed SKU aggregation logic for D360 and improved the Demand Worksheet load times by 40%.</li>
                <li>Improved the performance of predictive models by enhancing data preprocessing pipelines</li>
                <li>This lead to more accurate and faster demand forecasts.</li>
                <li>Mentored junior developers, led code-reviews and contributed to CI/CD with Jenkins & Git.</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-accent mb-1">Google (via Indecomm)</h3>
              <p className="text-slate-600 text-sm mb-2">Senior Software Engineer</p>
              <ul className="list-disc list-inside text-slate-600 text-sm space-y-1">
                <li>Built automation for GPay for Business, streamlining UPI payments for merchants.</li>
                <li>Created account validation and canary tests that reduced deployment errors.</li>
                <li>Collaborated with Google teams to integrate payment gateway infrastructure.</li>
              </ul>
            </div>
           
            <div>
              <h3 className="text-xl font-semibold text-accent mb-1">ModelN</h3>
              <p className="text-slate-600 text-sm mb-2">Member of Technical Staff</p>
              <ul className="list-disc list-inside text-slate-600 text-sm space-y-1">
                <li>Led pricing engine development for Kits & Bundles product line.</li>
                <li>Designed workflows for multi-quote contract generation and approval.</li>
                <li>Executed complex Git-based branch migrations.</li>
                <li>Contributed to SDTracker, a custom defect tracking tool.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="writing" className="px-6 py-24 max-w-5xl mx-auto">
  <h2 className="text-3xl font-semibold text-black mb-12">Writing & Publications</h2>
  <div className="grid gap-8 md:grid-cols-2">
  <div className="bg-surface p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold text-accent mb-2">🧵 <a href="https://www.linkedin.com/newsletters/7333976885854408704/" target="_blank" rel="noopener noreferrer">AI Sync with Swathi (Newsletter)</a></h3>
    <p className="text-slate-600 text-sm">
      A technical series on building intelligent agents, covering reasoning, feedback loops, tool use, and LLM systems architecture.
    </p>
  </div>
    <div className="bg-surface p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-accent mb-2">✍️ <a href="https://medium.com/@swathipallikala" target="_blank" rel="noopener noreferrer">Medium Articles</a></h3>
<p className="text-slate-600 text-sm">
  Technical essays exploring system design, ML tooling, and real-world applications of AI, blending engineering insight with research analysis.
</p>
    </div>
  </div>
</section>

        {/* Contact Section */}
        <section id="contact" className="px-6 py-24 max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-black mb-6">Get In Touch</h2>
          <p className="text-slate-600 text-sm mb-4">
            I’m currently looking for internships in AI and ML engineering and research space.
           {`If you're building something forward-thinking — let's connect.`}

          </p>
          <a
  href="https://docs.google.com/forms/d/e/1FAIpQLSeGwXG_Cgxsb-2IzKCmwAY5U3YZf9M8G_fOSa2zUHwHJsIQ4Q/viewform?usp=header"
  target="_blank"
  rel="noopener noreferrer"
  className="text-accent border border-accent hover:text-accentHover hover:border-accentHover font-semibold px-6 py-2 rounded transition"
>
  Send a Message
</a>
        </section>
      </section>
    </main>
  );
}
