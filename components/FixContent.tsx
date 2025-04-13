import { notoColorEmoji } from '@/app/font'
import React from 'react'
import RotateIcon from './RotateIcon';
import Walkman from './Walkman';
import AnimatedText from './AnimatedText';

function FixContent() {
  return (
    <div className='fixed w-[45vw] h-full border-r-2 items-center'>
        <header className='flex justify-between items-center h-[14vh] pr-2'>
            <h1 className='dotGothic16 text-center text-[5vh]'>
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
                before:bg-white before:content-[] before:border-2 before:border-t-0 before:w-[24%] before:h-[8%] before:block before:absolute before:right-[-2px] before:bottom-[calc(-8%)]'>
                <div className='absolute'>
                    <AnimatedText text="WELCOME　TO　MY　PORTFOLIO　SITE!!" />
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