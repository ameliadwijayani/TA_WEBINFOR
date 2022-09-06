import React from 'react'
import Axios from "axios"

export default function Knowledge_recent() {
    const [berita,setBerita]=React.useState([])
    const [event,setEvent]=React.useState([])
    let mon = ["Jan", "Feb", "Mar", "Apr","Mei", "Jun", "Jul", "Agt","Sep", "Okt", "Nov", "Des"];
  React.useEffect(()=>{
      Axios.get("https://ujicobata.com/BESTTS/api/basicController/get_berita_recent")
      .then(result => {
        setBerita(result.data.data)
      })
      .catch(err => {
        
      })
      Axios.get("https://ujicobata.com/BESTTS/api/basicController/get_event_recent")
      .then(result => {
        console.log(result.data.data)
        setEvent(result.data.data)
      })
      .catch(err => {
        
      })
  },[])
  
  return (
    <div className="colorlib-event">
        <div className="container">
            <div className="row">
                <div className="col-md-5 row-pb-md">
                    <div className="row">
                        <div className="col-md-12 colorlib-heading animate-box">
                            <h1 className="heading-big">Events</h1>
                            <h2>Event terbaru</h2>
                        </div>
                    </div>
                    <div className="row">
                        {event.map((e,index)=>{
                            let temp=e.event_mulai.split('-')
                            return(
                                <div className="col-md-12">
                                    <div className="event-entry animate-box" key={index}>
                                        <div className="desc">
                                            <p className="meta"><span
                                                        className="day">{temp[0]}</span><span
                                                        className="month">{mon[temp[1]-1]}</span>
                                            </p>
                                            <p className="organizer"><span>Organized by:</span> <span>{e.event_penyelenggara}</span></p>
                                            <h2><a href="/" name="#">{e.event_nama}</a></h2>
                                        </div>
                                        <div className="location">
                                            <span className="icon"><i className="icon-map"></i></span>
                                            <p>{e.event_tempat}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="col-md-7 row-pb-md">
                    <div className="row">
                        <div className="col-md-12 colorlib-heading animate-box">
                            <h1 className="heading-big">Berita</h1>
                            <h2>Berita terbaru</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            {berita.map((e,index)=>{
                                let json=JSON.parse(e.berita_isi)
                                let img=json[1].data.file.url;
                                return(
                                    <div className="block-21 d-flex animate-box" key={index}>
                                        <a href="/" className="blog-img" style={{ 
                                            backgroundImage:`url(${img})`
                                         }}></a>
                                        <div className="text">
                                            <h3 className="heading"><a href="/">{e.berita_judul}</a>
                                            </h3>
                                            <p>{e.berita_ringkasan.substring(0,100)}...</p>
                                            <div className="meta">
                                                <div><a href="/"><span className="icon-calendar"></span>{e.berita_datetime}</a>
                                                </div>
                                                <div><a href="/"><span className="icon-user2"></span>{e.berita_pembuat}</a></div>
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
