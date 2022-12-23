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
          <div id='huci_bir' className="huci_all">
            <p>01</p>
            <h6>Node.js</h6>
            <img src="" alt="" />
          </div>
          <div id='huci_ikki' className="huci_all">
            <p>01</p>
            <h6>Node.js</h6>
            <img src="" alt="" />
          </div>
          <div id='huci_uch' className="huci_all">
            <p>01</p>
            <h6>Node.js</h6>
            <img src="" alt="" />
          </div>
          <div id='huci_tort' className="huci_all">
            <p>01</p>
            <h6>Node.js</h6>
            <img src="" alt="" />
          </div>
        </div>

        {/* fremes */}

        <div className="fremes">
          <div className="fremes_bir">
            <h6>OUR VALUE</h6>
            <h1>A melting pot for the <br /> best idea  </h1>
            <div className="fremes_bir_icons">
              <div className="fremes_bir_icons_bir">
                <img src="" alt="" />
                <div>
                  <h5>Integrity</h5>
                  <p>We hold ourself to a strong ethical and moral code</p>
                </div>
              </div>
              <div className="fremes_bir_icons_ikki">
                <img src="" alt="" />
                <div>
                  <h5>Integrity</h5>
                  <p>We hold ourself to a strong ethical and moral code</p>
                </div>
              </div>
              <div className="fremes_bir_icons_uch">
                <img src="" alt="" />
                <div>
                  <h5>Integrity</h5>
                  <p>We hold ourself to a strong ethical and moral code</p>
                </div>
              </div>

            </div>
          </div>
          <div className="fremes_ikki">
            <img src="" alt="" />
          </div>
        </div>


        {/* about_vraper */}
        <div className="about_vraper">
          <h6>OUR TEAM</h6>
          <h1>Colaboring and
            optimizing for growth</h1>
          <p>The team at petrong we are powering the growth
            of africal technologh ecosystem</p>
          <div className="vrap_vrap">
            <div className="vrap_all">
              <img src="" alt="" />
              <h6>Rasheed Ogunusi</h6>
              <p>CTO</p>
            </div>
            <div className="vrap_all">
              <img src="" alt="" />
              <h6>Rasheed Ogunusi</h6>
              <p>CTO</p>
            </div>
            <div className="vrap_all">
              <img src="" alt="" />
              <h6>Rasheed Ogunusi</h6>
              <p>CTO</p>
            </div>
            <div className="vrap_all">
              <img src="" alt="" />
              <h6>Rasheed Ogunusi</h6>
              <p>CTO</p>
            </div>
          </div>
        </div>





      </div>
      <Endcard />
    </>
  )
}

export default About