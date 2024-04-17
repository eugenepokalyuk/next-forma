import { useEffect, useState } from 'react';
import styles from './BubbleOcean.module.css';

type TBubble = {
    id: number;
    width: number;
    left: number;
    animationDelay: string;
    animationDuration: string;
    opacity: string;
}

const BubbleOcean = () => {
    const [bubbles, setBubbles] = useState([]);

    useEffect(() => {
        const newBubbles: TBubble[] = Array.from({ length: 50 }).map((_, index) => ({
            id: index,
            width: Math.floor(Math.random() * 9 + 10), // 10px to 18px
            left: Math.floor(Math.random() * 100),
            animationDelay: `${Math.random() * 15 - 5}s`, // -5s to 10s
            animationDuration: `${Math.random() * 30 + 10}s`, // 10s to 40s
            opacity: `${Math.random() * 0.01 + 0.02}`
        }));
        setBubbles(newBubbles as any);
    }, []);

    return (
        <div className='fixed'>
            <div className={`${styles.ocean}`}>
                {bubbles.map((bubble: TBubble) => (
                    <div
                        key={bubble.id}
                        className={styles.bubble}
                        style={{
                            width: `${bubble.width}px`,
                            height: `${bubble.width}px`,
                            left: `${bubble.left}%`,
                            animationDelay: bubble.animationDelay,
                            animationDuration: bubble.animationDuration,
                            opacity: bubble.opacity
                        }}
                    />
                ))}
                <div className={styles.octocat}></div>
            </div>
        </div>
    );
};

export default BubbleOcean;