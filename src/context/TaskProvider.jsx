
import { useState,createContext, useContext } from "react";
import axios from 'axios'

const TaskContext = createContext();

export default  function TaskProvider({children}){
    

    const [data,setData ]= useState([]);
    const [board,setBoard] =useState("");
    const [updateID,setUpdateID]= useState("");

    const [inputs,setInputs]= useState({
        t_name:"",
        t_desc:"",
        t_icon:4,
        t_status:0,
    });

    return(
        <TaskContext.Provider value= {{inputs,setInputs,data,setData,board,setBoard,updateID,setUpdateID,}}>
            {children}
        </TaskContext.Provider>
    )
  
}

export const useTask = ()=>useContext(TaskContext);