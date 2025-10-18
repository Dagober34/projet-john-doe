
const Legal = () => {
    return (
        <div>
            <header className="text-center mb-4">
                <h1 className="fw-bold">Mentions légales</h1>
                <p className="text-muted">Informations légales et contact</p>
                <div className="mx-auto" style={{width: '200px'}}>
                    <hr className="border-primary" />
                </div>
            </header>

            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="accordion" id="legalAccordion">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Editeur du site
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#legalAccordion">
                                <div className="accordion-body">
                                    <h5 className="mb-2">John Doe</h5>
                                    <p className="mb-1 text-muted"><i className="bi bi-map"></i> 40 rue Laure Diebold</p>
                                    <p className="mb-1 text-muted"><i className="bi bi-geo-alt"></i> 69009 Lyon, France</p>
                                    <p className="mb-1 text-muted"><i className="bi bi-phone"></i> 10 20 30 40 50</p>
                                    <p className="mb-1 text-muted"><i className="bi bi-envelope"></i>john.doe@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Hébergeur
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#legalAccordion">
                                <div className="accordion-body">
                                    <h5 className="mb-2">alwaysdata</h5>
                                    <p>91 Rue du Faubourg Saint-Honoré, 75008 Paris</p>
                                    <i className="bi bi-globe me-2"></i><a href="https://www.alwaysdata.com" target="_blank" rel="noopener noreferrer">www.alwaysdata.com</a>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Crédits
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#legalAccordion">
                                <div className="accordion-body">
                                    <h5 className="mb-2">Crédits</h5>
                                    <p>Ce site a été réalisé par John Doe, étudiant au <a href="https://www.centre-europeen-formation.fr/" target="_blank" rel="noopener noreferrer">Centre Euopéen de Formation</a>.</p>
                                    <p>Les images sont utilisées sur ce site sont libre de droits et ont été obtenues sur le site <a href="https://pixabay.com/fr/" target="_blank" rel="noopener noreferrer">Pixabay</a></p>
                                    <p>La favicon de ce site a été fournie par <a href="https://www.flaticon.com/de/kostenlose-icons/john-doe" target="_blank" rel="noopener noreferrer">John doe Icons erstellt von Freepik-Flativon</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <main className="legal-main">
                <h1>Mentions légales</h1>
            </main> */}
        </div>
    )
};

export default Legal;