import React from 'react'
import Navbar from './Navbar'
import Boxes from './Boxes'
import Dialog from './Dialog';
import { useRef ,useState,useEffect } from 'react';
import { v4 as uuid4 } from 'uuid';
import { Navigate, useParams } from 'react-router-dom';
import { useTask } from './context/TaskProvider';
import axios from 'axios';

const Home = () => {

  const modalRef = useRef();



  const [goToShare, setGoToShare] = useState(false);

  const idRef = useRef(uuid4());

  const { data, setData, inputs, setInputs, setBoard,board,updateID } = useTask();

  useEffect(() => {
    const getData = async () => {
      let res = await axios.post("https://taskboard-q5mu.onrender.com/board/view", {
        id: '0'
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
  }

  
  const handleUpdate=async()=>{
    let newData =data.filter((d)=>d._id!=updateID);
    newData = [...newData,inputs];

    let res = await axios.put("https://taskboard-q5mu.onrender.com/board/update",{
      id:idRef.current,
      tasks:newData,
      board:board
    });

    console.log("hello");
  
    console.log(res.data.createdTask.tasks);
    setData(res.data.createdTask.tasks);
    setGoToShare(true);
    modalRef.current.close();
    clearInputs();

  }



  const handleDelete = async() => {

        let newData =data.filter((d)=>d._id!=updateID);

        let res = await axios.put("https://taskboard-q5mu.onrender.com/board/update",{
          id:idRef.current,
          tasks:newData,
          board:board
        });
        console.log("hello");
        setData(res.data.createdTask.tasks);
        setGoToShare(true);
        modalRef.current.close();
        clearInputs();
      


  }

  if(goToShare === true)
    {
       return <Navigate to={`/${idRef.current}`}/>
    }



  return (
    <div className='flex items-center justify-start gap-5 p-5 w-full min-h-[100vh] flex-col'>
      <Navbar/>
      <Boxes modalRef={modalRef}/>
      <Dialog  handleClose={handleClose} handleDelete={handleDelete} handleUpdate={handleUpdate}  modalRef={modalRef}/>
    </div>
  )
}

export default Home
