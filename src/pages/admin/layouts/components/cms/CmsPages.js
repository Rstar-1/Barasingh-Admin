import React from "react";
import Cms from "../../../../../assets/new2.png";
import Cms2 from "../../../../../assets/new3.png";
import Cms3 from "../../../../../assets/new.png";

const CmsPages = () => {
  return (
    <div className="bgwhite border-d mtpx12 cms-h p20">
      <div className="">
        <h5 className="fsize20 textforth mtpx1 mbpx1 font-600">
          Content management System (CMS)
        </h5>
        <div className="mtpx18 grid-cols-8 gap-9 rounded-10">
          <div className="p10 bgwhite d-shadow rounded-10">
            <img src={Cms} alt="cms" className="cms-img object-contain" />
            <p className="fsize12 textforth font-300 mtpx8 text-center">Home</p>
          </div>
          <div className="p10 bgwhite d-shadow rounded-10">
            <img src={Cms2} alt="cms" className="cms-img object-contain" />
            <p className="fsize12 textforth font-300 mtpx8 text-center">
              About Us
            </p>
          </div>
          <div className="p10 bgwhite d-shadow rounded-10">
            <img src={Cms3} alt="cms" className="cms-img object-contain" />
            <p className="fsize12 textforth font-300 mtpx8 text-center">
              Service
            </p>
          </div>
          <div className="p10 bgwhite d-shadow rounded-10">
            <img src={Cms} alt="cms" className="cms-img object-contain" />
            <p className="fsize12 textforth font-300 mtpx8 text-center">
              Gallery
            </p>
          </div>
          <div className="p10 bgwhite d-shadow rounded-10">
            <img src={Cms3} alt="cms" className="cms-img object-contain" />
            <p className="fsize12 textforth font-300 mtpx8 text-center">
              Contact Us
            </p>
          </div>
          <div className="p10 bgwhite d-shadow rounded-10">
            <img src={Cms} alt="cms" className="cms-img object-contain" />
            <p className="fsize12 textforth font-300 mtpx8 text-center">
              Privacy policy
            </p>
          </div>
        </div>
        <div className="mtpx18 rounded-10 border-ec p20">
          <h6 className="fsize16 textforth mtpx1 mbpx1 font-600">Home Page</h6>
          <div className="mtpx10 grid-cols-2 items-start gap-12">
            <div className=" grid-cols-1 gap-12">
              <div className="border-ec p15 rounded-5">
                <div className="bg-ec p80 rounded-5"></div>
                <div className="w-full mtpx10">
                  <label className="fsize15 textforth">Title</label>
                  <div>
                    <input
                      className="w-80 mtpx5 h-search fsize14 rounded-5 plpx10 border-ec"
                      placeholder="Search"
                    />
                  </div>
                </div>
                <div className="w-full mtpx10">
                  <label className="fsize15 textforth">Sub Title</label>
                  <div>
                    <input
                      className="w-80 mtpx5 h-search fsize14 rounded-5 plpx10 border-ec"
                      placeholder="Search"
                    />
                  </div>
                </div>
              </div>
              <div className="border-ec p15 rounded-5">
                <div className="bg-ec p80 rounded-5"></div>
                <div className="w-full mtpx10">
                  <label className="fsize15 textforth">Sub Title</label>
                  <div>
                    <input
                      className="w-80 mtpx5 h-search fsize14 rounded-5 plpx10 border-ec"
                      placeholder="Search"
                    />
                  </div>
                </div>
                <div className="w-full mtpx10">
                  <label className="fsize15 textforth">Title</label>
                  <div>
                    <input
                      className="w-80 mtpx5 h-search fsize14 rounded-5 plpx10 border-ec"
                      placeholder="Search"
                    />
                  </div>
                </div>
                <div className="w-full mtpx10">
                  <label className="fsize15 textforth">Sub Title</label>
                  <div>
                    <input
                      className="w-80 mtpx5 h-search fsize14 rounded-5 plpx10 border-ec"
                      placeholder="Search"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className=" grid-cols-1 gap-12">
              <div className="border-ec p15 rounded-5">
                <div className="bg-ec p80 rounded-5"></div>
                <div className="w-full mtpx10">
                  <label className="fsize15 textforth">Title</label>
                  <div>
                    <input
                      className="w-80 mtpx5 h-search fsize14 rounded-5 plpx10 border-ec"
                      placeholder="Search"
                    />
                  </div>
                </div>
                <div className="w-full mtpx10">
                  <label className="fsize15 textforth">Sub Title</label>
                  <div>
                    <input
                      className="w-80 mtpx5 h-search fsize14 rounded-5 plpx10 border-ec"
                      placeholder="Search"
                    />
                  </div>
                </div>
                <div className="w-full mtpx10">
                  <label className="fsize15 textforth">Sub Title</label>
                  <div>
                    <input
                      className="w-80 mtpx5 h-search fsize14 rounded-5 plpx10 border-ec"
                      placeholder="Search"
                    />
                  </div>
                </div>
              </div>
              <div className="border-ec p15 rounded-5">
                <div className="bg-ec p80 rounded-5"></div>
                <div className="w-full mtpx10">
                  <label className="fsize15 textforth">Title</label>
                  <div>
                    <input
                      className="w-80 mtpx5 h-search fsize14 rounded-5 plpx10 border-ec"
                      placeholder="Search"
                    />
                  </div>
                </div>
                <div className="w-full mtpx10">
                  <label className="fsize15 textforth">Sub Title</label>
                  <div>
                    <input
                      className="w-80 mtpx5 h-search fsize14 rounded-5 plpx10 border-ec"
                      placeholder="Search"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CmsPages;
