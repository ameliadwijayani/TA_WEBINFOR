import React from 'react'

export default function Knowledge_tentang_kami_2() {
    
    const [Arr,setArr]=React.useState([
        {
            "judul" : "Intelligent System",
            "isi" : "Konsentrasi ini membekali mahasiswa dengan prinsip-prinsip fundamental komputasi cerdas dan kecerdasan buatan sehingga mampu menalar proses-proses yang dibutuhkan untuk mendesain dan mengembangkan sebuah sistem cerdas. Teknik-teknik yang akan dipelajari dalam major ini meliputi: Soft Computing, Machine Learning dan Evolutionary Computation. Konsentrasi ini juga membekali mahasiswa dengan mata kuliah yang lebih applied seperti:  Computer Vision, Web Mining, Data Mining, dan Natural Language Processing. Untuk penelitian terkini pada konsentrasi ini banyak yang mengarah ke topik-topik sistem cerdas memanfaatkan Deep Learning seperti: self driving car, biomedical image analysis, dan multi modal representation."
        },
        {
            "judul" : "Software Technology",
            "isi" : "Konsentrasi ini membekali mahasiswa dengan kemampuan teknikal bidang pengembangan perangkat lunak untuk berbagai platform dengan memanfaatkan tools, teknologi dan framework terkini. Mahasiswa dilatih untuk memimpin tim atau bekerja sama dalam tim pengembang perangkat lunak, merekayasa perangkat lunak berskala besar dan kompleks, serta merancang perangkat lunak yang berorientasi pada user. Pemahaman yang mendalam tentang struktur dan arsitektur perangkat lunak sangat dibutuhkan untuk bisa berkarir dalam bidang software technology sehingga sangat ditekankan dalam konsentrasi ini. Mahasiswa juga dilatih untuk memelihara aplikasi yang sudah ada sesuai dengan kebutuhan organisasi. Penelitian pada konsentrasi ini meliputi pemanfaatan software metodologi modern, automated testing, software process improvement, design pattern dan lain-lain."
        },
        {
            "judul" : "Network and Distributed Technology",
            "isi" : "Konsentrasi ini membekali mahasiswa dengan pengetahuan di bidang teknologi jaringan, mobile app, web application, API, cloud technology, distributed database, dan analisa big data sehingga mahasiswa dapat merancang arsitektur dan mengembangkan aplikasi full stack. Teknik-teknik yang dipelajari dalam kuliah ini meliputi: iOS dan Android App Development, NoSQL, REST API dengan functional programming, Cloud Computing, Java Enterprise. Penelitian pada konsentrasi ini meliputi pembuatan sistem dengan multiple front end dan memanfaatkan services, penerapan teknologi baru baik untuk front end maupun back end (Full Stack)."
        },
    ])
    let ctrPanel=4;
    function renderData(a,index){
        ctrPanel++;
        return(
            <div className="panel panel-default" key={index}>
                <div class="panel-heading" role="tab" id={`heading${ctrPanel}`}>
                    <h4 class="panel-title">
                        <a title="" className={ctrPanel == 5 ? "" : `collapsed`} data-toggle="collapse"
                        data-parent="#accordion1" href={`#collapse${ctrPanel}`}
                        aria-expanded={ctrPanel == 5 ? "true" : "false"}
                        aria-controls={`collapse${ctrPanel}`}>{a.judul}
                        </a>
                    </h4>
                </div>
                <div id={`collapse${ctrPanel}`}
                    className={`panel-collapse collapse ${ctrPanel == 0 ? " in" : ""}`} role="tabpanel"
                    aria-labelledby={`heading${ctrPanel}`}>
                    <div class="panel-body">
                        {a.isi}
                    </div>
                </div>
            </div>
        )
    }
  return (
    <div class="colorlib-about colorlib-counters">
        <div class="container">

            <div class="col-md-6">
                <h3>Fokus Pendidikan / Konsentrasi</h3>
                <p>Informatika disebut sebagai bidang yang menjembatani antara manusia dan informasi dengan melakukan
                    pengembangan sistem, servis, teknologi, dan interface. Bidang ini juga mempelajari bagaimana teknologi
                    informasi mengubah manusia dan dunia. Di S1 Informatika iSTTS, mahasiswa akan belajar memanfaatkan
                    komputasi untuk memecahkan masalah-masalah
                    teknologi informasi yang sangat dinamis dan terus berkembang.</p>
                <p>Cakupan bidang informatika meliputi: algoritma, pemrograman, perancangan dan analisis sistem, arsitektur
                    komputer, jaringan komputer, kecerdasan buatan, sistem cerdas, rekayasa perangkat lunak, pengembangan
                    web, pengembangan mobile app, service based system, dan masih banyak lagi. Karena spektrum bidang
                    informatika sangat luas, di S1 Informatika iSTTS terdapat tiga konsentrasi:
                    Computational Intelligence, Software Technology, dan Internet Technology</p>
            </div>
            <div class="col-md-6">
                <div class="row">
                    <div class="fancy-collapse-panel">
                        <div class="panel-group" id="accordion1" role="tablist" aria-multiselectable="true">
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

  )
}
