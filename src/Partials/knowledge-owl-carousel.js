import React from 'react'
import Axios from "axios"

export default function Knowledge_owl_carousel({title1,title2}) {                        
    const [karya,setKarya]=React.useState([])
    
  React.useEffect(()=>{
     
      Axios.get("https://ujicobata.com/BESTTS/api/basicController/get_karya_recent")
      .then(result => {
        console.log(result.data.data)
        setKarya(result.data.data)
      })
      .catch(err => {
        
      })
    
  },[])
    return (
        <div>
            <div className="colorlib-classes">
                <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 colorlib-heading center-heading text-center animate-box">
                    <h1 className="heading-big" >{title1}</h1>
                    <h2 >{title2}</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 animate-box">
                    <div className="owl-carousel">
                        {karya.map((e,index)=>{
                            let json=JSON.parse(e.karya_isi)
                            let img=json?json[1].data.file.url:"";
                            return(

                                <div className="item" key={index}>
                                    <div className="classes">
                                        <div className="classes-img" style={{ 
                                            backgroundImage:`url(${img})`
                                         }}>
                                        </div>
                                        <div className="wrap">
                                        <div className="desc">
                                            
                                            <span className="teacher" >
                                                {e.karya_pembuat}
                                            </span>
                                            <h3 >
                                                <a href="/">
                                                    {e.karya_judul}
                                                </a>
                                            </h3>
                                        </div>
                                        <div className="pricing">
                                            <p>
                                                {e.major_nama}
                                            </p>

                                        </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}


