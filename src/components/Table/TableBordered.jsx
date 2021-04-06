import React from "react";

export default function TableBordered() {
  return (
    <div className="bordered-table">
      
      <table className="table table-bordered">
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
          <td>
            {" "}
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          </td>
          <td>
           Emmanuel
          </td>
          <td >
            Sodiq
          </td>
          <td>07032332373</td>
          <td>Male</td>

        </tr>
        <tr>
          <td>
            {" "}
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          </td>
          <td>
           Emmanuel
          </td>
          <td >
            Sodiq
          </td>
          <td>07032332373</td>
          <td>Male</td>

        </tr>
        <tr>
          <td>
            {" "}
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          </td>
          <td>
           Emmanuel
          </td>
          <td >
            Sodiq
          </td>
          <td>07032332373</td>
          <td>Male</td>

        </tr>
        <tr>
          <td>
            {" "}
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          </td>
          <td>
           Emmanuel
          </td>
          <td >
            Sodiq
          </td>
          <td>07032332373</td>
          <td>Male</td>

        </tr>
       
    
       
      </table>
    </div>
  );
}
