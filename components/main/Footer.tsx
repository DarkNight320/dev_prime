"use client";
import React from "react";
import {
    RxDiscordLogo,
    RxGithubLogo,
    RxInstagramLogo,
    RxTwitterLogo,
    RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] cursor-pointer">
            <div className="w-full flex flex-col items-center justify-center m-auto cursor-pointer">
                <div className="w-full h-full flex flex-row items-center justify-around flex-wrap cursor-pointer">
                </div>

                <div className="mb-[20px] text-[15px] text-center">
                    &copy; Dev Prime 2024. All rights reserved
                </div>
            </div>
        </div>
    )
}

export default Footer