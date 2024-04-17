import { Button } from "./ui/button";

const ActivityBlock = () => {
    return (
        <div className='w-full grid grid-cols-3 px-4 mt-6 gap-x-1'>
            <div className="bg-[#FFFFFF] border border-[#DEDEDE]/[.64] rounded-xl p-2 pr-[6px] pb-[6px]">
                <div className="w-[32px] h-[32px] bg-slate-400 mb-8"></div>
                <div className="mb-2">
                    <h3 className="text-sm font-sf-pro-display leading-[14px] text-[#444444]">Питание</h3>
                    <p className="text-sm font-sf-pro-display leading-[14px] text-[#444444]">ккал</p>
                </div>
                <div className="flex justify-between">
                    <p className="text-sm font-sf-pro-display leading-[14px] text-[#444444]">1200</p>

                    <Button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <g opacity="0.48">
                                <path d="M5 0H7V12H5V0Z" fill="white" />
                                <path d="M12 5L12 7L-8.74228e-08 7L0 5L12 5Z" fill="white" />
                            </g>
                        </svg>
                    </Button>
                </div>
            </div>

            <div className="bg-[#FFFFFF] border border-[#DEDEDE]/[.64] rounded-xl p-2 pr-[6px] pb-[6px]">
                <div className="w-[32px] h-[32px] bg-slate-400 mb-8"></div>
                <div className="mb-2">
                    <h3 className="text-sm font-sf-pro-display leading-[14px] text-[#444444]">Жидкость</h3>
                    <p className="text-sm font-sf-pro-display leading-[14px] text-[#444444]">мл</p>
                </div>
                <div className="flex justify-between">
                    <p className="text-sm font-sf-pro-display leading-[14px] text-[#444444]">1200</p>
                    <Button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <g opacity="0.48">
                                <path d="M5 0H7V12H5V0Z" fill="white" />
                                <path d="M12 5L12 7L-8.74228e-08 7L0 5L12 5Z" fill="white" />
                            </g>
                        </svg>
                    </Button>
                </div>
            </div>

            <div className="bg-[#FFFFFF] border border-[#DEDEDE]/[.64] rounded-xl p-2 pr-[6px] pb-[6px]">
                <div className="w-[32px] h-[32px] bg-slate-400 mb-8"></div>
                <div className="mb-2">
                    <h3 className="text-sm font-sf-pro-display leading-[14px] text-[#444444]">Шаги</h3>
                    <p className="text-sm font-sf-pro-display leading-[14px] text-[#444444]">с Garmin</p>
                </div>
                <div className="flex justify-between">
                    <p className="text-sm font-sf-pro-display leading-[14px] text-[#444444]">1200</p>
                    <Button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <g opacity="0.48">
                                <path d="M5 0H7V12H5V0Z" fill="white" />
                                <path d="M12 5L12 7L-8.74228e-08 7L0 5L12 5Z" fill="white" />
                            </g>
                        </svg>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ActivityBlock;