import React from 'react';
import { Avatar } from './ui/avatar';

const ExperienceBar: React.FC = () => {
    return (
        <nav className="px-4 flex flex-row w-full mb-10">
            <div className="flex flex-row w-full items-center">
                <Avatar className="bg-[#BBFF00] flex flex-col justify-center items-center h-6 w-6 mr-1">
                    <p className="text-base font-sf-pro-display leading-[14px] font-bold">3</p>
                </Avatar>

                <div className="w-full h-6 bg-[#FFFFFF]/[.08] rounded-full py-1 px-1">
                    <div className="h-4 bg-gradient-to-r from-[#BBFF00] to-[#FF8A01] rounded-full w-[33%]"></div>
                </div>
            </div>
        </nav>
    );
};

export default ExperienceBar;
