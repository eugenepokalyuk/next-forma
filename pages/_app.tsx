import { Providers } from '@/components/Providers';
import RandomImage from '@/utils/RandomImage';
import type { AppProps } from 'next/app';
import Router, { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();
    const [isPhoneScreen, setIsPhoneScreen] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const handleStart = () => setLoading(true);
        const handleComplete = () => setLoading(false);

        Router.events.on('routeChangeStart', handleStart);
        Router.events.on('routeChangeComplete', handleComplete);
        Router.events.on('routeChangeError', handleComplete);

        return () => {
            Router.events.off('routeChangeStart', handleStart);
            Router.events.off('routeChangeComplete', handleComplete);
            Router.events.off('routeChangeError', handleComplete);
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            const isPhone = window.innerWidth < 768; // Проверка на телефон
            setIsPhoneScreen(isPhone);
        };

        handleResize(); // Проверить размер при монтировании

        window.addEventListener('resize', handleResize); // Слушать изменения размера экрана

        return () => {
            window.removeEventListener('resize', handleResize); // Отписаться от событий при размонтировании
        };
    }, []);

    // if (!isPhoneScreen) {
    //     return (
    //         <section className="fixed top-0 left-0 w-screen h-screen bg-black text-white z-[9999] p-10">
    //             <h1 className="text-3xl font-bold text-center mb-4">Ууупс ...</h1>

    //             <ul className='flex flex-col h-full pb-10 justify-between max-w-3xl mx-auto'>
    //                 <li>
    //                     <p className='text-lg mb-4 text-justify'>Извините, наш сайт не предназначен для просмотра на компьютерах или планшетах. Пожалуйста, посетите его с мобильного устройства.</p>
    //                 </li>

    //                 <li>
    //                     <p className="text-lg mb-4">Если есть вопросы или предложения, не стесняйтесь пиши:</p>
    //                     <ul className="list-none space-y-2">
    //                         <li>📱 Дизайнер: <a href="https://t.me/hivanya" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">@hivanya</a></li>
    //                         <li>📱 Разраб: <a href="https://t.me/PaperCranejs" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">@PaperCraneJS</a></li>
    //                     </ul>
    //                 </li>
    //             </ul>
    //         </section>
    //     );
    // }

    if (loading) return (
        <div className="w-full h-full fixed top-0 left-0 z-[99999]">
            <div className="flex justify-center items-center mt-[40vh] animate-pulse">
                <RandomImage />
            </div>
        </div>
    )

    return (
        <Providers>
            <div className='flex flex-col min-h-screen'>
                <main className='container mx-auto max-w-2xl flex-grow py-5 flex flex-col'>
                    <aside className="fixed inset-x-0 left-[50%] -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-[#0038FF] opacity-50 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
                    </aside>

                    <nav className='flex items-center justify-between px-4'>
                        <h1 className='text-2xl leading-6 font-[700] text-[#fff] font-unbounded'>Forma</h1>
                        <button
                            type="button"
                            className="bg-[#fff] opacity-[12%] rounded-full w-12 h-12 text-center"
                            onClick={() => router.push('/')}
                        />
                    </nav>

                    <section className='flex flex-col flex-grow mb-[4rem] transition-all'>
                        <Component {...pageProps} />
                    </section>
                </main>
                <Footer />
            </div>
        </Providers>
    );
}

export default MyApp;