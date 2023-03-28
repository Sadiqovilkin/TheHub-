import React from 'react'

const Footer = () => {
  return (
   <footer>
    <div className="footer_head">
      
        <h2>
        Get in touch via email or call us on 0333 006 7000
        </h2>
    
    </div>
    <div className="container-fluid py-5">
<div className="row py-5 mb-5">
  <div className="col-lg-4 g-5">
    <div className="foot_logo">
      <img src="https://ui.highspeedtraining.co.uk/components/2022.06.09.281/images/svg/logo-blue.svg" alt="" />
    </div>
  </div>
  <div className="col-lg-8 g-5">
  <div className="row">
  <div className="col-4">
      <div className="foot_list">
        <ul>
        <li>About</li>
        <li>About us</li>
        <li>Work for us</li>
        <li>Reviews</li>
        </ul>
      </div>
    </div>
    <div className="col-4">
      <div className="foot_list">
        <ul>
        <li>Support </li>
        <li>Help and FAQs</li>
        <li>Contact us</li>
        <li>Verify certificate</li>
        <li>Cancellations and refunds</li>
        <li>Policies and terms of use</li>
        </ul>
      </div>
    </div>
    <div className="col-4">
      <div className="foot_list">
        <ul>
        <li>Social</li>
        <li>Twitter</li>
        <li>Facebook</li>
        <li>Linkedin</li>
        <li>Instagram</li>
        </ul>
      </div>
    </div>
  </div>
  
    
  </div>
</div>
<div className="row justify-content-end mt-3">
  <div className="col-lg-6">
    <div className="foot">
      <p>© 2023 High Speed Training Limited. Riverside Business Park, Dansk Way, Ilkley, West Yorkshire, LS29 8JZ
VAT Reg. No: 923 6593 07 | Registered in the UK: 6428976</p>
    </div>
  </div>
</div>
    </div>
   </footer>
  )
}

export default Footer