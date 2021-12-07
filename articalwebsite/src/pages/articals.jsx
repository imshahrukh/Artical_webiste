import React, { useEffect, useState } from "react";
import ArticalCard from "../components/articalCard";
import Footer from "../components/footer";
import Nav from "../components/Nav";
import { API } from "./../api";

function Articals(props) {
  const [articals, setArticals] = useState([]);
  const getArtaicls = async () => {
    const data = await API.getAllArtical();

    setArticals(data);
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
      {articals &&
        articals.map((el, key) =>
          key % 2 === 0 ? (
            <ArticalCard cardColor="grey" el={el} page="articals" />
          ) : (
            <ArticalCard cardColor="white" el={el} page="articals" />
          )
        )}

      {/* <ArticalCard cardColor="white" /> */}
      <Footer />
    </div>
  );
}

export default Articals;
