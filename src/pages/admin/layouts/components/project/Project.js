import React from 'react'

const Project = () => {
  return (
    <div className="bgwhite border-d mtpx9 cust-scroll p20">
      <div className="">
        <h5 className="fsize20 textprimary mtpx1 mbpx1 font-600">Projects</h5>
        <table className="mtpx15">
          <thead>
            <tr>
              <th className="fsize13 w-10 textwhite font-300">
                <p>Id</p>
              </th>
              <th className="fsize13 w-30 textwhite font-300">
                <p>Image</p>
              </th>
              <th className="fsize13 w-20 textwhite font-300">
                <p>Created Date</p>
              </th>
              <th className="fsize13 w-20 textwhite font-300">
                <p>Updated Date</p>
              </th>
              <th className="fsize13 w-20 textwhite font-300">
                <p>Actions</p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="fsize13 w-10 textforth font-300">
                <p>Id</p>
              </td>
              <td className="fsize13 w-30 textforth font-300">
                <p>image</p>
              </td>
              <td className="fsize13 w-20 textforth font-300">
                <p>Created Date</p>
              </td>
              <td className="fsize13 w-20 textforth font-300">
                <p>Updated Date</p>
              </td>
              <td className="fsize13 w-20 textforth font-300">
                <p>Actions</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Project
