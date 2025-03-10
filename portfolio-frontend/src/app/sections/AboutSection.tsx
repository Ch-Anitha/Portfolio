import Section from '@/components/global/Section';
import Image from 'next/image';
import AnimatedText from '@/components/global/ScrollFadeParagraph';
import HugeiconsUniversity from '@/assets/icons/HugeiconsUniversity';
import * as motion from 'motion/react-client';

const aboutText = `Hi, I’m Anitha Ch, a passionate Software Engineer and Data Enthusiast with expertise in Machine Learning, Full-Stack Development, and Data Engineering. 
    Skilled in Python, Java, SQL, and AWS, I specialize in developing scalable applications, optimizing databases, and implementing AI-driven solutions.
    With experience in MongoDB, React, Node.js and NLP research, I build intelligent, user-centric systems. My proficiency in Power BI, Tableau, and Snowflake enables data-driven decision-making.
    Always eager for innovation, I thrive on solving complex challenges! 🚀 Let’s build something amazing together!
`;

const certifications = [
    "AWS Certified Cloud Practitioner",
    "AWS Certified Data Engineer- Associate"
];

const experience = [
    {
        title: "Research Assistant",
        company: "University of Maryland Baltimore County",
        location: "Baltimore, USA",
        duration: "August 2024 - Present",
        description: [
            "Researched and implemented NLP techniques using PyTorch and TensorFlow to mitigate hallucinations in Large Language Models (LLMs), improving model reliability by 25%.",
            "Optimized data processing workflows using Linux and Shell scripting, increasing computational efficiency by 30%."
        ]
    },
    {
        title: "AR Development Extern",
        company: "Paragon One",
        location: "Baltimore, USA",
        duration: "September 2024 - October 2024",
        description: [
            "Designed interactive Augmented Reality (AR) experiences using Lens Studio, integrating 3D models, facial tracking, and real-time object recognition.",
            "Developed JavaScript and Python-based animations to enhance user engagement by 25%."
        ]
    },
    {
        title: "Data Analyst",
        company: "1stopai",
        location: "Remote",
        duration: "December 2022 - July 2023",
        description: [
            "Created interactive dashboards using Tableau, providing real-time business insights that improved decision-making speed by 40%.",
            "Developed predictive machine learning models in Python, achieving 85% accuracy in forecasting sales trends."
        ]
    },
    {
        title: "Data Science Intern",
        company: "Exposys Data Labs",
        location: "Remote",
        duration: "May 2022 - July 2022",
        description: [
            "Developed an Intelligent Traffic Information System to provide real-time traffic updates, enhancing automobile safety.",
            "Integrated Apache Kafka for real-time data processing, increasing data throughput by 10%.",
            "Optimized data retrieval strategies using SQL & MongoDB, improving system efficiency."
        ]
    },
    {
        title: "Software Engineer Intern",
        company: "The Sparks Foundation",
        location: "Remote",
        duration: "September 2022 - November 2022",
        description: [
            "Designed and developed a RESTful API using Node.js for real-time analytics data retrieval and processing.",
            "Implemented JWT-based authentication to secure API endpoints and enable role-based access control.",
            "Optimized PostgreSQL queries, reducing API response time by 35% for complex data aggregations."
        ]
    },
    {
        title: "Research Intern",
        company: "National Institute of Technology Andhra Pradesh",
        location: "Remote",
        duration: "Jan 2022 - Apr 2022",
        description: [
            "Developed a microservices-based traffic monitoring system using Spring Boot for backend services.",
            "Integrated Apache Kafka for real-time data streaming, enhancing system responsiveness and scalability.",
            "Optimized data indexing and retrieval strategies in SQL & MongoDB to improve query performance."
        ]
    }
];


const AboutSection = () => {
    return (
        <Section className="relative py-10">
            <div className="flex max-mobile-lg:flex-col-reverse justify-start items-stretch gap-2 overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="bg-primary/5 border border-border rounded-lg p-4"
                >
                    <h1 className="mb-3">About me</h1>
                    <AnimatedText
                        wordClass=" text-xl max-mobile-lg:!text-lg"
                        motionClass="text-primary !text-xl max-mobile-lg:!text-lg"
                        text={aboutText}
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
                    className="bg-card flex flex-col max-mobile-lg:flex-row gap-2 rounded-lg p-4 border border-border"
                >
                    <div className="w-60 h-60">
                        <Image
                            src='@/assets/images/profile1.png'
                            alt="Anitha Ch"
                            className="rounded-lg w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span>ch.anitha513@gmail.com</span>
                        <span>Baltimore, Maryland, USA</span>
                    </div>
                </motion.div>
            </div>

            {/* Education Section */}
            <div className="py-5">
                <h1 className="py-2">Education</h1>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
                    className="flex max-mobile-lg:flex-col justify-between bg-card p-4 border border-border rounded-lg"
                >
                    <div className="flex gap-2">
                        <div className="border-l-4 border-primary pl-2">
                            <h3>Masters of Science Information Systems</h3>
                            <span className="flex items-center gap-2">
                                <HugeiconsUniversity /> University of Maryland Baltimore County
                            </span>
                        </div>
                    </div>
                    <div className="max-mobile-lg:mt-2">
                        <span>August 2023 - May 2025</span>
                    </div>
                </motion.div>

                {/* Certifications Section */}
                <h1 className="py-5">Certifications</h1>
                <ul className="list-disc list-inside pl-5 text-lg">
                    {certifications.map((cert, index) => (
                        <li key={index} className="text-white-600">{cert}</li>
                    ))}
                </ul>

                {/* Experience Section */}
                <h1 className="py-5">Professional Experience</h1>
                <div className="space-y-5">
                    {experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.2 }}
                            className="bg-card p-4 border border-border rounded-lg"
                        >
                            <h3 className="text-xl font-semibold">{exp.title}</h3>
                            <span className="text-primary">{exp.company}</span>
                            <p className="text-sm text-gray-500">{exp.duration}</p>
                            <ul className="list-disc list-inside pl-4 mt-2">
                                {exp.description.map((point, i) => (
                                    <li key={i} className="text-white-600">{point}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default AboutSection;
