import logo from '../../assets/logo.svg';
import mainImg from '../../assets/Main.svg';
import salesCardimg from '../../assets/salescard.svg';
import rentalCardimg from '../../assets/rentalcard.svg';
import searchImg from '../../assets/search-img.svg';
import {useNavigate} from 'react-router-dom';

export const Header = ({salescard, rentalcard}) => {

  const navigate = useNavigate();

  function handleClick(){
    navigate("/find");
  }

  return (
    <>
      <header>
        <div className="navbar">
          <nav>
            <div className='logo-container'>
              <i onClick={click} class="fa-solid fa-bars"></i>
              <img src={logo} alt="" />
              <a className="logo"><b>fast</b>product</a>
            </div>

            <ul className="nav-links">
              <li className="nav-link-item">Home</li>
              <li className="nav-link-item">About</li>
              <li className="nav-link-item">Contact</li>
              <li className="nav-link-item">Projects</li>
            </ul>
          </nav>

          <div className="profile">
            <button onClick={handleClick}>Search</button>
          </div>
        </div>
        {/* big image after navbar */}
        <img className='mainImg' src={mainImg} alt="" />
      </header>

      <main>
        <h1>Featured Sales</h1>
        <div className="card-container">
            {
              salescard.map((item) => {
                <div className="card">
                  <div className="card-header">
                    <img src={salesCardimg} alt="" />
                  </div>
                  <div className="card-body">
                    <p className='price'>{item.price}</p>
                    <p className='title'>{item.title}</p>
                    <p className='location'>{item.location}</p>
                    <p className='date'>{item.date}</p>
                  </div>
                </div>
              })
            }
        </div>

        <h1>Featured Rental</h1>
        <div className="card-container">
            {
              rentalcard.map((elem) => {
                
                <div className="card">
                  <div className="card-header">
                    <img src={rentalCardimg} alt="" />
                  </div>
                  <div className="card-body">
                    <p className='price'>{elem.price}</p>
                    <p className='title'>{elem.title}</p>
                    <p className="location">{elem.location}</p>
                    <p className='date'>{elem.date}</p>
                  </div>
                </div>
              })
            }
        </div>

        <section className='search-section'>
          <div className="search-container">
              <div className="content">
                  <h2 className="content-header">Search Your Product</h2>
                  <p className="content-text">Find the product you are looking for easily according to name information.</p>
                  <a href="#" className="btn-search">Search</a>
              </div>

              <img src={searchImg} alt="" />
          </div>
        </section>
      </main>

      <footer>
        <div class="footer-container">
            <div class="footer-links">
                <a href="#" class="footer-link-item"><i class="fa-brands fa-facebook-f"></i></a>
                <a href="#" class="footer-link-item"><i class="fa-brands fa-instagram"></i></a>
                <a href="#" class="footer-link-item"><i class="fa-brands fa-twitter"></i></a>
                <a href="#" class="footer-link-item"><i class="fa-brands fa-pinterest"></i></a>
                <a href="#" class="footer-link-item"><i class="fa-brands fa-tiktok"></i></a>
                <a href="#" class="footer-link-item"><i class="fa-brands fa-whatsapp"></i></a>
                <a href="#" class="footer-link-item"><i class="fa-brands fa-youtube"></i></a>
            </div>

            <p>© Start, 2022. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
  
}





function location(){
  window.location.href = "../../../public/search.html"
}


