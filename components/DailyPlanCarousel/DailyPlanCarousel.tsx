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
    highlight: boolean;
}

const DailyPlanCarousel: React.FC = () => {
    const sliderItems: SliderItem[] = [
        // {
        //     id: 1,
        //     title: 'Зарядка',
        //     time: 'До 10:00',
        //     option: '15 минут',
        //     experience: 250,
        //     completed: true,
        //     emoji: '💪',
        //     highlight: false
        // }, {
        //     id: 2,
        //     title: 'Завтрак',
        //     time: 'до 14:00',
        //     option: '300',
        //     experience: 125,
        //     completed: false,
        //     emoji: '🥑',
        //     highlight: false
        // }, {
        //     id: 3,
        //     title: 'Прогулка',
        //     time: 'до 19:00',
        //     option: '4000 шагов',
        //     experience: 50,
        //     completed: false,
        //     emoji: '👟',
        //     highlight: false
        // }, {

        //     id: 4,
        //     title: 'Групповая йога онлайн',
        //     time: '21:00 – 22:00',
        //     option: 'Бесплатно',
        //     experience: 500,
        //     completed: false,
        //     emoji: '🧘‍♀️',
        //     highlight: false
        // }
        {
            id: 1,
            title: 'Ночной сон',
            time: '22:30 – 07:30',
            option: '9 часов',
            experience: 300,
            completed: true,
            emoji: '🌙',
            highlight: false
        },
        {
            id: 2,
            title: 'Утренняя медитация',
            time: '07:40 – 08:00',
            option: '20 минут',
            experience: 200,
            completed: false,
            emoji: '🧘',
            highlight: false
        },
        {
            id: 3,
            title: 'Зарядка',
            time: '08:10 – 08:25',
            option: '15 минут',
            experience: 250,
            completed: false,
            emoji: '💪',
            highlight: false
        },
        {
            id: 4,
            title: 'Завтрак',
            time: '08:30 – 09:00',
            option: 'Белок',
            experience: 125,
            completed: false,
            emoji: '🥤',
            highlight: false
        },
        {
            id: 5,
            title: 'Работа/Учеба',
            time: '09:30 – 13:00',
            option: 'Внимание',
            experience: 400,
            completed: false,
            emoji: '📚',
            highlight: false
        },
        {
            id: 6,
            title: 'Обед',
            time: '13:30 – 14:00',
            option: 'Питание',
            experience: 150,
            completed: false,
            emoji: '🥗',
            highlight: false
        },
        {
            id: 7,
            title: 'Прогулка',
            time: '16:00 – 16:45',
            option: '4000 шагов',
            experience: 50,
            completed: false,
            emoji: '👟',
            highlight: false
        },
        {
            id: 8,
            title: 'Ужин',
            time: '19:00 – 19:30',
            option: 'Ужин',
            experience: 100,
            completed: false,
            emoji: '🍲',
            highlight: false
        },
        {
            id: 9,
            title: 'Групповая йога онлайн',
            time: '21:00 – 22:00',
            option: 'Бесплатно',
            experience: 500,
            completed: false,
            emoji: '🧘‍♀️',
            highlight: true
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
                                    <div className="relative h-[208px] bg-[#444444]/[.12] backdrop-blur-sm rounded-xl w-[156px] flex flex-col justify-between">
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
                                            <div className="flex flex-row flex-wrap gap-2">
                                                <Badge className={`${item.highlight && 'bg-[#199900] text-[#FFFFFF]'}`}>
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