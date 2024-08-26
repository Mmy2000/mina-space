import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
  <nav className="navbar p-3 "> {/* padding property added p-3 */}
    <div className="icons">
      <a href="https://x.com/"><i className="fab fa-twitter text-secondary" /></a>
      <a href="https://www.facebook.com/"><i className="fab fa-facebook text-secondary" /></a>
      <a href="https://www.instagram.com/"><i className="fab fa-instagram text-secondary" /></a>
      <a href="https://www.youtube.com/"><i className="fab fa-youtube text-secondary" /></a>
    </div>
    <div className="offer">
      <p className="fw-bold">free shipping on all U.S Order $50+</p>
    </div>
    <div>
      <button type="button" className="btn" data-bs-toggle="button">Login</button>
      <button type="button" className="btn btn-dark">SignUp</button>
    </div>
  </nav>
  <nav className="navbar navbar-expand-lg bg-white">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse " id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item dropdown ">
            <a className="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              HOME
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              MINASPACE
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              SHOP
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              BLOG
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              PAGES
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <img src="images/Logo.png" className="me-auto " width={200} alt />
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">
            <i className="fa fa-search" aria-hidden="true" /> </button>
        </form>
      </div>
    </div>
  </nav>
  <section className="headerr ">
    <div className="bg1  ">
      <div className="ms-5" style={{marginTop: 160}}>
        <h3>T-Shirt Printing
          <br />made easy
        </h3>
        <p className="text-secondary ">Create your desgin for you <br />
          online business</p>
        <button type="button" className=" mb-5 btn btn-success">Create a T-Shirt</button>
      </div>
    </div>
    <div className="bg2 ">
      <div className="ms-5" style={{marginTop: 160}}>
        <h3>Bring your ideas
          <br />to life in minute
        </h3>
        <p className="text-secondary ">Print shirts for yourself or your<br />
          creative works</p>
        <button type="button" className="mb-5 btn btn-success">Shop Now</button>
      </div>
    </div>
    <div className="clear" />
  </section>
  <section className="information mt-5 container">
    <div className="row text-center">
      <div className="col-md-4 mb-4 d-flex">
        <i className="fa fa-shopping-basket text-success me-3 fs-1 pt-2" aria-hidden="true" />
        <div>
          <h4>Top quality</h4>
          <p className="text-secondary">Lorem ipsum dolor sit amet consectetur <br />elit. Mollitia dolore repellendus.</p>
        </div>
      </div>
      <div className="col-md-4 mb-4 d-flex">
        <i className="fa fa-shopping-basket text-success me-3 fs-1 pt-2" aria-hidden="true" />
        <div>
          <h4>Top quality</h4>
          <p className="text-secondary">Lorem ipsum dolor sit amet consectetur <br />elit. Mollitia dolore repellendus.</p>
        </div>
      </div>
      <div className="col-md-4 mb-4 d-flex">
        <i className="fa fa-shopping-basket text-success me-3 fs-1 pt-2" aria-hidden="true" />
        <div>
          <h4>Top quality</h4>
          <p className="text-secondary">Lorem ipsum dolor sit amet consectetur <br />elit. Mollitia dolore repellendus.</p>
        </div>
      </div>
    </div>
  </section>
  <section className="images m-3 d-flex flex-wrap justify-content-center">
    <div className="img-container">
      <div className="img1 position-relative">
        <button type="button" className="btn btn-light position-absolute bottom-0 start-50 translate-middle-x mb-4">Shop Hoodies</button>
      </div>
      <div className="img2 position-relative mt-2">
        <button type="button" className="btn btn-light position-absolute bottom-0 start-50 translate-middle-x mb-4">Shop Tanktop</button>
      </div>
    </div>
    <div className="img3 position-relative">
      <button type="button" className="btn btn-light position-absolute bottom-0 start-50 translate-middle-x mb-4">Shop T-Shirt</button>
    </div>
    <div className="img-container">
      <div className="img4 position-relative">
        <button type="button" className="btn btn-light position-absolute bottom-0 start-50 translate-middle-x mb-4">Shop Sweater</button>
      </div>
      <div className="img5 position-relative mt-2">
        <button type="button" className="btn btn-light position-absolute bottom-0 start-50 translate-middle-x mb-4">Shop Designer</button>
      </div>
    </div>
  </section>
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
            <img className="rounded w-100" src="./images/Link → 8-330x440.jpg.png" alt />
            <div className="text-center mt-3">
              <span className="fw-bold d-block">Zone Sweatshirt</span>
              <span className="fw-bold d-block">$19.95 – $159.95</span>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="col-lg-3">
          <div className="product-card position-relative">
            <img className="rounded w-100" src="./images/Link → 10-2-330x440.jpg.png" alt />
            <div className="text-center mt-3">
              <span className="fw-bold d-block">Zoo Men’s t-shirt</span>
              <span className="fw-bold d-block">$14.95 – $119.95</span>
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className="col-lg-3">
          <div className="product-card position-relative">
            <img className="rounded w-100" src="./images/Link → 17-2-330x440.jpg.png" alt />
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
            <img className="rounded w-100" src="./images/Link → 17-330x440.jpg.png" alt />
            <div className="position-absolute top-0 start-0 m-2">
              <span className="badge bg-dangere">Hot</span>
              <div>
                <span className="badge bg-successe mt-2">-10%</span> {/* Green "-10%" Button */}
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
            <img className="rounded w-100" src="./images/Link → 16-2-330x440.jpg.png" alt />
            <div className="position-absolute top-0 start-0 m-2">
              <span className="badge bg-successe">Sale</span> {/* Green "Sale" Button */}
              <div>
                <span className="badge bg-lighte  mt-2">New</span> {/* Light Purple "New" Button */}
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
            <img className="rounded w-100" src="./images/Link → 14-330x440.jpg.png" alt />
            <div className="position-absolute top-0 start-0 m-2">
              <span className="badge bg-successe">Sale</span> {/* Green "Sale" Button */}
              <div>
                <span className="badge bg-lighte mt-2">New</span> {/* Light Purple "New" Button */}
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
            <img className="rounded w-100" src="./images/Link → 10-4-330x440.jpg.png" alt />
            <div className="position-absolute top-0 start-0 m-2">
              <span className="badge bg-successe">Sale</span> {/* Green "Sale" Button */}
              <div>
                <span className="badge bg-lighte  mt-2">New</span> {/* Light Purple "New" Button */}
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
            <img className="rounded w-100" src="./images/Link → 10-330x440.jpg.png" alt />
            <div className="position-absolute top-0 start-0 m-2">
              <span className="badge bg-dangere">Hot</span> {/* Red "Hot" Button */}
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
  <section className="mainee p-5">
    <div className="text-center mb-5">
      <p className="pra">T-shirt printing made easy.</p>
      <span className="pra2">Let us show you how your product come to life.</span>
    </div>
    <div className="container ">
      <div className="row ">
        <div className="col-md-6 textt py-5 ">
          <ul>
            <li className="lista0 lista position-relative">choose from 42 custom products in our catalog</li>
            <li className="lista1 lista position-relative">Customize your design with graphics, text or your own uploaded
              images.</li>
            <li className="lista2 lista position-relative">Order prints by selecting your preferred T-shirt size, style, and
              quantity.</li>
            <li className="lista3 lista position-relative">Get your order sent to your door with free standard shipping</li>
          </ul>
        </div>
        <div className="col-md-6 imgee">
          <img className="w-100" src="images/div.haru-steps__image.png" alt />
        </div>
      </div>
    </div>
  </section>
  <section className="container">
    <div className="text-center mb-5">
      <p className="pra">T-shirt printing made easy.</p>
      <span className="pra2">Let us show you how your product come to life.</span>
    </div>
    <div className="brorher">
      <div className="mai1 ">
        <div className="infoo ms-4">
          <h2 className="pragra">Premium quality shirts</h2>
          <span className="pragra2">Lorem ipsum det, radipiscing elit duis necfringi det, consec tetur adipiscing e</span>
        </div>
      </div>
      <div className="mai2 ">
        <div className="infoo ms-4">
          <h2 className="pragra">Premium quality shirts</h2>
          <span className="pragra2">Lorem ipsum det, radipiscing elit duis necfringi det, consec tetur adipiscing e</span>
        </div>
      </div>
      <div className="mai3 ">
        <div className="infoo ms-4">
          <h2 className="pragra">Premium quality shirts</h2>
          <span className="pragra2">Lorem ipsum det, radipiscing elit duis necfringi det, consec tetur adipiscing e</span>
        </div>
      </div>
    </div>
  </section>
  <section className="container bah">
    <div className="imm position-relative">
      <div className="wa" />
      <div className="wa2" />
      <div className="imeee position-relative">
        <img className="ge w-100" src="images/9390ca7c0da3af96ec31b54790b10e0f.png" alt />
      </div>
    </div>
    <div className="inf">
      <h2 style={{fontFamily: 'Georgia, "Times New Roman", Times, serif'}}>10,000+ of free images, icons, and graphics</h2>
      <span>You’ve got the ideas, we’ve got the tools</span>
      <button className="btn">Get Started</button>
    </div>
  </section>
  {/* Simple pricing forevermore */}
  <section className="py-5 Plan" style={{backgroundColor: '#B479D926'}}>
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
            <strong className="h1 d-block my-5">$12.99 <span className="text-muted h4">/user</span></strong>
          </div>
          <hr />
          <u className="checker">
            <li> <i className="fa-regular fa-circle-check" /> Free licensed icons</li>
            <li> <i className="fa-regular fa-circle-check" /> Fast and free standard shipping</li>
            <li> <i className="fa-regular fa-circle-check" /> No credit card required</li>
            <li> <i className="fa-regular fa-circle-check" /> Friendly supports</li>
          </u>
          <button style={{backgroundColor: '#2EBB771A'}} className="btn  px-4 mt-5 w-100">Get Started</button>
        </div>
        {/* Box _ 2 */}
        <div className=" px-3 bg-white py-3 rounded-4 ">
          <div className="text-center">
            <h3 className>Professional</h3>
            <strong className="h1 d-block my-5">$99.99 <span className="text-muted h4">/team</span></strong>
          </div>
          <hr />
          <u className="checker">
            <li> <i className="fa-regular fa-circle-check" />Full access to all features</li>
            <li> <i className="fa-regular fa-circle-check" />Fast and free standard shipping</li>
            <li> <i className="fa-regular fa-circle-check" />No credit card required</li>
            <li> <i className="fa-regular fa-circle-check" /> Use on unlimited projects</li>
            <li> <i className="fa-regular fa-circle-check" /> Team collaboration feature.</li>
            <li> <i className="fa-regular fa-circle-check" />Friendly supports </li>
          </u>
          <button className="btn  btn-success px-4 mt-5 w-100">Get Started</button>
        </div>
        {/* Box _ 3 */}
        <div className=" px-3 bg-white py-3 rounded-4 ">
          <div className="text-center">
            <h3 className>Enterprise</h3>
            <strong className="h1 d-block my-5">$99.99 <span className="text-muted h4">/team</span></strong>
          </div>
          <hr />
          <u className="checker">
            <li> <i className="fa-regular fa-circle-check" /> All features in Pro Plan.</li>
            <li> <i className="fa-regular fa-circle-check" /> Use on unlimited projects</li>
            <li> <i className="fa-regular fa-circle-check" /> Team collaboration feature.</li>
            <li> <i className="fa-regular fa-circle-check" /> Friendly supports</li>
          </u>
          <button style={{backgroundColor: '#2EBB771A'}} className="btn  px-4 mt-5 w-100">Get Started</button>
        </div>
      </div>
    </div>
  </section>
  {/* Simple pricing forevermore */}
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
            <img src="images/People_1.png" alt />
            <h4 className="ms-3">Dean D. <span className="text-muted h6">Director</span></h4>
          </div>
          <p className="mt-4">“ Great quality products - Flags,
            programs for exceptional capacities,
            birthday, and occasion welcome are
            largely still mainstream on paper.”</p>
        </div>
        {/* Box _ 2 */}
        <div className="  px-3 bg-white py-3 rounded-4 border border-1 border-light shadow">
          <div className="d-flex align-items-center ">
            <img src="images/People_2.png" alt />
            <h4 className="ms-3">Cristian L. <span className="text-muted h6">Manager</span></h4>
          </div>
          <p className="mt-4">“ Best services ever - Flags, programs
            for exceptional capacities, birthday,
            and are largely still mainstream on
            paper occasion welcome.”</p>
        </div>
        {/* Box _ 3 */}
        <div className="  px-3 bg-white py-3 rounded-4 border border-1 border-light shadow">
          <div className="d-flex align-items-center ">
            <img src="images/People_2.png" alt />
            <h4 className="ms-3">Leonel R.<span className="text-muted h6">Designer</span></h4>
          </div>
          <p className="mt-4">“ Top noth support - Flags, programs
            for, birthday, and occasion welcome
            are largely still mainstream on paper
            exceptional capacities.”</p>
        </div>
      </div>
    </div>
  </section>
  <footer style={{backgroundColor: '#F5F5F5'}}>
    <div className="container text-center py-5 mt-5">
      <div className="row">
        <div className="col-md-3 col-sm-6 mb-4">
          <ul>
            <li><img src="images/Logo.png" width={150} alt /></li>
            <li>hello@minaspace.io</li>
            <li style={{color: 'black', fontWeight: 800}}>+02 036 038 3996</li>
            <li>3665 Paseo Place, Suite 0960</li>
            <li>San Diego, CA 92101</li>
          </ul>
        </div>
        <div className="col-md-3 col-sm-6 mb-4">
          <ul>
            <li className="h5 fs-5">Information</li>
            <li>About us</li>
            <li>Our Blog</li>
            <li>Start a Return</li>
            <li>Contact Us</li>
            <li>Shipping FAQ</li>
          </ul>
        </div>
        {/* Make this section order before Newsletter on small screens */}
        <div className="col-md-3 col-sm-6 mb-4 order-sm-1 order-md-3">
          <ul>
            <li className="h5 fs-5">Useful links</li>
            <li>My Account</li>
            <li>Print Provider</li>
            <li>Become a Partner</li>
            <li>Custom Products</li>
            <li>Make your own shirt</li>
          </ul>
        </div>
        {/* Make this section order after Useful links on small screens */}
        <div className="col-md-3 col-sm-6 mb-4 order-sm-2 order-md-4">
          <ul>
            <li className="h5 fs-5">Newsletter</li>
            <li className="py-3">
              Get the latest news, events &amp; more delivered to your inbox.
            </li>
            <li>
              <input type="text" placeholder="Your email address" className="form-control w-100" />
            </li>
          </ul>
        </div>
      </div>
      <div>
        <img src="images/footer.png" className="w-100" alt />
        <p className="text-center text-muted py-4">© 2022 MinaSpace. All rights reserved.</p>
      </div>
    </div>
  </footer>
</div>

    </>
  );
}

export default App
