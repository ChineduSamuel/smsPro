

export default function validateInfo(values) {
    let errors = {}

    if (!values.email) {
        errors.email = "Email is required"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9,-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Email address is invalid"
    }

    if (!values.fname.trim()) {
        errors.fname = "First Name required"
    }
    if (!values.lname.trim()) {
        errors.lname = "Last Name required"
    }

    if (!values.password) {
        errors.password = "Password is required"
    } else if (values.password.length < 8) {
        errors.password = "Password must be 8 characters or more"
    }

    if (!values.password2) {
        errors.password2 = "Retype password is required"
    } else if (values.password2 !== values.password) {
        console.log(values.password2, values.password)
        errors.password2 = "Passwords do not match"
    }

    return errors;
}