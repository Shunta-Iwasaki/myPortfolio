import React from 'react'
import ContentHeader from "@/components/ContentHeader";
import MyWorkCard from "@/components/MyWorkCard";
import MyWorkSubtitle from "@/components/MyWorkSubtitle";

function MyWork() {
  return (
    <section id="myWork">
        <ContentHeader title="MY WORK" emoji="🖥" side="right-[-2px]" />
        <div className="h-[40px] w-[40px] absolute top-[105px] left-[calc(2.5%+16px)] rotate-[-20deg]">
        <img className="h-[100%]" src="./img/img_workman.gif" alt="重量挙げする人" />
        </div>
        <div className="w-[90%] mx-auto mt-[72px]">
        <div className="mb-8">
            <MyWorkSubtitle title="WEBサイト" />
            <div className="grid md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-8">
            <MyWorkCard title="或陽" tag="WEBサイト" work="Design/Coding/Management" img="./img/img_mywork_aruhi.png" />
            <MyWorkCard title="てぇてぇ水" tag="LP" work="Design/Coding" img="./img/img_mywork_teetee.png" />
            <MyWorkCard title={<>おじいさんの<br />ゲーム屋さん</>} tag="ブログ" work="Design/Coding" img="./img/img_mywork_oldman.png" />
            <MyWorkCard title="PLEASANIT" tag="コーポレートサイト" work="Design/Coding" img="./img/img_mywork_pleasanit.png" />
            </div>
        </div>
        <div className="mb-8">
            <MyWorkSubtitle title="チラシデザイン" />
            <div className="grid md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-8">
            <MyWorkCard title="カフェチラシ1" tag="デザイン" work="Design" img="./img/img_mywork_cafe1.png" />
            <MyWorkCard title="カフェチラシ2" tag="デザイン" work="Design" img="./img/img_mywork_cafe2.png" />
            </div>
        </div>
        <div className="mb-2">
            <MyWorkSubtitle title="バナーデザイン" />
            <div className="grid md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-8">
            <MyWorkCard title="カフェバナー" tag="デザイン" work="Design" img="./img/img_mywork_cafe.png" />
            <MyWorkCard title="ラーメンバナー1" tag="デザイン" work="Design" img="./img/img_mywork_ramen1.png" />
            <MyWorkCard title="ラーメンバナー2" tag="デザイン" work="Design" img="./img/img_mywork_ramen2.png" />
            </div>
        </div>
        </div>
    </section>
  )
}

export default MyWork