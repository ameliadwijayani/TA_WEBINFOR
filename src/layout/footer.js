import React from 'react'

export default function Footer() {
  return (
    <footer id="colorlib-footer">
        <div className="container">
            <div className="row row-pb-md" style={{paddingBottom: '1em !important'}}>
            <div className="col-md-3 colorlib-widget">
                <h4>Informasi Kontak</h4>
                <ul className="colorlib-footer-links">
                <li><a title="ISTTS" href="mailto:web_admin@istts.ac.id"><i className="icon-envelope" /> web_admin@istts.ac.id</a></li>
                <li><i className="icon-location4" /> Ngagel Jaya Tengah 73-77, Surabaya, Indonesia</li>
                <li><a title="ISTTS" href="tel://62315027920"><i className="icon-phone" />+62 31 502 7920</a></li>
                {/*                    <li><a title="ISTTS" href="tel://62315027920"><i class="icon-fa"></i>+62 31 502 7920</a></li>*/}
                </ul>
            </div>
            {/*            <div class="col-md-2 colorlib-widget">*/}
            {/*                <h4>Programs</h4>*/}
            {/*                <p>*/}
            {/*                <ul class="colorlib-footer-links">*/}
            {/*                    <li><a title="ISTTS" href="#"><i class="icon-check"></i> Diploma Degree</a></li>*/}
            {/*                    <li><a title="ISTTS" href="#"><i class="icon-check"></i> BS Degree</a></li>*/}
            {/*                    <li><a title="ISTTS" href="#"><i class="icon-check"></i> Beginner</a></li>*/}
            {/*                    <li><a title="ISTTS" href="#"><i class="icon-check"></i> Intermediate</a></li>*/}
            {/*                    <li><a title="ISTTS" href="#"><i class="icon-check"></i> Advance</a></li>*/}
            {/*                    <li><a title="ISTTS" href="#"><i class="icon-check"></i> Difficulty</a></li>*/}
            {/*                </ul>*/}
            {/*                </p>*/}
            {/*            </div>*/}
            <div className="col-md-3 colorlib-widget">
                <h4>Link lain</h4>
                <p>
                </p><ul className="colorlib-footer-links">
                <li><a title="ISTTS" href="<?= base_url() ?>/About"><i className="icon-check" /> Tentang Kami</a></li>
                <li><a title="ISTTS" href="<?= base_url() ?>/News"><i className="icon-check" /> Berita</a></li>
                <li><a title="ISTTS" href="<?= base_url() ?>/Courses"><i className="icon-check" /> Mata Kuliah</a></li>
                <li><a title="ISTTS" href="<?= base_url() ?>/Creation"><i className="icon-check" /> Karya Mahasiswa</a></li>
                {/*                    <li><a title="ISTTS" href="*/}{/*?//= base_url() ?*/}{/*/International"><i class="icon-check"></i> Kerja Sama Internasional</a></li>*/}
                <li><a title="ISTTS" href="http://beasiswaln.stts.edu"><i className="icon-check" /> Beasiswa Luar Negeri</a></li>
                <li><a title="ISTTS" href="http://pmb.stts.edu"><i className="icon-check" /> Daftar Sekarang</a></li>
                </ul>
                <p />
            </div>
            <div className="col-md-3 colorlib-widget">
                <h4>Spesialisasi</h4>
                <p>
                </p><ul className="colorlib-footer-links">
                <li><a title="ISTTS" href="http://android.stts.edu"><i className="icon-check" /> Google Android</a></li>
                <li><a title="ISTTS" href="http://indocl.stts.edu"><i className="icon-check" /> Lingusitik Komputasi</a></li>
                <li><a title="ISTTS" href="http://datasets.stts.edu"><i className="icon-check" /> Dataset</a></li>
                {/*                    <li><a title="ISTTS" href="#"><i class="icon-check"></i> Robotik</a></li>*/}
                </ul>
                <p />
            </div>
            <div className="col-md-3 colorlib-widget">
                <h4>Recent Post</h4>
                {/* Ada Codingan PENTING */}
            </div>
            </div>
        </div>
    </footer>

  )
}
