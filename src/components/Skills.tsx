import React from 'react';

interface SkillCategory {
    title: string;
    skills: string[];
}

const categories: SkillCategory[] = [
    {
        title: 'Linguagens',
        skills: ['Java', 'PHP', 'Javascript', 'Typescript', 'SQL'],
    },
    {
        title: 'Frameworks & Bibliotecas',
        skills: ['Spring Boot', 'Laravel', 'React.js'],
    },
    {
        title: 'Backend & Bancos de Dados',
        skills: ['APIs Restful', 'OOP', 'MySQL', 'Redis'],
    },
    {
        title: 'DevOps & Ferramentas',
        skills: ['Docker', 'Git', 'CI/CD', 'Linux', 'Supervisor'],
    },
];

const Skills: React.FC = () => {
    return (
        <section className="max-w-xl mx-auto my-12">
            <h3 className="font-serif text-3xl font-bold text-gray-900 mb-6">
                Skills
            </h3>

            <div className="space-y-6">
                {categories.map((category) => (
                    <div key={category.title}>
                        <h4 className="font-sans text-xl font-semibold text-gray-800 mb-3">
                            {category.title}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="bg-stone-200 text-gray-800
                             font-sans text-sm font-medium
                             px-3 py-1 rounded-md"
                                >
                  {skill}
                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;