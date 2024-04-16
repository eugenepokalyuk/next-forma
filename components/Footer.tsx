'use client';

import { useRouter } from 'next/router';

const Footer = () => {
    const router = useRouter();

    return (
        <footer className="block w-full fixed bottom-0 left-0 z-50">
            <nav className="grid grid-cols-4 container mx-auto max-w-2xl justify-items-center h-full font-medium pb-5">
                <button
                    type="button"
                    className="bg-[#FFFFFF]/10 rounded-full w-12 h-12 text-center font-unbounded text-xl text-[#fff]/40 font-light flex justify-center items-center fill-[#fff]/40"
                    onClick={() => router.push('/')}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" /></svg>
                </button>

                <button
                    type="button"
                    className="bg-[#FFFFFF] opacity-[30%] rounded-full w-12 h-12 text-center"
                    onClick={() => router.push('/')}
                />

                <button
                    type="button"
                    className="bg-[#FFFFFF] opacity-[12%] rounded-full w-12 h-12 text-center"
                    onClick={() => router.push('/')}
                />

                <button
                    type="button"
                    className="bg-[#FFFFFF]/10 rounded-full w-12 h-12 text-center font-unbounded text-xl text-[#fff]/40 font-light"
                    onClick={() => router.push('/')}
                >?</button>
            </nav>
        </footer>
    );
}

export default Footer;