import React from 'react'

export default function Knowledge_site_banner() {
    
  
    return(
        <aside id="colorlib-hero" style={{ minHeight:"700px" }}>
          <div className="flexslider">
            <ul className="slides">
              <li style={{ backgroundImage: `url("https://ta-webinfor.netlify.app/img/beranda/cover/1.jpg")`,minHeight:"700px" }} >
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-8 col-sm-12 col-md-offset-2 col-xs-12 col-md-pull-1 slider-text" style={{ minHeight:"700px" }}>
                      <div className="slider-text-inner" style={{ minHeight:"700px" }}>
                        <div className="desc">
                          <h3>Institut Sains dan Teknologi Terpadu Surabaya</h3>
                          <h1>Informatika ISTTS</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              
              <li style={{ backgroundImage: `url("https://ta-webinfor.netlify.app/img/beranda/cover/2.jpg")`,minHeight:"700px" }} >
                  <div class="overlay"></div>
                  <div class="container-fluid">
                      <div class="row">
                          <div class="col-md-8 col-sm-12 col-md-offset-2 col-xs-12 col-md-pull-1 slider-text" style={{ minHeight:"700px" }}>
                              <div class="slider-text-inner" style={{ minHeight:"700px" }}>
                                  <div class="desc">
                                      <h3>Institut Sains dan Teknologi Terpadu Surabaya</h3>
                                      <h2>S1 Informatika</h2>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </li>
              <li style={{ backgroundImage: `url("https://ta-webinfor.netlify.app/img/beranda/cover/3.jpg")`,minHeight:"700px" }} >
                  <div class="overlay"></div>
                  <div class="container-fluid">
                      <div class="row">
                          <div class="col-md-8 col-sm-12 col-md-offset-2 col-xs-12 col-md-pull-1 slider-text" style={{ minHeight:"700px" }}>
                              <div class="slider-text-inner" style={{ minHeight:"700px" }}>
                                  <div class="desc">
                                      <h3>Institut Sains dan Teknologi Terpadu Surabaya</h3>
                                      <h2>S1 Informatika</h2>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </li>
              
            </ul>
          </div>
        </aside>
  
      )
}
