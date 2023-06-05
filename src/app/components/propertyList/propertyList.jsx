import React from 'react'
import img1 from '../../assets/images/lekki.jpg'
import apartmentimg from '../../assets/images/apartment.jpg'
import hotel from '../../assets/images/hotel.avif'
import resort from '../../assets/images/resort.jpg'
import villa from '../../assets/images/villa.webp'
import '../../assets/styles/propertyList.css';
const PropertyList = ()=> {
  return (
    <div className='pList'>
        <div className="pListItem">
            <img src={ img1 } alt="" srcset="" className='pListImg'/>
            <div className="pListTitles">
                <h1>Cabins</h1>
                <h2>223 Hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src={ villa } alt="" srcset="" className='pListImg'/>
            <div className="pListTitles">
                <h1>villas</h1>
                <h2>223 Hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src={ hotel } alt="" srcset="" className='pListImg'/>
            <div className="pListTitles">
                <h1>Hotels</h1>
                <h2>223 Hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src={ apartmentimg } alt="" srcset="" className='pListImg'/>
            <div className="pListTitles">
                <h1>Appartments</h1>
                <h2>223 Hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src={ resort } alt="" srcset="" className='pListImg'/>
            <div className="pListTitles">
                <h1>Resort</h1>
                <h2>223 Hotels</h2>
            </div>
        </div>
    </div>
  )
}

export default PropertyList