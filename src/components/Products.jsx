import React from 'react'
import card1 from "../assets/images/Link → 8-330x440.jpg.png";
import card2 from "../assets/images/Link → 10-2-330x440.jpg.png";
import card3 from "../assets/images/Link → 17-2-330x440.jpg.png";
import card4 from "../assets/images/Link → 17-330x440.jpg.png";
import card5 from "../assets/images/Link → 16-2-330x440.jpg.png";
import card6 from "../assets/images/Link → 14-330x440.jpg.png";
import card7 from "../assets/images/Link → 10-4-330x440.jpg.png";
import card8 from "../assets/images/Link → 10-330x440.jpg.png";


export default function Products() {
  return (
    <>
      <section className="container mt-5 w-60">
        <div className="text-center mb-5">
          <p className="pra">Featured products</p>
          <span className="pra2 fw-200">What's more. we do it right!</span>
        </div>
        <div className="container">
          <div className="d-flex justify-content-center mb-5 row g-3">
            {/* Card 1 */}
            <div className="col-lg-3">
              <div className="product-card position-relative">
                <img
                  className="rounded w-100"
                  src={card1}
                  alt
                />
                <div className="text-center mt-3">
                  <span className="fw-bold d-block">Zone Sweatshirt</span>
                  <span className="fw-bold d-block">$19.95 – $159.95</span>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="col-lg-3">
              <div className="product-card position-relative">
                <img
                  className="rounded w-100"
                  src={card2}
                  alt
                />
                <div className="text-center mt-3">
                  <span className="fw-bold d-block">Zoo Men’s t-shirt</span>
                  <span className="fw-bold d-block">$14.95 – $119.95</span>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="col-lg-3">
              <div className="product-card position-relative">
                <img
                  className="rounded w-100"
                  src={card3}
                  alt
                />
                <div className="position-absolute top-0 start-0 m-2">
                  <span className="badge bg-dangere">Hot</span>
                </div>
                <div className="text-center mt-3">
                  <span className="fw-bold d-block">Toddler T-shirt</span>
                  <span className="fw-bold d-block">$26.00</span>
                </div>
              </div>
            </div>
            {/* Card 4 */}
            <div className="col-lg-3">
              <div className="product-card position-relative">
                <img
                  className="rounded w-100"
                  src={card4}
                  alt
                />
                <div className="position-absolute top-0 start-0 m-2">
                  <span className="badge bg-dangere">Hot</span>
                  <div>
                    <span className="badge bg-successe mt-2">-10%</span>{" "}
                    {/* Green "-10%" Button */}
                  </div>
                </div>
                <div className="text-center mt-3">
                  <span className="fw-bold d-block">Fine Jersey</span>
                  <span className="fw-bold text-success">$28.00</span>
                  <span className="fw-medium">$31.00</span>
                </div>
              </div>
            </div>
            {/* Card 5 */}
            <div className="col-lg-3">
              <div className="product-card position-relative">
                <img
                  className="rounded w-100"
                  src={card5}
                  alt
                />
                <div className="position-absolute top-0 start-0 m-2">
                  <span className="badge bg-successe">Sale</span>{" "}
                  {/* Green "Sale" Button */}
                  <div>
                    <span className="badge bg-lighte  mt-2">New</span>{" "}
                    {/* Light Purple "New" Button */}
                  </div>
                </div>
                <div className="text-center mt-3">
                  <span className="fw-bold d-block">Kids Hoodie</span>
                  <span className="fw-bold d-block">$26.00 – $29.00</span>
                </div>
              </div>
            </div>
            {/* Card 6 */}
            <div className="col-lg-3">
              <div className="product-card position-relative">
                <img
                  className="rounded w-100"
                  src={card6}
                  alt
                />
                <div className="position-absolute top-0 start-0 m-2">
                  <span className="badge bg-successe">Sale</span>{" "}
                  {/* Green "Sale" Button */}
                  <div>
                    <span className="badge bg-lighte mt-2">New</span>{" "}
                    {/* Light Purple "New" Button */}
                  </div>
                </div>
                <div className="text-center mt-3">
                  <span className="fw-bold d-block">Youth Short Sleeve</span>
                  <span className="fw-bold d-block">$26.00 – $29.00</span>
                </div>
              </div>
            </div>
            {/* Card 7 */}
            <div className="col-lg-3">
              <div className="product-card position-relative">
                <img
                  className="rounded w-100"
                  src={card7}
                  alt
                />
                <div className="position-absolute top-0 start-0 m-2">
                  <span className="badge bg-successe">Sale</span>{" "}
                  {/* Green "Sale" Button */}
                  <div>
                    <span className="badge bg-lighte  mt-2">New</span>{" "}
                    {/* Light Purple "New" Button */}
                  </div>
                </div>
                <div className="text-center mt-3">
                  <span className="fw-bold d-block">Midweight Cotton</span>
                  <span className="fw-bold d-block">$26.00 – $29.00</span>
                </div>
              </div>
            </div>
            {/* Card 8 */}
            <div className="col-lg-3">
              <div className="product-card position-relative">
                <img
                  className="rounded w-100"
                  src={card8}
                  alt
                />
                <div className="position-absolute top-0 start-0 m-2">
                  <span className="badge bg-dangere">Hot</span>{" "}
                  {/* Red "Hot" Button */}
                </div>
                <div className="text-center mt-3">
                  <span className="fw-bold d-block">Hooded Sweatshirt</span>
                  <span className="fw-bold d-block">$28.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
