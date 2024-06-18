
export const handleClose = () => {
    modalRef.current.close();

  }

export const clearInputs = ()=>{
    setInputs({  t_name: "",t_desc: "", t_icon: null,t_status: null,});
  }

export  const handleSave = async () => {

    console.log([...data, inputs]);

    let res = await axios.post("http://localhost:4001/board/add",{
      id:idRef.current,
      tasks:[...data,inputs],
      board:board
    });

    console.log("hello")
    console.log(res.data.createdTask.tasks);

    setData(res.data.createdTask.tasks);

    
    setGoToShare(true);
    setIsUpdating(false);
    clearInputs();
  };


export const handleUpdate=async()=>{
    let newData =data.filter((d)=>d._id!=updateID);
    newData = [...newData,inputs];

    let res = await axios.put("http://localhost:4001/board/update",{
      id:idRef.current,
      tasks:newData,
      board:board
    });

    console.log("hello");
  
    console.log(res.data.createdTask.tasks);
    setData(res.data.createdTask.tasks);

    setGoToShare(true);
    clearInputs();

  }

export  const handleInitialUpdate=async()=>{
    let newData =data.filter((d)=>d._id!=updateID);
    newData = [...newData,inputs];

    let res = await axios.put("http://localhost:4001/",{
      id:idRef.current,
      tasks:newData,
      board:board
    });

    console.log("hello");
  
    console.log(res.data.createdTask.tasks);
    setData(res.data.createdTask.tasks);
    setIsUpdating(false);
    setGoToShare(true);
    modalRef.current.close();
    clearInputs();

  }



export   const handleDelete = () => {
      clearInputs();
  }
