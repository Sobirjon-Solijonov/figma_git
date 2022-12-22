import React from 'react'
import Endcard from '../../pages/EndCard/Endcard'
import Navbar from '../../pages/Navbar/Navbar'
import './About.scss'

function About() {
  return (
    <>
      <Navbar />

      <div className="About">
        {/* about_content */}
        <div className="about_content">
          <div className="about_content_bir">
            <img src="" alt="" />
          </div>
          <div className="about_content_ikki">
            <h6>WHO WE ARE</h6>
            <h3>We combine our experience and
              passion to develop solutions that
              empower businesses.</h3>
            <p>We combine our experience and
              passion to develop solutions that
              empower businesses.</p>
          </div>
        </div>


        {/* about_name */}


        <div className="about_name">
          <h6>OUR SERVICES</h6>
          <h2>Methodologies & <br />
            Technology We Use.</h2>
          <p>Methodologies &
            Technology We Use.</p>
        </div>

          {/* about_huci */}

          <div className="about_huci">
            
          </div>

      </div>
      <Endcard />
    </>
  )
}

export default About