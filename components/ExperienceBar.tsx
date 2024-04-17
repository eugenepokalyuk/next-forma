import React from 'react';

const ExperienceBar: React.FC = () => {
    return (
        <nav className="flex flex-row w-full">
            <div className="flex flex-row w-full items-center">
                {/* bg-[#BBFF00] */}
                <div className="flex flex-col justify-center items-center h-8 w-8 mr-1 bg-cover" style={{
                    backgroundImage: "url('/images/icons/icon-polygon.svg')"
                }}>
                    <p className="text-sm font-sf-pro-display leading-[14px] font-bold text-[#444444]">3</p>
                </div>

                <div className="w-full h-6 bg-[#FFFFFF]/[.08] rounded-full py-1 px-1">
                    <div className="h-4 bg-gradient-to-r from-[#BBFF00] to-[#FF8A01] rounded-full w-[33%]"></div>
                </div>
            </div>
        </nav>
    );
};

export default ExperienceBar;
