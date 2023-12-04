import React, { useState, useEffect } from "react";
import FeatherIcon from "feather-icons-react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const SuperPremium = () => {
  const [getuserdata, setUserdata] = useState([]);
  const [deltedata, setdeltedata] = useState("");
  console.log(deltedata);

  const getdata = async () => {
    const response = await axios({
      method: "get",
      url: "http://localhost:8000/api/getsuperpremiumdata",
    });
    setUserdata(response.data);
  };
  const deleteuser = async (id) => {
    const deleteres = await axios({
      method: "delete",
      url: `http://localhost:8000/api/deletesuperpremiumdata/${id}`,
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
    <div className="mtpx9 p20">
      <div className="flex justify-between items-center w-full">
        <div>
          <h6 className="fsize20 textprimary mtpx1 mbpx1 font-600">
            Super Premium User
          </h6>
          <p className="mtpx2 textgray fsize13">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to content.
          </p>
        </div>
      </div>

      <div className="mtpx18 rounded-10 border-ec p20">
        <div className="mtpx5 mbpx15 flex gap-12 items-center">
          <div className="w-60">
            <div className="relative">
              <input
                className="w-full h-input fsize14 rounded-5 plpx10 border-ec"
                placeholder="Search"
              />
              <div className="absolute top-0 right-0 mtpx9 mrpx2">
                <FeatherIcon
                  icon="search"
                  className="textgray cursor-pointer"
                  size={20}
                />
              </div>
            </div>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th className="fsize13 w-10 textwhite font-300">
                <p>ID</p>
              </th>
              <th className="fsize13 w-20 textwhite font-300">
                <p>Name</p>
              </th>
              <th className="fsize13 w-20 textwhite font-300">
                <p>Message</p>
              </th>
              <th className="fsize13 w-20 textwhite font-300">
                <p>Created Date</p>
              </th>
              <th className="fsize13 w-20 textwhite font-300">
                <p>Udated Date</p>
              </th>
              <th className="fsize13 w-10 textwhite font-300">
                <p>Actions</p>
              </th>
            </tr>
          </thead>
          <tbody>
            {getuserdata.map((e, id) => (
              <tr>
                <td className="fsize13 w-10 textforth">
                  <p>{id + 1}</p>
                </td>
                <td className="fsize13 w-20 textforth">
                  <p>{e.name}</p>
                </td>
                <td className="fsize13 w-20 textforth">
                  <p className="line-clamp2">{e.message}</p>
                </td>
                <td className="fsize13 w-20 textforth">
                  <p>{new Date(e.createdAt).toDateString()}</p>
                </td>
                <td className="fsize13 w-20 textforth">
                  <p>{new Date(e.updatedAt).toDateString()}</p>
                </td>
                <td className="fsize13 w-10 textforth plpx15">
                  <NavLink to={`/editplan/${e._id}`}>
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
    </div>
  );
};
export default SuperPremium;
