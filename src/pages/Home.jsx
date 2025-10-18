import React from 'react';
import bannerImage from '../assets/images/hero-bg.jpg';
import aboutImage from '../assets/images/john-doe-about.jpg';
import ProfileModal from '../components/ProfileModal';

const Home = () => {
    const heroStyle = {
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '90vh' ,
    };
    
    return (
        <main className="home-main bg-light">
            <section className="position-relative d-flex align-items-center text-white" style={heroStyle}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                }}></div>
                <div className="container text-center position-relative">
                    <h1 className="display-4 fw-bold mb-3 ">Bonjour, je suis John Doe</h1>
                    <h2 className="fw-bold h1" >Développeur web full stack</h2>
                    <button type="button" className="btn btn-danger btn-sm px-3" data-bs-toggle="modal" data-bs-target="#profileModal">
                        En savoir plus
                    </button>
                </div>
            </section>
            <section id="about" className="container my-5">
                <div className="card shadow-sm">
                    <div className="card-body p-4 p-md-5">
                        <div className="row g-5">
                            <div className="col-md-6">
                                <h4 className="card-title mb-1">A propos</h4>
                                <div className="border-top border-3 border-primary w-50 mb-3"></div>
                                <img
                                    src={aboutImage}
                                    alt="John Doe"
                                    className="img-fluid rounded mb-3"
                                />
                                <p className="small mb-3">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                                <p className="small mb-3">
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                                    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>

                                <p className="small mb-0">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
                                    veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                </p>
                            </div>
                            <div className="col-md-6">
                                <h4 className="card-title mb-1">Mes compétences</h4>
                                <div className="border-top border-3 border-primary w-50 mb-3"></div>

                                <div className="mb-3">
                                    <div className="d-flex justify-content-between mb-1">
                                        <small className="text-muted">HTML5</small>
                                        <small className="text-muted">90%</small>
                                    </div>
                                    <div className="progress" style={{ height: '10px' }}>
                                        <div className="progress-bar bg-danger" style={{ width: '90%' }} />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <div className="d-flex justify-content-between mb-1">
                                        <small className="text-muted">CSS3</small>
                                        <small className="text-muted">80%</small>
                                    </div>
                                    <div className="progress" style={{ height: '10px' }}>
                                        <div className="progress-bar bg-info" style={{ width: '80%' }} />
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <div className="d-flex justify-content-between mb-1">
                                        <small className="text-muted">JAVASCRIPT</small>
                                        <small className="text-muted">70%</small>
                                    </div>
                                    <div className="progress" style={{ height: '10px' }}>
                                        <div className="progress-bar bg-warning" style={{ width: '70%' }} />
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <div className="d-flex justify-content-between mb-1">
                                        <small className="text-muted">PHP</small>
                                        <small className="text-muted">60%</small>
                                    </div>
                                    <div className="progress" style={{ height: '10px' }}>
                                        <div className="progress-bar bg-success" style={{ width: '60%' }} />
                                    </div>
                                </div>
                                <div>
                                    <div className="d-flex justify-content-between mb-1">
                                        <small className="text-muted">REACT</small>
                                        <small className="text-muted">50%</small>
                                    </div>
                                    <div className="progress" style={{ height: '10px' }}>
                                        <div className="progress-bar bg-primary" style={{ width: '50%' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ProfileModal />
        </main>
        // <div>
        //     <main className="home-main">
        //         <h1>Bonjour, je suis John Doe</h1>
        //         <h2>Développeur web full stack</h2>
        //     </main>
            
        // </div>
    );
};

export default Home;