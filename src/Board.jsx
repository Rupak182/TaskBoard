import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar';
import Boxes from './Boxes';
import { useTask } from './context/TaskProvider';
import Dialog from './Dialog';
import { useRef,useState,useEffect } from 'react';
import axios from 'axios';

const Board = () => {
  const modalRef = useRef();
  
  const {id}  = useParams();
  console.log(id);




  const { data, setData, inputs, setInputs, setBoard,board,updateID } = useTask();

  useEffect(() => {
    const getData = async () => {
      let res = await axios.post("https://taskboard-q5mu.onrender.com/board/view", {
        id: id
      });

      console.log(res);
      setData(res.data.tasks);
      setBoard(res.data.board);
    }

   getData();

  }, [])


  const handleClose = () => {
    modalRef.current.close();
  }

  const clearInputs = ()=>{
    setInputs({  t_name: "",t_desc: "", t_icon: 4,t_status: 0,});
  };



  const handleUpdate=async()=>{
    let newData =data.filter((d)=>d._id!=updateID);
    newData = [...newData,inputs];

    let res = await axios.put("https://taskboard-q5mu.onrender.com/board/update",{
      id:id,
      tasks:newData,
      board:board
    });

    console.log("hello");
  
    console.log(res.data.createdTask.tasks);
    setData(res.data.createdTask.tasks);
    modalRef.current.close();
    clearInputs();

  }


  const handleDelete = async() => {
      
        let newData =data.filter((d)=>d._id!=updateID);
    
        let res = await axios.put("https://taskboard-q5mu.onrender.com/board/update",{
          id:id,
          tasks:newData,
          board:board
        });
    
        console.log("hello");
      
        console.log(res.data.createdTask.tasks);
        setData(res.data.createdTask.tasks);
        modalRef.current.close();
        clearInputs();
      


  }


  return (
    <div className='flex items-center justify-start gap-5 p-5 w-full min-h-[100vh] flex-col'>
      <Navbar/>
      <Boxes modalRef={modalRef}/>
      <Dialog  handleClose={handleClose} handleDelete={handleDelete} handleUpdate={handleUpdate} modalRef={modalRef}/>

      <div className='text-xs'>
      <a href="https://www.freepik.com/icon/">Icon by Freepik</a>
      </div>

    </div>
  )
}

export default Board
