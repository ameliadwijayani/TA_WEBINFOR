import React from 'react'
import Axios from "axios"

export default function Knowledge_testimoni() {

    const [testimoni,setTestimoni]=React.useState([])
    
    React.useEffect(()=>{
       
        Axios.get("https://ujicobata.com/BESTTS/api/basicController/get_testimoni_recent")
        .then(result => {
          console.log(result.data.data)
          setTestimoni(result.data.data)
        })
        .catch(err => {
          
        })
      
    },[])

  return (
   <div id="colorlib-testimony" className="testimony-img" style={{backgroundImage: '', marginBottom: '4em'}} data-stellar-background-ratio="0.5">
    <div className="overlay" />
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 center-heading text-center colorlib-heading animate-box">
                    <h2 className="heading-big">Testimoni</h2>
                    <h3>Testimoni</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="testimony-flex">
                    {testimoni.map((e,index)=>{
                        return(
                            <div className="one-fifth animate-box">
                                <span className="icon"><i className="icon-quotes-left" /></span>
                                <div className="testimony-wrap">
                                    <blockquote>
                                        <p>
                                            {e.testimoni_isi}
                                        </p>
                                    </blockquote>
                                <div className="desc">
                                <div className="classes-img" style={{ 
                                            backgroundImage:`url("/img/beranda/testimoni/${e.testimoni_id}.jpg")`
                                         }}>
                                        </div>

                                <h3>{e.testimoni_nama}</h3>
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
  )
}
