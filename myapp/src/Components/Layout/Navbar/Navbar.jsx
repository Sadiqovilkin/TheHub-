import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import { BsList } from 'react-icons/bs';
const Navbar = () => {
  return (
 <header>
    <nav>
        <div className="container-lg container-fluid pt-4 pb-3">
            <div className="row align-items-center">
                <div className="col-3">
                    <div className="logo">
                        <img src="https://ui.highspeedtraining.co.uk/components/2022.11.30.338/images/svg/logo-blue.svg" alt="" />
                    </div>
                </div>
                <div className="col-9">
                    <div className="col-12">
                        <div className="search_list">
                            <ul>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Help</a></li>
                                <li><a href="#">Search for a topic:</a> 
                                <div className="search">
                                <input type="text" />
                                <AiOutlineSearch/>
                                    </div></li>
                               

                            </ul>
                        </div>
                    </div>
                    <div className="col-12">
                    <div className="list">
                    <ul>
                            <li>
                                <div className="dropdown">
                                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" >
                                Our courses
        </a>
  <div className="dropdown-menu" >
    <button className="dropdown-item" type="button">Action</button>
    <button className="dropdown-item" type="button">Another action</button>
    <button className="dropdown-item" type="button">Something else here</button>
  </div>
                                   </div>
                                
                            </li>
                            <li>
                                Team training
          
                            </li>
                            <li className=" dropdown">
        <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" >
        Resources
        </a>
        <div className="dropdown-menu" >
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          </div>
      </li>
                            <li>Contact us</li>
                            <li>Log in</li>
                        </ul>
                    </div>
                    </div>
                    <div className="col-12">
                        <div className="mobil_navbar">
                            <AiOutlineSearch/>
                            <BsList/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
 </header>
  )
}

export default Navbar