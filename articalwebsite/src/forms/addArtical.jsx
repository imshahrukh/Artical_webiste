import React, { useEffect, useState } from "react";
import Footer from "../components/footer";
import Nav from "../components/Nav";
import { API } from "./../api";
// methods upload image
function AddArtical(props) {
  // useState
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  var [image, setImage] = useState("");
  const [para, setPara] = useState("");
  const [usId, setUSId] = useState("");
  const [message, setMessage] = useState("");
  const [readTime, setReadTime] = useState("");
  const addUserData = async (object) => {
    const data = await API.addUser(object);
    return data;
  };
  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "efxjficn");
    formData.append("cloud_name", "devat-channel");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/devat-channel/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();
    setImage(data.secure_url);
    console.log(data.secure_url);
  };
  const submittData = async (e) => {
    e.preventDefault();
    // add user first
    const user = {
      name: name,
    };
    const userID = await addUserData(user);
    setUSId(userID);
    if (userID !== "") {
      const data = {
        title: title,
        image: image,
        userId: userID,
        readTime: readTime,
        description: para,
      };
      const artical = await API.addPost(data);
      if (artical === "success") {
        setMessage("post added to db");
      }
    }

    return true;
  };

  // methods
  // useEffect
  // call an api
  return (
    <div>
      {/* Static navbar */}
      <div className="navbar navbar-inverse navbar-static-top">
        <Nav />
      </div>
      {/* +++++ Contact Section +++++ */}
      <div className="container pt">
        <div className="row mt">
          <div className="col-lg-6 col-lg-offset-3 centered">
            <h3>Add Artical</h3>
            <hr />
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
        </div>
        <div className="row mt">
          <div className="col-lg-8 col-lg-offset-2">
            <form role="form">
              <div className="form-group">
                <input
                  type="name"
                  className="form-control"
                  id="NameInputEmail1"
                  placeholder="Your Name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <br />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter Title"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
                <br />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="subjectEmail1"
                  placeholder="How much time it take of reader"
                  onChange={(e) => {
                    setReadTime(e.target.value);
                  }}
                />
                <br />
              </div>
              <textarea
                className="form-control"
                rows={6}
                placeholder="Enter description here"
                defaultValue={""}
                onChange={(e) => {
                  setPara(e.target.value);
                }}
              />
              {/* <br />
              <input
                type="file"
                value=""
                onChange={(e) => {
                  console.log(e.target.files[0]);
                  uploadImage(e.target.files[0]);
                }}
              /> */}
              <br />
              <p>{image}</p>
              <button
                type="submit"
                onClick={(e) => {
                  submittData(e);
                }}
                className="btn btn-success"
              >
                SUBMIT
              </button>
              <p>{message}</p>
            </form>
          </div>
        </div>
        {/* /row */}
      </div>
      {/* /container */}
      {/* +++++ Footer Section +++++ */}
      <Footer />
      {/* Bootstrap core JavaScript
    ================================================== */}
      {/* Placed at the end of the document so the pages load faster */}
    </div>
  );
}

export default AddArtical;
