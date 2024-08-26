import React from 'react'

export default function Pricing() {
  return (
    <>
      <section className="py-5 Plan" style={{ backgroundColor: "#B479D926" }}>
        <div className="container">
          {/* heading */}
          <div className="text-center py-5">
            <h2>Simple pricing foreveryone</h2>
            <h5>Choose a plan and get started</h5>
          </div>
          {/* plan cards */}
          <div className="Parent_Plan">
            {/* Box _ 1 */}
            <div className="  px-3 bg-white py-3 rounded-4 ">
              <div className="text-center">
                <h3 className>Personal</h3>
                <strong className="h1 d-block my-5">
                  $12.99 <span className="text-muted h4">/user</span>
                </strong>
              </div>
              <hr />
              <u className="checker">
                <li>
                  {" "}
                  <i className="fa-regular fa-circle-check" /> Free licensed
                  icons
                </li>
                <li>
                  {" "}
                  <i className="fa-regular fa-circle-check" /> Fast and free
                  standard shipping
                </li>
                <li>
                  {" "}
                  <i className="fa-regular fa-circle-check" /> No credit card
                  required
                </li>
                <li>
                  {" "}
                  <i className="fa-regular fa-circle-check" /> Friendly supports
                </li>
              </u>
              <button
                style={{ backgroundColor: "#2EBB771A" }}
                className="btn  px-4 mt-5 w-100"
              >
                Get Started
              </button>
            </div>
            {/* Box _ 2 */}
            <div className=" px-3 bg-white py-3 rounded-4 ">
              <div className="text-center">
                <h3 className>Professional</h3>
                <strong className="h1 d-block my-5">
                  $99.99 <span className="text-muted h4">/team</span>
                </strong>
              </div>
              <hr />
              <u className="checker">
                <li>
                  {" "}
                  <i className="fa-regular fa-circle-check" />
                  Full access to all features
                </li>
                <li>
                  {" "}
                  <i className="fa-regular fa-circle-check" />
                  Fast and free standard shipping
                </li>
                <li>
                  {" "}
                  <i className="fa-regular fa-circle-check" />
                  No credit card required
                </li>
                <li>
                  {" "}
                  <i className="fa-regular fa-circle-check" /> Use on unlimited
                  projects
                </li>
                <li>
                  {" "}
                  <i className="fa-regular fa-circle-check" /> Team
                  collaboration feature.
                </li>
                <li>
                  {" "}
                  <i className="fa-regular fa-circle-check" />
                  Friendly supports{" "}
                </li>
              </u>
              <button className="btn  btn-success px-4 mt-5 w-100">
                Get Started
              </button>
            </div>
            {/* Box _ 3 */}
            <div className=" px-3 bg-white py-3 rounded-4 ">
              <div className="text-center">
                <h3 className>Enterprise</h3>
                <strong className="h1 d-block my-5">
                  $99.99 <span className="text-muted h4">/team</span>
                </strong>
              </div>
              <hr />
              <u className="checker">
                <li>
                  {" "}
                  <i className="fa-regular fa-circle-check" /> All features in
                  Pro Plan.
                </li>
                <li>
                  {" "}
                  <i className="fa-regular fa-circle-check" /> Use on unlimited
                  projects
                </li>
                <li>
                  {" "}
                  <i className="fa-regular fa-circle-check" /> Team
                  collaboration feature.
                </li>
                <li>
                  {" "}
                  <i className="fa-regular fa-circle-check" /> Friendly supports
                </li>
              </u>
              <button
                style={{ backgroundColor: "#2EBB771A" }}
                className="btn  px-4 mt-5 w-100"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
