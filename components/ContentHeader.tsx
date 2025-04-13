import { notoColorEmoji } from '@/app/font'

type contentHeaderProps = {
    title: string,
    emoji: string,
    side: string,
}

function ContentHeader({title, emoji, side}: contentHeaderProps) {
  return (
    <div className='relative'>
      <div className="bg-[#3B63AB] relative border-b-2 mb-9 h-[70px] pt-4.5 rounded-t-[12px] shadow-top z-20
        before:content-[] before:absolute before:left-2 before:top-1.5 before:block before:w-[10px] before:h-[10px] before:rounded-[50%] before:bg-white before:border-2
        after:content-[] after:absolute after:right-2 after:top-1.5 after:block after:w-[10px] after:h-[10px] after:rounded-[50%] after:bg-white after:border-2">
          <div className={`bg-[#3B63AB] border-2 border-t-0 w-[24%] h-[20px] block absolute ${side} bottom-[calc(-20px)]`}></div>
          <div className="text-[24px] relative">
              <h2 className="text-center text-white relative z-20">{title}<span className={`${notoColorEmoji.className} pl-3`}>{emoji}</span></h2>
              <p className="absolute top-0 left-[50%] translate-x-[calc(-50%+2px)] translate-y-[2px] z-10">{title}<span className={`${notoColorEmoji.className} opacity-0 pl-3`}>🖥</span></p>
          </div>
      </div>
      {/* top黒線代用 */}
      <div className="bg-[#000] border-b-2 mb-9 w-[calc(100%+2px)] h-[40px] rounded-t-[10px] absolute top-[-1] left-[-1px] z-10">
      </div>
    </div>
  )
}

export default ContentHeader