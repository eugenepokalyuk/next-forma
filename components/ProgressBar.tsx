import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const ProgressBar = () => {
    const [progress, setProgress] = useState(0);
    const [progressText, setProgressText] = useState('Вот это скорость');
    const router = useRouter();

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((oldProgress) => {
                const newProgress = oldProgress + 1;
                if (newProgress === 25) setProgressText('Составляем программу');
                else if (newProgress === 50) setProgressText('Отжимаюсь');
                else if (newProgress === 75) setProgressText('Уже почти закончили');
                else if (newProgress === 100) {
                    setProgressText('Готово!');
                    clearInterval(interval);
                    setTimeout(() => router.push('/'), 1000);
                }
                return newProgress;
            });
        }, 60);

        return () => {
            clearInterval(interval);
        };
    }, [router]);

    const circleStyle = {
        strokeDasharray: '800',
        strokeDashoffset: `${800 - (800 * progress) / 100}`
    };

    return (
        <div className='flex flex-col items-center justify-center h-full'>
            <svg className='transform -rotate-90' width="300" height="300" viewBox="0 0 300 300">
                <circle cx="150" cy="150" r="125" stroke="#333333" strokeWidth="4" fill="none" />
                <circle cx="150" cy="150" r="125" stroke="#0038FF" strokeWidth="4" fill="none" style={circleStyle} />
            </svg>
            <div className='absolute flex flex-col justify-center items-center w-[150px]'>
                <p className='text-base text-white font-unbounded leading-5 text-center'>{progressText}</p>
            </div>
        </div>
    );
};

export default ProgressBar;