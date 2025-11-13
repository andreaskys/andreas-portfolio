import React from 'react';

interface Job {
    title: string;
    company: string;
    location: string;
    period: string;
    responsibilities: string[];
}

const jobs: Job[] = [
    {
        title: 'Desenvolvedor Full-Stack',
        company: 'Freelancer',
        location: 'Goiânia, GO, Brasil',
        period: '08/2023 - Atual',
        responsibilities: [
            'Desenvolvi e implementei um portal e-commerce, resultando em um aumento de 30% nas vendas e foi muito bem elogiado pela perfomance e design.',
            'Criei um sistema de atendimento que é utilizado em consultorios de nutrição com sistema de histórico de pacientes, sistema de login, separado por consultorio.'
        ],
    },
    {
        title: 'Desenvolvedor Full-Stack',
        company: 'Prefeitura Municipal de Goiânia',
        location: 'Goiânia, GO, Brasil',
        period: '02/2024 - 06/2025',
        responsibilities: [
            'Otimizei consultas SQL complexas e realizei refatoração de procedures, reduzindo o tempo de resposta de relatórios críticos.',
            'Desenvolvimento e manutenção de aplicações com OutSystems, garantindo escalabilidade e eficiência nos sistemas internos.',
            'Integração de sistemas via APIs REST e Web Services.',
            'Manipulação e otimização de banco de dados SQL, incluindo consultas, procedures e ajustes de performance.'
        ],
    },
];

const Experience: React.FC = () => {
    return (
        <section className="max-w-xl mx-auto my-12">
            <h3 className="font-serif text-3xl font-bold text-gray-900 mb-6">
                Experiência
            </h3>

            <div className="space-y-8">
                {jobs.map((job) => (
                    <div key={job.company} className="border-l-2 border-gray-300 pl-4">
                        <h4 className="font-sans text-xl font-semibold text-gray-800">
                            {job.title}
                        </h4>
                        <p className="font-sans text-md text-gray-700">
                            {job.company} | {job.location}
                        </p>
                        <p className="font-sans text-sm text-gray-500 mb-3">
                            {job.period}
                        </p>

                        <ul className="list-disc list-outside ml-5 space-y-2 font-sans text-gray-700">
                            {job.responsibilities.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;