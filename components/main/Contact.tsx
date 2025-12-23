"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
import {
    RxDiscordLogo,
    RxGithubLogo,
    RxInstagramLogo,
    RxLinkedinLogo,
    RxTwitterLogo,
} from "react-icons/rx";
import { FaEnvelope } from "react-icons/fa";

const Contact = () => {
    const contactMethods = [
        {
            icon: <FaEnvelope size={30} />,
            label: "Email",
            value: "HelloNight320@gmail.com",
            link: "mailto:HelloNight320@example.com",
        },
        {
            icon: <RxGithubLogo size={30} />,
            label: "GitHub",
            value: "github.com/DarkNight320",
            link: "https://github.com/DarkNight320",
        },
        {
            icon: <RxTwitterLogo size={30} />,
            label: "Twitter",
            value: "dark_night68169",
            link: "https://twitter.com/dark_night68169",
        },
        {
            icon: <RxInstagramLogo size={30} />,
            label: "Instagram",
            value: "hellonight320",
            link: "https://instagram.com/hellonight320",
        },
    ];

    return (
        <section
            id="contact"
            className="flex flex-col items-center justify-center gap-8 h-full relative overflow-hidden pb-10 py-20 px-10"
        >
            <motion.h1
                initial="hidden"
                whileInView="visible"
                variants={slideInFromLeft(0.5)}
                className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-5"
            >
                Get In Touch
            </motion.h1>

            <motion.p
                initial="hidden"
                whileInView="visible"
                variants={slideInFromLeft(0.7)}
                className="text-gray-300 text-lg text-center max-w-2xl mb-8"
            >
                I&apos;d love to hear about your projects and how I can help. Feel free to reach out
                through any of the following channels.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl w-full">
                {contactMethods.map((method, index) => (
                    <motion.a
                        key={index}
                        href={method.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial="hidden"
                        whileInView="visible"
                        variants={slideInFromLeft(0.5 + index * 0.15)}
                        className="flex flex-col items-center justify-center p-6 rounded-lg bg-[#0300145e] border border-[#7042f861] hover:border-[#7042f8] hover:bg-[#0300147e] transition-all duration-300 cursor-pointer"
                    >
                        <div className="text-[#b49bff] mb-3">{method.icon}</div>
                        <h3 className="text-white font-semibold mb-1">{method.label}</h3>
                        <p className="text-gray-400 text-sm text-center">{method.value}</p>
                    </motion.a>
                ))}
            </div>
        </section>
    );
};

export default Contact;
