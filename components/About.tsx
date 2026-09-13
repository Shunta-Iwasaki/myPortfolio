"use client";

import React from "react";
import ContentHeader from "./ContentHeader";

function About() {
    return (
        <section id="about" className="relative">
            <ContentHeader title="ABOUT ME" emoji="😊" side="right-[-2px]" />
            <div className="w-[90%] mx-auto mb-4">
                <span className="border-b-2 px-[2px] mb-3 inline-block">
                    <h2 className="text-2xl inline">岩崎 俊太</h2>
                    <p className="inline-block ml-4">Shunta Iwasaki</p>
                </span>
                <div className="md:w-[50%] border-2 border-dashed">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="./img/about_me.webp" alt="岩崎俊太" />
                </div>
                <h3 className="border-b-2 inline-block mt-3 mb-1 text-xl text-bold">
                    About
                </h3>
                <div className="mb-8">
                    <p>
                        <span className="font-bold">フロントエンド経験</span>
                        ：３年
                    </p>
                    <p>
                        <span className="font-bold">
                            基幹システム運用経験（SAP）
                        </span>
                        ：７年
                    </p>
                    <p>
                        <span className="font-bold">強み</span>
                        ：EC運用、既存コード調査、業務理解、保守性を意識した実装
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;
