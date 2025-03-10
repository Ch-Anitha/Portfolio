'use client';

import { motion } from 'motion/react'; // Keep the motion import as it is
import { 
    SiPython, SiCplusplus, SiHtml5, SiCss3, SiJavascript, 
    SiGnubash, SiMysql, SiSpringboot, SiNodedotjs, 
    SiTensorflow, SiPytorch, SiSnowflake, SiFirebase
} from "react-icons/si"; 

import { FaJava, FaDatabase, FaAws, FaDocker, FaGitAlt, FaJira, FaTable } from "react-icons/fa"; 
import { DiMongodb, DiGoogleCloudPlatform } from "react-icons/di"; 
import { SiRedhatopenshift } from "react-icons/si"; 
import { SiApachekafka } from "react-icons/si"; 
import { MdStorage } from "react-icons/md"; 
import { FaPython, FaBrain, FaCode } from "react-icons/fa";  

// Define the type for a skill
interface Skill {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; // Type for the icon component
    name: string; // Name of the skill
}

// Define the type for the categories object
interface Categories {
    [key: string]: Skill[]; // Each category is a key with an array of Skill objects
}

const Skills: React.FC = () => {
    // Define the categories object
    const categories: Categories = {
        languages: [
            { icon: SiPython, name: "Python" },
            { icon: SiCplusplus, name: "C++" },
            { icon: FaJava, name: "Java" },
            { icon: SiGnubash, name: "Bash" },
            { icon: SiHtml5, name: "HTML" },
            { icon: SiCss3, name: "CSS" },
            { icon: SiJavascript, name: "JavaScript" },
        ],
        "frameworks & Libraries":[
            { icon: SiTensorflow, name: "TensorFlow" },
            { icon: SiPytorch, name: "PyTorch" },
            { icon: FaPython, name: "NLTK" },
            { icon: FaBrain, name: "spaCy" },
            { icon: FaCode, name: "OpenCV" },
            { icon: SiSpringboot, name: "Spring Boot" },
            { icon: SiNodedotjs, name: "Node.js" },
        ],
        "Databases & Tools": [
            { icon: FaDatabase, name: "PostgreSQL" },
            { icon: SiMysql, name: "MySQL" },
            { icon: DiMongodb, name: "MongoDB" },
            { icon: SiSnowflake, name: "Snowflake" },
            { icon: FaTable, name: "Tableau" },
            { icon: MdStorage, name: "Power BI" },
            { icon: FaJira, name: "Jira" },
            { icon: FaGitAlt, name: "Git" },
        ],
        tools: [
            { icon: FaAws, name: "AWS (EC2, S3, RDS)" },
            { icon: DiGoogleCloudPlatform, name: "Google Cloud (GCS, Firebase)" },
            { icon: SiFirebase, name: "Firebase" },
            { icon: FaDocker, name: "Docker" },
            { icon: SiRedhatopenshift, name: "Kubernetes" },
            { icon: SiApachekafka, name: "Kafka" },
        ],
    };

    return (
        <div className="flex flex-col gap-6 p-4">
            {Object.entries(categories).map(([category, skills]) => (
                <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-2xl font-semibold mb-2 capitalize">{category}</h2>
                    <div className="flex flex-wrap justify-start items-center gap-5">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.4,
                                    delay: index * 0.1, // Cascading effect
                                    ease: 'easeOut',
                                }}
                                viewport={{ once: true }}
                                className="bg-secondary text-secondary-foreground text-xl py-1 px-2 font-bold flex gap-2 items-center justify-center border border-border rounded-lg hover:bg-secondary/90 hover:shadow-lg"
                            >
                                <skill.icon />
                                {skill.name}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default Skills;
