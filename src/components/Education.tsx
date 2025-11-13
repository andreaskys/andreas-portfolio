import React from 'react';

interface EducationItem {
    degree: string;
    institution: string;
    location: string;
    period: string;
    details: string;
}

interface CertificationItem {
    title: string;
    date: string;
}

const education: EducationItem = {
    degree: 'Tecnólogo, Análise e desenvolvimento de sistemas',
    institution: 'Estácio de Sá',
    location: 'Goiânia, GO, Brasil',
    period: '08/2023 - 06/2026',
    details: 'Cursando atualmente o 5º período, com previsão de formatura em junho de 2026.',
};

const certifications: CertificationItem[] = [
    {
        title: 'Certificação CISCO PythonEssentials',
        date: '01/2024',
    },
    {
        title: 'Certificação Alura: Java, JavaScript',
        date: '01/2023',
    },
];

const Education: React.FC = () => {
    return (
        <section className="max-w-xl mx-auto my-12">
            <h3 className="font-serif text-3xl font-bold text-gray-900 mb-6">
                Educação
            </h3>

            <div className="mb-8">
                <h4 className="font-sans text-xl font-semibold text-gray-800">
                    {education.degree}
                </h4>
                <p className="font-sans text-md text-gray-700">
                    {education.institution} | {education.location}
                </p>
                <p className="font-sans text-sm text-gray-500 mb-3">
                    {education.period}
                </p>
                <p className="font-sans text-gray-700">
                    {education.details}
                </p>
            </div>

            <h3 className="font-serif text-3xl font-bold text-gray-900 mb-6 mt-12">
                Certificações
            </h3>

            <div className="space-y-4">
                {certifications.map((cert) => (
                    <div key={cert.title}>
                        <h4 className="font-sans text-lg font-semibold text-gray-800">
                            {cert.title}
                        </h4>
                        <p className="font-sans text-sm text-gray-500">
                            Concluído em: {cert.date}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;