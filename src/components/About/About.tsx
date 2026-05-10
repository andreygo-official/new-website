import aboutUsImg from '../../assets/about-us.jpg'
import './about.scss'
const About = () => {
  return (
    <div className="about-us-container">
      <div className="container">
        <h1>About Us</h1>
        <div className="about-grid">
          <img src={aboutUsImg} alt="about-us" />
          <div className="about-us-description">
            <h2>Our studio designs refined minimalist space with a focus on details, balance and everyday comfort.</h2>
            <div className="about-us-statistics d-flex justify-content-between">
              <h5>
                <span className='stat-number'>8+< br/></span>
                <span>years experience</span>
              </h5>
              <h5>
                <span className='stat-number'>50+< br/></span>
                <span>completed projects</span>
              </h5>
              <h5>
                <span className='stat-number'>12< br/></span>
                <span>design awards</span>
              </h5>
            </div>
            <button className="btn">learn more</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
