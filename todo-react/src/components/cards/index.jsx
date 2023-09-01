import React from 'react';
import salesCardimg from '../../assets/salescard.svg';
import rentalCardimg from '../../assets/rentalcard.svg'

export const Salescards = ({salescard}) => {
  return (
    <main>
      <h1>Featured Sales</h1>
      <div className="card-container">
          {
            salescard.map((item) => {
              return(
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
              )
            })
          }
      </div>
    </main>
  )
}

export const Rentalcards = ({rentalcard}) => {
  return (
    <main>
      <h1>Featured Rental</h1>
      <div className="card-container">
          {
            rentalcard.map((elem) => {
              return(
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
              )
            })
          }
      </div>
    </main>
  )
}