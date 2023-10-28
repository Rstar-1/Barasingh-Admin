import React from "react";
import FeatherIcon from "feather-icons-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const sidebarmenu = [
    {
      id: 1,
      name: "Dashboard",
      icon: "grid",
      route: "dashboard",
    },
    {
      id: 2,
      name: "CRM",
      icon: "user",
      route: "crm",
    },
  ];
  const sidebarmenu2 = [
    {
      id: 1,
      name: "Blog",
      icon: "folder",
      route: "blogs",
    },
    {
      id: 2,
      name: "Elearning",
      icon: "video",
      route: "elearning",
    },
    {
      id: 3,
      name: "Ecommerce",
      icon: "shopping-cart",
      route: "ecommerce",
    },
  ];
  const sidebarmenu3 = [
    {
      id: 1,
      name: "Cms",
      icon: "file",
      route: "cms",
    },
    {
      id: 2,
      name: "Seo",
      icon: "search",
      route: "seo",
    },
    {
      id: 3,
      name: "Billing",
      icon: "book",
      route: "billing",
    },
    {
      id: 4,
      name: "Get the App",
      icon: "tablet",
      route: "getapp",
    },
  ];
  return (
    <div className="bgwhite h-100 relative">
      <div className="">
        <div className="flex justify-center w-full ptpx20 pbpx20">
          <img
            src="https://nexuscluster.blob.core.windows.net/server01/HOMECLIQ/multipleImage/poster-FZS682kyRPvBUM2gmdHQt-1697720366"
            alt="logo"
            className="sidebar-logo"
          />
        </div>
        <div className="ptpx10 pbpx10 plpx10 prpx10">
          <div class="accordion">
            <div class="tab">
              <input type="checkbox" name="accordion-1" id="cb1" />
              <label
                for="cb1"
                className="p10 hover-col cursor-pointer flex justify-between items-center fsize15 textforth mtpx2 font-300"
              >
                <div className="flex items-center gap-4">
                  <FeatherIcon
                    icon="home"
                    className="textgray cursor-pointer"
                    size={16}
                  />
                  Home
                </div>
                <div className="flex items-center gap-4">
                  <p className="fsize12 dot-dash rounded-full flex items-center justify-center textwhite bgsecondary">
                    {sidebarmenu.length}
                  </p>
                  <FeatherIcon size="16" icon="chevron-right" />
                </div>
              </label>
              <div class="tab__content">
                <div className="grid grid-cols-1 p9 gap-12">
                  {sidebarmenu.map((e) => (
                    <NavLink
                      activeClassName="active"
                      className="flex items-center textsidebar pbpx7 gap-9"
                      to={e.route}
                    >
                      <FeatherIcon
                        icon={e.icon}
                        className=" cursor-pointer"
                        size={16}
                      />
                      <p className="fsize14  mtpx2 font-300">{e.name}</p>
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
            <div class="tab ">
              <input type="checkbox" name="accordion-2" id="cb2" />
              <label
                for="cb2"
                className="p10 hover-col cursor-pointer flex justify-between items-center fsize15 textforth mtpx2 font-300"
              >
                <div className="flex items-center gap-4">
                  <FeatherIcon
                    icon="briefcase"
                    className="textgray cursor-pointer"
                    size={16}
                  />
                  Management
                </div>
                <div className="flex items-center gap-4">
                  <p className="fsize12 dot-dash rounded-full flex items-center justify-center textwhite bgsecondary">
                    {sidebarmenu2.length}
                  </p>
                  <FeatherIcon size="16" icon="chevron-right" />
                </div>
              </label>
              <div class="tab__content">
                <div className="grid grid-cols-1 p9 gap-12">
                  {sidebarmenu2.map((e) => (
                    <NavLink
                      activeClassName="active"
                      className="flex items-center textsidebar pbpx7 gap-9"
                      to={e.route}
                    >
                      <FeatherIcon
                        icon={e.icon}
                        className=" cursor-pointer"
                        size={16}
                      />
                      <p className="fsize14  mtpx2 font-300">{e.name}</p>
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 p9 gap-12">
              {sidebarmenu3.map((e) => (
                <NavLink
                  activeClassName="active"
                  className="flex items-center textsidebar pbpx7 gap-9"
                  to={e.route}
                >
                  <FeatherIcon
                    icon={e.icon}
                    className=" cursor-pointer"
                    size={16}
                  />
                  <p className="fsize14  mtpx2 font-300">{e.name}</p>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0">
        <div className="ptpx10 pbpx10 plpx20 prpx20 grid grid-cols-1 gap-12">
          <div className="flex items-center pbpx7 gap-9">
            <FeatherIcon
              icon="log-out"
              className="textgray cursor-pointer"
              size={16}
            />
            <p className="fsize14 textgray mtpx2 font-300">Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
