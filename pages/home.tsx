import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
    return (
        <div className='flex flex-col items-center justify-center h-full'>
            <h1>Welcome to the Test!</h1>
            <Link href="/test">
                <a className='bg-[#BBFF00] px-6 py-2 rounded-full text-sm font-open-sans font-normal'>
                    Start Test
                </a>
            </Link>
        </div>
    );
};

export default Home;