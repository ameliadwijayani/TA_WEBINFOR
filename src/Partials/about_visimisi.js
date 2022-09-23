import React from 'react'
import Axios from "axios"
export default function About_visimisi() {
    let ctr=-1;
    const [tentang,setTentang]=React.useState([])
    
    React.useEffect(()=>{
       
        Axios.get("https://ujicobata.com/BESTTS/api/basicController/get_tentang_recent")
        .then(result => {
          console.log(result.data.data)
          setTentang(result.data.data)

        })
        .catch(err => {
          
        })
      
    },[])
    return (
        <div class="colorlib-about colorlib-counters">
            <div class="container">
                <div class="col-md-7">
                    <div class="about-desc">
                        <div class="about-img-1 animate-box" style={{ backgroundImage: `url("/img/tentang/1.jpg")` }}></div>
                        <div class="about-img-2 animate-box" style={{ backgroundImage: `url("/img/tentang/2.jpg")` }}></div>
                    </div>
                </div>
                
                <div class="col-md-5">
                    <div class="row">
                        <div class="col-md-12 colorlib-heading animate-box">
                            <h2 class="heading-big">Tentang Kami</h2>
                            <h3>Tentang Kami</h3>
                        </div>
                    </div>
                    <div class="row">
                        <div class="fancy-collapse-panel">
                            <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                            {
                                tentang.map((e,index)=>{
                                ctr++;
                                let isi=JSON.parse(tentang[ctr].lain_isi)
                                return(
                                    <div className="panel panel-default" key={index}>
                                    <div class="panel-heading" role="tab" id={`heading${ctr}`}>
                                        <h4 class="panel-title">
                                            <a title="ISTTS"className={ctr == 0 ? "" : `collapsed`} data-toggle="collapse"
                                            data-parent="#accordion1" href={`#collapse${ctr}`}
                                            aria-expanded={ctr == 0 ? "true" : "false"}
                                            aria-controls={`collapse${ctr}`}>
                                                {isi.judul}
                                            </a>
                                        </h4>
                                        </div>
                                        <div id={`collapse${ctr}`}
                                            className={`panel-collapse collapse ${ctr == 0 ? " in" : ""}`} role="tabpanel"
                                            aria-labelledby={`heading${ctr}`}>
                                            <div class="panel-body">
                                            {isi.isi}
                                            </div>
                                        </div>
                                    </div>
                                )
                                })
                            }
                            

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
      
  )
}
