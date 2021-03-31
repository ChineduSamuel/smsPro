import React from 'react'

export default function FormInput(props) {
    return (
        <div className="forms">
            <label className="forms-label"> {props.title}:</label><br />
            <label className="labe-right"></label>
            <input type="text" name={props.name} className="form-input-element" placeholder={props.placeholder}  />
        </div>
    )
}
