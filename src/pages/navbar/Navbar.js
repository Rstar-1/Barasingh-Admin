import React, { useState } from "react";
import FeatherIcon from "feather-icons-react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [ sidebarshow, setsidebarshow ] = useState(false);
  const NavMenu = [
    {
      icon: "home",
      name: "Home",
      route: "home",
    },
    {
      icon: "user",
      name: "About Us",
      route: "about",
    },
    {
      icon: "settings",
      name: "Service",
      route: "service",
    },
    {
      icon: "grid",
      name: "Gallery",
      route: "gallery",
    },
    {
      icon: "phone-call",
      name: "Connect Us",
      route: "connect",
    },
  ];

  return (
    <div className="w-full ptpx6 pbpx6 sm-ptpx1 sm-pbpx1">
      {sidebarshow ? (
        <div className="bg-glass fixed hidden h-100 sm-block w-full z-99">
          <div className="bgwhite w-90 h-100 absolute right-0 top-0">
            <div className="bgsecondary p5">
              <div className="flex items-center justify-between gap-4 plpx10 prpx10">
                <p className="fsize16 textwhite mtpx4 mbpx4 cursor-pointer font-500">
                  Navbar
                </p>
                <FeatherIcon
                  icon="x"
                  className="textwhite cursor-pointer"
                  size={17}
                  onClick={() => setsidebarshow(false)}
                />
              </div>
            </div>
            <div className="mtpx30">
              {NavMenu.map((e) => (
                <>
                  <div className="flex items-center gap-8 plpx20 prpx20 mbpx20">
                    <FeatherIcon
                      icon={e.icon}
                      className="textprimary"
                      size={17}
                    />
                    <Link
                      to={e.route}
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                    >
                      <p
                        className="fsize14 textforth mtpx4 mbpx4 cursor-pointer font-500"
                        onClick={() => setsidebarshow(false)}
                      >
                        {e.name}
                      </p>
                    </Link>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      ) : null}
      <div className="flex justify-between items-center container mx-auto">
        <div className="logo">
          <h1 className="fsize21 sm-mtpx1 sm-mbpx1 font-900 textprimary">
            KU<span className="textsecondary mlpx2">NAL</span>
          </h1>
        </div>
        <div className="flex gap-5 plpx20 sm-plpx1 items-center justify-end menu sm-hidden">
          {NavMenu.map((e) => (
            <>
              <Link
                activeClass="textprimary"
                to={e.route}
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                <p className="fsize16 textdark mlpx28 cursor-pointer font-500">
                  {e.name}
                </p>
              </Link>
            </>
          ))}
        </div>
        <div className="hidden sm-block">
          <div className="bg-ec sidebar-icon">
            <FeatherIcon
              icon="align-justify"
              className="textforth"
              onClick={() => setsidebarshow(true)}
            />
          </div>
        </div>
        {/* <div className="navbtn flex gap-9 justify-end">
          <button className="bgprimary border-0 fsize15 font-500 cursor-pointer textwhite plpx30 prpx30 ptpx8 pbpx8 rounded-20">
            Login
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
