import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function App() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen px-6 py-10 text-left bg-white"
    >
      <div className="max-w-2xl mx-auto">
        <Link to="/" className="text-gray-500 hover:text-gray-700 transition-colors inline-block mb-12">
          ← back
        </Link>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-4xl font-bold mb-2 tracking-tight">University of Michigan</h1>
          <div className="text-xl text-gray-600 mb-12">B.S.E. in Computer Science & Biomedical Engineering</div>
        </motion.div>

        <section className="mb-12">
          <div className="flex items-baseline mb-8">
            <h2 className="text-2xl font-semibold tracking-tight">Coursework</h2>
            <span className="ml-4 text-gray-500 text-sm italic">some fun, some not so fun</span>
          </div>

          <div className="grid gap-3 text-gray-800">
            <div className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">EECS 203: Discrete Mathematics</div>
            <div className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">EECS 280: Programming and Intro Data Structures</div>
            <div className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">EECS 281: Data Structures and Algorithms</div>
            <div className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">EECS 370: Computer Organization</div>
            <div className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">Piano 110: Beginning Piano</div>
            <div className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">ENTR 407: Entrepreneurship Hour</div>
          </div>
        </section>

        <section>
          <div className="flex items-baseline mb-8">
            <h2 className="text-2xl font-semibold tracking-tight">Engagements</h2>
            <span className="ml-4 text-gray-500 text-sm italic">all fun..</span>
          </div>

          <div className="space-y-8">
            <div className="group">
              <h3 className="text-lg font-medium mb-2">M-Hacks: Outreach & HackerX</h3>
              <p className="text-gray-600 leading-relaxed">
                University of Michigan's premier hackathon organization, fostering innovation and technical creativity
              </p>
            </div>

            <div className="group">
              <h3 className="text-lg font-medium mb-2">Plant Microbe Interaction Lab Assistant</h3>
              <p className="text-gray-600 leading-relaxed">
                Working on virus vector-based delivery system for CRISPR/Cas9 components to produce genetically modified cotton plants
              </p>
            </div>

            <div className="group">
              <a
                href="https://v1michigan.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium mb-2 inline-block hover:text-blue-600 transition-colors"
              >
                V1
              </a>
              <p className="text-gray-600 leading-relaxed">
                W25 Product Studio. The largest community of builders on campus.
              </p>
            </div>

            <div className="group">
              <a
                href="https://mheal.engin.umich.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium mb-2 inline-block hover:text-blue-600 transition-colors"
              >
                MHEAL
              </a>
              <p className="text-gray-600 leading-relaxed">
                Bridging healthcare and technology cultivating innovative solutions for real medical needs around the world
              </p>
            </div>

            <div className="group">
              <a
                href="https://lsa.umich.edu/wiserp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium mb-2 inline-block hover:text-blue-600 transition-colors"
              >
                WISERP
              </a>
              <p className="text-gray-600 leading-relaxed">
                Peer Mentor supporting and guiding first-year women in STEM fields
              </p>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}

export default App;