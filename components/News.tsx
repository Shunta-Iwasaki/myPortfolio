"use client";

import React, { useState } from 'react'
import { notoColorEmoji } from "@/app/font"
import ContentHeader from "@/components/ContentHeader";
import NewsTopic from "@/components/NewsTopic";

function News() {
    const [ended, setEnded] = useState(false);

    return (
        <section id="news" className="relative">
            <ContentHeader title="NEWS" emoji="📰" side="left-[-2px]" />
            <div className="mx-auto w-[80%] mt-[80px] mb-[30px]">
                <NewsTopic date="2025/03/07" content="testtesttest1" />
                <NewsTopic date="2025/03/08" content="testtesttest2" />
                <NewsTopic date="2025/03/09" content="testtesttest3" />
            </div>
            <div
                className="mx-auto bg-[#8EACE2] text-white w-[125px] text-center mb-[60px] py-2 rounded-[16px] border-2 border-black">
                <p className="text-[12px] relative mr-3">VIEW MORE
                    <span className={`${notoColorEmoji.className} ${ended ? "throw-icon-out" : ''} overflow-hidden absolute top-[-1px] right-1 text-[14px]`}>😎</span>
                    <span className={`${notoColorEmoji.className} throw-icon-in absolute top-[-1px] right-1 text-[14px]`} onAnimationEnd={() => setEnded(true)}>😏</span>
                </p>
            </div>
            <span className={`${notoColorEmoji.className} helicopter absolute left-[10px] scale-x-[-1] scale-y-[1]
                text-[30px]`}>🚁</span>
            <div className="absolute top-[80px] right-[10px]">
                <span className={`${notoColorEmoji.className} absolute top-[50%] left-[50%] translate-[-50%] scale-x-[-1]
                    scale-y-[1] rotate-[25deg] text-[20px]`}>📢</span>
                <img className="rotate" src="./img/circle-text-newsinfo.svg" alt="NEWS INFO" />
            </div>
        </section>
    )
}

export default News
