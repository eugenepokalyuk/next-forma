import DailyPlanCarousel from "@/components/DailyPlanCarousel";
import ExperienceBar from "@/components/ExperienceBar";
import StatBlock from "@/components/StatBlock";
import { Button } from "@/components/ui/button";
import type { NextPage } from 'next';

const Home: NextPage = () => {
    return (
        <div className='flex flex-col items-center justify-center h-full'>
            <ExperienceBar />

            <div className="flex flex-col justify-center items-center w-12/12 mb-6">
                <Button variant='ghost' className="uppercase font-sf-pro-display font-normal rounded-full border border-[#FFFFFF]/[.2] text-[#FFFFFF] text-[10px] tracking-[.1em] h-6 px-[10px] mb-3">
                    ЦЕЛЬ — ПОХУДЕТЬ ДО 96 КГ
                </Button>
                <h2 className="text-[28px] leading-[28px] text-white font-sf-pro-display w-full text-center mb-2 font-normal">План на сегодня выполнен на 40%</h2>
                {/*   */}
                <div className="flex flex-row justify-center items-center text-center w-9/12">
                    <p className="text-sm text-[#FFFFFF]/[.56] font-sf-pro-display font-normal">
                        План обновляется каждый день исходя из вашей активности
                        <span className="inline-flex bg-[#000000]/[.12] justify-center items-center h-[15px] w-[15px] rounded-full ml-1">
                            <span className="text-[10px] leading-[15px] font-sf-pro-display text-[#FFFFFF]/[.56] font-normal">?</span>
                        </span>
                    </p>
                </div>
            </div>

            <DailyPlanCarousel />
            <StatBlock />
        </div>
    );
};

export default Home;