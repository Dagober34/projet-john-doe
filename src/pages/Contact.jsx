
const Contact = () => {
    return (
        <div>
            <header className="text-center mb-4">
                <h1 className="fw-bold">Contact</h1>
                <p className="text-muted">Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact</p>
                <div className="mx-auto" style={{width: '200px'}}>
                    <hr className="border-primary" />
                </div>
            </header>

            <div className="card shadow-sm">
                <div className="card-body">
                    <div className="row g-4">
                        <div className="col-md-6">
                            <h4 className="card-title">Formulaire de contact</h4>
                            <hr className="border-primary" />

                            <form>
                                <div className="mb-2">
                                    <input className="form-control" type="text" placeholder="Votre nom" />
                                </div>
                                <div className="mb-2">
                                    <input className="form-control" type="email" placeholder="Votre adresse email" />
                                </div>
                                <div className="mb-2">
                                    <input className="form-control" type="tel" placeholder="Votre numéro de téléphone" />
                                </div>
                                <div className="mb-2">
                                    <input className="form-control" type="text" placeholder="Sujet" />
                                </div>
                                <div className="mb-3">
                                    <textarea className="form-control" rows="6" placeholder="Votre message" />
                                </div>
                                <button type="button" className="btn btn-primary">Envoyer</button>
                            </form>
                        </div>

                        <div className="col-md-6">
                            <h4 className="card-title">Mes coordonnées</h4>
                            <hr className="border-primary" />

                            <div className="mb-3">
                                <p className="mb-1"><strong>John Doe</strong></p>
                                <p className="mb-1 text-muted">40 rue Laure Diebold<br/>69009 Lyon, France</p>
                                <p className="mb-1 text-muted">10 20 30 40 50</p>
                                <p className="mb-1"><a href="mailto:john.doe@gmail.com">john.doe@gmail.com</a></p>
                            </div>

                            <div className="ratio ratio-4x3">
                                <iframe
                                    title="map"
                                    src="https://www.google.com/maps?q=40+Rue+Laure+Diebold+69009+Lyon&output=embed"
                                    style={{border:0}}
                                    allowFullScreen=""
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <main className="contact-main">
                <h1>Contact</h1>
                <h2>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact</h2>
            </main> */}
        </div>
    )
};

export default Contact;