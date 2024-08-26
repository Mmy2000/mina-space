import React from 'react'
import mai1 from "../assets/images/6c7abdf13d4e4958f23569e96ec07006.jpg";
import mai2 from "../assets/images/5c6212e55cc22abb420d6b6abac51be0.jpg";
import mai3 from "../assets/images/bb8b9380b52f10cf7f233e34bb4562b8.jpg";

export default function Brands2() {
  return (
    <>
      <section className="container">
        <div className="text-center mb-5">
          <p className="pra">T-shirt printing made easy.</p>
          <span className="pra2">
            Let us show you how your product come to life.
          </span>
        </div>
        <div className="brorher">
          <div className="mai1 " style={{ backgroundImage: `url(${mai1})` }}>
            <div className="infoo ms-4">
              <h2 className="pragra">Premium quality shirts</h2>
              <span className="pragra2">
                Lorem ipsum det, radipiscing elit duis necfringi det, consec
                tetur adipiscing e
              </span>
            </div>
          </div>
          <div className="mai2 " style={{ backgroundImage: `url(${mai2})` }}>
            <div className="infoo ms-4">
              <h2 className="pragra">Premium quality shirts</h2>
              <span className="pragra2">
                Lorem ipsum det, radipiscing elit duis necfringi det, consec
                tetur adipiscing e
              </span>
            </div>
          </div>
          <div className="mai3 " style={{ backgroundImage: `url(${mai3})` }}>
            <div className="infoo ms-4">
              <h2 className="pragra">Premium quality shirts</h2>
              <span className="pragra2">
                Lorem ipsum det, radipiscing elit duis necfringi det, consec
                tetur adipiscing e
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
