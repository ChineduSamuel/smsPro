import React from 'react'
import FormSelect from '../Forms/FormSelect'

export default function TableBordered() {
  return (
    <div className="cardy">
      <div className=" pt-5 pb-5 mb-5 d-flex justify-cotent-between align-items-center">
        <button className="btn-light mr-5 pr-5">
          <i className="fa fa-plus-circle"></i> Add Member
        </button>
        <button className="btn-dark">
          <i className="fa fa-download"></i> Download As CSV
        </button>
        <button className="btn-light ml-auto">
          <i className="fa fa-cog pr-2"></i> Perform Actions
        </button>
      </div>

      <table className="table ">
        <tr className="">
          <th className="text-center">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          </th>
          <th className="">FirstName</th>
          <th className="">LastName</th>
          <th>Phone Number</th>
          <th>Gender</th>

        </tr>
        <tr>
          <td className="text-center">
            {' '}
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          </td>
          <td>Emmanuel</td>
          <td>Sodiq</td>
          <td>07032332373</td>
          <td>Male</td>

        </tr>
        <tr>
          <td className="text-center">
            {' '}
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          </td>
          <td>Emmanuel</td>
          <td>Sodiq</td>
          <td>07032332373</td>
          <td>Male</td>

        </tr>
        <tr>
          <td className="text-center">
            {' '}
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          </td>
          <td>Emmanuel</td>
          <td>Sodiq</td>
          <td>07032332373</td>
          <td>Male</td>

        </tr>
        <tr>
          <td className="text-center">
            {' '}
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          </td>
          <td>Emmanuel</td>
          <td>Sodiq</td>
          <td>07032332373</td>
          <td>Male</td>

        </tr>

      </table>
      <div className="d-flex justify-content-end pagination-text">
        <div className="d-flex justify-content align-items-center ml-auto">
          <div className="pr-3">Showing </div>
          <div className="pr-3"><FormSelect className="select-table" /></div>
          <div>Out of 5 Custometers</div>
        </div>


      </div>

      <div className="page-text d-flex justify-content-center align-items-center">
        <div className="pt-5 d-flex justify-content align-items-center">
          <div className="pr-5">First</div>
          <div className="pr-5">Previous</div>
          <div className="pr-5"><span className="pagey-active">4</span></div>
          <div className="pr-5">First</div>
          <div>Last</div>


        </div>

      </div>


    </div>
  )
}
