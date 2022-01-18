import React ,{ useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css'
import ErrorModal from '../UI/ErrorModal';
const AddUser = props => {
    const [enteredUsername , setEnteredUsername ] = useState('')
    const [enteredAge , setEnteredAge ] = useState('')
    const [error , setError ] = useState()
    const adduserHandler = event => {
        event.preventDefault()
        if (enteredAge.trim().length === 0 || enteredUsername.trim().length === 0){
            setError(
                {
                    title:'Invalid input',
                    message:'Please enter a valid name and age (non-empty values).'
                }
            )
            return;
        }
        if(+enteredAge < 1){
            setError(
                {
                    title:'Invalid age',
                    message:'Please enter a valid age ( > 0).'
                }
            )
            return;
        }
        props.getdata(enteredUsername ,enteredAge)
        setEnteredAge('')
        setEnteredUsername("")
    }
    const handlerError = ()=>{
        setError(null);
    }

    return (
        <>
        {error &&<ErrorModal onconfirm={handlerError} title={error.title} message = {error.message} />}
        <Card className={classes.input} >
            <form onSubmit={adduserHandler}>
                <label htmlFor="username">Username</label>
                <input di="username" type="text" onChange={event=>setEnteredUsername(event.target.value)} value={enteredUsername}/>
                <label htmlFor="age">Age (Years)</label>
                <input di="age" type="number" onChange={event=>setEnteredAge(event.target.value)} value={enteredAge}/>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
        </>
    )
}

export default AddUser;