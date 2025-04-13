import React from 'react'

type myWorkCardProps = {
    title: React.ReactNode,
    tag: string,
    work: string,
}

function MyWorkCard({title, tag, work}: myWorkCardProps )  {
  return (
    <div className={"text-center relative"}>
        <img className='mx-auto w-full' src="https://placehold.jp/170x170.png" alt="" />
        <p>{title}</p>
        <p className="text-[10px] text-[#6C6C6C]">{work}</p>
        <p className='absolute top-[10px] right-[10px] text-[8px] bg-white rounded-[4px] border px-1.5'>{tag}</p>
    </div>
  )
}

export default MyWorkCard