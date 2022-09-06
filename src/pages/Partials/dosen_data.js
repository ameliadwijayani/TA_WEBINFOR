import React from 'react'
import Axios from "axios"

export default function Dosen_data() {
  
    const [dosen,setDosen]=React.useState([])
    
    React.useEffect(()=>{
        Axios.get("https://ujicobata.com/BESTTS/api/basicController/get_dosen_recent")
        .then(result => {
          console.log(result.data.data)
          setDosen(result.data.data)
        })
        .catch(err => {
          
        })
    },[])

    return(
        <div class="colorlib-trainers">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 colorlib-heading center-heading text-center animate-box">
                        <h1 class="heading-big">Pengelola</h1>
                        <h2>Dosen Pengelola</h2>
                    </div>
                </div>
                <div class="row row-pb-md">
                {
                
                    dosen.map((e,index)=>{ 
                        return(
                            
                            <div class="col-md-6 col-sm-6 animate-box fadeInUp animated-fast" key={index}>
                                <div class="trainers-entry" 
                                style={{
                                    borderRadius:"1%",
                                    padding:"10px",
                                    backgroundColor:"white"
                                }}
                                
                                >
                                    <div class="desc">
                                        <h3 style={{ fontSize: "24px" }}>{e.nama}</h3>
                                        
                                        <h3 style={{ fontSize: "24px" }}></h3>
                                    </div>                                   
                                    <div class="trainer-img" style={{
                                        backgroundImage: `url("/img/dosen/${e.dosen_id}/main.jpg")`,
                                        zIndex:0
                                    }}></div>
                                    <div class="desc">
                                        <span class="spesialisasi"
                                            style={{
                                            display:"inline-block",
                                            fontsize:"18px",
                                            backgroundColor:"white"
                                        }}>
                                            {e.dosen_deskripsi}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                
                    
                    <div class="row row-pb-md">
                    </div>
                </div>
            </div>
        </div>
    )
    
}
