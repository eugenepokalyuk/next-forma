import React from 'react';

interface DataItem {
    label: string;
    currentValue: number;
    maxValue: number;
}

const StatBlock: React.FC = () => {
    const dataItems: DataItem[] = [
        { label: "Питание, ккал", currentValue: 400, maxValue: 1800 },
        { label: "Активность, шаги", currentValue: 3000, maxValue: 6000 },
        { label: "Гидратация, литры", currentValue: 3000, maxValue: 6000 }
    ];

    return (
        <div className='w-full px-2'>
            <div className="bg-[#000000]/[.12] backdrop-blur-sm rounded-xl py-[10px] w-full">
                {dataItems.map((item, index) => (
                    <div key={index} className={`flex items-center justify-between text-white pl-[12px] pr-[10px] ${dataItems.length - 1 > index ? "border-b border-[#FFFFFF]/[0.1] pb-[10px] mb-[10px]" : ""}`}>
                        <span className="font-sf-pro-display text-xs font-normal text-[#FFFFFF]/[.32] flex-1">{item.label}</span>
                        <span className="w-12 text-right font-sf-pro-display text-xs font-normal text-[#FFFFFF] pr-2">{item.currentValue}</span>
                        <span className="w-12 text-right font-sf-pro-display text-xs font-normal text-[#FFFFFF]/[.32] pr-4">{item.maxValue}</span>
                        <button className="flex justify-center items-center bg-[#FFFFFF]/[.12] backdrop-blur-sm rounded-xl w-[32px] h-[32px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <g opacity="0.48">
                                    <path d="M5 0H7V12H5V0Z" fill="white" />
                                    <path d="M12 5L12 7L-8.74228e-08 7L0 5L12 5Z" fill="white" />
                                </g>
                            </svg>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StatBlock;
