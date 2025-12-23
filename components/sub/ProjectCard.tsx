
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
    src: string;
    title: string;
    description: string;
    skills: string;
    url:string;
}

const ProjectCard = ({ src, title, skills, description,url }: Props) => {
    return (
        <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] cursor-pointer z-50">
            <Link href={`${url}`}target="_blank" passHref >
                <Image
                    src={src}
                    alt={title}
                    width={1000}
                    height={1000}
                    className="w-full object-contain cursor-pointer"
                />
            </Link>


            <div className="relative p-4">
                <h1 className="text-2xl font-semibold text-white cursor-pointer">{title}</h1>
                {/* <p className="mt-2 text-gray-300">{skills}</p> */}
            </div>
        </div>
    );
};

export default ProjectCard;
