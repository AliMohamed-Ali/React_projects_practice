import React from 'react'
import classes from './Card.module.css'

const Card = ({names , remove}) => {
  return (
    <div className='container'>
    {names.map(({ name, age, address, phone,id,type }) => (
        <div className={classes.maincontent} key={id} style={{backgroundColor:type ==="boy" ? "palegreen" :"pink"}}>
          <div>Name :{name}</div>
          <div>Age :{age}</div>
          <div>Address :{address}</div>
          <div>Phone :{phone}</div>
          <div className={classes.btn} onClick={()=>{remove(id)}}>x</div>
        </div>
      ))}
    </div>
  )
}

export default Card
