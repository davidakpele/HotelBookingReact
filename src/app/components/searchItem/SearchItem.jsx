import '../../assets/styles/SearchItem.css'
import img1 from '../../assets/images/446367075.webp'
import img2 from '../../assets/images/452161650.webp'
import img3 from '../../assets/images/460292804.webp'
import img4 from '../../assets/images/463157388.webp'
import img5 from '../../assets/images/387350509.webp'
import img6 from '../../assets/images/452450627.webp'
import { Link, useLocation } from 'react-router-dom'
import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'

const SearchItem = () => {
    const location = useLocation();
    const [options, setOptions] = useState(location.state.options);
  return (
    <div className='searchItem'>
        <div className="searchContainer">
            <img src={img1} alt="" className="siImg" />
            <div className="siDesc">
                <h1 className="siTitle">PJP 11 Apartments</h1>
                <span className="siDistance"><Link to={'/'} className='linkBlue'>Abuja</Link> <Link className='linkBlue' to={'/'} >Show on map</Link>&nbsp;&nbsp; 6.5 km from center</span>
                  <span className='subTitle'>
                    <span data-testid="icon-with-text-icon" class="b6dc9a9e69 e492382468 e25355d3ee" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.22 3.37a.75.75 0 0 0-.6-.59c-4.85-.9-10.6.55-13.37 3.36S3.1 14.39 3.88 19.05L2 21a.75.75 0 0 0 0 1 .74.74 0 0 0 .53.22A.71.71 0 0 0 3 22l2-1.9a16.94 16.94 0 0 0 2.76.23c4.09 0 8.19-1.33 10.35-3.52 2.71-2.81 4.07-8.59 3.11-13.44zM17 15.75c-2.11 2.14-6.59 3.36-10.7 3L16.59 8.47a.75.75 0 0 0 0 -1.06.77.77 0 0 0-1.07 0l-10.3 10.3c-.33-3.91.91-8.31 3.1-10.52s7.29-3.63 11.52-3c.67 4.22-.54 9.22-2.84 11.56z"></path></svg></span>
                    <span className='subTitleDesc'>Travel Sustainable property</span>
                </span>
                <span className="siTaxiOp">Getaway Deal</span>
                <span className="siGroup">Recommended for your group</span>
                <span className="siSubtitle">One-Bedroom Apartment</span>
                <span className="siFeatures">
                  3 beds (1 full, 1 bunk bed, 1 sofa bed)
                </span>
                <span className="siCancelOp">
                    Free Cancellation
                </span>
                <span className="siCancelSubtitle">
                    <span className="siCancellationSubtitle">No prepayment needed </span>  – pay at the property You can cancel later, so lock in this great price today!
                </span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Wonderful</span>
                    <button>8.9</button>
                </div>
                <div className="siDetailsText">
                      <span className='siSearchRequestOutpUt'>18 night, {options.adult} adult, { options.children } children</span>
                      <span className='siPrice'>NGN 284,427&nbsp;
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.25 15.75h-.75a.75.75 0 0 1-.75-.75v-3.75a1.5 1.5 0 0 0-1.5-1.5h-.75a.75.75 0 0 0 0 1.5h.75V15a2.25 2.25 0 0 0 2.25 2.25h.75a.75.75 0 0 0 0-1.5zM11.625 6a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zM22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12zm1.5 0c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12z"></path></svg>
                      </span>
                    <span className='siTaxOp'>Includes taxesand fees</span>
                        <button className='siCheckButton'>See Availibility <FontAwesomeIcon icon={faArrowAltCircleRight} /></button> 
                </div>
              </div>
        </div>
        <div className="searchContainer">
            <img src={img2} alt="" className="siImg" />
            <div className="siDesc">
                <h1 className="siTitle">BKT Cribs - Apartments & Suites</h1>
                <span className="siDistance"><Link to={'/'} className='linkBlue'>Abuja</Link> <Link className='linkBlue' to={'/'} >Show on map</Link>&nbsp;&nbsp; 6.5 km from center</span>
                  <span className='subTitle'>
                    <span data-testid="icon-with-text-icon" class="b6dc9a9e69 e492382468 e25355d3ee" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.22 3.37a.75.75 0 0 0-.6-.59c-4.85-.9-10.6.55-13.37 3.36S3.1 14.39 3.88 19.05L2 21a.75.75 0 0 0 0 1 .74.74 0 0 0 .53.22A.71.71 0 0 0 3 22l2-1.9a16.94 16.94 0 0 0 2.76.23c4.09 0 8.19-1.33 10.35-3.52 2.71-2.81 4.07-8.59 3.11-13.44zM17 15.75c-2.11 2.14-6.59 3.36-10.7 3L16.59 8.47a.75.75 0 0 0 0 -1.06.77.77 0 0 0-1.07 0l-10.3 10.3c-.33-3.91.91-8.31 3.1-10.52s7.29-3.63 11.52-3c.67 4.22-.54 9.22-2.84 11.56z"></path></svg></span>
                    <span className='subTitleDesc'>Travel Sustainable property</span>
                </span>
                <span className="siTaxiOp">Getaway Deal</span>
                <span className="siGroup">Recommended for your group</span>
                <span className="siSubtitle">One-Bedroom Apartment</span>
                <span className="siFeatures">
                  3 beds (1 full, 1 bunk bed, 1 sofa bed)
                </span>
                <span className="siCancelOp">
                    Free Cancellation
                </span>
                <span className="siCancelSubtitle">
                    <span className="siCancellationSubtitle">No prepayment needed </span>  – pay at the property You can cancel later, so lock in this great price today!
                </span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Wonderful</span>
                    <button>8.9</button>
                </div>
                <div className="siDetailsText">
                      <span className='siSearchRequestOutpUt'>18 night, {options.adult} adult, { options.children } children</span>
                      <span className='siPrice'>NGN 695,475&nbsp;
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.25 15.75h-.75a.75.75 0 0 1-.75-.75v-3.75a1.5 1.5 0 0 0-1.5-1.5h-.75a.75.75 0 0 0 0 1.5h.75V15a2.25 2.25 0 0 0 2.25 2.25h.75a.75.75 0 0 0 0-1.5zM11.625 6a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zM22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12zm1.5 0c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12z"></path></svg>
                      </span>
                    <span className='siTaxOp'>Includes taxesand fees</span>
                        <button className='siCheckButton'>See Availibility <FontAwesomeIcon icon={faArrowAltCircleRight} /></button> 
                </div>
              </div>
        </div>
        <div className="searchContainer">
            <img src={img3} alt="" className="siImg" />
            <div className="siDesc">
                <h1 className="siTitle">2 bedroom shortlet apartment</h1>
                <span className="siDistance"><Link to={'/'} className='linkBlue'>Abuja</Link> <Link className='linkBlue' to={'/'} >Show on map</Link>&nbsp;&nbsp; 6.5 km from center</span>
                  <span className='subTitle'>
                    <span data-testid="icon-with-text-icon" class="b6dc9a9e69 e492382468 e25355d3ee" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.22 3.37a.75.75 0 0 0-.6-.59c-4.85-.9-10.6.55-13.37 3.36S3.1 14.39 3.88 19.05L2 21a.75.75 0 0 0 0 1 .74.74 0 0 0 .53.22A.71.71 0 0 0 3 22l2-1.9a16.94 16.94 0 0 0 2.76.23c4.09 0 8.19-1.33 10.35-3.52 2.71-2.81 4.07-8.59 3.11-13.44zM17 15.75c-2.11 2.14-6.59 3.36-10.7 3L16.59 8.47a.75.75 0 0 0 0 -1.06.77.77 0 0 0-1.07 0l-10.3 10.3c-.33-3.91.91-8.31 3.1-10.52s7.29-3.63 11.52-3c.67 4.22-.54 9.22-2.84 11.56z"></path></svg></span>
                    <span className='subTitleDesc'>Travel Sustainable property</span>
                </span>
                <span className="siTaxiOp">Getaway Deal</span>
                <span className="siGroup">Recommended for your group</span>
                <span className="siSubtitle">One-Bedroom Apartment</span>
                <span className="siFeatures">
                  6 beds (2 twins, 2 fulls, 1 king, 1 queen)
                </span>
                <span className="siCancelOp">
                    Free Cancellation
                </span>
                <span className="siCancelSubtitle">
                    <span className="siCancellationSubtitle">No prepayment needed </span>  – pay at the property You can cancel later, so lock in this great price today!
                </span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Wonderful</span>
                    <button>8.9</button>
                </div>
                <div className="siDetailsText">
                      <span className='siSearchRequestOutpUt'>18 night, {options.adult} adult, { options.children } children</span>
                      <span className='siPrice'>NGN 284,427&nbsp;
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.25 15.75h-.75a.75.75 0 0 1-.75-.75v-3.75a1.5 1.5 0 0 0-1.5-1.5h-.75a.75.75 0 0 0 0 1.5h.75V15a2.25 2.25 0 0 0 2.25 2.25h.75a.75.75 0 0 0 0-1.5zM11.625 6a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zM22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12zm1.5 0c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12z"></path></svg>
                      </span>
                    <span className='siTaxOp'>Includes taxesand fees</span>
                        <button className='siCheckButton'>See Availibility <FontAwesomeIcon icon={faArrowAltCircleRight} /></button> 
                </div>
              </div>
        </div>
        <div className="searchContainer">
            <img src={img4} alt="" className="siImg" />
            <div className="siDesc">
                <h1 className="siTitle">Acorns Apartment Lokogoma</h1>
                <span className="siDistance"><Link to={'/'} className='linkBlue'>Abuja</Link> <Link className='linkBlue' to={'/'} >Show on map</Link>&nbsp;&nbsp; 6.5 km from center</span>
                  <span className='subTitle'>
                    <span data-testid="icon-with-text-icon" class="b6dc9a9e69 e492382468 e25355d3ee" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.22 3.37a.75.75 0 0 0-.6-.59c-4.85-.9-10.6.55-13.37 3.36S3.1 14.39 3.88 19.05L2 21a.75.75 0 0 0 0 1 .74.74 0 0 0 .53.22A.71.71 0 0 0 3 22l2-1.9a16.94 16.94 0 0 0 2.76.23c4.09 0 8.19-1.33 10.35-3.52 2.71-2.81 4.07-8.59 3.11-13.44zM17 15.75c-2.11 2.14-6.59 3.36-10.7 3L16.59 8.47a.75.75 0 0 0 0 -1.06.77.77 0 0 0-1.07 0l-10.3 10.3c-.33-3.91.91-8.31 3.1-10.52s7.29-3.63 11.52-3c.67 4.22-.54 9.22-2.84 11.56z"></path></svg></span>
                    <span className='subTitleDesc'>Travel Sustainable property</span>
                </span>
                <span className="siTaxiOp">Getaway Deal</span>
                <span className="siGroup">Recommended for your group</span>
                <span className="siSubtitle">One-Bedroom Apartment</span>
                <span className="siFeatures">
                  1 Bed
                </span>
                <span className="siCancelOp">
                    Free Cancellation
                </span>
                <span className="siCancelSubtitle">
                    <span className="siCancellationSubtitle">No prepayment needed </span>  – pay at the property You can cancel later, so lock in this great price today!
                </span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Wonderful</span>
                    <button>8.9</button>
                </div>
                <div className="siDetailsText">
                      <span className='siSearchRequestOutpUt'>18 night, {options.adult} adult, { options.children } children</span>
                      <span className='siPrice'>NGN 284,427&nbsp;
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.25 15.75h-.75a.75.75 0 0 1-.75-.75v-3.75a1.5 1.5 0 0 0-1.5-1.5h-.75a.75.75 0 0 0 0 1.5h.75V15a2.25 2.25 0 0 0 2.25 2.25h.75a.75.75 0 0 0 0-1.5zM11.625 6a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zM22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12zm1.5 0c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12z"></path></svg>
                      </span>
                    <span className='siTaxOp'>Includes taxesand fees</span>
                        <button className='siCheckButton'>See Availibility <FontAwesomeIcon icon={faArrowAltCircleRight} /></button> 
                </div>
              </div>
        </div>
        <div className="searchContainer">
            <img src={img5} alt="" className="siImg" />
            <div className="siDesc">
                <h1 className="siTitle">PJP 11 Apartments</h1>
                <span className="siDistance"><Link to={'/'} className='linkBlue'>Abuja</Link> <Link className='linkBlue' to={'/'} >Show on map</Link>&nbsp;&nbsp; 6.5 km from center</span>
                  <span className='subTitle'>
                    <span data-testid="icon-with-text-icon" class="b6dc9a9e69 e492382468 e25355d3ee" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.22 3.37a.75.75 0 0 0-.6-.59c-4.85-.9-10.6.55-13.37 3.36S3.1 14.39 3.88 19.05L2 21a.75.75 0 0 0 0 1 .74.74 0 0 0 .53.22A.71.71 0 0 0 3 22l2-1.9a16.94 16.94 0 0 0 2.76.23c4.09 0 8.19-1.33 10.35-3.52 2.71-2.81 4.07-8.59 3.11-13.44zM17 15.75c-2.11 2.14-6.59 3.36-10.7 3L16.59 8.47a.75.75 0 0 0 0 -1.06.77.77 0 0 0-1.07 0l-10.3 10.3c-.33-3.91.91-8.31 3.1-10.52s7.29-3.63 11.52-3c.67 4.22-.54 9.22-2.84 11.56z"></path></svg></span>
                    <span className='subTitleDesc'>Travel Sustainable property</span>
                </span>
                <span className="siTaxiOp">Getaway Deal</span>
                <span className="siGroup">Recommended for your group</span>
                <span className="siSubtitle">One-Bedroom Apartment</span>
                <span className="siFeatures">
                  3 beds (1 full, 1 bunk bed, 1 sofa bed)
                </span>
                <span className="siCancelOp">
                    Free Cancellation
                </span>
                <span className="siCancelSubtitle">
                    <span className="siCancellationSubtitle">No prepayment needed </span>  – pay at the property You can cancel later, so lock in this great price today!
                </span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Wonderful</span>
                    <button>8.9</button>
                </div>
                <div className="siDetailsText">
                      <span className='siSearchRequestOutpUt'>18 night, {options.adult} adult, { options.children } children</span>
                      <span className='siPrice'>NGN 284,427&nbsp;
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.25 15.75h-.75a.75.75 0 0 1-.75-.75v-3.75a1.5 1.5 0 0 0-1.5-1.5h-.75a.75.75 0 0 0 0 1.5h.75V15a2.25 2.25 0 0 0 2.25 2.25h.75a.75.75 0 0 0 0-1.5zM11.625 6a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zM22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12zm1.5 0c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12z"></path></svg>
                      </span>
                    <span className='siTaxOp'>Includes taxesand fees</span>
                        <button className='siCheckButton'>See Availibility <FontAwesomeIcon icon={faArrowAltCircleRight} /></button> 
                </div>
              </div>
        </div>
        <div className="searchContainer">
            <img src={img6} alt="" className="siImg" />
            <div className="siDesc">
                <h1 className="siTitle">PJP 11 Apartments</h1>
                <span className="siDistance"><Link to={'/'} className='linkBlue'>Abuja</Link> <Link className='linkBlue' to={'/'} >Show on map</Link>&nbsp;&nbsp; 6.5 km from center</span>
                  <span className='subTitle'>
                    <span data-testid="icon-with-text-icon" class="b6dc9a9e69 e492382468 e25355d3ee" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.22 3.37a.75.75 0 0 0-.6-.59c-4.85-.9-10.6.55-13.37 3.36S3.1 14.39 3.88 19.05L2 21a.75.75 0 0 0 0 1 .74.74 0 0 0 .53.22A.71.71 0 0 0 3 22l2-1.9a16.94 16.94 0 0 0 2.76.23c4.09 0 8.19-1.33 10.35-3.52 2.71-2.81 4.07-8.59 3.11-13.44zM17 15.75c-2.11 2.14-6.59 3.36-10.7 3L16.59 8.47a.75.75 0 0 0 0 -1.06.77.77 0 0 0-1.07 0l-10.3 10.3c-.33-3.91.91-8.31 3.1-10.52s7.29-3.63 11.52-3c.67 4.22-.54 9.22-2.84 11.56z"></path></svg></span>
                    <span className='subTitleDesc'>Travel Sustainable property</span>
                </span>
                <span className="siTaxiOp">Getaway Deal</span>
                <span className="siGroup">Recommended for your group</span>
                <span className="siSubtitle">One-Bedroom Apartment</span>
                <span className="siFeatures">
                  3 beds (1 full, 1 bunk bed, 1 sofa bed)
                </span>
                <span className="siCancelOp">
                    Free Cancellation
                </span>
                <span className="siCancelSubtitle">
                    <span className="siCancellationSubtitle">No prepayment needed </span>  – pay at the property You can cancel later, so lock in this great price today!
                </span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Wonderful</span>
                    <button>8.9</button>
                </div>
                <div className="siDetailsText">
                      <span className='siSearchRequestOutpUt'>18 night, {options.adult} adult, { options.children } children</span>
                      <span className='siPrice'>NGN 284,427&nbsp;
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.25 15.75h-.75a.75.75 0 0 1-.75-.75v-3.75a1.5 1.5 0 0 0-1.5-1.5h-.75a.75.75 0 0 0 0 1.5h.75V15a2.25 2.25 0 0 0 2.25 2.25h.75a.75.75 0 0 0 0-1.5zM11.625 6a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zM22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12zm1.5 0c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12z"></path></svg>
                      </span>
                    <span className='siTaxOp'>Includes taxesand fees</span>
                        <button className='siCheckButton'>See Availibility <FontAwesomeIcon icon={faArrowAltCircleRight} /></button> 
                </div>
              </div>
        </div>
       
    </div>
  )
}

export default SearchItem
