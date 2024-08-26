import React from 'react'
import img1 from "../assets/images/People_1.png";
import img2 from "../assets/images/People_2.png";

export default function Reviews() {
  return (
    <>
      <section id="people" className="py-5 Plan">
        <div className="container">
          {/* heading */}
          <div className="text-center py-5">
            <h2>What People Are Saying</h2>
            <h5>We provide support for more than 15K+ Businesses.</h5>
          </div>
          {/*  */}
          <div className="Parent_Plan">
            {/* Box _ 1 */}
            <div className="  px-3 bg-white py-3 rounded-4 border border-1 border-light shadow">
              <div className="d-flex align-items-center ">
                <img src={img1} alt />
                <h4 className="ms-3">
                  Dean D. <span className="text-muted h6">Director</span>
                </h4>
              </div>
              <p className="mt-4">
                “ Great quality products - Flags, programs for exceptional
                capacities, birthday, and occasion welcome are largely still
                mainstream on paper.”
              </p>
            </div>
            {/* Box _ 2 */}
            <div className="  px-3 bg-white py-3 rounded-4 border border-1 border-light shadow">
              <div className="d-flex align-items-center ">
                <img src={img2} alt />
                <h4 className="ms-3">
                  Cristian L. <span className="text-muted h6">Manager</span>
                </h4>
              </div>
              <p className="mt-4">
                “ Best services ever - Flags, programs for exceptional
                capacities, birthday, and are largely still mainstream on paper
                occasion welcome.”
              </p>
            </div>
            {/* Box _ 3 */}
            <div className="  px-3 bg-white py-3 rounded-4 border border-1 border-light shadow">
              <div className="d-flex align-items-center ">
                <img src={img1} alt />
                <h4 className="ms-3">
                  Leonel R.<span className="text-muted h6">Designer</span>
                </h4>
              </div>
              <p className="mt-4">
                “ Top noth support - Flags, programs for, birthday, and occasion
                welcome are largely still mainstream on paper exceptional
                capacities.”
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
