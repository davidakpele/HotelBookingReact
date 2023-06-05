import '../../assets/styles/FeaturesProperties.css'
import img1 from '../../assets/images/lekki.jpg'
const FeaturesProperties= ()=> {
  return (
    <div className='fp'>
        <div className="fpItem">
        <img src={ img1 } alt="" className="fpImg" />
        <span className="fpName">Aparthotel Stare Miasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from $120</span>
          <div className="fpRating">
              <button>8.9</button>
              <span>Excellent</span>
          </div>
          </div>
          <div className="fpItem">
            <img src={ img1 } alt="" className="fpImg" />
            <span className="fpName">Aparthotel Stare Miasto</span>
            <span className="fpCity">Madrid</span>
            <span className="fpPrice">Starting from $120</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Excellent</span>
            </div>
          </div>
          <div className="fpItem">
            <img src={ img1 } alt="" className="fpImg" />
            <span className="fpName">Aparthotel Stare Miasto</span>
            <span className="fpCity">Madrid</span>
            <span className="fpPrice">Starting from $120</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Excellent</span>
            </div>
          </div>
          <div className="fpItem">
            <img src={ img1 } alt="" className="fpImg" />
            <span className="fpName">Aparthotel Stare Miasto</span>
            <span className="fpCity">Madrid</span>
            <span className="fpPrice">Starting from $120</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Excellent</span>
            </div>
          </div>
    </div>
  )
}

export default FeaturesProperties