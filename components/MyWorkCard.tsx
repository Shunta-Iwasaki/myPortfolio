import React from 'react'

type myWorkCardProps = {
    title: React.ReactNode,
    tag: string,
    work: string,
    img: string,
}

function MyWorkCard({title, tag, work, img}: myWorkCardProps )  {
  const alt = String(title);
  return (
    <div className="text-center relative cursor-pointer hover-scale-up">
        <div className='h-[200px]'>
          <img className='mx-auto w-auto h-[100%] object-contain' src={img} alt={alt} />
        </div>
        <p className='mb-1'>{title}</p>
        <p className="text-[10px] text-[#6C6C6C]">{work}</p>
        <p className='absolute top-[10px] right-[10px] text-[12px] bg-white rounded-[4px] border px-1.5'>{tag}</p>
    </div>
  )
}

export default MyWorkCard