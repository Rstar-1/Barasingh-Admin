import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditSeo = () => {
  const history = useNavigate();
  const [Title, setTitle] = useState("");
  const [Author, setAuthor] = useState("");
  const [Keyword, setKeyword] = useState("");
  const [Description, setDescription] = useState("");

  const [update, setupdate] = useState("");
  console.log(update);

  const { id } = useParams("");
  console.log(id);

  const getsingledata = async () => {
    const editresponse = await axios({
      method: "get",
      url: `http://localhost:8000/api/getseosingledata/${id}`,
    });
    console.log(editresponse);
    setTitle(editresponse.data.metatitle);
    setAuthor(editresponse.data.metaauthor);
    setKeyword(editresponse.data.metakeyword);
    setDescription(editresponse.data.metadescription);
  };
  const editUserdata = async (e) => {
    e.preventDefault();
    const payload = {
      metatitle: Title,
      metaauthor: Author,
      metakeyword: Keyword,
      metadescription: Description,
    };
    const editresponse = await axios({
      method: "patch",
      url: `http://localhost:8000/api/updateseodata/${id}`,
      data: payload,
    });
    setupdate(editresponse);
    if (editresponse.status === 201) {
        history("/seo");
        window.location.reload(true);
    } else {
      alert("Category Not Submitted");
    }
  };
  useEffect(() => {
    getsingledata();
  }, []);
  return (
    <div>
      <div className="mtpx6 grid-cols-1 gap-12">
        <div className="w-full">
          <label className="fsize13 textforth">Meta Title</label>
          <div>
            <input
              className="side-input mtpx5 h-input fsize13 rounded-5 plpx10 border-ec"
              placeholder="Enter Title"
              type="text"
              value={Title}
              onChange={(e) => setTitle(e.target.value)}
              name="metatitle"
              id="metatitle"
            />
          </div>
        </div>
        <div className="w-full">
          <label className="fsize13 textforth">Meta Author</label>
          <div>
            <input
              className="side-input mtpx5 h-input fsize13 rounded-5 plpx10 border-ec"
              placeholder="Enter Author"
              type="text"
              value={Author}
              onChange={(e) => setAuthor(e.target.value)}
              name="metaauthor"
              id="metaauthor"
            />
          </div>
        </div>
        <div className="w-full">
          <label className="fsize13 textforth">Meta Keyword</label>
          <div>
            <input
              className="side-input mtpx5 h-input fsize13 rounded-5 plpx10 border-ec"
              placeholder="Enter Keyword"
              type="text"
              value={Keyword}
              onChange={(e) => setKeyword(e.target.value)}
              name="metakeyword"
              id="metakeyword"
            />
          </div>
        </div>
        <div className="w-full">
          <label className="fsize13 textforth">Meta Description</label>
          <div>
            <input
              className="side-input mtpx5 h-input fsize13 rounded-5 plpx10 border-ec"
              placeholder="Enter Description"
              type="text"
              value={Description}
              onChange={(e) => setDescription(e.target.value)}
              name="metadescription"
              id="metadescription"
            />
          </div>
        </div>
      </div>
      <div className="mtpx15 flex justify-center">
        <button
          className="border-0 cursor-pointer font-500 textwhite rounded-5 ptpx6 pbpx6 plpx25 prpx25 fsize13 bgprimary"
          onClick={editUserdata}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default EditSeo;
