import banner from '../assets/images/banner.jpg';

const Services = () => {
    // Propriété de l'image du Haut
    const heroStyle = {
    backgroundImage: `url(${banner})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '180px'
    };
    return (
        <div>
            <section className="service-hero bg-dark" style={heroStyle}></section>
            <div className="container py-5">
                <header className="text-center mb-4">
                    <h1 className="fw-bold">Mon offre de services</h1>
                    <p className="text-muted">Voici les prestations sur lesquelles je peux intervenir</p>
                    <div className="mx-auto w-25 bg-primary">
                        <hr style={{ height: '4px' }} />
                    </div>
                </header>
                {/* Divisé en 3 parties égaux */}
                <div className="row g-4">
                    {/* Partie 1 */}
                    <div className="col-md-4">
                        <div className="card h-100 text-center shadow-sm">
                            <div className="card-body">
                                {/* Icônes de stylo */}
                                <div className="mb-3 text-primary" style={{ fontSize: '28px' }}>
                                    <i className="fa-solid fa-pen-nib"></i>
                                </div>
                                <h5 className="card-title">UX Design</h5>
                                <p className="card-text text-muted small">
                                    L'UX Design est une discipline qui consiste à concevoir des produits (sites web, applications mobiles, 
                                    logiciels, objets connectés, etc.) en plaçant l'utilisateur aucentre des préoccupations. L'objectif 
                                    est de rendre l'expérience utilisateur la plus fluide et agréable possible.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Parti 2 */}
                    <div className="col-md-4">
                        <div className="card h-100 text-center shadow-sm">
                            <div className="card-body">
                                {/* Icônes de code */}
                                <div className="mb-3 text-primary" style={{ fontSize: '28px' }}>
                                    <i className="fa-solid fa-code"></i>
                                </div>
                                <h5 className="card-title">Développement web</h5>
                                <p className="card-text text-muted small">
                                    Le développement de sites web consite à créer des sites internet en utilisant des langages de 
                                    programmation (HTML, CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.).
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Partie 3 */}
                    <div className="col-md-4">
                        <div className="card h-100 text-center shadow-sm">
                            <div className="card-body">
                                {/* Icônes de loupe */}
                                <div className="mb-3 text-primary" style={{ fontSize: '28px' }}>
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </div>
                                <h5 className="card-title">Référencement</h5>
                                <p className="card-text text-muted small">
                                    Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire 
                                    remonter dans les résultats des moteurs de recherche (Google, Bing, Yahoo,etc.). L'objectif est 
                                    d'attirer un maximum de visiteur qualifiés sur le site.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;