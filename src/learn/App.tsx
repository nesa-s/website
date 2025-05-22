import { Link } from 'react-router-dom';
import { useState } from 'react';

function InterestSection({ title, content }: { title: string; content: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full text-left flex items-center justify-between font-semibold text-lg mb-1 hover:text-blue-500 transition-colors"
            >
                <span>{title}</span>
                <span className="ml-2 text-gray-400">{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen && (
                <div className="mt-1 text-gray-700 text-base animate-fadeIn">
                    {content}
                </div>
            )}
        </div>
    );
}

function App() {
    return (
        <div className="min-h-screen px-6 py-10 text-left bg-white">
            <div className="max-w-3xl mx-auto">
                <Link to="/" className="text-black inline-block mb-8">&larr; back</Link>

                <h1 className="text-3xl font-bold mb-1">Learning</h1>
                <div className="text-lg mb-8">passionate about applying technology to improve healthcare,medicine, and research</div>

                <hr className="my-8 border-gray-200" />

                <h2 className="text-2xl font-bold mb-6">Other Interests</h2>
                <div className="mb-8 space-y-6">
                    <InterestSection 
                        title="Music" 
                        content="Currently exploring jazz and classical piano."
                    />
                    <InterestSection 
                        title="Photography" 
                        content="Street and landscape photography enthusiast. 
                        Shooting with a Fujifilm X-T4 and exploring film photography."
                    />
                    <InterestSection 
                        title="Books" 
                        content="Currently reading 'The Innovator's Dilemma' by Clayton Christensen. Interested in business, technology, and philosophy."
                    />
                </div>
            </div>
        </div>
    );
}

export default App;