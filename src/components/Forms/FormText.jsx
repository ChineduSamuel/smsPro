import React from 'react'

export default function FormText(props) {
  return (
    <div className="forms">
      <label className="forms-label"> {props.title}:</label>
      <br />
      <textarea id="w3review" name="w3review" rows="4" cols="50" placeholder={props.placeholder}>
        
      </textarea>{' '}
    </div>
  )
}
