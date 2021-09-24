import {useState,useEffect} from 'react'
import Validation from './Validation'

const useForm = (submitForm) =>{
const [values,setvalues]=useState({
    fullname:'',
    email:'',
    phoneno:'',
    password:''
})
const [errors,setErrors]=useState({})
const [dataIsCorrect,setdataIsCorrect]=useState(false)

const handleChange =(e) =>{
    setvalues({
        ...values,
        [e.target.name]: e.target.value,
    })
}

const handleFormSubmit =(e)=>{
    e.preventDefault()
    setErrors(Validation(values))
    setdataIsCorrect(true);
};

useEffect(()=>{
    if(Object.keys(errors).length === 0 && dataIsCorrect){
        submitForm(true);
    }
},[errors]);

return {handleChange,handleFormSubmit,errors,values};
}

export default useForm
