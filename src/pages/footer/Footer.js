import React from "react";
import FeatherIcon from "feather-icons-react";

const Footer = () => {
  return (
    <div className="w-full bgforth ptpx40 pbpx40">
      <div className="flex sm-block justify-between gap-12 container mx-auto">
        <div className="footlogo">
          <div className="bg-glass footerimg flex items-center text-center justify-center">
            <div>
              <h6 className="fsize24 mbpx1 mtpx1 font-900 textprimary">
                KU<span className="textwhite mlpx2">NAL</span>
              </h6>
              <p className="textwhite mtpx1 mbpx1 fsize20">Developers</p>
            </div>
          </div>
        </div>
        <div className="footcontent mtpx20">
          <div className="grid-cols-4 sm-grid-cols-1 gap-10">
            <div className="">
              <h6 className="fsize18 mtpx5 mbpx1 textwhite font-500">
                About Us
              </h6>
              <hr className="foot-hr bgprimary border-0 block mlpx1" />
              <div className="mtpx20">
                <p className="fsize14 textwhite mtpx5 mbpx1 font-500">
                  Gallery
                </p>
                <p className="fsize14 textwhite mtpx5 mbpx1 font-500">About</p>
              </div>
            </div>
            <div className="">
              <h6 className="fsize18 mtpx5 mbpx1 textwhite font-500">
                Our Services
              </h6>
              <hr className="foot-hr bgprimary border-0 block mlpx1" />
              <div className="mtpx20">
                <p className="fsize14 textwhite mtpx5 mbpx1 font-500">
                  Service
                </p>
                <p className="fsize14 textwhite mtpx5 mbpx1 font-500">
                  Connect
                </p>
              </div>
            </div>
            <div className="">
              <h6 className="fsize18 mtpx5 mbpx1 textwhite font-500">
                Help & Support
              </h6>
              <hr className="foot-hr bgprimary border-0 block mlpx1" />
              <div className="mtpx20">
                <p className="fsize14 textwhite mtpx5 mbpx1 font-500">
                  Privacy Policy
                </p>
                <p className="fsize14 textwhite mtpx5 mbpx1 font-500">
                  Terms & Conditions
                </p>
                <p className="fsize14 textwhite mtpx5 mbpx1 font-500">FAQ</p>
              </div>
            </div>
            <div className="">
              <h6 className="fsize18 mtpx5 mbpx1 textwhite font-500">
                Connect Us
              </h6>
              <hr className="foot-hr bgprimary border-0 block mlpx1" />
              <div className="flex items-center gap-9 mtpx20">
                <div className="social-foot sm-mlpx6 flex items-center justify-center bgprimary">
                  <FeatherIcon
                    icon="instagram"
                    size="20"
                    className="textwhite"
                  />
                </div>
                <div className="social-foot sm-mlpx6 flex items-center justify-center bgprimary">
                  <FeatherIcon
                    icon="linkedin"
                    size="20"
                    className="textwhite"
                  />
                </div>
                <div className="social-foot sm-mlpx6 flex items-center justify-center bgprimary">
                  <FeatherIcon icon="mail" size="20" className="textwhite" />
                </div>
                <div className="social-foot sm-mlpx6 flex items-center justify-center bgprimary">
                  <FeatherIcon
                    icon="facebook"
                    size="20"
                    className="textwhite"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
