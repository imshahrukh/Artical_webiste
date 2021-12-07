import React from "react";

function Footer(props) {
  return (
    <div id="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <h4>My Bunker</h4>
            <p>
              Some Address 987,
              <br />
              +34 9054 5455, <br />
              Madrid, Spain.
            </p>
          </div>
          {/* /col-lg-4 */}
          <div className="col-lg-4">
            <h4>My Links</h4>
            <p>
              <a href="#">Dribbble</a>
              <br />
              <a href="#">Twitter</a>
              <br />
              <a href="#">Facebook</a>
            </p>
          </div>
          {/* /col-lg-4 */}
          <div className="col-lg-4">
            <h4>About Stanley</h4>
            <p>
              This cute theme was created to showcase your work in a simple way.
              Use it wisely.
            </p>
          </div>
          {/* /col-lg-4 */}
        </div>
      </div>
    </div>
  );
}

export default Footer;
