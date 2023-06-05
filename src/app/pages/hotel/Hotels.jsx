import React from 'react'
import Header from '../../components/Header/Header'
import NavBar from '../../components/Navbar/NavBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import img1 from '../../assets/images/lekki.jpg'

function Hotels() {
  const photos = [
    {
      src: img1
    },
    {
      src: img1
    },
    {
      src: img1
    },
    {
      src: img1
    },
    {
      src: img1
    },
    {
      src: img1
    },
  ];
  return (
    <div>
      <NavBar />
      <Header type="list" />
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 new york</span>
          </div>
          <div className="hotelDistance">
            <span>Excellent Location - 500m fron center</span>
          </div>
          <div className="hotelPriceHightLight">
            <span>Book a stay over N1413 at this property and get a free airport taxi</span>
          </div>
          <div className="hotelImages">
            {photos.map(photos => (
              <div className="hotelImgWrapper">
                <img src={photos.src} alt="" className="hotelImg" />
              </div>
            ))}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hotels