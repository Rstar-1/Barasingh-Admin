import React, { useState } from "react";
import TextCms from "./components/textcms/TextCms"
import ImageCms from "./components/imagecms/ImageCms"

const CmsPages = () => {
  const [check, setcheck] = useState("01");
  const cmsOption = [
    {
      id:"01",
      name:'Home',
    },
    {
      id:"02",
      name:'About Us',
    },
    {
      id:"03",
      name:'Plans',
    },
    {
      id:"04",
      name:'Blogs',
    },
    {
      id:"05",
      name:'Gallery',
    },
    {
      id:"06",
      name:'Ecommerce',
    },
    {
      id:"07",
      name:'Elearning',
    },
    {
      id:"08",
      name:'Connect Us',
    },
  ]
  return (
    <div className="bgwhite border-d mtpx9 cust-scroll p20">
      <div className="">
        <h5 className="fsize20 textprimary mtpx1 mbpx1 font-600">
          Content management System (CMS)
        </h5>
        <div className="flex gap-12 items-start w-full mtpx30">
          <div className="w-20 grid-cols-1 ptpx10 pbpx100 gap-12 border-side">
            <h5 className="fsize18 textforth mtpx1 mbpx1 bordb pbpx10">
              Pages
            </h5>
            {cmsOption.map((e) => (
              <div
                className={
                  check === e.id
                    ? "textprimary cursor-pointer"
                    : "texdark cursor-pointer"
                }
                onClick={() => setcheck(e.id)}
              >
                <h3 className="fsize14 font-400 mtpx2 mbpx2">{e.name}</h3>
              </div>
            ))}
          </div>
          <div className="w-80 bg-white">
            {check === "01" ? (
              <>
                <div>
                  <TextCms />
                </div>
              </>
            ) : null}
            {check === "02" ? (
              <>
                <div>
                  <ImageCms />
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CmsPages;
