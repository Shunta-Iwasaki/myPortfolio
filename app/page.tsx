import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MyWork from "@/components/MyWork";
import News from "@/components/News";

export default function Home() {
  return (
    <div className="md:w-[55vw] bg-[#8EACE2] md:absolute right-0 md:py-0
      relative w-[100vw] py-[20px]">
      <main className="bg-white w-[95%] border-2 mx-auto rounded-[14px] md:my-[20px]
        my-0">
        {/* MY WORK */}
        <MyWork />
        {/* NEWS */}
        <News />
        {/* CONTACT */}
        <Contact />
        {/* フッター */}
        <Footer />
      </main>
    </div>
  );
}

