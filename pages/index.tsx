import ActivityBlock from "@/components/ActivityBlock";
import BubbleOcean from "@/components/BubbleOcean/BubbleOcean";
import DailyPlanCarousel from "@/components/DailyPlanCarousel/DailyPlanCarousel";
import ExperienceBar from "@/components/ExperienceBar";
import PersonalRecommendations from "@/components/PersonalRecommendations";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import type { NextPage } from 'next';

const Home: NextPage = () => {
    return (
        <div>
            {/* Шапка */}
            <div>
                <BubbleOcean />
                <div className="bg-gradient-to-b from-[#027B34] to-[#003715] flex flex-col items-center justify-center h-full pt-4 pb-1.5 rounded-b-3xl">
                    <div className="w-full flex flex-row items-center justify-center mb-10 px-4 gap-x-3">
                        <ExperienceBar />

                        <Avatar className="w-[32px] h-[32px]">
                            <AvatarImage src="/images/icons/icon-logo.svg" alt="@shadcn" />
                            <AvatarFallback>I1</AvatarFallback>
                        </Avatar>

                        <Avatar className="w-[32px] h-[32px]">
                            <AvatarImage src="/images/icons/icon-logo.svg" alt="@shadcn" />
                            <AvatarFallback>I2</AvatarFallback>
                        </Avatar>
                    </div>

                    <div className="flex flex-col justify-center items-center ms:w-12/12 mm:w-10/12 ml:w-8/12 md:w-full mb-6">
                        <Button variant='ghost' className="uppercase font-sf-pro-display font-normal rounded-full border border-[#FFFFFF]/[.2] text-[#FFFFFF] text-[10px] tracking-[.1em] h-6 px-[10px] mb-3">
                            ЦЕЛЬ — ПОХУДЕТЬ ДО 96 КГ
                        </Button>

                        <h2 className="text-[28px] leading-[28px] text-white font-sf-pro-display w-full text-center mb-2 font-normal">План на сегодня выполнен на 40%</h2>

                        <div className="flex flex-row justify-center items-center text-center w-9/12 md:w-full">
                            <p className="text-sm text-[#FFFFFF]/[.56] font-sf-pro-display font-normal">
                                План обновляется каждый день исходя из вашей активности
                                <Popover>
                                    <PopoverTrigger>
                                        <span className="inline-flex bg-[#444444]/[.12] justify-center items-center h-[15px] w-[15px] rounded-full ml-1">
                                            <span className="text-[10px] leading-[15px] font-sf-pro-display text-[#FFFFFF]/[.56] font-normal">?</span>
                                        </span>
                                    </PopoverTrigger>
                                    <PopoverContent>Забей хуй на вопросы и сделай бутер, бро!</PopoverContent>
                                </Popover>
                            </p>
                        </div>
                    </div>
                    <DailyPlanCarousel />
                </div>
            </div>
            <div className="relative z-50">
                <ActivityBlock />
                <PersonalRecommendations />
            </div>
        </div>
    );
};

export default Home;