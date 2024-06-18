import React from "react"

const Box = ({ status,icon,text,desc,handleClick }) => {

  return (
    <button onClick={handleClick}  className={` flex justify-between w-full ${status.color}   p-2 py-3 rounded-xl`}>

      <div className="flex  items-center gap-4">
        <span className='p-2 rounded-md bg-[#f8fafc] '><img src={icon} className='w-6' alt="" />
        </span>
        <div className="flex flex-col gap-1 text-start items-start justify-start">
        <span className="font-bold">{text}</span>
        <span className="text-sm">{desc}</span>
        </div>


      </div>

      <span className={`p-3 rounded-md ${status.color2}`}><img src={status.icon} alt="" /></span>
    </button>
  )
}

export default Box
