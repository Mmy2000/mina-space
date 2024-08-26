import React from 'react'
import img1 from "../assets/images/Link → banner-43.jpg.png";
import img2 from "../assets/images/Link → banner-46.jpg.png";
import img3 from "../assets/images/Link → banner-44.jpg.png";
import img4 from "../assets/images/Link → banner-45.jpg.png";


export default function Brands() {
  return (
    <>
      <section className="images m-3 d-flex flex-wrap justify-content-center">
        <div className="img-container">
          <div
            className="img1 position-relative"
            style={{ backgroundImage: `url(${img1})` }}
          >
            <button
              type="button"
              className="btn btn-light position-absolute bottom-0 start-50 translate-middle-x mb-4"
            >
              Shop Hoodies
            </button>
          </div>
          <div
            className="img2 position-relative mt-2"
            style={{ backgroundImage: `url(${img2})` }}
          >
            <button
              type="button"
              className="btn btn-light position-absolute bottom-0 start-50 translate-middle-x mb-4"
            >
              Shop Tanktop
            </button>
          </div>
        </div>
        <div
          className="img3 position-relative"
          style={{ backgroundImage: `url(${img3})` }}
        >
          <button
            type="button"
            className="btn btn-light position-absolute bottom-0 start-50 translate-middle-x mb-4"
          >
            Shop T-Shirt
          </button>
        </div>
        <div className="img-container">
          <div
            className="img4 position-relative"
            style={{ backgroundImage: `url(${img4})` }}
          >
            <button
              type="button"
              className="btn btn-light position-absolute bottom-0 start-50 translate-middle-x mb-4"
            >
              Shop Sweater
            </button>
          </div>
          <div
            className="img5 position-relative mt-2"
            style={{ backgroundImage: `url(${img1})` }}
          >
            <button
              type="button"
              className="btn btn-light position-absolute bottom-0 start-50 translate-middle-x mb-4"
            >
              Shop Designer
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
