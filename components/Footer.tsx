'use client';

import { useRouter } from 'next/router';

const Footer = () => {
    const router = useRouter();

    return (
        <footer className="block w-full fixed bottom-0 left-0 z-50">
            <nav className="grid grid-cols-4 container mx-auto max-w-2xl justify-items-center h-full font-medium pb-5">
                <button
                    type="button"
                    className="bg-[#FFFFFF] opacity-[12%] rounded-full w-12 h-12 text-center"
                    onClick={() => router.push('/')}
                />

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