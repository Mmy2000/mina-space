import React from 'react'
import bgImg from "../assets/images/div.haru-steps__image.png";


export default function Main() {
  return (
    <>
      <section className="mainee p-5">
        <div className="text-center mb-5">
          <p className="pra">T-shirt printing made easy.</p>
          <span className="pra2">
            Let us show you how your product come to life.
          </span>
        </div>
        <div className="container ">
          <div className="row ">
            <div className="col-md-6 textt py-5 ">
              <ul>
                <li className="lista0 lista position-relative">
                  choose from 42 custom products in our catalog
                </li>
                <li className="lista1 lista position-relative">
                  Customize your design with graphics, text or your own uploaded
                  images.
                </li>
                <li className="lista2 lista position-relative">
                  Order prints by selecting your preferred T-shirt size, style,
                  and quantity.
                </li>
                <li className="lista3 lista position-relative">
                  Get your order sent to your door with free standard shipping
                </li>
              </ul>
            </div>
            <div className="col-md-6 imgee">
              <img className="w-100" src={bgImg} alt />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
