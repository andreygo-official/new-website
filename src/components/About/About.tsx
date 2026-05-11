import aboutUsImg from '../../assets/about-us.jpg'
import { scrollToSection } from '../../../scrollFunc'
import './about.scss'
import { useEffect, useRef, useState } from 'react';
const About = () => {

  const aboutRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = aboutRef.current
    if(!element) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        // setIsVisible(entry.isIntersecting)
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.25
      }
    )
    observer.observe(element)
    return () => observer.disconnect()

  }, [])

  return (
    <div ref={aboutRef}
    className={`about-us-container ${isVisible ? "show" : ""}`}>
      <div className="container">
        <h1 id='about'>About Us</h1>
        <div className="about-grid">
          <img src={aboutUsImg} alt="about-us" />
          <div className="about-us-description">
            <h2>Our studio designs refined minimalist space with a focus on details, balance and everyday comfort.</h2>
            <div className="about-us-statistics d-flex justify-content-between">
              <h5>
                <span className='stat-number'>8+</span>
                <span>years experience</span>
              </h5>
              <h5>
                <span className='stat-number'>50+</span>
                <span>completed projects</span>
              </h5>
              <h5>
                <span className='stat-number'>12</span>
                <span>design awards</span>
              </h5>
            </div>
            <button className="btn" onClick={() => scrollToSection('projects')}>learn more</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
