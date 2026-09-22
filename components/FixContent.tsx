import React from "react";
import RotateIcon from "./RotateIcon";
import Walkman from "./Walkman";
import AnimatedTextWrapper from "./AnimatedTextWrapper";

function FixContent() {
    return (
        <div
            className="md:fixed md:w-[45vw] h-full border-r-2 items-center
        relative w-[100vw]"
        >
            <header className="md:relative md:w-auto fixed top-0 z-99 bg-white w-[100vw]">
                <div className="flex justify-between items-center md:h-[14vh] md:pr-5 h-[7vh] pl-2 pr-2">
                    <h1 className="dotGothic16 text-center md:text-[5vh] md:font-normal text-[16px] font-bold">
                        <p>SHUNTA</p>
                        <p>IWASAKI</p>
                    </h1>
                    <div className="flex gap-2 md:text-[4.5vh] text-[3vh] translate-x-[-20%]">
                        <RotateIcon icon="🎧" coefficient={0.2} />
                        <RotateIcon icon="📸" coefficient={0.6} />
                        <RotateIcon icon="🎣" coefficient={1} />
                    </div>
                    <Walkman />
                </div>

                <div className="md:relative md:top-auto  overflow-hidden whitespace-nowrap flex items-center border-t-2 border-b-2 md:h-[7vh] h-[5vh]">
                    <div className="marquee-content flex md:text-[6vh] text-[4vh]">
                        <a href="#about" className="p-[0_1.5rem]">
                            ABOUT ME
                        </a>
                        <a href="#myWork" className="p-[0_1.5rem] ">
                            MY WORK
                        </a>
                        <a href="#skills" className="p-[0_1.5rem]">
                            SKILLS
                        </a>
                        <a href="#about" className="p-[0_1.5rem]">
                            ABOUT ME
                        </a>
                        <a href="#myWork" className="p-[0_1.5rem] ">
                            MY WORK
                        </a>
                        <a href="#skills" className="p-[0_1.5rem]">
                            SKILLS
                        </a>
                        <a href="#about" className="p-[0_1.5rem]">
                            ABOUT ME
                        </a>
                        <a href="#myWork" className="p-[0_1.5rem] ">
                            MY WORK
                        </a>
                        <a href="#skills" className="p-[0_1.5rem]">
                            SKILLS
                        </a>
                    </div>
                </div>
            </header>
            <div className="bg-[#3B63AB] h-[72vh] md:mt-0 mt-[12vh]">
                <div
                    className="bg-white w-[90%] h-[80%] mx-auto border-2 rounded-[8px] translate-y-[8%] rounded-br-[0]
                before:bg-white before:content-[] before:border-2 before:border-t-0 before:w-[24%] before:h-[8%] before:block before:absolute before:right-[-2px] before:bottom-[calc(-8%+0.75px)]"
                >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        className="md:w-[40%] absolute md:top-[52%] md:left-[1vw] md:translate-y-[-50%] md:translate-x-[0]
                    w-auto h-[30vh] top-[unset] bottom-[0] left-[50%] translate-y-[0] translate-x-[-50%]"
                        src="./img/img_mainman.svg"
                        alt="岩崎俊太"
                    />
                    <div
                        className="absolute flex flex-col justify-between md:top-[36%] md:right-0 md:text-[2.5vw] text-center md:w-[60%] md:px-0
                    top-[10%] right-0 text-[24px] w-[100%] gap-5 px-5"
                    >
                        <AnimatedTextWrapper />
                        <div>
                            <div
                                className="flex justify-center mb-3 gap-1
                            text-[20px]"
                            >
                                <span
                                    className={`emoji translate-y-0.5 transform-y`}
                                >
                                    👇
                                </span>
                                <p>click to sns</p>
                                <span
                                    className={`emoji translate-y-0.5 transform-y`}
                                >
                                    👇
                                </span>
                            </div>
                            <div className="flex justify-center gap-4 h-[3vh]">
                                <a href="https://x.com/Breeze_Group/">
                                    <img
                                        src="./img/icon_x.svg"
                                        alt="X（旧Twitter）"
                                        className="h-[100%]"
                                    />
                                </a>
                                <a href="https://www.instagram.com/breezegroup_officialaccount/">
                                    <img
                                        src="./img/icon_instagram.svg"
                                        alt="instagram"
                                        className="h-[100%]"
                                    />
                                </a>
                                <a href="https://www.facebook.com/bzg.shared/">
                                    <img
                                        src="./img/icon_facebook.svg"
                                        alt="facebook"
                                        className="h-[100%]"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative overflow-hidden whitespace-nowrap flex border-t-2 border-b-2 h-[7vh]">
                {(function () {
                    const list = [];
                    for (let i = 0; i < 3; i++) {
                        list.push(
                            <p key={i} className="p-[0_1.5rem]">
                                ご覧いただきありがとうございます
                                <span
                                    className={`emoji text-[4vh] relative top-[-0.5vh]`}
                                >
                                    😆
                                </span>
                            </p>,
                        );
                    }
                    return (
                        <div className="marquee-content flex items-center text-[5vh]">
                            {list}
                        </div>
                    );
                })()}
            </div>
        </div>
    );
}

export default FixContent;
