import '../../assets/styles/Featured.css'
import img1 from '../../assets/images/lekki.jpg'

const Featured= ()=> {
  return (
    <div className='featured'>
      <div className="featuredItem">
        <img src={img1} alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Dubli</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src={img1} alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Reno</h1>
          <h2>534 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src={img1} alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Austin</h1>
          <h2>871 properties</h2>
        </div>
      </div>
    </div>
  )
}

export default Featured