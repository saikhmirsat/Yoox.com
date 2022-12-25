import React from 'react'
import WomenNavbar from './WomenNavbar'
import "./women.css"
import Footer from '../../Components/Footer/Footer'
import Women1stSlider from './Women1stSlider'
import Women2ndSlider from './Women2ndSlider'
import { Link } from 'react-router-dom'


export default function Women() {


  return (
    <div className='women-main-full-container'  >
      <WomenNavbar />
      <div className='first-container' >
        <div className='women-banner-div'></div>

        <div className='here-comes-night' >
          <h2>HERE COMES THE NIGHT</h2>
          <p>Rock-inspired leather looks and daring details</p>
          <div className='women-getlook-dis'>
            <Link>SHOP NOW</Link>
            <Link>DISCOVER MORE</Link>
          </div>
          <br />
        </div>
      </div>

      <div className='designers-container' >
        <div className="designer-item">
          <img src="https://mobile.yoox.com/images/yoox80/banners/6824_9_NewArrivals_W_HL.jpg?634485886601286852#width=430&height=600" alt="" />
          <div className='designer-item-div' >
            <h2>NEW & NOW</h2>
            <p>Shop the latest must-have styles!</p>
            <div className='women-shop-now'>
              <Link>SHOP NOW </Link>
            </div>
            <br />
          </div>
        </div>
        <div className="designers-list">
          <h4>DESIGNERS</h4>
          <div>
            <p>DOLCE & GABBANA</p>
            <p>ROBERTO CAVALp</p>
            <p>DSQUARED2</p>
            <p>MARNI</p>
            <p>CHLOE</p>
            <p>MAISON MARGIELA</p>
            <p>STELLA MCCARTNEY</p>
            <p>BALENCIAGA</p>
            <p>GUCCI</p>
            <p>PRADA</p>
          </div>
          <p className='view_all'  > VIEW ALL </p>
        </div>
        <div className="designer-item">
          <img src="https://mobile.yoox.com/images/yoox80/banners/6824_1_TrendSpace_HL_W.jpg?634485886601286852#width=430&height=600" alt="" />
          <div className='designer-item-div' >
            <h2>THE SPACE AGE</h2>
            <p>Futuristic fashion: the beginning of a new era!</p>
            <div className='women-getlook-dis'>
              <Link  >DISCOVER MORE</Link>
              <Link>ESHOP NOW </Link>

            </div>
            <br />
          </div>
        </div>
      </div>

      <div className='women-crouser-con'>
        <div className='women-new-arr-div'>
          <h1>NEW ARRIVALS</h1>
          <Link>VIEW ALL</Link>
        </div>
        <Women1stSlider />
      </div>
      {/* <WomenCarousel /> */}


      <div className="brands-container">
        <div className="brands-container-item">
          <img src="https://www.yoox.com/images/yoox80/banners/6825_5_BaumeMercier_Tris_W.png  " alt="" />
          <h2>BAUME & MERCIER</h2>
          <p>The New Riviera Collection</p>
        </div>
        <div id='brands-container-mid' className="brands-container-item">
          <img src="https://www.yoox.com/images/yoox80/banners/6825_1_Boss_W_Tris.jpg" alt="" />
          <h2>BOSS</h2>
          <p>Be your own BOSS</p>
        </div>
        <div className="brands-container-item">
          <img src="https://www.yoox.com/images/yoox80/banners/6825_6_Montblanc_W_Tris.jpg" alt="" />
          <h2>MONTBLANC</h2>
          <p>The New Gift Generation</p>
        </div>
      </div>

      <div className='women-2nd-slider-con'>
        <div className='women-new-arr-div'>
          <h1>NEW ARRIVALS</h1>
          <Link>VIEW ALL</Link>
        </div>
        <Women2ndSlider />
      </div>



      <div className='last-div'>
        <div className='last-con-img-div'></div>
        <div className='last-div-item' >
          <h2>DAZZLING DRESSES</h2>
          <p>Special gifts that will leave them speechless</p>
          <div className='women-getlook-dis'>
            <Link>SHOP THE MAGIC </Link>
            <Link >DISCOVER MORE</Link>

          </div>
          <br />
        </div>
      </div>



      <hr style={{ marginBottom: "60px" }} />
      <Footer />
    </div>

  )
}
