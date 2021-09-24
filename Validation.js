const Validation = (values) =>{
    let errors={};

    if(!values.fullname){
        errors.fullname='Name is required.';

    }
   if(!values.email){
        errors.email='Email is required.';

    } else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email='Email is invalid';
    }
    if(!values.phoneno){
        errors.phoneno='Number is required.';

    }else if (values.phoneno.length < 10){
        errors.phoneno='Please Enter valid Phone no.'
    }
    if(!values.password){
        errors.password='Password is required.'
    }else if(values.password.length < 5) {
        
        errors.password='Please Enter the Password more than five characters..!'
    }
    
    return errors;
};

export default Validation
