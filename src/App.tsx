import BusinessCard from './components/BusinessCard';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from "./components/Skills.tsx";
import Education from "./components/Education.tsx";


function App() {
    return (
        <div className="min-h-screen bg-stone-100 py-12">

            <BusinessCard />
            <hr className="max-w-xl mx-auto border-t border-gray-400 my-12" />
            <Experience />
            <Projects />
            <Skills />
            <Education />

        </div>
    );
}

export default App;