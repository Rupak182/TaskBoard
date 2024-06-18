import React, { useEffect, useRef, useState } from 'react'
import { icons, stateNames } from './data.js';
import { useTask } from './context/TaskProvider.jsx';
import axios from 'axios'
import { v4 as uuid4 } from 'uuid'
import { Navigate, useParams } from 'react-router-dom';

const Dialog = ({handleClose,handleDelete,handleUpdate,modalRef}) => {
  const {  inputs, setInputs } = useTask();

  return (
    <dialog ref={modalRef}
      id="info-dialog" className='data max-w-[33vw] min-h-[80vh] min-w-[40vw] my-4 mb-4 mr-4 p-3   rounded-lg ' >
      <div className='flex gap-3 flex-col '>
        <div className="top flex justify-between ">
          <span className='font-semibold'>Task Details</span>
          <button onClick={handleClose} className='border p-2 rounded-md'><img src="close_ring_duotone-1.svg" alt="" /></button>
        </div>

        <div className="name flex flex-col gap-2">
          <span className='text-xs text-[#97A3B6]'>Task name</span>
          <input name='t_name' value={inputs.t_name}
            onChange={(e) => (setInputs({ ...inputs, t_name: e.target.value }))} type="text" className='p-1 outline-[#3662E3] px-3 border-2 rounded-md border-[#E3E8EF]' />
        </div>

        <div className="description flex flex-col gap-2">
          <span className='text-xs text-[#97A3B6]'>Description</span>
          <textarea name='t_desc' value={inputs.t_desc} onChange={(e) => (setInputs({ ...inputs, t_desc: e.target.value }))} placeholder='Enter a short description'  className='outline-[#3662E3] p-1 h-[20vh]  outline-[# ] px-3 border-2 rounded-md border-[#E3E8EF] resize-none' id="">
          </textarea>
        </div>

        <div className="icons flex gap-2 flex-col">
          <span className='text-xs text-[#97A3B6]'>Icon</span>

          <div className='flex gap-2'>
            {
              icons.map((icon, index) => {
                return <button name='t_icon' key={index} onClick={() => setInputs({ ...inputs, t_icon: index })} className='border p-2 outline-[#3662E3] focus-within:outline rounded-md bg-[#E3E8EF]'><img src={icon} className='w-6' alt="" /></button>

              })
            }

          </div>
        </div>

        <div className=" flex flex-col gap-2">
          <span className='text-xs text-[#97A3B6]'>Status</span>
          <div className='grid grid-cols-2 gap-2'>

            {
              stateNames.map((status, index) => {
                return index > 0 && <button key={index} name='t_status' onClick={() => setInputs({ ...inputs, t_status: index })} className='border-2 p-1 outline-[#3662E3] focus-within:outline  rounded-xl border-[#E3E8EF] flex gap-2 items-center'><div className={`p-2 rounded-md ${status.color2}`} ><img src={status.icon} alt="" /></div>
                  <span>{status.state}</span></button>
              })
            }

          </div>
        </div>

        <div className="buttons justify-end  flex gap-3 p-4">


          <button onClick={handleDelete} className='p-1 bg-[#97A3B6] rounded-full px-4'><span className='flex gap-2 text-xs text-white items-center justify-center'><span>Delete</span><img src="Trash.svg" alt="" /></span></button>
          <button onClick={  (handleUpdate) } className='p-1 bg-[#3662E3] rounded-full px-4'><span className='flex gap-2 text-xs text-white items-center justify-center'><span>Save</span><img src="Done_round.svg" alt="" /></span></button>

        </div>

      </div>
    </dialog>
  )
}

export default Dialog
