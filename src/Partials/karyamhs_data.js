import React from 'react'
import Select from 'react-select';
import Axios from "axios"
export default function Karyamhs_data() {
    

    const options = [
        { value: '0', label: 'Semua Major' },
        { value: '1', label: 'Computer Science' },
        { value: '2', label: 'Software Engineering' },
        { value: '3', label: 'Internet Technology' },
      ];

    const [karyamhs,setKaryamhs]=React.useState([])
    const [judul,setJudul]=React.useState([])
    const [major,setMajor]=React.useState([])
   
    React.useEffect(()=>{
       
        Axios.get("https://ujicobata.com/BESTTS/api/basicController/get_karyamhs_recent")
        .then(result => {
          console.log(result.data.data)
          setKaryamhs(result.data.data)
        })
        .catch(err => {
          
        })
      
    },[])
    
    function search_karya(){
        Axios.get(`https://ujicobata.com/BESTTS/api/basicController/get_karyamhs_recent?judul=${judul}&major=${major.value} `)
        .then(result => {
          console.log(result.data.data)
          setKaryamhs(result.data.data)
        })
        .catch(err => {
          
        })
    }
 

  return (
    <>
    
        <div className="colorlib-search">
            <div className="container">
                <div className="row">
                <div className="col-md-12 search-wrap">
                    <div className="search-wrap-2">
                    <form method="post" className="colorlib-form">
                        <div className="row">
                        <div className="col-md-4">
                            <div className="form-group">
                            <div className="form-field">
                                <input type="text" value={judul} onChange={(e)=>setJudul(e.target.value)} id="title-filter" className="form-control" placeholder="Cari Judul" />
                            </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                            <div className="form-field">
                                <i className="icon icon-arrow-down3" />
                                <Select
                                    defaultValue={major}
                                    onChange={setMajor}
                                    options={options}
                                    className="form-control"
                                />
                               
                            </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <input type="button" onClick={()=>search_karya()} name="search" id="search" defaultValue="Cari Karya" className="btn btn-primary btn-block" />
                        </div>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div class="colorlib-classes">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 colorlib-heading center-heading text-center animate-box">
                        <h1 class="heading-big">Karya Mahasiswa</h1>
                        <h2>Karya Mahasiswa</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="row" id="karya-container">
                            <div class="row">
                                {
                                    
                                }
                                {karyamhs.map((e,index)=>{
                                    return(
                                        <div class="col-md-4 animate-box ajax-item" key={"karya"+index}>
                                            <div class="classes">
                                                <a href="/" class="classes-img" style={{ backgroundImage: `url("/img/${e.karya_id}/main.jpg")` }}>
                                                </a>
                                                <div class="wrap">
                                                    <div class="desc">
                                                        <span class="teacher">{e.karya_pembuat}</span>
                                                        <h3><a href="/">{e.karya_judul}</a></h3>
                                                    </div>
                                                    <div class="pricing">
                                                        <p>{e.karya_ringkasan.substring(0,100)+"..."}</p>
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
    
    </>
  )
}
