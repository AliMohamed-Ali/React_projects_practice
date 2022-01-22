import React, { useState } from 'react'
import Button from "../Layout/Button";
import Form from "../Layout/Form";
const AddUser = ({record,close}) => {
    const [data , setData]=useState({
        name:"",
        address:"",
        phone:"",
        age:0,
        type:'boy'
    })
  const submitHandler = (e) => {
    e.preventDefault();
    const id = Math.round(Math.random()*100)
    record({...data,id})
    close()
  };
  const changeHandler =(e)=>{
      const key =e.target.id;
      const value = e.target.value;
    //   console.log(typeof(key),value)
      setData((prevState)=>{
          return {...prevState , [key]:value}
      })
  }
  return (
    <Form onSubmit={submitHandler}>
        <Form.Controller>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Enter name" onChange={changeHandler} />
        </Form.Controller>
        <Form.Controller>
          <label htmlFor="age">Age</label>
          <input type="text" id="age" placeholder="Enter age" onChange={changeHandler}/>
        </Form.Controller>
        <Form.Controller>
          <label htmlFor="address">Address</label>
          <input type="text" id="address" placeholder="Enter address" onChange={changeHandler}/>
        </Form.Controller>
        <Form.Controller>
          <label htmlFor="phone">Phone</label>
          <input type="text" id="phone" placeholder="Enter phone" onChange={changeHandler}/>
        </Form.Controller>
        <div style={{ marginTop: "20px" }}>
          <Button type="submit">Save</Button>
          <Button type="reset">Reset</Button>
        </div>
      </Form>
  )
}

export default AddUser
