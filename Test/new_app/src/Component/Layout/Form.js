import React from 'react'
import classes from './Form.module.css'

const Form =(props)=>{
  return (<form onSubmit={props.onSubmit}>
    {props.children}
  </form>
  )};

const Controller = (props) => {
  return (
    <div className={classes.control}>
       {props.children}
    </div>
  )
};

Form.Controller = Controller;

export default Form;
