import { notoColorEmoji } from "@/app/font"

type footerCardProps = {
    emoji: string,
    text: string,
}

const FooterCard = ({emoji, text}: footerCardProps) => {
  return (
    <div className="inline-block bg-white w-[85px] h-[24px] pt-0.5 border-2 text-[#1A3F83] rounded-[8px] text-[12px]">
        <p><span className={`${notoColorEmoji.className} pr-1`}>{emoji}</span>{text}</p>
    </div>
  )
}

export default FooterCard