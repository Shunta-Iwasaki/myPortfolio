import React from 'react'

type myWorkSubtitleProps = {
    title: string,
}

function MyWorkSubtitle({title}: myWorkSubtitleProps )  {
  return (
    <div>
        <h3 className="text-2xl mb-2 font-bold">{title}</h3>
    </div>
  )
}

export default MyWorkSubtitle