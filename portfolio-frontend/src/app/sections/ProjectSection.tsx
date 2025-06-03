import React from 'react';
import Section from '@/components/global/Section';
import ParallaxStack from '@/components/projects/ParallaxStack';
import linux from '@/assets/icons/skill/skill-icons--linux-light.svg';
import { StaticImageData } from 'next/image'; // Correct type for static images

// Define the type for a project
interface Project {
    id: number;
    title: string;
    description: string;
    image: string; // Use StaticImageData for imported images
    color: string;
    logo: StaticImageData; // Use StaticImageData for imported logos
    techUsed: string[];
    demoLink: string;
    codeLink: string;
}

// Array of projects
const projects: Project[] = [
    {
        id: 1,
        title: 'Serverless Video Analysis Application on AWS PaaS Cloud',
        description:
            'A serverless video analysis application built on AWS PaaS, utilizing Lambda, S3, and Rekognition for real-time video processing, object detection, and facial recognition.',
        image: 'images/projects/1.png',
        color: 'bg-card',
        logo: linux,
        techUsed: ['AWS Lambda', 'Amazon S3', 'Amazon Rekognition', 'Mongoose'],
        demoLink: '',
        codeLink: '',
    },
    {
        id: 2,
        title: 'Twitter Entity Recognition Model',
        description:
            'The project analyzes Twitter data by identifying entities such as people, organizations, and locations using a custom Named Entity Recognition (NER) system. It leverages LSTM networks and Conditional Random Fields (CRF) to improve accuracy, making it more effective for short, informal social media text.',
        image: 'images/projects/2.png',
        color: 'bg-card',
        logo: linux,
        techUsed: ['Python', 'TensorFlow', 'PyTorch', 'NLTK','spaCy'],
        demoLink: '',
        codeLink: '',
    },
    {
        id: 3,
        title: 'Task Management Web Application',
        description:
            'A full-stack task management platform designed for creating, assigning, and tracking tasks. It includes role-based access control (RBAC) with JWT and OAuth2 authentication, ensuring security. The app is optimized for scalability and performance, deployed on AWS with Docker and Kubernetes for high availability. 🚀',
        image: 'images/projects/3.png',
        color: 'bg-card',
        logo: linux,
        techUsed: ['React js', 'Node Js', 'Mongodb', 'Docker', 'Kubernetes', 'PostgresSQL','JWT'],
        demoLink: '',
        codeLink: '',
    },
    {
        id: 4,
        title: 'Netflix Subscription Prediction & Recommendation System',
        description:
            'The project predicts user subscription behavior using logistic regression and decision trees, helping streaming platforms optimize user retention strategies. Additionally, it analyzes user reviews using NLP sentiment analysis, identifying trends and improving content recommendations. 🚀',
        image: 'images/projects/4.png',
        color: 'bg-card',
        logo: linux,
        techUsed: ['Python', 'Scikit-learn', 'NLP', 'Tensorflow', 'Pandas', 'Numpy', 'Matplotlib'],
        demoLink: '',
        codeLink: '',
    },
    {
        id: 5,
        title: 'LexiQuery',
        description:
            'Developed a full-stack NLP application enabling users to upload and analyze documents with transformer-based summarization and retrieval-augmented Q&A',
        image: 'images/projects/3.png',
        color: 'bg-card',
        logo: linux,
        techUsed: ['Python', 'Scikit-learn', 'NLP', 'Tensorflow', 'Pandas', 'Numpy', 'Matplotlib', 'RAG', 'ChromaDB','LangChain'],
        demoLink: '',
        codeLink: '',
    },
];

const ProjectSection: React.FC = () => {
    return (
        <div className="relative">
            {/* Main Section */}
            <Section className={'py-10 relative'}>
                <div className="flex flex-col justify-center text-center py-10 w-2/3 mx-auto max-mobile-lg:w-full z-10">
                    <h1>Projects</h1>
                    <p>
                        Explore a collection of my projects that showcase my skills in web
                        development, problem-solving, and creating user-friendly applications. Each
                        project is built with modern technologies and designed to deliver a seamless
                        user experience.
                    </p>
                </div>

                {/* Parallax Stack */}
                <div>
                    <ParallaxStack projects={projects as Project[]} />
                </div>

                {/* Gradient Blur Effect */}
                <div className="absolute top-0 inset-0 blur-[120px] -z-10">
                    <div
                        style={{
                            clipPath:
                                'polygon(0% 90.5%, 36.75% 77.5%, 73.07% 74.24%, 100% 68.25%, 92.28% 77.5%, 100% 100%, 87.37% 79.84%, 75% 75%, 57.48% 85.62%, 32.25% 58.25%, 32.25% 90.5%)',
                        }}
                        className="sticky top-0 h-[100vh] w-full object-cover -z-10 bg-gradient-to-r from-primary/60 to-destructive/50"
                    />
                </div>
            </Section>
        </div>
    );
};

export default ProjectSection;
