import '../../assets/styles/MailList.css'

const MailList = () => {
  return (
    <div className='mail'>
          <h1 className='mailTitle'>Save time, save Money!</h1>
          <span mailDesc>Sign up and we'll send the best deal to you</span>
          <div className="mailInputContainer">
              <input type="text" name="email" id="emailAddress" placeholder='Your Email' />
              <button>Subcribe</button>
          </div>
    </div>
  )
}

export default MailList
