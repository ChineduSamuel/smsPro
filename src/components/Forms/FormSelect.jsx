import React from 'react'

export default function FormSelect(props) {
    return (
        <div className="forms">
            <label className={props.label_class}> {props.title}</label><br />
            <select id={props.classStyle} className={props.className}>
                <option value="" disabled selected>{props.placeholder}</option>
                <option>Birthday Messages</option>
                <option>Birthday Messages</option>
                <option>Birthday Messages</option>
                <option>Birthday Messages</option>
                <option>Birthday Messages</option>
            </select>            
        </div>
    )
}
