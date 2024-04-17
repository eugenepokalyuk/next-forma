import React, { useEffect, useRef, useState } from 'react';
import { Button } from './ui/button';

interface PersonalRecommendationsProps { }

const PersonalRecommendations: React.FC<PersonalRecommendationsProps> = ({
}) => {
    const [progress, setProgress] = useState(70); // Assuming 50% progress

    // 10 - 0%
    // 9 - 1%
    // 8 - 2%
    // 7 - 3%
    // 6 - 4%
    // 5 - 5%
    // 4 - 6%
    // 3 - 7%
    // 2 - 8%
    // 1 - 9%
    // 0 - 10%

    const pathRef = useRef<SVGPathElement>(null);
    const [circlePosition, setCirclePosition] = useState({ cx: 0, cy: 0 });

    useEffect(() => {
        if (pathRef.current) {
            const path = pathRef.current;
            const length = path.getTotalLength();
            const point = path.getPointAtLength((length * progress) / 100);
            setCirclePosition({ cx: point.x, cy: point.y - 5 });
        }
    }, [progress]);

    return (
        // rounded-t-[40px]
        <div className="py-8 px-4">
            <div className="text-[#444444] text-[22px] leading-6 font-medium mb-6 text-left font-sf-pro-display">
                Персональные рекомендации
            </div>
            <div className="flex flex-col gap-y-2">
                <div className='grid grid-cols-2 gap-2 w-full'>
                    <div className="bg-[#FFFFFF] border border-[#DEDEDE]/[.64] flex flex-col justify-between p-3 rounded-2xl">
                        <div>
                            <div className='mb-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="40" viewBox="0 0 38 40" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7015 1.14726C14.9005 0.909915 14.9214 0.567841 14.7469 0.309561C14.5741 0.0512713 14.2512 -0.0621693 13.9546 0.0338158C5.84292 2.60277 0 10.2154 0 19.1821C0 30.3551 9.07176 39.4264 20.2443 39.4264C26.6162 39.4264 32.3054 36.477 35.9475 31.8138C36.1395 31.566 36.1447 31.2222 35.958 30.9691C35.773 30.7161 35.4414 30.6201 35.1482 30.7318C33.3332 31.4212 31.3628 31.7475 29.3173 31.7475C18.9142 31.7475 10.4688 23.3025 10.4688 12.8989C10.4688 8.4312 12.0273 4.3231 14.6974 1.14653L14.7015 1.14726ZM29.274 16.9329C29.171 16.6624 28.911 16.4827 28.6213 16.4827C28.3316 16.4827 28.0733 16.6607 27.9686 16.9329L26.7312 20.179L23.4851 21.4164C23.2146 21.5193 23.0349 21.7794 23.0349 22.0691C23.0349 22.3587 23.2129 22.6171 23.4851 22.7217L26.7312 23.9591L27.9686 27.2052C28.0715 27.4757 28.3316 27.6554 28.6213 27.6554C28.911 27.6554 29.1693 27.4774 29.274 27.2052L30.5113 23.9591L33.7574 22.7217C34.0279 22.6188 34.2077 22.3587 34.2077 22.0691C34.2077 21.7794 34.0296 21.521 33.7574 21.4164L30.5113 20.179L29.274 16.9329ZM19.7015 7.76355C19.5985 7.49304 19.3385 7.31329 19.0488 7.31329C18.7591 7.31329 18.499 7.49131 18.3961 7.76355L17.1588 11.0096L13.9127 12.247C13.6422 12.35 13.4624 12.61 13.4624 12.8997C13.4624 13.1894 13.6404 13.4477 13.9127 13.5524L17.1588 14.7897L18.3961 18.0358C18.4973 18.3063 18.7574 18.4861 19.0488 18.4861C19.3385 18.4861 19.5968 18.3081 19.7015 18.0358L20.9388 14.7897L24.1849 13.5524C24.4554 13.4494 24.6352 13.1894 24.6352 12.8997C24.6352 12.61 24.4572 12.3517 24.1849 12.247L20.9388 11.0096L19.7015 7.76355ZM33.0663 2.87673C32.9633 2.60622 32.7033 2.42647 32.4136 2.42647C32.1239 2.42647 31.8656 2.60448 31.7609 2.87673L30.5236 6.12282L27.2775 7.36016C27.007 7.46313 26.8272 7.72317 26.8272 8.01285C26.8272 8.30254 27.0052 8.56087 27.2775 8.66555L30.5236 9.90289L31.7609 13.149C31.8639 13.4195 32.1239 13.5992 32.4136 13.5992C32.7033 13.5992 32.9616 13.4212 33.0663 13.149L34.3037 9.90289L37.5497 8.66555C37.8202 8.56258 38 8.30254 38 8.01285C38 7.72317 37.822 7.46484 37.5497 7.36016L34.3037 6.12282L33.0663 2.87673Z" fill="#A35BFF" />
                                </svg>
                            </div>

                            <div>
                                <div className="text-base leading-[18px] font-sf-pro-display text-[#444444] mb-[6px]">Последнюю неделю <span className='text-[#a45bff] whitespace-nowrap'>вы мало спите</span></div>
                                <div className="text-xs leading-3 font-sf-pro-display text-[#444444]/[.56]">в среднем <br /> 6 часов 50 минут</div>
                            </div>
                        </div>

                        <button className="bg-[#444444]/[.06] text-[#444444] font-sf-pro-display py-[9px] w-full rounded-lg text-sm">
                            Наладить сон
                        </button>
                    </div>

                    <div className='flex flex-col gap-y-2 w-full'>
                        <div className="bg-[#FFFFFF] border border-[#DEDEDE]/[.64] backdrop-blur-sm flex flex-col items-start justify-start w-full h-1/2 rounded-2xl text-center aspect-square p-3 relative">
                            <p className='text-[#444444] text-sm leading-4 font-sf-pro-display font-normal text-left w-10/12'>Ваш прогресс за прошлую неделю</p>
                            <div className='absolute bottom-0 right-0'>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="113"
                                    height="89"
                                    viewBox="0 0 113 89"
                                    fill="none"
                                >
                                    <path
                                        d="M22 56.4996C3.60258 53.4261 1.5 91.4996 1.5 91.4996H117C117 91.4996 140.3 -1.94907 106.5 1.50017C82.3211 3.96759 97.5 50.5002 78 52.9996C66.4929 54.4745 68.1011 32.4386 56.5 32.4996C41.2936 32.5796 55.7045 68.2522 40.5 67.9996C31.9944 67.8583 30.3905 57.9014 22 56.4996Z"
                                        fill="#BBFF00"
                                        fillOpacity="0.24"
                                        stroke="#BBFF00"
                                        strokeWidth="2"
                                        ref={pathRef}
                                    />

                                    <circle
                                        cx={circlePosition.cx}
                                        cy={circlePosition.cy}
                                        r="6"
                                        fill="#444444"
                                        stroke="#BBFF00"
                                        stroke-width="3"
                                    />
                                </svg>
                            </div>
                        </div>

                        <div className="bg-gradient-to-b from-[#E48027] to-[#E53E2E] flex flex-col items-center justify-center w-full h-1/2 rounded-full text-center aspect-square">
                            <div className='mb-[6px]'>
                                <p className='text-[#FFFFFF] text-[50px] leading-10 font-sf-pro-display font-extralight'>10</p>
                            </div>
                            <div className='w-[78px]'>
                                <p className="text-[#FFFFFF] text-sm leading-4 font-sf-pro-display font-normal">упражнений для офиса</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-[#FFFFFF] border border-[#DEDEDE]/[.64] backdrop-blur-sm rounded-2xl p-3 relative overflow-hidden">
                    <div className="w-[175px] mb-[6px]">
                        <p className='font-sf-pro-display text-[#444444] text-base leading-[18px]'>Рецепты для похудения на основе ваших предпочтений</p>
                    </div>
                    <div className="w-[112px]">
                        <p className='font-sf-pro-display text-[#444444]/[.56] text-xs leading-[14px]'>Рецепты курируются диетологами</p>
                    </div>
                    <Button className="font-sf-pro-display text-[#444444] bg-[#BBFF00] px-[21px] py-[9px] rounded-lg text-xs leading-[14px] font-normal mt-9">
                        Смотреть
                    </Button>

                    <picture className='absolute -bottom-10 -right-16'>
                        <img src="/images/soup.png" alt="" />
                    </picture>
                </div>
            </div>


        </div>
    );
};

export default PersonalRecommendations;