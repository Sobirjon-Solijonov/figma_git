import React from 'react'
import Endcard from '../../pages/EndCard/Endcard'
import Navbar from '../../pages/Navbar/Navbar'
import './Home.scss'
import h_img from '../../img/Home_img/h_img.png'
import rang_ikki from '../../img/Home_img/rang_ikki.png'
import rang_k from '../../img/Home_img/rang_k.png'

function Home() {
  return (
    <>
      <Navbar />

      <div className="Home">
        <div className="home_flex">
          <div className="home_bir">
            <h2>Get the next<br />level developments. </h2>
            <p>Every line of code we deliver is carefully crafted by our in-house team of
              professional developers. While constantly looking for new horizons,
              challenges, and opportunities in the web development, we
              have focused our attention on these core areas:</p>
            <div className="h_btn">
              <button>Get a Quote</button>
              <button className='h_btn_ikki'>Schedule a call</button>
            </div>
          </div>
          <div className="home_ikki">
            <img className='img_bir' src={h_img} alt="" />
            <img className='img_ikki' src={rang_ikki} alt="" />
            <img className='img_uch' src={rang_k} alt="" />
          </div>
        </div>


        {/* AVG */}

        <div className="AVG">
          <div className="agk_content">
            <div className="AVG_bir">
              <img src="" alt="" />
            </div>
            <div className="AVG_ikki">
              <h3>Our Core Services</h3>
              <p>Our technology solutions are perfectly designed to ensure the virtual
                world meets your needs.</p>
              <div className="comment">
                <div className="coment_img">
                  <img src="" alt="" />
                </div>
                <div className="coment_p">
                  <h6>Web Development</h6>
                  <p>We convert any design file: PSD, Sketch, Figma, Adobe XD to pixel-perfect,
                    semantic, and standard-compliant HTML/CSS templates.</p>
                </div>
              </div>
            </div>
          </div>

        </div>


        <div className="VPS">
          <div className="vps_content">
            <div className="vps_content_bir">
              <img src="" alt="" />
            </div>
            <div className="vps_content_ikki">
              <h3>Partnership for agencies</h3>
              <p>A reliable coding partner that delivers solutions to your business challenges and
                stays by your side in the long term. Having the whole spectrum of web
                development expertise, we are here to take care of your projects while
                making it possible for you to focus on growing your own business.</p>
              <button>Partnership Details</button>
            </div>
          </div>
          <div className="vps_modal">
            <div className="vps_modal_bir">
              <h3>TESTIMONIALS</h3>
              <h4>See how are clients feel about us.</h4>
              <p>ABOUT PACIOLI</p>
            </div>
            <div className="vps_modal_ikki">
              <div className="modall_vps">
                <img src="" alt="" />
                <p>Working with the PETRONG team has been a huge success! They're
                  good people who care deeply about our business!</p>
                <h6>John Doe</h6>
                <div className="modal_flex">
                  <p>CEO</p>
                  <p>Leonard Technologies</p>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* vps_img */}

        <div className="vps_img">
          <div className="vps_img_bir">
            <img src="" alt="" />
          </div>
          <div className="vps_img_ikki">
            <h3>Petrong & Pacioli</h3>
            <p>Pacioli is the flagship product at petrong software solutions, a tailored digital
              lending tools that helps microfinance institutions to efficiently and quickly
              onboard customers and to account reconciliation with financial inclution
              as the motivation.
              Pacioli improves female customers comfort with the service by specifically
              design for unique constraint.</p>
            <div className="vps_img_ikki_btn">
              <button>Pacioli</button>
              <button>Demo Video</button>
            </div>
          </div>
        </div>

        {/* vps_card */}

        <div className="vps_card">
          <h3>Our Promise</h3>
          <p>As part of our high quality service, we'd like to offer something extra too.</p>
          <div className="vps_card_continer">
            <div className="vps_card_continer_all">
              <img src="" alt="" />
              <h5>Responsive</h5>
              <p>We know you look for positive attitude,
                timely reactions, and flexibility. We are
                here to listen and give the utmost
                of our capabilities.</p>
            </div>
            <div className="vps_card_continer_all">
              <img src="" alt="" />
              <h5>Responsive</h5>
              <p>We know you look for positive attitude,
                timely reactions, and flexibility. We are
                here to listen and give the utmost
                of our capabilities.</p>
            </div>
            <div className="vps_card_continer_all">
              <img src="" alt="" />
              <h5>Responsive</h5>
              <p>We know you look for positive attitude,
                timely reactions, and flexibility. We are
                here to listen and give the utmost
                of our capabilities.</p>
            </div>
            <div className="vps_card_continer_all">
              <img src="" alt="" />
              <h5>Responsive</h5>
              <p>We know you look for positive attitude,
                timely reactions, and flexibility. We are
                here to listen and give the utmost
                of our capabilities.</p>
            </div>
            <div className="vps_card_continer_all">
              <img src="" alt="" />
              <h5>Responsive</h5>
              <p>We know you look for positive attitude,
                timely reactions, and flexibility. We are
                here to listen and give the utmost
                of our capabilities.</p>
            </div>
            <div className="vps_card_continer_all">
              <img src="" alt="" />
              <h5>Responsive</h5>
              <p>We know you look for positive attitude,
                timely reactions, and flexibility. We are
                here to listen and give the utmost
                of our capabilities.</p>
            </div>
          </div>
        </div>

      </div>

      <Endcard />
    </>
  )
}

export default Home