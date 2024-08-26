import React from 'react'
import banner1 from "../assets/images/Link → banner-41.jpg.png";
import banner2 from "../assets/images/Link → banner-42.jpg.png";


export default function Header() {
  return (
    <>
      <section className="headerr ">
        <div className="bg1  " style={{ backgroundImage: `url(${banner1})` }}>
          <div className="ms-5" style={{ marginTop: 160 }}>
            <h3>
              T-Shirt Printing
              <br />
              made easy
            </h3>
            <p className="text-secondary ">
              Create your desgin for you <br />
              online business
            </p>
            <button type="button" className=" mb-5 btn btn-success">
              Create a T-Shirt
            </button>
          </div>
        </div>
        <div className="bg2 " style={{ backgroundImage: `url(${banner2})` }}>
          <div className="ms-5" style={{ marginTop: 160 }}>
            <h3>
              Bring your ideas
              <br />
              to life in minute
            </h3>
            <p className="text-secondary ">
              Print shirts for yourself or your
              <br />
              creative works
            </p>
            <button type="button" className="mb-5 btn btn-success">
              Shop Now
            </button>
          </div>
        </div>
        <div className="clear" />
      </section>
    </>
  );
}
