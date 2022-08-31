import React from 'react'

export default function About_tahun() {
  
  let arr = [
    {
        "tahun" :"1985",
        "milestone" :"Jurusan S1 Teknik Informatika dibuka di Sekolah TInggi Teknik Surabaya",
    },
    {
        "tahun" :"1988",
        "milestone" :"Tim Akreditasi Direktorat Jendral Pendidikan Tinggi Republik Indonesia memutuskan kenaikan status TERDAFTAR menjadi DIAKUI untuk Strata-1 Teknik Informatika dan Komputer",
    },
    {
        "tahun" :"1993",
        "milestone" :"Pemerintah melalui Direktorat Jendral Pendidikan Tinggi Republik Indonesia memutuskan kenaikan status dari DIAKUI menjadi DISAMAKAN  untuk Strata-1 Teknik Informatika dan Komputer",
    },
    {
        "tahun" :"2000",
        "milestone" :"STTS bekerja sama dengan Swinburne University of Technology (SUT) - Melbourne Australia , menyelenggarakan link program Bachelor of Science Information Technology (BIT) dan program studi lanjut untuk jenjang master di SUT",
    },
    {
        "tahun" :"2014",
        "milestone" :"Strata-1 Teknik Informatika dan Komputer Terakreditasi B",
    }
  ];
  let ctr_tahun=-1;
  return (
    
    <div class="colorlib-event">
      <div class="container">
          <div class="row">
            {
              arr.map((e,index)=>{
                ctr_tahun++;
                return(
                  <div class="col-md-6" key={"about"+index}>
                      <div class="event-entry animate-box">
                          <div class="desc">
                              <p class="meta"/><span class="day">{e.tahun}</span>
                              <p>{e.milestone}</p>
                          </div>
                      </div>
                  </div>
                );
              })
            } 
          </div>
      </div>
  </div>  
  )
}
