import React from 'react'
import { Link } from "gatsby"
export default function Header() {
  return (
   <nav className="colorlib-nav" role="navigation">
      <div className="top-menu">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              
                
              
              <div id="colorlib-logo">
              <Link title="" to="/">
                <img alt="img" src="/img/beranda/logo.jpg" style={{ 
                    width: "60px", 
                    height: "60px"
                }}/> &nbsp; Informatika</Link></div>
            </div>
            <div className="col-md-9 text-right menu-1">
              <ul>
                <li className="nav-menu" id="nav-menu-tentang"><Link title="" to="/about">Tentang</Link></li>
                <li className="nav-menu" id="nav-menu-tentang"><Link title="" to="/dosen">Pengajar</Link></li>
                <li className="nav-menu" id="nav-menu-tentang"><Link title="" to="/matkul">Mata Kuliah</Link></li>
                <li className="nav-menu has-dropdown" id="nav-menu-terbaru">
                  <Link title="" to="/">Terbaru</Link>
                  <ul className="dropdown">
                    <li><Link title="" to="/berita">Berita</Link></li>
                    <li><Link title="" to="/karya_mahasiswa">Karya Mahasiswa</Link></li>
                    <li><Link title="" to="/event">Event</Link></li>
                  </ul>
                </li>
                <li className="nav-menu" id="nav-menu-kontak"><Link title="" to="/contact">Kontak kami</Link></li>
                {/*international">Kerja Sama</a></li>*/}
                <li className="nav-menu"><a title="" href="http://beasiswaln.stts.edu">Beasiswa NTUST</a></li>
                <li className="btn-cta"><a title="" href="http://pmb.stts.edu"><span>Daftar Sekarang</span></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>



  )
}
