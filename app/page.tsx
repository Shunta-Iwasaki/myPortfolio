import { notoColorEmoji } from "@/app/font"
import ContentHeader from "@/components/ContentHeader";
import Footer from "@/components/Footer";
import MyWorkCard from "@/components/MyWorkCard";
import NewsTopic from "@/components/NewsTopic";

export default function Home() {
  return (
    <div className="w-[55vw] bg-[#8EACE2] absolute right-0">
      <main className="bg-white w-[95%] border-2 mx-auto rounded-[14px] my-[20px]">
        {/* MY WORK */}
        <section id="myWork">
          <ContentHeader title="MY WORK" emoji="🖥" side="right-[-2px]" />
          <div className="h-[40px] w-[40px] absolute top-[105px] left-[calc(2.5%+16px)] rotate-[-20deg]">
            <img className="h-[100%]" src="./img/img_workman.gif" alt="重量挙げする人" />
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4 px-[5%] pt-8">
            <MyWorkCard title="或陽" tag="WEBサイト" work="Design/Coding/Management" />
            <MyWorkCard title="てぇてぇ水" tag="LP" work="Design/Coding" />
            <MyWorkCard title={<>おじいさんの<br />ゲーム屋さん</>} tag="ブログ" work="Design/Coding" />
          </div>
          <div className="mx-auto bg-[#8EACE2] text-white w-[125px] text-center mb-[60px] py-2 rounded-[16px] border-2 border-black">
            <p className="text-[12px]">VIEW MORE<span className={`${notoColorEmoji.className} pl-1 text-[14px]`}>😎</span></p>
          </div>
        </section>

        {/* NEWS */}
        <section id="news" className="relative">
          <ContentHeader title="NEWS" emoji="📰" side="left-[-2px]" />
          <div className="mx-auto w-[80%] mt-[80px] mb-[30px]">
            <NewsTopic date="2025/03/07" content="testtesttest1" />
            <NewsTopic date="2025/03/08" content="testtesttest2" />
            <NewsTopic date="2025/03/09" content="testtesttest3" />
          </div>
          <p className="text-center mb-[20px]">VIEW MORE</p>
          <span className={`${notoColorEmoji.className} helicopter absolute left-[10px] scale-x-[-1] scale-y-[1] text-[30px]`}>🚁</span>
          <div className="absolute top-[80px] right-[10px]">
            <span className={`${notoColorEmoji.className} absolute top-[50%] left-[50%] translate-[-50%] scale-x-[-1] scale-y-[1] rotate-[25deg] text-[20px]`}>📢</span>
            <img className="rotate" src="./img/circle-text-newsinfo.svg" alt="NEWS INFO" />
          </div>
        </section>
        
        {/* CONTACT */}
        <section id="contact">
          <ContentHeader title="CONTACT" emoji="💬" side="right-[-2px]" />
          <div className="flex justify-center mt-12">
            <span className="border-dashed w-[50px] h-[1px] border-1 rotate-[45deg] translate-y-4"></span>
            <p className="text-center">
              お仕事のご依頼など、<br></br>お問い合わせはこちらへご連絡ください！
            </p>
            <span className="border-dashed w-[50px] h-[1px] border-1 rotate-[-45deg] translate-y-4"></span>
          </div>
          <button className="flex contact-button-gradation text-white justify-center items-center w-[240px] h-[40px] !m-[30px_auto_60px] border-2 border-black rounded-[16px] gap-1">
            <span className={`${notoColorEmoji.className} translate-y-0.5`}>✉️</span>
            <p>メールを送る</p>
          </button>
        </section>

        {/* フッター */}
        <Footer />
      </main>
    </div>
  );
}

