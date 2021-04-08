import React from 'react'

export default function FormText(props) {
  return (
    <div className="forms">
      <label className={props.label_class}> {props.title}:</label>
      <br />
      <textarea  name="w3review" rows="4" cols="50" placeholder={props.placeholder}>
        
      </textarea>{' '}
    </div>
  )
}
