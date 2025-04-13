import React from 'react'

type NewsTopicProps = {
    date: string,
    content: string
}

const NewsTopic = ({date, content}: NewsTopicProps) => {
  return (
    <div className='border-b-1 mb-3'>
        <p className='text-[10px] mb-0.5'>{date}</p>
        <p className='text-[12px] pl-2 pb-1'>{content}</p>
    </div>
  )
}

export default NewsTopic