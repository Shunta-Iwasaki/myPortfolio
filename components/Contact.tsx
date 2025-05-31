import React from 'react'
import ContentHeader from './ContentHeader'
import { notoColorEmoji } from "@/app/font"

function Contact() {
  return (
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
  )
}

export default Contact