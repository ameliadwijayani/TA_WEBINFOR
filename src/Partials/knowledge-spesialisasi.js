import React from 'react'

export default function Knowledge_spesialisasi() {
    let [Arr,setArr]=React.useState([
        {
            "img" : "001",
            "desc" : "Artificial Intelligence Specialist"
        },
        {
            "img" : "002",
            "desc" : "Full Stack Developer"
        },
        {
            "img" : "003",
            "desc" : "Data Scientist"
        },
        {
            "img" : "004",
            "desc" : "System Analyst"
        },
        {
            "img" : "005",
            "desc" : "Database Specialist"
        },
        {
            "img" : "006",
            "desc" : "Software Project Manager"
        },
        {
            "img" : "007",
            "desc" : "Networking Specialist"
        },
        {
            "img" : "008",
            "desc" : "IT Researcher"
        },
        {
            "img" : "009",
            "desc" : "Technopreneur"
        },
    ])
    let ctr=-1;

    return (
        <div id="colorlib-services">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 colorlib-heading center-heading text-center animate-box">
                        <h1 className="heading-big">Spesialisasi</h1>
                        <h2>Spesialisasi</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 services-wrap">
                        <div className="row">
                            {
                                Arr.map((a,index)=>{
                                    ctr++;
                                    return(
                                        <div className="col-md-4 col-sm-4 text-center animate-box" key={index}>
                                            <a name="#" className="services">
                                                <span className="icon">
                                                    {/* <i className="flaticon-desktop"></i>  */}
                                                    <i><img alt="img" src={`../../img/beranda/spesialisasi/${a.img}.jpg`} style={{ width:"48px"}}/></i>
                                                </span>
                                                <div className="desc">
                                                    <h3>{a.desc}</h3>
                                                </div>
                                            </a>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
