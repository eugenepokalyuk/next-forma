import ProgressBar from '@/components/ProgressBar';
import type { NextPage } from 'next';
import { useState } from 'react';

const TestPage: NextPage = () => {
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);

    const questions = [
        // {
        //     question: "Выбери свой пол",
        //     answers: ["Мужской", "Женский"]
        // }, {
        //     question: "Как ты впервые узнала о нас?",
        //     answers: ["От друзей", "От тренера", "Telegram канал", "Яндекс.Здоровье", "Другое"]
        // }, {
        //     question: "С каким сложностями в теме питания ты сталкиваешься?",
        //     answers: ["Переедаю", "Недоедаю", "Несбалансированный рацион", "Хаотичный режим питания", "Трудно придумывать меню", "Заедаю эмоции и стресс", "Хочу есть меньше сладкого", "Не могу похудеть", "Хочу узнать больше о питании",]
        // }, {
        //     question: "Какая у вас цель?",
        //     answers: ["Похудеть", "Набор мышечной массы", "Формирование рельефа", "Повысить выносливость", "Восстановиться после травмы", "Стать сильнее"]
        // }, {
        //     question: "Ваш уровень активность?",
        //     answers: ["Ничем не занимаюсь", "Тренируюсь 1 раз в неделю", "Тренируюсь 2-3 раза в неделю", "Тренируюсь 3 и более раз в неделю"]
        // }, {
        //     question: "Какой тип питания вы предпочитаете?",
        //     answers: ["Традиционное питание", "Вегетарианство", "Веганство", "Кетогенная диета", "Сыроедение"]
        // }, {
        //     question: "Как часто вы употребляете фаст-фуд?",
        //     answers: ["Никогда", "Раз в месяц", "Несколько раз в месяц", "Раз в неделю", "Несколько раз в неделю"]
        // }, {
        //     question: "Как вы обычно чувствуете себя после еды?",
        //     answers: ["Легко и энергично", "Немного вяло", "Уставшим", "Вздутым", "Тяжелым"]
        // }, {
        //     question: "Какие упражнения вам нравятся больше всего?",
        //     answers: ["Кардио (бег, велосипед)", "Силовые тренировки", "Йога или пилатес", "Командные виды спорта", "Танцы"]
        // }, {
        //     question: "Как часто вы пьете воду в течение дня?",
        //     answers: ["Менее 1 литра", "1-2 литра", "2-3 литра", "Более 3 литров"]
        // }, 

        {
            question: "СПАСИБА! Ну что, ты со мной?",
            answers: ["Я в деле 🙌"]
        },
    ];

    const handleAnswerSelection = (index: number) => {
        if (currentQuestion < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    const prevQuestion = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const restartTest = () => {
        setCurrentQuestion(0);
    };

    return (
        <div className='flex flex-col flex-grow mt-12 items-center justify-center'>
            {currentQuestion < questions.length ? (
                <section className='flex flex-col flex-grow h-full'>
                    <div className='px-2.5 py-3'>
                        <p className='text-base text-white font-unbounded'>Ответьте на несколько вопросов и получите персональную программу физической активности и план питания</p>
                    </div>

                    <article className='bg-white p-3 rounded-xl flex flex-col flex-grow max-h-[calc(100vh-25rem)]'>
                        <div className='w-full text-center mt-6'>
                            <h2 className='font-unbounded text-sm font-bold'>{questions[currentQuestion].question}</h2>
                        </div>

                        <div className='flex flex-col space-y-[6px] mt-6 mb-8 flex-grow rounded-xl scrollbar overflow-auto'>
                            {questions[currentQuestion].answers.map((answer, index) => (
                                <button
                                    key={index}
                                    className='bg-[#BBFF00] px-4 py-2 rounded-full text-sm font-open-sans font-light transition-colors duration-300 ease-in-out hover:bg-[#A0E000] active:bg-[#8CD000] outline-none'
                                    onClick={() => handleAnswerSelection(index)}
                                >
                                    {answer}
                                </button>
                            ))}
                        </div>

                        <div className='w-full text-center mt-auto grid grid-cols-3 items-center justify-start'>
                            <div>
                                <button
                                    type="button"
                                    className="bg-[#EEEEEE] rounded-full w-12 h-12 flex justify-center items-center disabled:hidden"
                                    // onClick={() => prevQuestion()}
                                    onClick={prevQuestion}
                                    disabled={currentQuestion === 0}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none">
                                        <path d="M0.744042 5.39391L5.74405 0.251052C6.06949 -0.0836839 6.59713 -0.0836839 6.92257 0.251052C7.24801 0.585786 7.24801 1.1285 6.92257 1.46323L3.34515 5.14286L14.6667 5.14286C15.1269 5.14286 15.5 5.52661 15.5 6C15.5 6.47339 15.1269 6.85714 14.6667 6.85714L3.34515 6.85714L6.92257 10.5368C7.24801 10.8715 7.248 11.4142 6.92257 11.7489C6.59713 12.0837 6.06949 12.0837 5.74405 11.7489L0.744042 6.60609C0.58328 6.44074 0.501933 6.21672 0.5 6" fill="black" fillOpacity="0.96" />
                                        <path d="M0.744042 5.39391L5.74405 0.251052C6.06949 -0.0836839 6.59713 -0.0836839 6.92257 0.251052C7.24801 0.585786 7.24801 1.1285 6.92257 1.46323L3.34515 5.14286L14.6667 5.14286C15.1269 5.14286 15.5 5.52661 15.5 6C15.5 6.47339 15.1269 6.85714 14.6667 6.85714L3.34515 6.85714L6.92257 10.5368C7.24801 10.8715 7.248 11.4142 6.92257 11.7489C6.59713 12.0837 6.06949 12.0837 5.74405 11.7489L0.744042 6.60609C0.58328 6.44074 0.501933 6.21672 0.5 6C0.502015 5.77071 0.586051 5.55641 0.744042 5.39391Z" fill="black" fillOpacity="0.96" />
                                    </svg>
                                </button>
                            </div>
                            <p className='text-[#C0C0C0] font-open-sans text-sm font-normal text-center'>{currentQuestion + 1}/{questions.length}</p>
                        </div>
                    </article>
                </section>
            ) : (
                <>
                    {/* <section className='flex flex-col items-center justify-center h-full px-2.5 py-3'>
                        <div className='text-center mb-8'>
                            <p className='text-base text-white font-unbounded'>Спасибо за прохождение теста! Теперь вы можете персонализировать свою программу тренировок и питания.</p>
                        </div>
                        <button className='bg-[#BBFF00] px-6 py-2 rounded-full text-sm font-open-sans font-normal' onClick={restartTest}>
                            Пройти тест еще раз
                        </button>
                        <Link className='bg-[#BBFF00] px-6 py-2 rounded-full text-sm font-open-sans font-normal mt-2' href={'/'}>
                            Вернуться на главную
                        </Link>
                    </section> */}
                    <ProgressBar />
                </>
            )}
        </div>
    );
};

export default TestPage;