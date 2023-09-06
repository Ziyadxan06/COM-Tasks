import { useEffect, useState } from "react"; 
import logo from '../assets/logo.svg';
import { useNavigate } from "react-router-dom";
import '../styles/find.css';

export const Find = () => {

  const navigate = useNavigate();

  function place(){
    navigate('/')
  }
  const [posts, setPosts] = useState([]);
  

  function getPost(){
    fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => setPosts(data));
  }
  
  useEffect(getPost, [])

 
  return (
    <div>
        <header>
            <div className="navbar">
                <nav>
                    <div className='logo-container'>
                    <i onClick={click} className="fa-solid fa-bars"></i>
                    <img src={logo} alt="" />
                    <a href="#" className="logo"><b>fast</b>home</a>
                    </div>

                    <ul className="nav-links">
                      <li className="nav-link-item" onClick={place}><a href="" onClick={place}>Home</a></li>
                      <li className="nav-link-item"><a href="#">About</a></li>
                      <li className="nav-link-item"><a href="#">Contact</a></li>
                      <li className="nav-link-item"><a href="#">Projects</a></li> 
                    </ul>
                </nav>
            </div>
        </header>

        <input onKeyUp={search} type="text" className="filter-input" placeholder="filter..." />

        <a href="#" onClick={open} className="basket-btn"><i className="fa-sharp fa-solid fa-basket-shopping"></i></a>

        <div className="basket">
          {
            posts.map((user) =>(
              <div className="card">
                <h3 className="card-title">{user.title}</h3>
                <p className="card-price">{user.price}</p>
                <p className="category">{user.category}</p>
                <button onClick={remove} className="remove-btn">Remove</button>
              </div>
            ))
          }
        </div>

        <div className="card-container">
          {
            posts.map((user) =>(
              <div className="card">
                <img src={user.image} className="card-img"/>
                <h3 className="card-title">{user.title}</h3>
                <p className="card-price">{user.price}</p>
                <p className="category">{user.category}</p>
                <button className="card-btn">Add Basket</button>
              </div>
            ))
          }
        </div>
    </div>
  )
}

posts.forEach(elem => {
  console.log(elem)
})

function search(){
      const input = document.querySelector(".filter-input")
      let value = input.value.toUpperCase();
      let title = document.querySelectorAll(".card-title");
      title.forEach((item) => {
          if(!item.textContent.toUpperCase().includes(value)){
            item.parentElement.parentElement.style.display = 'none';
          }
      })
  }

    // let cardBtn = document.querySelectorAll(".card-btn");
    
    // cardBtn.forEach(elem => {
    //   elem.addEventListener('click', ()=>{
    //     
    //     basketCard.forEach((elem, ind, arr)=>{
    //       elem.classList.replace("card", "active");
    //     }) 
    //   })
    // })

function remove(){
  let removeBtn = document.querySelectorAll(".remove-btn")
  let basketCard = document.querySelectorAll(".basket > .card")
  removeBtn.forEach((element, index,array) => {
      array[index].addEventListener('click', () => {
          basketCard.forEach((elem, ind, arr)=>{
              if(index == ind){
                  arr[index].classList.replace("active", "card");
              }
          })
      })
  })
}

function open(){
  const basket = document.querySelector(".basket")
  if(basket.style.display == "none" || basket.style.display == ""){
    basket.style.display = "block";
  }

  else{
      basket.style.display = "none";
  }
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
  

  


          

