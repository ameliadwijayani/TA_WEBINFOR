import React from 'react'
import Axios from "axios"

export default function Matkul_data() {
  
    const [matkul,setMakul]=React.useState([])
    
    React.useEffect(()=>{
       
        Axios.get("https://ujicobata.com/BESTTS/api/basicController/get_matkul_recent")
        .then(result => {
          console.log(result.data.data)
          setMakul(result.data.data)
        })
        .catch(err => {
          
        })
      
    },[])
    let last=0
    let idx=-1

    function detail_matkul(e,index){
      return(
        <div class="col-md-5" key={index}>
                  
          <div class="row">
            <div class="col-md-12 colorlib-heading animate-box">
              <h2>Semester {last}</h2>
            </div>
          </div>
          <div class="row">
            <div class="fancy-collapse-panel">
              <div class="panel-group" id={`accordion${last}`} role="tablist" aria-multiselectable="true">
                {e.map((f,i)=>{
                  idx++;
                  return(
                    <div class="panel panel-default" key={i}>
                      <div class="panel-heading" role="tab" id={`heading${idx}`}>
                        <h4 class="panel-title">
                          <a title="ISTTS"class='collapsed' data-toggle="collapse" data-parent={`#accordion${last}`} href={`#collapse${idx}`} aria-expanded="false" aria-controls={`collapse${idx}`} >
                            {f.matkul_nama}
                          </a>
                        </h4>
                      </div>
                      <div id={`collapse${idx}`}class="panel-collapse collapse" role="tabpanel" aria-labelledby={`heading${idx}`}>
                        <div class="panel-body">
                          <p>{f.matkul_ringkasan}</p>
                          <p><b>Kurikulum: </b>
                          {f.matkul_kurikulum}</p>
                          <p>
                            <b>Major: </b>
                            {f.major_id}
                          </p>
                          <p><b>Jumlah SKS: </b>
                          {f.matkul_sks}
                          </p>
                          <p><b>Nilai Minimal
                              Kelulusan: </b>
                              {f.matkul_minimal_c==1?"C":"D"}  
                            </p>
                          <p>
                            <b>Berpraktikum: </b>
                            {f.matkul_berpraktikum==1?"Ya":"Tidak"}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      )
    }
   
    return(
        <div className="colorlib-blog">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 colorlib-heading center-heading text-center animate-box">
                    <h2 className="heading-big">Alur</h2>
                    <h3>Alur Mata Kuliah</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 colorlib-heading center-heading text-center animate-box">

            
            
                    <img alt="img" src={ ("../img/misc/makul.jpg") } width="100%" />
                    <br /><br /><br />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 colorlib-heading center-heading text-center animate-box">
                    <h2 className="heading-big">Deskripsi</h2>
                    <h3>Deskripsi Mata Kuliah</h3>
                    </div>
                </div>
                
                {
                matkul.map((e,index)=>{
                    if(last==8){
                    return; 
                    }
                    last++;
                    return(
                    <>
                        {
                        last%2!=0?<div className="row">
                        
                        {detail_matkul(matkul[last-1],index)}
                        <div class="col-md-1"></div>
                        <div style={{ display: 'none'}}>{last++}</div>
                        {detail_matkul(matkul[last-1],index)}
                        </div>:
                        null
                        }
                    
                    </>
                    )
                })
                }
            </div>
        </div>

    )

}
