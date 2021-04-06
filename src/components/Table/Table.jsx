import React from 'react'

export default function TableBordered() {
    return (
        <div>
             <table className="table">

           <tr className="ml-5 pl-5">
          <th className="pl-5">Campaign Title</th>
          <th>Body</th>
          <th>Date</th>
        </tr>
        <tr>
          
          <td style={{paddingRight: '15rem', paddingLeft: '3rem'}}>My Soap Promo</td>
          <td  style={{paddingRight: '15rem'}}>Hurray dear customer, its a festive period and come with...</td>
          <td>5th Dec 2020.</td>
        </tr>
        <tr>
          
          <td  style={{ paddingLeft: '3rem'}}>My Soap Promo</td>
          <td >Hurray dear customer, its a festive period and come with...</td>
          <td>5th Dec 2020.</td>
        </tr>
      </table>
            
        </div>
    )
}
