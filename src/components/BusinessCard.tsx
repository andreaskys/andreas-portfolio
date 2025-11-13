import React from 'react';
import { FaLinkedin, FaGithub} from 'react-icons/fa';

const name = "Andreas Nunes";
const title = "Desenvolvedor Full-Stack";
const email = "andreasnunesmachadodev@gmail.com";
const phone = "+55 (62) 99849-5410";
const location = "Goiânia, GO";
const linkedinUrl = "https://linkedin.com/in/andreasnunes";
const githubUrl = "https://github.com/andreaskys";


const BusinessCard: React.FC = () => {
    return (
        <section className="max-w-xl mx-auto bg-stone-100 p-10 my-12
                        border border-gray-300 shadow-sm">

            <div className="text-center">
                <h1 className="font-nome-serif text-4xl font-bold text-gray-900 tracking-wide">
                    {name}
                </h1>
                <h2 className="text-lg font-medium text-gray-600 tracking-widest uppercase mt-1">
                    {title}
                </h2>
            </div>

            <hr className="my-8 border-t border-gray-400" />

            <div className="font-sans text-center text-md text-gray-800 space-y-2">
                <p>{location} | {phone}</p>
                <p>{email}</p>
            </div>

            <div className="flex justify-center space-x-8 mt-8">
                <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-black transition-colors"
                >
                    <FaLinkedin className="mr-2" /> LinkedIn
                </a>
                <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-black transition-colors"
                >
                    <FaGithub className="mr-2" /> GitHub
                </a>
            </div>
        </section>
    );
};

export default BusinessCard;