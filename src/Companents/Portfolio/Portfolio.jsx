import React from 'react'
import Endcard from '../../pages/EndCard/Endcard'
import Navbar from '../../pages/Navbar/Navbar'
import './Portfolio.scss'

function Portfolio() {
  return (
    <>
      <Navbar />
      <div className="Portfolio">

        {/* Portfolio_bir */}
        <div className="Portfolio_bir">
          <img src="" alt="" />
          <p>OUR PORTFOLIO</p>
          <h4>A glimpse of some of our project  and people we’ve fortunate to work with</h4>
          <img src="" alt="" />
        </div>


        {/* Portfolio_ikki */}
        <div className="Portfolio_ikki">
          <h3>Mobile & Web Applications</h3>
          <p>We help create solutions that optimize processes, improve accessibility to data, and increase successful outcomes by providing the
            necessary insights and tools to change physician and patient behavior.</p>
          <img src="" alt="as" />
          <img src="" alt="as" />
          <img src="" alt="as" />
        </div>

        {/* Portfolio_uch */}
        <div className="Portfolio_uch">
          <h4>Creating What You Need,
            The Way You Want Them</h4>
          <p>Petrong developers have excelled in a number of fields due to their
            deep expertise in software development as a service.</p>
          <div className="Portfolio_uch_border">
            <div className="border_bir">
              <h5>Fast</h5>
              <p>Delievry</p>
            </div>
            <div className="border_ikki">
              <h5>Fast</h5>
              <p>Delievry</p>
            </div>
          </div>
        </div>

      </div>
      <Endcard />
    </>
  )
}

export default Portfolio