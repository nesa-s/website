import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="min-h-screen px-6 py-10 text-left bg-white">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="text-black inline-block">&larr; back</Link>

        <h1 className="text-3xl font-bold mb-1">University of Michigan</h1>
        <div className="text-lg mb-8">B.S.E. in Computer Science & Biomedical Engineering</div>

        <hr className="my-8 border-gray-200" />

        <div className="flex items-baseline mb-6 gap-10">
          <h2 className="text-2xl font-bold">Coursework</h2>
          <span className="italic text-gray-500 text-base">some fun, some not so fun</span>
        </div>

        <div className="space-y-4">
          <div className="font-semibold">EECS 203: Discrete Mathematics</div>
          <div className="font-semibold">EECS 280: Programming and Intro Data Structures</div>
          <div className="font-semibold">EECS 281: Data Structures and Algorithms</div>
          <div className="font-semibold">EECS 370: Computer Organization</div>
          <div className="font-semibold">Piano 110: Beginning Piano</div>
          <div className="font-semibold">ENTR 407: Entrepreneurship Hour with Center for Entrepreneurship</div>
        </div>

        <hr className="my-8 border-gray-200" />

        <div className="flex items-baseline mb-6 gap-10">
          <h2 className="text-2xl font-bold">Engagements</h2>
          <span className="italic text-gray-500 text-base">all fun..</span>
        </div>

        <div className="mb-8 space-y-8">
          <div>
            <div className="font-semibold text-lg mb-1 underline">M-Hacks: Outreach & HackerX</div>
            <div className="text-gray-700">
              University of Michigan's premier hackathon organization, fostering innovation and technical creativity
            </div>
          </div>

          <div>
            <div className="font-semibold text-lg mb-1 underline">Plant Microbe Interaction Lab Assistant</div>
            <div className="text-gray-700">
              Working on virus vector-based delivery system for CRISPR/Cas9 components to produce genetically modified cotton plants
            </div>
          </div>

          <div>
          <a
            href="https://v1michigan.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-lg mb-1 underline text-gray-700 hover:text-gray-700 focus:text-gray-700 active:text-gray-700 visited:text-gray-700"
            style={{ color: '#374151' }}
          >
            V1
          </a>
            <div className="text-gray-700">
              W25 Product Studio. The largest community of builders on campus.
            </div>
          </div>

          <div>
          <a
            href="https://mheal.engin.umich.edu/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-lg mb-1 underline text-gray-700 hover:text-gray-700 focus:text-gray-700 active:text-gray-700 visited:text-gray-700"
            style={{ color: '#374151' }}
          >
            MHEAL
          </a>
            <div className="text-gray-700">
              Bridging healthcare and technology cultivating innovative solutions for real medical needs around the world
            </div>
          </div>

          <div>
          <a
            href="https://lsa.umich.edu/wiserp"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-lg mb-1 underline text-gray-700 hover:text-gray-700 focus:text-gray-700 active:text-gray-700 visited:text-gray-700"
            style={{ color: '#374151' }}
          >
            WISERP
          </a>
            <div className="text-gray-700">
              Peer Mentor supporting and guiding first-year women in STEM fields
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;