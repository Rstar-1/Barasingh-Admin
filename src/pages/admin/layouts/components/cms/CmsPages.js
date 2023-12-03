import FeatherIcon from "feather-icons-react";
import React, { useState } from "react";
import TextCms from "./components/textcms/TextCms"
import ImageCms from "./components/imagecms/ImageCms"

const CmsPages = () => {
  const [check, setcheck] = useState("01");
  const cmsOption = [
    {
      id:"01",
      name:'Text',
    },
    {
      id:"02",
      name:'Image',
    },
  ]
  return (
    <div className="bgwhite border-d mtpx9 cust-scroll p20">
      <div className="">
        <h5 className="fsize20 textprimary mtpx1 mbpx1 font-600">
          Content management System (CMS)
        </h5>
        <div className="flex gap-12 items-start w-full mtpx30">
          <div className="w-20 grid-cols-1 gap-10">
            {cmsOption.map((e) => (
              <div
                className={
                  check === e.id
                    ? "bgprimary textwhite rounded-10 p16 flex cursor-pointer items-center justify-between d-shadow"
                    : "bgwhite textforth rounded-10 p16 flex cursor-pointer items-center justify-between d-shadow"
                }
                onClick={() => setcheck(e.id)}
              >
                <h3 className="fsize15 font-400 mtpx1 mbpx1">{e.name}</h3>
                <FeatherIcon  icon="chevron-right" />
              </div>
            ))}
          </div>
          <div className="w-80 d-shadow p20 rounded-10 bg-white">
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
