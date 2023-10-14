import React from 'react';

const Banner = () => {
  return (
    <div id="home">
      <div className="h-banner relative">
        <img
          src="https://imgur.com/8rRwSyg.jpg"
          alt="banner"
          className="h-banner filter-b4"
        />
        <div className="absolute top-0 left-0 h-banner w-full">
          <div className="container mx-auto ">
            <div className="h-banner sm-block flex items-center gap-12 w-full">
              <div className="w-50 sm-w-full mrpx70 sm-mrpx1 sm-mtpx30">
                <small className="fsize15 textprimary font-100">New Test</small>
                <h2 className="fsize40 sm-fsize25 mtpx1 mbpx1 texttertiary">
                  I AM CLOUD DEVELOPER
                </h2>

                <p className="fsize15 sm-fsize13 mtpx12 mbpx1 font-100 textwhite">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                  Lorem ipsum may be used as a placeholder before final copy is
                  available
                </p>
                <div className=" flex gap-12 mtpx25 items-center">
                  <button className="bgprimary border-0 fsize16 sm-fsize13 font-500 cursor-pointer textwhite plpx30 prpx30  sm-ptpx10 sm-pbpx10 ptpx12 pbpx12 rounded-5">
                    Gallery
                  </button>
                  <button className="bgp-outline fsize16 sm-fsize13 font-500 cursor-pointer plpx30 prpx30  sm-ptpx10 sm-pbpx10 ptpx12 pbpx12 rounded-5 sm-mlpx6">
                    About Us
                  </button>
                </div>
              </div>
              <div className="w-50 sm-w-full sm-mtpx10">
                <video loop autoPlay className="banner-img w-full">
                  <source src="https://imgur.com/3ovI7Ip.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner
