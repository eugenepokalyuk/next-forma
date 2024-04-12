import Image from 'next/image';

const images = [
    '/images/icons/bike.svg',
    '/images/icons/kabaddi.svg',
    '/images/icons/kayaking.svg',
    '/images/icons/kitesurfing.svg',
    '/images/icons/martial.svg',
    '/images/icons/run.svg',
    '/images/icons/skate.svg',
    '/images/icons/sledding.svg',
    '/images/icons/snowboarding.svg',
    '/images/icons/sprint.svg',
    '/images/icons/surfing.svg',
    '/images/icons/swim.svg'
];

const RandomImage: React.FC = () => {
    // Генерируем случайный индекс от 0 до длины массива images минус 1
    const randomIndex = Math.floor(Math.random() * images.length);
    // Получаем случайный URL из массива
    const randomImageUrl = images[randomIndex];

    return (
        <div className='loader-container'>
            <Image src={randomImageUrl} alt='Random Activity Image' width="64" height="64" className="scale-150" />
        </div>
    );
};

export default RandomImage;