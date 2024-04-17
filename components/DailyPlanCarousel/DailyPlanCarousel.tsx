import React from 'react';
import { Badge } from '../ui/badge';
import { Card, CardContent } from '../ui/card';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import styles from './DailyPlanCarousel.module.css';

interface SliderItem {
    id: number;
    title: string;
    time: string;
    option: string;
    experience: number;
    completed: boolean;
    emoji: string;
}

const DailyPlanCarousel: React.FC = () => {
    const sliderItems: SliderItem[] = [
        {
            id: 1,
            title: 'Зарядка',
            time: 'До 10:00',
            option: '15 минут',
            experience: 250,
            completed: true,
            emoji: '💪',
        }, {
            id: 2,
            title: 'Завтрак',
            time: 'до 14:00',
            option: '300',
            experience: 125,
            completed: false,
            emoji: '🥑',

        }, {
            id: 3,
            title: 'Прогулка',
            time: 'до 19:00',
            option: '4000 шагов',
            experience: 50,
            completed: false,
            emoji: '👟',
        }, {
            id: 4,
            title: 'Послать в жопу',
            time: 'До 23:59',
            option: '3 раза',
            experience: 300,
            completed: false,
            emoji: '🖕',
        }
    ];
    return (
        <Carousel className='w-full h-[240px]'>
            <CarouselContent>
                {sliderItems.map((item, index) => (
                    <CarouselItem key={index} className={styles.carouselItem}>
                        <div>
                            <Card className='bg-transparent border-transparent'>
                                <CardContent className='flex space-x-2 sm:space-x-4 lg:space-x-6'>
                                    <div className="relative h-[208px] bg-[#000000]/[.12] backdrop-blur-sm rounded-xl w-[156px] flex flex-col justify-between">
                                        <div className="absolute -top-8 left-[50%] translate-x-[-50%] text-center">
                                            <p className="text-[80px]">{item.emoji}</p>
                                        </div>

                                        <div className="flex flex-col justify-center items-left gap-y-4 mt-auto p-3">
                                            <div className="space-y-1">
                                                <p className="text-[#fff] text-base leading-[18px] font-medium font-sf-pro-display flex items-center">{item.title}
                                                    {item.completed && (
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none" className="ml-1 w-[12px] h-[10px]">
                                                            <path d="M1 5.83871L5.93208 11L13 1" stroke="url(#paint0_linear_226_4015)" stroke-width="2" />
                                                            <defs>
                                                                <linearGradient id="paint0_linear_226_4015" x1="7.35714" y1="1" x2="7.35714" y2="11" gradientUnits="userSpaceOnUse">
                                                                    <stop stop-color="#C2F401" />
                                                                    <stop offset="1" stop-color="#FE8E02" />
                                                                </linearGradient>
                                                            </defs>
                                                        </svg>
                                                    )}
                                                </p>
                                                <p className="text-[#fff] text-xs leading-[14px] font-normal font-sf-pro-display">{item.time}</p>
                                            </div>
                                            <div className="flex flex-row flex-wrap gap-x-2">
                                                <Badge>
                                                    <p className="font-sf-pro-display text-xs font-normal leading-3">{item.option}</p>
                                                </Badge>

                                                <Badge>
                                                    <p className="font-sf-pro-display text-xs font-normal leading-3">+{item.experience} XP</p>
                                                </Badge>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
};

export default DailyPlanCarousel;