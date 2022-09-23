import React from 'react'

export default function Contact_form() {
  return (
    <div className="colorlib-contact">
        <div className="container">
            <div className="row">
            <div className="col-md-12">
                <h3>Mau info lebih lanjut? Silakan mengisi form di bawah ini:</h3>
            </div>
            <div className="col-md-12">
                <form method="post" id="contact-form">
                <div className="row form-group">
                    <div className="col-md-12">
                    <input type="text" id="name" className="form-control" placeholder="Nama lengkap" required />
                    </div>
                </div>
                <div className="row form-group">
                    <div className="col-md-12">
                    <input type="text" id="phone" className="form-control" placeholder="Nomor HP" required />
                    </div>
                </div>
                <div className="row form-group">
                    <div className="col-md-12">
                    <input type="email" id="email" className="form-control" placeholder="Alamat email" required />
                    </div>
                </div>
                <div className="row form-group">
                    <div className="col-md-12">
                    <input type="text" id="school" className="form-control" placeholder="Sekolah Asal" required />
                    </div>
                </div>
                <div className="row form-group">
                    <div className="col-md-12">
                    <textarea name="message" id="message" cols={30} rows={10} className="form-control" placeholder="Tuliskan pesan anda di sini" defaultValue={""} />
                    </div>
                </div>
                <div className="form-group">
                    <input type="submit" defaultValue="Kirim pesan" className="btn btn-primary" />
                </div>
                </form>
            </div>
            </div>
        </div>
    </div>
  )
}
