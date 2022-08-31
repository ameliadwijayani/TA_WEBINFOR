import React from 'react'
import "./tentang_kami.css"
export default function Knowledge_tentang_kami() {
    const [Arr,setArr]=React.useState([
        {
            "judul" : "Prodi dengan Mata Kuliah AI terlengkap",
            "isi" : "S1-Informatika memiliki daftar mata kuliah berbasis kecerdasan buatan terlengkap. Pada matakuliah wajib terdapat 2 mata kuliah dasar AI: Basic AI dan Soft Computing sedangkan pada Mata kuliah pilihan terdapat mata kuliah yang lebih applied seperti Advance Machine Learning, Computer Vision, Web Mining, Data Mining, Natural Language Processing, Big Data Processing dan lain-lain."
        },
        {
            "judul" : "Kurikulum yang Up-to-date",
            "isi" : "Materi perkuliahan dan praktikum yang diajarkan di Teknik Informatika tidak akan pernah ketinggalan zaman, karena secara rutin diperbarui sesuai dengan kebutuhan pasar. Dosen-dosen iSTTS juga terus mengembangkan ilmu dengan studi lanjut. Dalam 2018-2019 saja ada 5 Doktor baru pada jajaran pengajar di prodi  S1-Informatika iSTTS baik dari Luar negeri maupun dari dalam negeri."
        },
        {
            "judul" : "Karir Mapan di Perusahaan Skala Enterprise",
            "isi" : "Berdiri sejak 1985, Strata 1 Informatika iSTTS telah meluluskan lebih dari 4200 alumni yang telah bekerja, baik di dalam maupun di luar negeri. Beberapa perusahaan dengan nama besar seperti BCA, Sampoerna, dan Djarum Group secara rutin melakukan rekrutmen terhadap alumni S1-Informatika iSTTS. Beberapa alumni berprestasi bahkan berhasil mendapatkan pekerjaan di Google, Electronic Art, Opera, dan Facebook. Alumni yang tidak ingin bekerja di perusahaan, kebanyakan telah menjadi technopreneur dalam bidang teknologi informasi."
        },
        {
            "judul" : "Karir menantang di perusahaan Unicorn",
            "isi" : "Pada beberapa tahun terakhir alumni S1 Informatika iSTTS juga diminati para unicorn seperti Traveloka, Tokopedia dan Bukalapak."
        },
        {
            "judul" : "Peluang Beasiswa",
            "isi" : "iSTTS Bekerjasama dengan beberapa Kampus di luar negeri untuk menyelenggarakan Beasiswa bagi mhs S1 Informatika untuk kemudian dapat melanjutkan S2 di Luar negeri. Saat ini kerjasama yang sudah terjalin adalah dengan NCTU dan NTUST Taiwan."
        }
    ])
    let ctrPanel=-1
    function renderData(a,index){
        ctrPanel++
        return(
            <div className="panel panel-default" key={index}>
                <div className="panel-heading" role="tab" id={`heading${ctrPanel}`}>
                    <h4 className="panel-title">
                        <a className={ctrPanel == 0 ? "" : `collapsed`} data-toggle="collapse"
                        data-parent="#accordion0" href={`#collapse${ctrPanel}`}
                        aria-expanded={ctrPanel == 0 ? "true" : "false"}
                        aria-controls={`collapse${ctrPanel}`}>
                            {a.judul}
                        </a>
                    </h4>
                </div>
                <div id={`collapse${ctrPanel}`}
                    className={`panel-collapse collapse ${ctrPanel == 0 ? " in" : ""}`} role="tabpanel"
                    aria-labelledby={`heading${ctrPanel}`}>
                    <div className="panel-body">
                        {a.isi}
                    </div>
                </div>
            </div>
        )
    }

  return (
    <>
        <div className="colorlib-about colorlib-counters">
            <div className="container">

                <div className="col-md-7">
                    <div className="about-desc">
                        <div className="about-img-1 animate-box" style={{ backgroundImage: `url("/img/tentang/1.jpg")` }}></div>
                        <div className="about-img-2 animate-box img_tentang2"></div>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="row">
                        <div className="col-md-12 colorlib-heading animate-box">
                            <h1 className="heading-big">ISTTS</h1>
                            <h2>Mengapa memilih ISTTS?</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="fancy-collapse-panel">
                            <div className="panel-group" id="accordion0" role="tablist" aria-multiselectable="true">
                                {
                                    Arr.map((a,index)=>{
                                        return(
                                            renderData(a,index)
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}
