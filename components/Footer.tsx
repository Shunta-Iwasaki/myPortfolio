import React from 'react'
import FooterCard from './FooterCard'
import { notoColorEmoji } from '@/app/font'

const Footer = () => {
  return (
    <footer className="bg-[#3B63AB] h-[130px] border-t-2 relative rounded-b-[12px]">
        {/* 上丸 */}
        <div className="before:content-[] before:absolute before:left-2 before:top-1.5 before:block before:w-[10px] before:h-[10px] before:rounded-[50%] before:bg-white before:border-2
            after:content-[] after:absolute after:right-2 after:top-1.5 after:block after:w-[10px] after:h-[10px] after:rounded-[50%] after:bg-white after:border-2"></div>
        <div className="text-white text-center">
        <div className="flex justify-center mt-4">
            <FooterCard emoji="🖥" text="MY WORK" />
            <FooterCard emoji="📰" text="NEWS" />
            <FooterCard emoji="💬" text="CONTACT" />
        </div>
        <div className="flex justify-center items-center gap-9 mt-4 text-[12px]">
            <p>MY SNS ACCOUNT <span className={`${notoColorEmoji.className}`}>👉👉👉</span></p>
            <div className="flex gap-1">
            <a href="https://x.com/Breeze_Group/"><img src="./img/icon_x.svg" alt="X（旧Twitter）" /></a>
            <a href="https://www.instagram.com/breezegroup_officialaccount/"><img src="./img/icon_instagram.svg" alt="instagram" /></a>
            <a href="https://www.facebook.com/bzg.shared/"><img src="./img/icon_facebook.svg" alt="facebook" /></a>
            </div>
        </div>
        <p className="text-[10px] mt-6">2025 SHUNTA IWASAKI</p>
        </div>
        {/* 下丸 */}
        <div className="before:content-[] before:absolute before:left-2 before:bottom-1.5 before:block before:w-[10px] before:h-[10px] before:rounded-[50%] before:bg-white before:border-2
            after:content-[] after:absolute after:right-2 after:bottom-1.5 after:block after:w-[10px] after:h-[10px] after:rounded-[50%] after:bg-white after:border-2"></div>
    </footer>
  )
}

export default Footer