import React from 'react'
import './Endcard.scss'
import start from '../../img/start.png'
import fe from '../../img/fe.png'
import ic from '../../img/ic.png'
import is from '../../img/is.png'
import mes from '../../img/mes.png'
import te from '../../img/te.png'
import yo from '../../img/yo.png'
import ine from '../../img/ine.png'
import End_bottom from '../End_bottom/End_bottom'

function Endcard() {
  return (
    <>
    <End_bottom/>
    <div className="end">
      <div className='Endcard'>
      <div className="end_bir">
        <h5>QUICK LINKS</h5>
        <p>Home</p>
        <p>About</p>
        <p>Projects</p>
        <p>Contact</p>
        <p>Blog</p>
        <p>Our Policy</p>
        <p>Career</p>
      </div>

      <div className="end_ikki">
        <h5>OUR SERVICES</h5>
        <p>Web Development</p>
        <p>Digital Product Design</p>
        <p>Cloud/DevOps</p>
        <p>Mobile Applications</p>
        <p>Dedicated Development Team</p>
      </div>

      <div className="end_uch">
        <h5>OUR TECHNOLOGIES</h5>
        <p>Laravel Development</p>
        <p>React JS App Development</p>
        <p>Vue JS App Development</p>
      </div>

      <div className="end_tort">
        <h5>Vue JS App Development</h5>
        <div className="tort_img">
          <img src={ine} alt="" />
          <img src={is} alt="" />
          <img src={fe} alt="" />
          <img src={yo} alt="" />
        </div>
        <div className="email">
          <img src={mes} alt="" />
          <p>Phone: (234) 0800-000-0000</p>
        </div>
        <div className="tel">
          <img src={te} alt="" />
          <p>E-mail: info@petrongsolutuonscom</p>
        </div>
      </div>
      <div className="end_fabicon">
        <img src={ic} alt="" />
        <p>PETRONG<samp>SOFTWARE SOLUTION</samp></p>
      </div>
      <div className="end_chislo">
        <p>Petrong Software Solution Copyright 2022  - All Right Reserved</p>
      </div>
      <div className="end_btn">
        <a href="#start"><img  src={start} alt="" /></a>
      </div>
    </div>
    </div>
    </>
  )
}

export default Endcard