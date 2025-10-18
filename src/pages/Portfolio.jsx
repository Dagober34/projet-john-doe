import PortfolioCard from '../components/PortfolioCard';
import banner from '../assets/images/banner.jpg';
import img1 from '../assets/images/fresh-food.jpg';
import img2 from '../assets/images/restaurant-japonais.jpg';
import img3 from '../assets/images/espace-bien-etre.jpg';
import img4 from '../assets/images/seo.jpg';
import img5 from '../assets/images/screens.jpg';
import img6 from '../assets/images/coder.jpg';

const Portfolio = () => {
    const heroStyle = {backgroundImage: `url(${banner})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '160px'};

    const items = [
        {image: img1, title: 'Fresh Food', subtitle: "Site de vente de produits frais en ligne"},
        {image: img2, title: 'Restaurant Akira', subtitle: 'Site de vente de produits frais en ligne'},
        {image: img3, title: 'Espace bien-être', subtitle: "Site de vente de produits frais en ligne"},
        {image: img4, title: 'SEO', subtitle: "Amélioration du référencement d'un site e-commerce"},
        {image: img5, title: "Création d'une API", subtitle: "Création d'une API RESTFUL publique"},
        {image: img6, title: "Maquette d'un site web", subtitle: "Création du prototype d'un site"},
    ];

    return (
        <div>
            <section style={heroStyle}></section>

            <div className="container py-5">
                <header className="text-center mb-4">
                    <h2 className="fw-bold">Portfolio</h2>
                    <p className="text-muted">Voici quelques-unes de mes réalisations.</p>
                    <div className="mx-auto w-25 bg-primary">
                        <hr style={{height: '4px'}} />
                    </div>
                </header>

                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {items.map((it, idx) => (
                        <div className="col" key={idx}>
                            <PortfolioCard image={it.image} title={it.title} subtitle={it.subtitle} />
                        </div>
                    ))}
                </div>
            </div>
            {/* <main className="portfolio-main">
                <h1>Portfolio</h1>
                <p>Voici quelques-unes de mes réalisations</p>
            </main> */}
        </div>
    )
};

export default Portfolio;