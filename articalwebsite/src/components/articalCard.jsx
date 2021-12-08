import React from "react";
import { Navigate } from "react-router-dom";
import { API } from "./../api";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function ArticalCard({ cardColor, el, page, id }) {
  let navigate = useNavigate();
  const delPost = async () => {
    const status = await API.deleteArtical(id);
    console.log(status);
    if (status === "success") {
      navigate("/");
    }
    return;
  };
  return (
    <div id={cardColor}>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2">
            <p>
              <img src="assets/img/user.png" width="50px" height="50px" />{" "}
              <ba>{el.userId.name}</ba>
            </p>
            <p>
              <bd>January 18, 2014</bd>
            </p>
            <h4>{el.title}</h4>

            {/* an Image */}
            {/* {el.image === "" ? (
              ""
            ) : (
              <p>
                {" "}
                <img
                  className="img-responsive"
                  src="assets/img/blog01.jpg"
                  alt=""
                />
              </p>
            )} */}
            {/* <p>
              <img
                className="img-responsive"
                src="assets/img/blog01.jpg"
                alt=""
              />
            </p> */}
            <p>{el.description}. </p>
            <a
              style={{
                padding: "1rem",
                // backgroundColor: "red",
                // color: "white",
              }}
              href={el.url}
            >
              Visit Link
            </a>
            {page === "artical" ? (
              ""
            ) : (
              <p>
                <Link to={`/artical?id=${el._id}`}>Continue Reading</Link>
                {/* <a href="blog01.html">Continue Reading...</a> */}
              </p>
            )}
          </div>
          {page === "articals" ? (
            ""
          ) : (
            <button
              style={{
                marginRight: "-10rem",
                transform: "translateX(-10rem)",
              }}
              onClick={() => {
                delPost();
              }}
            >
              Delete Post
            </button>
          )}
        </div>
        {/* /row */}
      </div>
      {/* /container */}
    </div>
  );
}

export default ArticalCard;
