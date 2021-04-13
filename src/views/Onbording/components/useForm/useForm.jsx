import { useState, useEffect } from 'react'



const useForm = (callback, validate) => {
    const [values, setValues] = useState({
        email: '',
        fname: '',
        lname: '',
        phone: '',
        counrty: '',
        password: '',
        password2: ''
    })
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        });
        for (const value in values) {
           if (!values[value].trim()) {
               setErrors(validate(values))
           };
        }
    };
    const handleSubmit = e => {
        e.preventDefault(); 

        setErrors(validate(values));
        setIsSubmitting(true);
    };
    useEffect(() => {
        if (Object.keys(errors).length === 0 &&
            isSubmitting) {
            callback()
        }
    }, { errors });

    return { handleChange, values, handleSubmit, errors};
}; 

export default useForm; 