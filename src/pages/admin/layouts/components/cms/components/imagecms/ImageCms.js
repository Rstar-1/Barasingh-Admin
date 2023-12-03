import axios from "axios";
import FeatherIcon from "feather-icons-react";
import React, { useState, useEffect } from "react";
import AddImage from "./components/AddImage";
import { NavLink } from "react-router-dom";

const ImageCms = () => {
  const [imagesidebar, setimagesidebar] = useState(false);
  const [getuserdata, setUserdata] = useState([]);
  const [deltedata, setdeltedata] = useState("");
  console.log(deltedata);

  const getdata = async () => {
    const response = await axios({
      method: "get",
      url: "http://localhost:8000/api/getimagedata",
    });
    setUserdata(response.data);
  };
  const deleteuser = async (id) => {
    const deleteres = await axios({
      method: "delete",
      url: `http://localhost:8000/api/deleteimagedata/${id}`,
    });
    setdeltedata(deleteres);
    console.log(deleteres, "delete");
    if (deleteres.status === 201) {
      alert("delete data");
      window.location.reload(true);
    } else {
      alert("Category Not Submitted");
    }
  };
  useEffect(() => {
    getdata();
  }, []);
  return (
    <div>
      {imagesidebar ? (
        <div className="bg-glass2 fixed top-0 right-0 h-100 w-full z-99">
          <div className="bgwhite d-shadow sidebar-w h-100 absolute right-0 top-0">
            <div className="bgprimary p5">
              <div className="flex items-center justify-between gap-4 plpx7 prpx7">
                <p className="fsize15 textwhite mtpx4 mbpx4 cursor-pointer font-500">
                  Add Text
                </p>
                <FeatherIcon
                  icon="x"
                  className="textwhite cursor-pointer"
                  size={17}
                  onClick={() => setimagesidebar(false)}
                />
              </div>
            </div>
            <div className="p10 side-scroll">
              <AddImage />
            </div>
          </div>
        </div>
      ) : null}
      <div className="mtpx5 mbpx15 flex justify-end items-center">
        {" "}
        <button
          onClick={() => setimagesidebar(true)}
          className="border-0 cursor-pointer font-500 textwhite rounded-5 ptpx9 pbpx9 plpx25 prpx25 fsize14 bgprimary"
        >
          Add Image
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th className="fsize13 w-10 textwhite font-300">
              <p>Id</p>
            </th>
            <th className="fsize13 w-20 textwhite font-300">
              <p>Position</p>
            </th>
            <th className="fsize13 w-20 textwhite font-300">
              <p>Image</p>
            </th>
            <th className="fsize13 w-20 textwhite font-300">
              <p>Created Date</p>
            </th>
            <th className="fsize13 w-20 textwhite font-300">
              <p>Updated Date</p>
            </th>
            <th className="fsize13 w-10 textwhite font-300">
              <p>Actions</p>
            </th>
          </tr>
        </thead>
        <tbody>
          {getuserdata.map((e, id) => (
            <tr>
              <td className="fsize13 w-10 textforth font-300">
                <p>{id + 1}</p>
              </td>
              <td className="fsize13 w-20 textforth font-300">
                <p>{e.position}</p>
              </td>
              <td className="fsize13 w-20 textforth font-300">
                <img src={e.picture} className="cms-image" />
              </td>
              <td className="fsize13 w-20 textforth font-300">
                <p>{new Date(e.createdAt).toDateString()}</p>
              </td>
              <td className="fsize13 w-20 textforth font-300">
                <p>{new Date(e.updatedAt).toDateString()}</p>
              </td>
              <td className="fsize13 w-10 textforth font-300">
                <NavLink to={`/editimage/${e._id}`}>
                  {" "}
                  <FeatherIcon
                    icon="edit"
                    className="textgray cursor-pointer"
                    size={16}
                  />
                </NavLink>

                <FeatherIcon
                  onClick={() => deleteuser(e._id)}
                  icon="trash"
                  className="textgray mlpx4 cursor-pointer"
                  size={16}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ImageCms;
