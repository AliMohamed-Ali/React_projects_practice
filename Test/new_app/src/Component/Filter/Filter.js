import React, { useState } from 'react'
import classes from './Filter.module.css'

const Filter = ({search}) => {
    const [filter , setFilter ]=useState("")
    const changeHandler =(e)=>{
        const name = e.target.value
        setFilter(name)
        search(name)
        // console.log(name)
    }
  return (
    <div className={classes.mb}>
      <input onChange={changeHandler} value={filter} placeholder='Search by name...'/>
    </div>
  )
}

export default Filter
