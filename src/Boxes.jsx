import React from 'react'
import Box from './Box'
import {icons,stateNames } from './data'
import Dialog from './Dialog'
import { useTask } from './context/TaskProvider'




const text = ["Task in Progress","Task Completed","Task Won’t Do"]

const Boxes = ({modalRef}) => {

    const {data,setUpdateID,setInputs} = useTask();
    console.log(data);


    const handleClick=(e,task)=>{
        modalRef.current.showModal();
        console.log("updating ");
        console.log(task._id)
        setUpdateID(task._id);
        setInputs(task);
    };

    return (
        <>


        <div className='w-1/3  text-center rounded-2xl  space-y-3 '>
            {/* <Box  status={stateNames[1]} icon={icons[5]} text={text[0]}/>
            <Box  status={stateNames[2]} icon={icons[3]} text={text[1]}/>
            <Box  status={stateNames[3]} icon={icons[2]} text={text[2]}/>
            <Box  status={stateNames[0]} icon={icons[4]} text={text[2]}/> */}
        {
            data && data.map((d,index)=>{
                console.log(data)
                return <Box  handleClick={(e)=>handleClick(e,d)}  status={stateNames[d.t_status]} icon={icons[d.t_icon]} text={d.t_name} desc={d.t_desc} key={d._id} />
            })
        }


            <button onClick={() =>{
                modalRef.current.showModal();
                setInputs({
                    t_name:"",
                    t_desc:"",
                    t_icon:4,
                    t_status:0,
                })
                setUpdateID("-1");
            }} className={`font-bold flex text-sm items-center gap-5 w-full bg-[#F5E8D5]  p-2 rounded-xl`}>

                <div className="flex  items-center gap-4">
                    <span className='p-3 rounded-md bg-[#E9A23B] '><img src="Add_round_duotone.svg " className='w-5' alt="" />
                    </span>
                    <span>Add new task</span>
                </div>
            </button>

        </div>
        </>
    )
}

export default Boxes
