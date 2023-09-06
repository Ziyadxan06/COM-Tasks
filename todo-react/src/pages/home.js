import logo from '../assets/logo.svg';
import mainImg from '../assets/Main.svg';
import salesCardimg from '../assets/salescard.svg';
import rentalCardimg from '../assets/rentalcard.svg';
import searchImg from '../assets/search-img.svg';
import { useNavigate } from "react-router-dom";
import '../styles/index.css';
import '../styles/responsive.css';

export const Home = () => {

  const navigate = useNavigate();

  function place(){
    navigate('/find')
  }

  return (
    <>
        <header>
            <div className="navbar">
                <nav>
                    <div className='logo-container'>
                    <i onClick={click} class="fa-solid fa-bars"></i>
                    <img src={logo} alt="" />
                    <a href="#" className="logo"><b>fast</b>home</a>
                    </div>

                    <ul className="nav-links">
                    <li className="nav-link-item">For Sale</li>
                    <li className="nav-link-item">For Rent</li>
                    <li className="nav-link-item">Daily Rental</li>
                    <li className="nav-link-item">Projects</li>
                    </ul>
                </nav>

                <div className="profile">
                    <a href="" onClick={place}>Advertise</a>
                </div>
            </div>
            {/* big image after navbar */}
            <img className='mainImg' src={mainImg} alt="" />
        </header>

        <main>
            <h1>Featured Sales</h1>
            <div className="card-container">
                <div className="card">
                    <div className="card-header">
                        <img src={salesCardimg} alt="" />
                    </div>
                    <div className="card-body">
                        <p className='price'>290.000 $</p>
                        <p className='title'>Apartment for sale</p>
                        <p className='location'>London, Oxford St.</p>
                        <p className='date'>26 November 2020</p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <img src={salesCardimg} alt="" />
                    </div>
                    <div className="card-body">
                        <p className='price'>290.000 $</p>
                        <p className='title'>Apartment for sale</p>
                        <p className='location'>London, Oxford St.</p>
                        <p className='date'>26 November 2020</p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <img src={salesCardimg} alt="" />
                    </div>
                    <div className="card-body">
                        <p className='price'>290.000 $</p>
                        <p className='title'>Apartment for sale</p>
                        <p className='location'>London, Oxford St.</p>
                        <p className='date'>26 November 2020</p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <img src={salesCardimg} alt="" />
                    </div>
                    <div className="card-body">
                        <p className='price'>290.000 $</p>
                        <p className='title'>Apartment for sale</p>
                        <p className='location'>London, Oxford St.</p>
                        <p className='date'>26 November 2020</p>
                    </div>
                </div>
            </div>

            <h1>Featured Rental</h1>
            <div className="card-container">
                <div className="card">
                    <div className="card-header">
                        <img src={rentalCardimg} alt="" />
                    </div>
                        <div className="card-body">
                        <p className='price'>3.000 $</p>
                        <p className='title'>Apartment for rent</p>
                        <p className="location">London, John Ruskin St.</p>
                        <p className='date'>20 November 2020</p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <img src={rentalCardimg} alt="" />
                    </div>
                        <div className="card-body">
                        <p className='price'>3.000 $</p>
                        <p className='title'>Apartment for rent</p>
                        <p className="location">London, John Ruskin St.</p>
                        <p className='date'>20 November 2020</p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <img src={rentalCardimg} alt="" />
                    </div>
                        <div className="card-body">
                        <p className='price'>3.000 $</p>
                        <p className='title'>Apartment for rent</p>
                        <p className="location">London, John Ruskin St.</p>
                        <p className='date'>20 November 2020</p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <img src={rentalCardimg} alt="" />
                    </div>
                        <div className="card-body">
                        <p className='price'>3.000 $</p>
                        <p className='title'>Apartment for rent</p>
                        <p className="location">London, John Ruskin St.</p>
                        <p className='date'>20 November 2020</p>
                    </div>
                </div>
            </div>
        </main>

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

function click(){

    let menu = document.querySelector(".nav-links");


    if(menu.style.display == "none" || menu.style.display == ""){
        menu.style.display = "block";
    }

    else{
        menu.style.display = "none";
    }
}

