import React, { useState } from "react";
import classes from "./App.module.css";
import Card from "../Card/Card";
import Filter from "../Filter/Filter";
import Modal from "../Modal/Modal";
import Button from "../Layout/Button";
import AddUser from "../AddUser/AddUser";

function App() {
  const [showModal , setShowModal ]= useState(false)
  const [filter , setFilter ]= useState("")
  const [show, setShow] = useState(true);
  const [state, setState] = useState([
    {
      id:1,
      name: "ali",
      phone: "01012123233432",
      address: "nasrcity",
      age: 27,
      type:"boy"
    },
    {
      id:2,
      name: "mohamed",
      phone: "01012123233432",
      address: "shoubra",
      age: 21,
      type:"boy"
    },
    {
      id:3,
      name: "omar",
      phone: "012123233432",
      address: "nasrcity",
      age: 2,
      type:"boy"
    },
    {
      id:4,
      name: "fatma",
      phone: "01012123233432",
      address: "nasr",
      age: 21,
      type:"girl"
    },
    {
      id:6,
      name: "aya",
      phone: "01012123233432",
      address: "shoubra",
      age: 21,
      type:"girl"
    },
  ]);
  const delteHandler = (clickedID) => {
    setState(prevState =>{
      return prevState.filter(el => el.id !== clickedID)
    });
  };
  const addrecord = (newdata) => {
    setState([...state,newdata])
  }
  const filterHandler =(name)=>{
    setFilter(name)
  }
  const nameList = ()=>{
    if (filter.length !== 0 ){
      const filterList = state.filter(el=>el.name.includes(filter))
    return filterList
  }
  return state
}
  return (
    <div className={classes.container}>
      <Modal show={showModal} close={()=>setShowModal(false)}>
        <AddUser record={addrecord} close={()=>setShowModal(false)}/>
      </Modal>
      <h1>Boys </h1>
      <div>
      <Button onClick={() => setShow(!show)} >
        {show ? "Hide Names " : "Show Names"}
      </Button>
      <Button onClick={()=>setShowModal(true)}>Add Record </Button>
      </div>
      <Filter search={filterHandler} />
      {show && <Card names={nameList()} remove={delteHandler} />}
    </div>
  );
}

export default App;
