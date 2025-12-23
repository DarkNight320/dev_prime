import React from "react";
import ProjectCard from "../sub/ProjectCard"

const Projects = () => {
    return (
        <div
            className="flex flex-col items-center justify-center pt-2 pb-20"
            id="projects"
        >
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
                Featured Projects
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
                <ProjectCard
                    src="/p1.png"
                    title="Full Stack Blog Platform"
                    skills="Technologies: Next.js, Prisma, MongoDB, TypeScript"
                    url = "#"
                    description="A modern blogging platform with user authentication, post management, and real-time updates."

                />
                <ProjectCard
                    src="/p2.png"
                    title="Real-Time Chat Application"
                    skills="Technologies: React, Node.js, Express, Firebase, SASS"
                    url="#"
                    description="A feature-rich chat application with real-time messaging, user profiles, and notification system."
                />
                <ProjectCard
                    src="/p3.png"
                    title="Freelance Marketplace Clone"
                    skills="Technologies: React, SASS, Redux"
                    url="https://fiverr.com"
                    description="A responsive marketplace platform for freelancers with service listings and booking functionality."
                />
                <ProjectCard
                    src="/studiofreight.png"
                    title="Studio Creative Website"
                    skills="Technologies: React, Framer Motion, Three.js"
                    url="https://studiofreight.com"
                    description="An interactive creative studio website showcasing portfolio work with smooth animations."
                />
                <ProjectCard
                    src="/Mrpops.png"
                    title="E-Commerce Product Showcase"
                    skills="Technologies: React, State Management"
                    url="https://mrpops.ua"
                    description="A responsive e-commerce platform featuring product catalogs, filtering, and checkout flows."
                />
                <ProjectCard
                    src="/usconcealedcarry.png"
                    title="Content Management Website"
                    skills="Technologies: WordPress, Custom Plugins"
                    url="https://usconcealedcarry.com"
                    description="A professional content management system with custom functionality and responsive design."
                />

            </div>
        </div>
    );
};

export default Projects;