import React from "react";
import map from "../../../../../assets/map2.png";
import news from "../../../../../assets/new2.png";
import FeatherIcon from "feather-icons-react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import RadialSeparators from "./components/RadialSeparators";

const Dashboard = () => {
  return (
    <div className="mtpx9 prpx10 cust-scroll dashboard">
      <div className="flex gap-12 mbpx10">
        <div className="w-40">
          <div className="grid grid-cols-1 gap-2">
            <div className="rounded-5 bgsecondary p30 flex justify-between">
              <div>
                <h2 className="fsize24 mtpx1 mbpx1 textwhite">Welcome Back</h2>
                <p className="fsize12 mtpx1 mbpx1 textwhite">Dashbaord</p>
                <div className="grid-cols-3 mtpx15 gap-12">
                  <div>
                    <h3 className="fsize19 mtpx1 mbpx1 textwhite">243</h3>
                    <p className="fsize12 mtpx1 mbpx1 textwhite">Dashbaord</p>
                  </div>
                  <div>
                    <h3 className="fsize19 mtpx1 mbpx1 textwhite">103</h3>
                    <p className="fsize12 mtpx1 mbpx1 textwhite">Dashbaord</p>
                  </div>
                  <div>
                    <h3 className="fsize19 mtpx1 mbpx1 textwhite">103</h3>
                    <p className="fsize12 mtpx1 mbpx1 textwhite">Dashbaord</p>
                  </div>
                </div>
              </div>
              <img alt="map" src={news} className="gol-img" />
            </div>
            <div className="p20 rounded-5 bgwhite d-shdow mtpx10">
              <table>
                <thead>
                  <tr>
                    <th className="fsize13 textwhite font-300">
                      <p>First Name</p>
                    </th>
                    <th className="fsize13 textwhite font-300">
                      <p>Last Name</p>
                    </th>
                    <th className="fsize13 textwhite font-300">
                      <p>Email</p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="fsize13 textforth">
                      <p>Raj</p>
                    </td>
                    <td className="fsize13 textforth">
                      <p>Shetye</p>
                    </td>
                    <td className="fsize13 textforth">
                      <p>abcd@gmail.com</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="fsize13 textforth">
                      <p>Aman</p>
                    </td>
                    <td className="fsize13 textforth">
                      <p>Shukla</p>
                    </td>
                    <td className="fsize13 textforth">
                      <p>abcd@gmail.com</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="fsize13 textforth">
                      <p>Aman</p>
                    </td>
                    <td className="fsize13 textforth">
                      <p>Shukla</p>
                    </td>
                    <td className="fsize13 textforth">
                      <p>abcd@gmail.com</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="fsize13 textforth">
                      <p>Aman</p>
                    </td>
                    <td className="fsize13 textforth">
                      <p>Shukla</p>
                    </td>
                    <td className="fsize13 textforth">
                      <p>abcd@gmail.com</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p20 rounded-5 bgwhite d-shdow mtpx10">
              <div className="flex justify-between items-center">
                <h4 className="fsize18 font-400 textsecondary mtpx1 mbpx1">
                  Social Media
                </h4>
                <div className="next flex justify-center items-center">
                  <FeatherIcon
                    icon="chevron-right"
                    className="textsecondary cursor-pointer"
                    size={14}
                  />
                </div>
              </div>
              <div className="flex justify-around mtpx20 gap-12">
                <img alt="map" src={news} className="social-img" />
                <img alt="map" src={news} className="social-img" />
                <img alt="map" src={news} className="social-img" />
                <img alt="map" src={news} className="social-img" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-60">
          <div className="grid-cols-2 gap-12">
            <div className="rounded-5 overflow-hidden liner-color3 h-map relative">
              <img alt="map" src={map} className="w-full h-map filter-dash" />
              <div className="absolute  top-0 left-0 w-full h-map">
                <div className="bgsecondary rounded-5 p6 w-max">
                  <p className="textwhite fsize14 font-400">Flick the card</p>
                </div>
              </div>
            </div>
            <div className="rounded-5 overflow-hidden liner-color h-map relative">
              <img alt="map" src={map} className="w-full h-map filter-dash" />
              <div className="absolute  top-0 left-0 w-full h-map">
                <div className="bgsecondary rounded-5 p6 w-max">
                  <p className="textwhite fsize14 font-400">Flick the card</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mtpx10">
            <div className="grid grid-cols-3 gap-7 ">
              <div className="d-shadow rounded-10 p10 bgwhite">
                <h4 className="fsize15 font-400 textsecondary mtpx1 mbpx1">
                  Blog Progress
                </h4>
                <div className="p20">
                  <CircularProgressbarWithChildren
                    value={50}
                    text={`${50}%`}
                    strokeWidth={10}
                    styles={buildStyles({
                      strokeLinecap: "butt",
                    })}
                  >
                    <RadialSeparators
                      count={20}
                      style={{
                        background: "#fff",
                        width: "2px",
                        height: `${10}%`,
                      }}
                    />
                  </CircularProgressbarWithChildren>
                </div>
              </div>
              <div className="d-shadow rounded-10 p10 bgwhite">
                <h4 className="fsize15 font-400 textsecondary mtpx1 mbpx1">
                  Elearning Progress
                </h4>
                <div className="p20">
                  <CircularProgressbarWithChildren
                    value={75}
                    text={`${75}%`}
                    strokeWidth={10}
                    styles={buildStyles({
                      strokeLinecap: "butt",
                    })}
                  >
                    <RadialSeparators
                      count={20}
                      style={{
                        background: "#fff",
                        width: "2px",
                        height: `${10}%`,
                      }}
                    />
                  </CircularProgressbarWithChildren>
                </div>
              </div>
              <div className="d-shadow rounded-10 p10 bgwhite">
                <h4 className="fsize15 font-400 textsecondary mtpx1 mbpx1">
                  Ecommerce Progress
                </h4>
                <div className="p20">
                  <CircularProgressbarWithChildren
                    value={100}
                    text={`${100}%`}
                    strokeWidth={10}
                    styles={buildStyles({
                      strokeLinecap: "butt",
                    })}
                  >
                    <RadialSeparators
                      count={20}
                      style={{
                        background: "#fff",
                        width: "2px",
                        height: `${10}%`,
                      }}
                    />
                  </CircularProgressbarWithChildren>
                </div>
              </div>
            </div>
          </div>
          <div className="p20 rounded-5 bgwhite d-shdow mtpx10">
            <table>
              <thead>
                <tr>
                  <th className="fsize13 textwhite font-300">
                    <p>First Name</p>
                  </th>
                  <th className="fsize13 textwhite font-300">
                    <p>Last Name</p>
                  </th>
                  <th className="fsize13 textwhite font-300">
                    <p>Email</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="fsize13 textforth">
                    <p>Raj</p>
                  </td>
                  <td className="fsize13 textforth">
                    <p>Shetye</p>
                  </td>
                  <td className="fsize13 textforth">
                    <p>abcd@gmail.com</p>
                  </td>
                </tr>
                <tr>
                  <td className="fsize13 textforth">
                    <p>Aman</p>
                  </td>
                  <td className="fsize13 textforth">
                    <p>Shukla</p>
                  </td>
                  <td className="fsize13 textforth">
                    <p>abcd@gmail.com</p>
                  </td>
                </tr>
                <tr>
                  <td className="fsize13 textforth">
                    <p>Aman</p>
                  </td>
                  <td className="fsize13 textforth">
                    <p>Shukla</p>
                  </td>
                  <td className="fsize13 textforth">
                    <p>abcd@gmail.com</p>
                  </td>
                </tr>
                <tr>
                  <td className="fsize13 textforth">
                    <p>Aman</p>
                  </td>
                  <td className="fsize13 textforth">
                    <p>Shukla</p>
                  </td>
                  <td className="fsize13 textforth">
                    <p>abcd@gmail.com</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
