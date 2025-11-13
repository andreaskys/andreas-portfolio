import React from 'react';
import { FaGithub } from 'react-icons/fa'; // (Use o ícone do GitHub)

interface Project {
    title: string;
    tech: string;
    description: string;
    url: string;
}

const projects: Project[] = [
    {
        title: 'Api Restful',
        tech: 'Java, Spring Boot, JUnit, Mockito',
        description: 'Api feita com Java spring, integrando Junit e Mockito para testes.',
        url: 'https://github.com/andreaskys/restSpringboot',
    },
    {
        title: 'Portfolio',
        tech: 'React, CSS, Tailwind',
        description: 'Meu portfolio feito com React.',
        url: 'https://github.com/andreaskys/ReactPortfolio',
    },
    {
        title: 'Crud php',
        tech: 'PHP',
        description: 'Projeto feito para um freelancer de um consultorio de nutrição utilizando apenas php.',
        url: 'https://github.com/andreaskys/PHP',
    },
];

const Projects: React.FC = () => {
    return (
        <section className="max-w-xl mx-auto my-12">
            <h3 className="font-serif text-3xl font-bold text-gray-900 mb-6">
                Projetos Relevantes
            </h3>

            <div className="space-y-6">
                {projects.map((project) => (
                    <div key={project.title} className="bg-stone-50 p-6 border border-gray-200">
                        <h4 className="font-sans text-xl font-semibold text-gray-800">
                            {project.title}
                        </h4>
                        <p className="font-sans text-sm text-gray-500 mb-3 tracking-wide">
                            {project.tech}
                        </p>
                        <p className="font-sans text-gray-700 mb-4">
                            {project.description}
                        </p>

                        <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center font-sans text-md text-gray-700 hover:text-black transition-colors"
                        >
                            <FaGithub className="mr-2" /> Ver no GitHub
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;