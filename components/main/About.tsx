"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";

const About = () => {
    return (
        <section
            id="about-me"
            className="flex flex-col items-center justify-center gap-8 h-full relative overflow-hidden pb-10 py-20 px-10"
        >
            <motion.h1
                initial="hidden"
                whileInView="visible"
                variants={slideInFromLeft(0.5)}
                className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-5"
            >
                About Me
            </motion.h1>

            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={slideInFromLeft(0.8)}
                className="max-w-3xl text-gray-300 text-lg leading-relaxed space-y-6"
            >
                <p>
                    I&apos;m a passionate Full Stack Developer with a strong commitment to building
                    clean, scalable, and user-centric applications. With expertise across the entire
                    development stack, I transform complex problems into elegant, efficient solutions.
                </p>

                <p>
                    My journey in software development has equipped me with a deep understanding of
                    modern web technologies, best practices, and industry standards. I believe in writing
                    code that is not only functional but also maintainable, testable, and performant.
                </p>

                <div>
                    <h3 className="text-xl font-semibold text-white mb-3">What I Do</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-400">
                        <li>Build responsive, intuitive user interfaces with modern frameworks</li>
                        <li>Design and develop robust backend systems and APIs</li>
                        <li>Implement database solutions for complex data requirements</li>
                        <li>Optimize application performance and user experience</li>
                        <li>Collaborate with teams to deliver high-quality software solutions</li>
                    </ul>
                </div>

                <p>
                    I&apos;m always eager to learn new technologies and improve my craft. Let&apos;s connect
                    and discuss how I can contribute to your next great project!
                </p>
            </motion.div>
        </section>
    );
};

export default About;
