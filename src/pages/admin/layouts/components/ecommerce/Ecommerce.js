import React from "react";
import FeatherIcon from "feather-icons-react";
import Select from "react-select";

const Ecommerce = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <div className="bgwhite border-d mtpx12 blog-h p20">
      <div className="">
        <h6 className="fsize20 textforth mtpx1 mbpx1 font-600">
          Ecommerce
        </h6>
        <div className="mtpx18 rounded-10 border-ec p20">
          <div className="mtpx5 mbpx15 flex gap-12 items-center">
            <div className="w-60">
              <div className="relative">
                <input
                  className="w-full h-search fsize14 rounded-5 plpx10 border-ec"
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
            <div className="w-40 mlpx15">
              <Select
                className="w-full fsize14"
                placeholder="Category"
                options={options}
              />
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th className="fsize13 w-10 textwhite font-300">
                  <p>Image</p>
                </th>
                <th className="fsize13 w-10 textwhite font-300">
                  <p>Title</p>
                </th>
                <th className="fsize13 w-20 textwhite font-300">
                  <p>Description</p>
                </th>
                <th className="fsize13 w-10 textwhite font-300">
                  <p>Price</p>
                </th>
                <th className="fsize13 w-10 textwhite font-300">
                  <p>Created Date</p>
                </th>
                <th className="fsize13 w-20 textwhite font-300">
                  <p>Category</p>
                </th>
                <th className="fsize13 w-20 textwhite font-300">
                  <p>Status</p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="fsize13 w-10 textforth">
                  <img
                    src="https://nexuscluster.blob.core.windows.net/server01/HOMECLIQ/multipleImage/poster-FZS682kyRPvBUM2gmdHQt-1697720366"
                    alt="blog"
                    className="blog-img"
                  />
                </td>
                <td className="fsize13 w-10 textforth">
                  <p>Lorem ipsum may be used</p>
                </td>
                <td className="fsize12 w-20 textforth">
                  <p>
                    In publishing and graphic design, Lorem ipsum is a
                    placeholder text content.
                  </p>
                </td>
                <td className="fsize13 w-10 textforth">
                  <p>1200/-</p>
                </td>
                <td className="fsize13 w-10 textforth">
                  <p>12/12/2023</p>
                </td>
                <td className="w-20 textforth">
                  <div className="grid-cols-2 gap-10 items-center">
                    <p className="rounded-20 fsize12 textwarning ptpx3 pbpx3 plpx15 prpx15 flex justify-center bg-light-warning">
                      Learnig
                    </p>
                    <p className="rounded-20 fsize12 textwarning ptpx3 pbpx3 plpx15 prpx15 flex justify-center bg-light-warning">
                      eLearnig
                    </p>
                  </div>
                </td>
                <td className="fsize13 w-20 textsuccess">
                  <p className="rounded-20 fsize12 textsuccess ptpx3 pbpx3 plpx15 prpx15 flex justify-center bg-light-success">
                    Active
                  </p>
                </td>
              </tr>
              <tr>
                <td className="fsize13 w-10 textforth">
                  <img
                    src="https://nexuscluster.blob.core.windows.net/server01/HOMECLIQ/multipleImage/poster-FZS682kyRPvBUM2gmdHQt-1697720366"
                    alt="blog"
                    className="blog-img"
                  />
                </td>
                <td className="fsize13 w-10 textforth">
                  <p>Lorem ipsum may be used</p>
                </td>
                <td className="fsize12 w-20 textforth">
                  <p>
                    In publishing and graphic design, Lorem ipsum is a
                    placeholder text content.
                  </p>
                </td>
                <td className="fsize13 w-10 textforth">
                  <p>1200/-</p>
                </td>
                <td className="fsize13 w-20 textforth">
                  <p>12/12/2023</p>
                </td>
                <td className="w-20 textforth">
                  <div className="grid-cols-2 gap-10 items-center">
                    <p className="rounded-20 fsize12 textwarning ptpx3 pbpx3 plpx15 prpx15 flex justify-center bg-light-warning">
                      Learnig
                    </p>
                    <p className="rounded-20 fsize12 textwarning ptpx3 pbpx3 plpx15 prpx15 flex justify-center bg-light-warning">
                      eLearnig
                    </p>
                  </div>
                </td>
                <td className="fsize13 w-20 textsuccess">
                  <p className="rounded-20 fsize12 textdanger ptpx3 pbpx3 plpx15 prpx15 flex justify-center bg-light-danger">
                    InActive
                  </p>
                </td>
              </tr>
              <tr>
                <td className="fsize13 w-10 textforth">
                  <img
                    src="https://nexuscluster.blob.core.windows.net/server01/HOMECLIQ/multipleImage/poster-FZS682kyRPvBUM2gmdHQt-1697720366"
                    alt="blog"
                    className="blog-img"
                  />
                </td>
                <td className="fsize13 w-10 textforth">
                  <p>Lorem ipsum may be used</p>
                </td>
                <td className="fsize12 w-20 textforth">
                  <p>
                    In publishing and graphic design, Lorem ipsum is a
                    placeholder text content.
                  </p>
                </td>
                <td className="fsize13 w-10 textforth">
                  <p>1200/-</p>
                </td>
                <td className="fsize13 w-10 textforth">
                  <p>12/12/2023</p>
                </td>
                <td className="w-20 textforth">
                  <div className="grid-cols-2 gap-10 items-center">
                    <p className="rounded-20 fsize12 textwarning ptpx3 pbpx3 plpx15 prpx15 flex justify-center bg-light-warning">
                      Learnig
                    </p>
                    <p className="rounded-20 fsize12 textwarning ptpx3 pbpx3 plpx15 prpx15 flex justify-center bg-light-warning">
                      eLearnig
                    </p>
                  </div>
                </td>
                <td className="fsize13 w-20 textsuccess">
                  <p className="rounded-20 fsize12 textsuccess ptpx3 pbpx3 plpx15 prpx15 flex justify-center bg-light-success">
                    Active
                  </p>
                </td>
              </tr>
              <tr>
                <td className="fsize13 w-10 textforth">
                  <img
                    src="https://nexuscluster.blob.core.windows.net/server01/HOMECLIQ/multipleImage/poster-FZS682kyRPvBUM2gmdHQt-1697720366"
                    alt="blog"
                    className="blog-img"
                  />
                </td>
                <td className="fsize13 w-10 textforth">
                  <p>Lorem ipsum may be used</p>
                </td>
                <td className="fsize12 w-20 textforth">
                  <p>
                    In publishing and graphic design, Lorem ipsum is a
                    placeholder text content.
                  </p>
                </td>
                <td className="fsize13 w-10 textforth">
                  <p>1200/-</p>
                </td>
                <td className="fsize13 w-20 textforth">
                  <p>12/12/2023</p>
                </td>
                <td className="w-20 textforth">
                  <div className="grid-cols-2 gap-10 items-center">
                    <p className="rounded-20 fsize12 textwarning ptpx3 pbpx3 plpx15 prpx15 flex justify-center bg-light-warning">
                      Learnig
                    </p>
                    <p className="rounded-20 fsize12 textwarning ptpx3 pbpx3 plpx15 prpx15 flex justify-center bg-light-warning">
                      eLearnig
                    </p>
                  </div>
                </td>
                <td className="fsize13 w-20 textsuccess">
                  <p className="rounded-20 fsize12 textdanger ptpx3 pbpx3 plpx15 prpx15 flex justify-center bg-light-danger">
                    InActive
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
