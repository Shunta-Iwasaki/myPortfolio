import { notoColorEmoji } from '@/app/font'
import React from 'react'
import RotateIcon from './RotateIcon';
import Walkman from './Walkman';
import AnimatedText from './AnimatedText';
import AnimatedTextWrapper from './AnimatedTextWrapper';

function FixContent() {
  return (
    <div className='md:fixed md:w-[45vw] h-full border-r-2 items-center
        sm:relative sm:w-[100vw]'>
        <header className='flex justify-between items-center h-[14vh] pr-2'>
            <h1 className='dotGothic16 text-center md:text-[5vh] text-[4vh]'>
                <p>SHUNTA</p>
                <p>IWASAKI</p>
            </h1>
            <div className='flex gap-2 text-[2vh] translate-x-[-20%]'>
                <RotateIcon icon="🎧" coefficient={0.2} />
                <RotateIcon icon="📸" coefficient={0.6} />
                <RotateIcon icon="🏀" coefficient={1} />
            </div>
            <Walkman />
        </header>
        <div className="relative overflow-hidden whitespace-nowrap flex items-center border-t-2 border-b-2 h-[7vh]">
            <div className="marquee-content flex text-[6vh]">
                <a href="#myWork" className="p-[0_1.5rem] ">MY WORK</a>
                <a href="#news" className="p-[0_1.5rem]">NEWS</a>
                <a href="#contact" className="p-[0_1.5rem]">CONTACT</a>
                <a href="#myWork" className="p-[0_1.5rem]">MY WORK</a>
                <a href="#news" className="p-[0_1.5rem]">NEWS</a>
                <a href="#contact" className="p-[0_1.5rem]">CONTACT</a>
                <a href="#myWork" className="p-[0_1.5rem]">MY WORK</a>
                <a href="#news" className="p-[0_1.5rem]">NEWS</a>
                <a href="#contact" className="p-[0_1.5rem]">CONTACT</a>
            </div>
        </div>
        <div className='bg-[#3B63AB] h-[72vh]'>
            <div className='bg-white w-[90%] h-[80%] mx-auto border-2 rounded-[8px] translate-y-[8%] rounded-br-[0]
                before:bg-white before:content-[] before:border-2 before:border-t-0 before:w-[24%] before:h-[8%] before:block before:absolute before:right-[-2px] before:bottom-[calc(-8%+0.75px)]'>
                <img className='lg:w-[40%] absolute lg:top-[55%] lg:left-[1vw] lg:translate-y-[-50%] lg:translate-x-[0]
                    w-[50%] top-[unset] bottom-[0] left-[50%] translate-y-[0] translate-x-[-50%]' src="./img/img_mainman.svg" alt="岩崎俊太" />
                <div className='absolute flex flex-col justify-between lg:top-[38%] lg:right-0 lg:text-[2.5vw] text-center lg:w-[60%] lg:h-[22vh]
                    top-[10%] right-0 text-[4vw] w-[100%] h-[20vh]'>
                    <AnimatedTextWrapper />
                    <div>
                        <div className='flex lg:text-[20px] justify-center mb-3 gap-1
                            text-[24px]'>
                            <span className={`${notoColorEmoji.className} translate-y-0.5 transform-y`}>👇</span>
                            <p>click to sns</p>
                            <span className={`${notoColorEmoji.className} translate-y-0.5 transform-y`}>👇</span>
                        </div>
                        <div className='flex justify-center gap-4 h-[3vh]'>
                            <img src="./img/icon_x.svg" alt="X（旧Twitter）" />
                            <img src="./img/icon_instagram.svg" alt="インスタグラム" />
                            <img src="./img/icon_facebook.svg" alt="フェイスブック" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="relative overflow-hidden whitespace-nowrap flex border-t-2 border-b-2 h-[7vh]">
            {
                (function () {
                    const list = [];
                    for (let i = 0; i < 3; i++) {
                        list.push(<p key={i} className='p-[0_1.5rem]'>ご覧いただきありがとうございます<span className={`${notoColorEmoji.className} text-[4vh] relative top-[-0.5vh]`}>😆</span></p>);
                    }
                    return <div className='marquee-content flex items-center text-[5vh]'>{list}</div>;
                }())
            }
        </div>
    </div>
  )
}

export default FixContent