import React from 'react'
import { useTask } from './context/TaskProvider'
import { useState } from 'react';
const Navbar = () => {

    const {board,setBoard} = useTask();
    const [disabled,setDisabled] = useState(true);
    return (
        <div className='flex gap-2 items-center justify-center flex-col'>
            <div className='flex gap-2 items-center justify-center'>
                <img src="Logo.svg" alt="" />

                <input disabled={disabled} className='text-3xl w-3/6 font-medium' onChange={(e)=>setBoard(e.target.value)} type="text" value={board} />
                <button onClick={()=>setDisabled(!disabled)}><img src="Edit_duotone.svg" alt="" /></button>
            </div>

            <span>
            Tasks to keep organised
            </span>

        </div>
    )
}

export default Navbar
