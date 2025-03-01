import { notoColorEmoji } from "./layout"

export default function Home() {
  return (
    <div className="w-[50vw] bg-[#8EACE2] absolute right-0">
      <main className="bg-white w-[90%] border-2 mx-auto rounded-[8px]">
        <section>
          <div className="bg-[#3B63AB] relative before:content-[] before:absolute before:left-2 before:top-1.5 before:block before:w-[10px] before:h-[10px] before:rounded-[50%] before:bg-white before:border-2
            after:content-[] after:absolute after:right-2 after:top-1.5 after:block after:w-[10px] after:h-[10px] after:rounded-[50%] after:bg-white after:border-2">
            <h2 className="text-center">MY WORK<span className={`${notoColorEmoji.className}`}>🖥</span></h2>
          </div>
        </section>
      </main>
    </div>
  );
}
