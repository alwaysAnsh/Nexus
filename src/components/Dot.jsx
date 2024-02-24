import React from 'react'

const Dot = ({matchRoute}) => {
  return (
    <div className={` h-1.5 rounded-[50%] w-1.5 ${matchRoute('/') ? 'bg-red-401':''} `}></div>
  )
}

export default Dot