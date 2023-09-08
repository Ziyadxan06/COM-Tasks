
import '../styles/find.css';

import { useEffect, useState } from "react";

import logo from '../assets/logo.svg';
import { useNavigate } from "react-router-dom";

export const Find = () => {

  const navigate = useNavigate();

  function place() {
    navigate('/')
  }
  const [posts, setPosts] = useState([]);


  function getPost() {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        setPosts(data)
      });
  }

  useEffect(getPost, [])


  return (
    <>
     <div>
        <header>
          <div className="navbar">
            <nav>
              <div className='logo-container'>
                <i onClick={click} className="fa-solid fa-bars"></i>
                <img src={logo} alt="" />
                <a href="#" className="logo"><b>fast</b>Product</a>
              </div>

              <ul className="nav-links">
                <li className="nav-link-item" onClick={place}><a href="" onClick={place}>Home</a></li>
                <li className="nav-link-item"><a href="#">About</a></li>
                <li className="nav-link-item"><a href="#">Contact</a></li>
                <li className="nav-link-item"><a href="#">Projects</a></li>
              </ul>
            </nav>
            <a href="#" onClick={open} className="basket-btn"><i className="fa-sharp fa-solid fa-basket-shopping"></i></a>
          </div>
        </header>

        

        <div className="basket">
          {
            posts.map((user, index) => (
              <div className="card" key={index}>
                <h3 className="basket-card-title">{user.title}</h3>
                <p className="basket-card-price">{user.price}</p>
                <p className="category">{user.category}</p>
                <button className="remove-btn">Remove</button>
              </div>
            ))
          }
        </div>

        <div className="card-container">
          {
            posts.map((user, index) => (
              <div className="card" key={index}>
                <img src={user.image} className="card-img" />
                <h3 className="card-title">{user.title}</h3>
                <p className="card-price">{user.price}</p>
                <p className="category">{user.category}</p>
                <button className="card-btn">Add Basket</button>
              </div>
            ))
          }
        </div>
      </div>
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


setTimeout(() => {
  let cardBtns = document.querySelectorAll(".card-btn");
  console.log(cardBtns);
  let basketCard = document.querySelectorAll(".basket > .card");

  cardBtns.forEach((element, index, array) => {
    array[index].addEventListener('click', () => {
      basketCard.forEach((elem, ind, arr) => {
        if (index === ind) {
          arr[index].classList.replace("card", "active");
        }
      })
    })
  })
}, 1000)


setTimeout(() => {
  let removeBtn = document.querySelectorAll(".remove-btn")
  let basketCard = document.querySelectorAll(".basket > .card")
  removeBtn.forEach((element, index, array) => {
    array[index].addEventListener('click', () => {
      console.log(array[index]);
      basketCard.forEach((elem, ind, arr) => {
        if (index === ind) {
          arr[index].classList.replace("active", "card");
        }
      })
    })
  })
}, 2000)


function open() {
  const basket = document.querySelector(".basket")
  if (basket.style.display === "none" || basket.style.display === "") {
    basket.style.display = "block";
  }

  else {
    basket.style.display = "none";
  }
}

function click() {

  let menu = document.querySelector(".nav-links");


  if (menu.style.display === "none" || menu.style.display === "") {
    menu.style.display = "block";
  }

  else {
    menu.style.display = "none";
  }
} 