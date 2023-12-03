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
  ];
  const sidebarmenu2 = [
    {
      id: 1,
      name: "Subscription",
      icon: "file",
      route: "subscription",
    },
    {
      id: 2,
      name: "Projects",
      icon: "search",
      route: "project",
    },
  ];
  const sidebarmenu3 = [
    {
      id: 1,
      name: "CRM",
      icon: "user",
      route: "crm",
    },
    {
      id: 2,
      name: "Blog",
      icon: "folder",
      route: "blogs",
    },
    {
      id: 3,
      name: "Elearning",
      icon: "video",
      route: "elearning",
    },
    {
      id: 4,
      name: "Ecommerce",
      icon: "shopping-cart",
      route: "ecommerce",
    },
  ];
  const sidebarmenu4 = [
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
    <div className="bgwhite h-100 overflow-auto relative">
      <div className="">
        <div className=" w-full p20">
          <h2 className="fsize25 mtpx1 mbpx1 font-900 textprimary">
            RS<span className="textsecondary mlpx2">Deve</span>
          </h2>
          <p className="textforth fsize13">Logo in mde</p>
        </div>
        <div className="pbpx10 plpx10 prpx10">
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
                  <p className="fsize12 dot-dash rounded-full flex items-center justify-center textwhite bgprimary">
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
                      className="flex items-center activesidebar pbpx7 gap-9"
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
            <div class="tab">
              <input type="checkbox" name="accordion-2" id="cb2" />
              <label
                for="cb2"
                className="p10 hover-col cursor-pointer flex justify-between items-center fsize15 textforth mtpx2 font-300"
              >
                <div className="flex items-center gap-4">
                  <FeatherIcon
                    icon="file"
                    className="textgray cursor-pointer"
                    size={16}
                  />
                  Website
                </div>
                <div className="flex items-center gap-4">
                  <p className="fsize12 dot-dash rounded-full flex items-center justify-center textwhite bgprimary">
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
                      className="flex items-center activesidebar pbpx7 gap-9"
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
            <div class="tab">
              <input type="checkbox" name="accordion-3" id="cb3" />
              <label
                for="cb3"
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
                  <p className="fsize12 dot-dash rounded-full flex items-center justify-center textwhite bgprimary">
                    {sidebarmenu3.length}
                  </p>
                  <FeatherIcon size="16" icon="chevron-right" />
                </div>
              </label>
              <div class="tab__content">
                <div className="grid grid-cols-1 p9 gap-12">
                  {sidebarmenu3.map((e) => (
                    <NavLink
                      activeClassName="active"
                      className="flex items-center activesidebar pbpx7 gap-9"
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
          <div className="grid grid-cols-1 p9 gap-12">
            {sidebarmenu4.map((e) => (
              <NavLink
                activeClassName="active"
                className="flex items-center activesidebar pbpx7 gap-9"
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
  );
};

export default Sidebar;
