import React from 'react'

export default function FormInput(props) {
    return (
        <div className="forms">
            <label className={props.label_class}> {props.title && props.title + ': '}</label><br />
            <label className="labe-right"></label>
            <input type="text" name={props.name} className={props.className} placeholder={props.placeholder}  />
            <span className="error-info">{props.error}</span>

        </div>
    )
}
