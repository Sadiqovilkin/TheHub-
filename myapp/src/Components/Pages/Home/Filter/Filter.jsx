import React, { useEffect, useRef } from 'react';
import Isotope from 'isotope-layout';

const Filter = () => {
    // init one ref to store the future isotope object
    const isotope = React.useRef()
    // store the filter keyword in a state
    const [filterKey, setFilterKey] = React.useState('a')
  
    // initialize an Isotope object with configs
    React.useEffect(() => {
      isotope.current = new Isotope('.filter-container', {
        itemSelector: '.filter-item',
        layoutMode: 'fitRows',
      })
      // cleanup
      return () => isotope.current.destroy()
    }, [])
  
    // handling filter key change
    React.useEffect(() => {
      filterKey === '*'
        ? isotope.current.arrange({filter: `*`})
        : isotope.current.arrange({filter: `.${filterKey}`})
    }, [filterKey])
  
    const handleFilterKeyChange = key => () => setFilterKey(key)
  
    return (
    <section id='filter'>
    <div className="container">
      <div className="row py-3">
        <div className="col-3">
          <div className="btns" onClick={handleFilterKeyChange('a')}>
          <img src="https://www.highspeedtraining.co.uk/hub/wp-content/uploads/2018/06/icon-food.svg" className="category-icon" alt="Food Hygiene Icon"/>
            <button >Food Hygiene
            </button>
          </div>
        </div>
        <div className="col-3">
          <div className="btns" onClick={handleFilterKeyChange('b')}>
          <img src="https://www.highspeedtraining.co.uk/hub/wp-content/uploads/2018/06/icon-business.svg" className="category-icon" alt="Business Icon"/>
            <button > Business
            </button>
          </div>
        </div>
        <div className="col-3">
          <div className="btns" onClick={handleFilterKeyChange('c')}>
          <img src="https://www.highspeedtraining.co.uk/hub/wp-content/uploads/2018/06/icon-safety.svg" className="category-icon" alt="Health &amp; Safety Icon"/>
            <button > Health & Safety
            </button>
          </div>
        </div>
        <div className="col-3">
          <div className="btns border-0" onClick={handleFilterKeyChange('d')}>
          <img src="https://www.highspeedtraining.co.uk/hub/wp-content/uploads/2018/06/icon-safeguarding.svg" className="category-icon" alt="Safeguarding Icon"/>
            <button >Safeguarding
            </button>
          </div>
        </div>
      </div>
    </div>
<div className="categorys">
  
<div className="container py-5">
      <div className="row filter-container">
        {/* class A */}
        <div className="col-lg-4 col-md-6 col-sm-12 g-4 filter-item vege a">
          <div className="cart">
            <div className="card_img">
              <img src="https://www.highspeedtraining.co.uk/hub/wp-content/uploads/2023/03/air-fryer-safety-fi-410x333.jpg" alt="" />
              <div className="img_overlay">
                <span>Article</span>
              </div>
            </div>
            <div className="card_text">
              <h1>Guidance on Air Fryer Safety</h1>
              <span>FOOD SAFETY</span>
              <p>When using an air fryer, there are a few considerations you need to make to ensure food safety and electrical safety. Discover our air fryer safety tips here.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 g-4 filter-item vege a">
          <div className="cart">
            <div className="card_img">
              <img src="https://www.highspeedtraining.co.uk/hub/wp-content/uploads/2023/02/allergy-free-food-fi-410x333.jpg" alt="" />
              <div className="img_overlay">
                <span>Article</span>
              </div>
            </div>
            <div className="card_text">
              <h1>Guidance on Air Fryer Safety</h1>
              <span>FOOD SAFETY</span>
              <p>When using an air fryer, there are a few considerations you need to make to ensure food safety and electrical safety. Discover our air fryer safety tips here.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 g-4 filter-item vege a">
          <div className="cart">
            <div className="card_img">
              <img src="https://www.highspeedtraining.co.uk/hub/wp-content/uploads/2023/01/communication-in-hospiality-fi-1-410x333.jpg" alt="" />
              <div className="img_overlay">
                <span>Article</span>
              </div>
            </div>
            <div className="card_text">
              <h1>Guidance on Air Fryer Safety</h1>
              <span>FOOD SAFETY</span>
              <p>When using an air fryer, there are a few considerations you need to make to ensure food safety and electrical safety. Discover our air fryer safety tips here.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 g-4 filter-item vege a">
          <div className="cart">
            <div className="card_img">
              <img src="https://www.highspeedtraining.co.uk/hub/wp-content/uploads/2023/03/air-fryer-safety-fi-410x333.jpg" alt="" />
              <div className="img_overlay">
                <span>Article</span>
              </div>
            </div>
            <div className="card_text">
              <h1>Guidance on Air Fryer Safety</h1>
              <span>FOOD SAFETY</span>
              <p>When using an air fryer, there are a few considerations you need to make to ensure food safety and electrical safety. Discover our air fryer safety tips here.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 g-4 filter-item vege a">
          <div className="cart">
            <div className="card_img">
              <img src="https://www.highspeedtraining.co.uk/hub/wp-content/uploads/2023/03/air-fryer-safety-fi-410x333.jpg" alt="" />
              <div className="img_overlay">
                <span>Article</span>
              </div>
            </div>
            <div className="card_text">
              <h1>Guidance on Air Fryer Safety</h1>
              <span>FOOD SAFETY</span>
              <p>When using an air fryer, there are a few considerations you need to make to ensure food safety and electrical safety. Discover our air fryer safety tips here.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 g-4 filter-item vege a">
          <div className="cart">
            <div className="card_img">
              <img src="https://www.highspeedtraining.co.uk/hub/wp-content/uploads/2023/03/air-fryer-safety-fi-410x333.jpg" alt="" />
              <div className="img_overlay">
                <span>Article</span>
              </div>
            </div>
            <div className="card_text">
              <h1>Guidance on Air Fryer Safety</h1>
              <span>FOOD SAFETY</span>
              <p>When using an air fryer, there are a few considerations you need to make to ensure food safety and electrical safety. Discover our air fryer safety tips here.</p>
            </div>
          </div>
        </div>
        
        {/* Class B */}
        <div className="col-lg-4 col-md-6 col-sm-12 g-4 filter-item vege b">
          <div className="cart">
            <div className="card_img">
            <img src="https://www.highspeedtraining.co.uk/hub/wp-content/uploads/2023/03/case-study-parchment-trust-410x333.jpg" alt="" />
              <div className="img_overlay">
                <span>Article</span>
              </div>
            </div>
            <div className="card_text">
              <h1>Guidance on Air Fryer Safety</h1>
              <span>FOOD SAFETY</span>
              <p>When using an air fryer, there are a few considerations you need to make to ensure food safety and electrical safety. Discover our air fryer safety tips here.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 g-4 filter-item vege b">
          <div className="cart">
            <div className="card_img">
<img src="https://www.highspeedtraining.co.uk/hub/wp-content/uploads/2018/10/upskilling-employees-fi-410x333.jpg" alt="" />
              <div className="img_overlay">
                <span>Article</span>
              </div>
            </div>
            <div className="card_text">
              <h1>Guidance on Air Fryer Safety</h1>
              <span>FOOD SAFETY</span>
              <p>When using an air fryer, there are a few considerations you need to make to ensure food safety and electrical safety. Discover our air fryer safety tips here.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 g-4 filter-item vege b">
          <div className="cart">
            <div className="card_img">
<img src="https://www.highspeedtraining.co.uk/hub/wp-content/uploads/2023/03/dance-teaching-fi-2-410x333.jpg" alt="" />              <div className="img_overlay">
                <span>Article</span>
              </div>
            </div>
            <div className="card_text">
              <h1>Guidance on Air Fryer Safety</h1>
              <span>FOOD SAFETY</span>
              <p>When using an air fryer, there are a few considerations you need to make to ensure food safety and electrical safety. Discover our air fryer safety tips here.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 g-4 filter-item vege b">
          <div className="cart">
            <div className="card_img">
              <img src="https://www.highspeedtraining.co.uk/hub/wp-content/uploads/2023/03/air-fryer-safety-fi-410x333.jpg" alt="" />
              <div className="img_overlay">
                <span>Article</span>
              </div>
            </div>
            <div className="card_text">
              <h1>Guidance on Air Fryer Safety</h1>
              <span>FOOD SAFETY</span>
              <p>When using an air fryer, there are a few considerations you need to make to ensure food safety and electrical safety. Discover our air fryer safety tips here.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 g-4 filter-item vege b">
          <div className="cart">
            <div className="card_img">
              <img src="https://www.highspeedtraining.co.uk/hub/wp-content/uploads/2023/03/air-fryer-safety-fi-410x333.jpg" alt="" />
              <div className="img_overlay">
                <span>Article</span>
              </div>
            </div>
            <div className="card_text">
              <h1>Guidance on Air Fryer Safety</h1>
              <span>FOOD SAFETY</span>
              <p>When using an air fryer, there are a few considerations you need to make to ensure food safety and electrical safety. Discover our air fryer safety tips here.</p>
            </div>
          </div>
        </div>  
        <div className="col-lg-4 col-md-6 col-sm-12 g-4 filter-item vege b">
          <div className="cart">
            <div className="card_img">
              <img src="https://www.highspeedtraining.co.uk/hub/wp-content/uploads/2023/03/air-fryer-safety-fi-410x333.jpg" alt="" />
              <div className="img_overlay">
                <span>Article</span>
              </div>
            </div>
            <div className="card_text">
              <h1>Guidance on Air Fryer Safety</h1>
              <span>FOOD SAFETY</span>
              <p>When using an air fryer, there are a few considerations you need to make to ensure food safety and electrical safety. Discover our air fryer safety tips here.</p>
            </div>
          </div>
        </div>
        {/* Class C */}
        <div className="col-lg-4 col-md-6 col-sm-12 g-4 filter-item vege c">
          <div className="cart">
            <div className="card_img">
<img src="https://www.highspeedtraining.co.uk/hub/wp-content/uploads/2023/03/bricklaying-risk-assessment-fi-410x333.jpg" alt="" />
              <div className="img_overlay">
                <span>Article</span>
              </div>
            </div>
            <div className="card_text">
              <h1>Guidance on Air Fryer Safety</h1>
              <span>FOOD SAFETY</span>
              <p>When using an air fryer, there are a few considerations you need to make to ensure food safety and electrical safety. Discover our air fryer safety tips here.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 g-4 filter-item vege c">
          <div className="cart">
            <div className="card_img">
<img src="https://www.highspeedtraining.co.uk/hub/wp-content/uploads/2023/03/pregnancy-at-work-fi-410x333.jpg" alt="" />
              <div className="img_overlay">
                <span>Article</span>
              </div>
            </div>
            <div className="card_text">
              <h1>Guidance on Air Fryer Safety</h1>
              <span>FOOD SAFETY</span>
              <p>When using an air fryer, there are a few considerations you need to make to ensure food safety and electrical safety. Discover our air fryer safety tips here.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 g-4 filter-item vege c">
          <div className="cart">
            <div className="card_img">
<img src="https://www.highspeedtraining.co.uk/hub/wp-content/uploads/2023/02/beauty-salon-hazards-fi-410x333.jpg" alt="" />
              <div className="img_overlay">
                <span>Article</span>
              </div>
            </div>
            <div className="card_text">
              <h1>Guidance on Air Fryer Safety</h1>
              <span>FOOD SAFETY</span>
              <p>When using an air fryer, there are a few considerations you need to make to ensure food safety and electrical safety. Discover our air fryer safety tips here.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 g-4 filter-item vege c">
          <div className="cart">
            <div className="card_img">
              <img src="https://www.highspeedtraining.co.uk/hub/wp-content/uploads/2023/03/air-fryer-safety-fi-410x333.jpg" alt="" />
              <div className="img_overlay">
                <span>Article</span>
              </div>
            </div>
            <div className="card_text">
              <h1>Guidance on Air Fryer Safety</h1>
              <span>FOOD SAFETY</span>
              <p>When using an air fryer, there are a few considerations you need to make to ensure food safety and electrical safety. Discover our air fryer safety tips here.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 g-4 filter-item vege c">
          <div className="cart">
            <div className="card_img">
              <img src="https://www.highspeedtraining.co.uk/hub/wp-content/uploads/2023/03/air-fryer-safety-fi-410x333.jpg" alt="" />
              <div className="img_overlay">
                <span>Article</span>
              </div>
            </div>
            <div className="card_text">
              <h1>Guidance on Air Fryer Safety</h1>
              <span>FOOD SAFETY</span>
              <p>When using an air fryer, there are a few considerations you need to make to ensure food safety and electrical safety. Discover our air fryer safety tips here.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 g-4 filter-item vege c">
          <div className="cart">
            <div className="card_img">
              <img src="https://www.highspeedtraining.co.uk/hub/wp-content/uploads/2023/03/air-fryer-safety-fi-410x333.jpg" alt="" />
              <div className="img_overlay">
                <span>Article</span>
              </div>
            </div>
            <div className="card_text">
              <h1>Guidance on Air Fryer Safety</h1>
              <span>FOOD SAFETY</span>
              <p>When using an air fryer, there are a few considerations you need to make to ensure food safety and electrical safety. Discover our air fryer safety tips here.</p>
            </div>
          </div>
        </div>
        {/* class D */}
        <div className="col-lg-4 col-md-6 col-sm-12 g-4 filter-item vege d">
          <div className="cart">
            <div className="card_img">
<img src="https://www.highspeedtraining.co.uk/hub/wp-content/uploads/2023/03/continence-care-fi-1-410x333.jpg" alt="" />              <div className="img_overlay">
                <span>Article</span>
              </div>
            </div>
            <div className="card_text">
              <h1>Guidance on Air Fryer Safety</h1>
              <span>FOOD SAFETY</span>
              <p>When using an air fryer, there are a few considerations you need to make to ensure food safety and electrical safety. Discover our air fryer safety tips here.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 g-4 filter-item vege d">
          <div className="cart">
            <div className="card_img">
<img src="https://www.highspeedtraining.co.uk/hub/wp-content/uploads/2023/03/now-next-board-fi-410x333.jpg" alt="" />
              <div className="img_overlay">
                <span>Article</span>
              </div>
            </div>
            <div className="card_text">
              <h1>Guidance on Air Fryer Safety</h1>
              <span>FOOD SAFETY</span>
              <p>When using an air fryer, there are a few considerations you need to make to ensure food safety and electrical safety. Discover our air fryer safety tips here.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 g-4 filter-item vege d">
          <div className="cart">
            <div className="card_img">
<img src="https://www.highspeedtraining.co.uk/hub/wp-content/uploads/2016/09/ergonomic-approach-manual-handling-fi-410x333.jpg" alt="" />
              <div className="img_overlay">
                <span>Article</span>
              </div>
            </div>
            <div className="card_text">
              <h1>Guidance on Air Fryer Safety</h1>
              <span>FOOD SAFETY</span>
              <p>When using an air fryer, there are a few considerations you need to make to ensure food safety and electrical safety. Discover our air fryer safety tips here.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 g-4 filter-item vege d">
          <div className="cart">
            <div className="card_img">
              <img src="https://www.highspeedtraining.co.uk/hub/wp-content/uploads/2023/03/air-fryer-safety-fi-410x333.jpg" alt="" />
              <div className="img_overlay">
                <span>Article</span>
              </div>
            </div>
            <div className="card_text">
              <h1>Guidance on Air Fryer Safety</h1>
              <span>FOOD SAFETY</span>
              <p>When using an air fryer, there are a few considerations you need to make to ensure food safety and electrical safety. Discover our air fryer safety tips here.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 g-4 filter-item vege d">
          <div className="cart">
            <div className="card_img">
              <img src="https://www.highspeedtraining.co.uk/hub/wp-content/uploads/2023/03/air-fryer-safety-fi-410x333.jpg" alt="" />
              <div className="img_overlay">
                <span>Article</span>
              </div>
            </div>
            <div className="card_text">
              <h1>Guidance on Air Fryer Safety</h1>
              <span>FOOD SAFETY</span>
              <p>When using an air fryer, there are a few considerations you need to make to ensure food safety and electrical safety. Discover our air fryer safety tips here.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 g-4 filter-item vege d">
          <div className="cart">
            <div className="card_img">
              <img src="https://www.highspeedtraining.co.uk/hub/wp-content/uploads/2023/03/air-fryer-safety-fi-410x333.jpg" alt="" />
              <div className="img_overlay">
                <span>Article</span>
              </div>
            </div>
            <div className="card_text">
              <h1>Guidance on Air Fryer Safety</h1>
              <span>FOOD SAFETY</span>
              <p>When using an air fryer, there are a few considerations you need to make to ensure food safety and electrical safety. Discover our air fryer safety tips here.</p>
            </div>
          </div>
        </div>

        
      </div>
      <div className="row my-5 justify-content-center">
        <div className="col-lg-4">
          <div className="view">
          <span>View all Food Hygiene</span>
          </div>
        </div>
      </div>
    </div>
</div>
  
    





        {/* <ul className="filter-container">
          <div className="filter-item vege ac">
            cucumber
          </div>
          <div className="filter-item fruit ac">
            <span>Apple</span>  
          </div>
          <div className="filter-item fruit">
            <span>Orange</span>
          </div>
          <div className="filter-item fruit vege">
            <span>Tomato</span>
          </div>
        </ul> */}
    </section>
    )
  }

export default Filter