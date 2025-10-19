import React from 'react';

const PortfolioCard = ({ image, title, subtitle, buttonText }) => {
    return ( 
        // Création du carré dupplicable
        <div className="card h-100 shadow-sm">
            <img src={image} className="card-img-top" alt={title} />
            <div className="card-body text-center">
                <h5 className="card-title">{title}</h5>
                <p className="card-text text-muted small">{subtitle}</p>
                <div className="mt-2">
                    <button type="button" className="btn btn-sm btn-primary">{buttonText || 'Voir le site'}</button>
                </div>
            </div>
        </div>
    );
};

export default PortfolioCard;
