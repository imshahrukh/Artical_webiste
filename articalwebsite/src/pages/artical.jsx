import React, { useState, useEffect } from "react";
import ArticalCard from "../components/articalCard";
import Footer from "../components/footer";
import Nav from "../components/Nav";
import { API } from "./../api";
// import { useParams } from "react-router-dom";
function Artical(props) {
  // let params = useParams();
  const [artical, setArtical] = useState([]);
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const foo = params.get("id");
  const getArtaicls = async () => {
    const data = await API.getArticalByID(foo);

    setArtical(data);
  };
  useEffect(() => {
    getArtaicls();
  }, []);
  return (
    <div>
      {/* Static navbar */}
      <div className="navbar navbar-inverse navbar-static-top">
        <Nav />
      </div>
      {/* +++++ Post +++++ */}
      {artical &&
        artical.map((el, key) => (
          <ArticalCard
            key={key}
            el={el}
            cardColor={"white"}
            page="artical"
            id={foo}
          />
        ))}
      {/* /white */}
      <p>{}</p>
      {/* +++++ Footer Section +++++ */}
      <Footer />
      {/* Bootstrap core JavaScript
    ================================================== */}
      {/* Placed at the end of the document so the pages load faster */}
    </div>
  );
}

export default Artical;
