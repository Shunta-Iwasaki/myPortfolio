import { notoColorEmoji } from '@/app/font'
import React from 'react'

function FixContent() {
  return (
    <div className='fixed w-[50vw] h-full'>
        <header className='flex justify-between items-center h-[14vh]'>
            <h1 className='dotGothic16 text-center text-[24px]'>
                <p>SHUNTA</p>
                <p>IWASAKI</p>
            </h1>
            <div className='flex gap-1'>
                <p className={`${notoColorEmoji.className}`}>🎧</p>
                <p className={`${notoColorEmoji.className}`}>📸</p>
                <p className={`${notoColorEmoji.className}`}>🏀</p>
            </div>
            <div>
                <p className={`${notoColorEmoji.className}`}>🚶</p>
            </div>
        </header>
        <div className='border h-[7vh]'>
            <a href="">NEWS</a>
            <a href="">CONTACT</a>
            <a href="">MY WORK</a>
        </div>
        <div className='bg-[#3B63AB] h-[72vh]'>
            <div className='bg-white w-[90%] h-[80%] mx-auto border-2 rounded-[8px] translate-y-[8%] rounded-br-[0]
            before:bg-white before:content-[] before:border-2 before:border-t-0 before:w-[24%] before:h-[8%] before:block before:absolute before:right-[-2px] before:bottom-[calc(-8%)]'>

            </div>
        </div>
        <div className='border h-[7vh]'>
            <p>ご覧いただきありがとうございます<span className={`${notoColorEmoji.className}`}>😆</span></p>
        </div>
    </div>
  )
}

export default FixContent