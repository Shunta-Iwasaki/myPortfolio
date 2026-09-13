import React from "react";
import ContentHeader from "@/components/ContentHeader";
import MyWorkCard from "@/components/MyWorkCard";
import MyWorkSubtitle from "@/components/MyWorkSubtitle";

function MyWork() {
    return (
        <section id="myWork" className="relative">
            <ContentHeader title="MY WORK" emoji="💪" side="left-[-2px]" />
            <div className="h-[40px] w-[40px] absolute md:top-[95px] top-[80px] left-[16px] rotate-[-20deg]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    className="h-[100%]"
                    src="./img/img_workman.gif"
                    alt="重量挙げする人"
                />
            </div>
            <div className="w-[90%] mx-auto mt-[72px]">
                <div className="mb-12">
                    <MyWorkSubtitle title="Web制作" />
                    <div className="grid md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-8">
                        <MyWorkCard
                            id="ec"
                            title="某ECサイト"
                            tag="ECサイト"
                            work="Frontend / Direction"
                            img="./img/img_mywork_ec.png"
                        />
                        <MyWorkCard
                            id="aruhi"
                            title="或陽"
                            tag="WEBサイト"
                            work="Design / Frontend / Direction"
                            img="./img/img_mywork_aruhi.png"
                        />
                        <MyWorkCard
                            id="pleasanit"
                            title="PLEASANIT"
                            tag="コーポレートサイト"
                            work="Design / Frontend / Direction"
                            img="./img/img_mywork_pleasanit.png"
                        />
                        <MyWorkCard
                            id="bluenova"
                            title="Blue-Nova"
                            tag="ECサイト"
                            work="Design / Frontend / Backend"
                            img="./img/img_mywork_bn.png"
                        />
                        <MyWorkCard
                            id="teetee"
                            title="てぇてぇ水"
                            tag="LP"
                            work="Design / Frontend"
                            img="./img/img_mywork_teetee.png"
                        />
                    </div>
                </div>
                <div className="mb-8">
                    <MyWorkSubtitle title="アプリ制作" />
                    <div className="md:w-[200px] w-auto">
                        <MyWorkCard
                            id="diary"
                            title="片道交換日記"
                            tag="iOSアプリ"
                            work="Design / Direction / Backend / Release"
                            img="./img/img_mywork_diary.png"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MyWork;
