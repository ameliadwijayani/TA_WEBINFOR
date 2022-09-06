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
              <Link to="/">
                <img src="/img/beranda/logo.jpg" style={{ 
                    width: "60px", 
                    height: "60px"
                }}/> &nbsp; Informatika</Link></div>
            </div>
            <div className="col-md-9 text-right menu-1">
              <ul>
                <li className="nav-menu" id="nav-menu-tentang"><Link to="/about">Tentang</Link></li>
                <li className="nav-menu" id="nav-menu-tentang"><Link to="/dosen">Pengajar</Link></li>
                <li className="nav-menu" id="nav-menu-tentang"><Link to="/matkul">Mata Kuliah</Link></li>
                <li className="nav-menu has-dropdown" id="nav-menu-terbaru">
                  <a name="#">Terbaru</a>
                  <ul className="dropdown">
                    <li><Link to="/berita">Berita</Link></li>
                    <li><Link to="/karya_mahasiswa">Karya Mahasiswa</Link></li>
                    <li><Link to="/event">Event</Link></li>
                  </ul>
                </li>
                <li className="nav-menu" id="nav-menu-kontak"><Link to="/contact">Kontak kami</Link></li>
                {/*                        <li class="nav-menu" id="nav-menu-kerjasama"><a href="*/}{/*? //= base_url() 
                                                            ?*/}
                {/*international">Kerja Sama</a></li>*/}
                <li className="nav-menu"><a href="http://beasiswaln.stts.edu">Beasiswa NTUST</a></li>
                <li className="btn-cta"><a href="http://pmb.stts.edu"><span>Daftar Sekarang</span></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>



  )
}
