import React from 'react';

const ProfileModal = ({
  // Les infos du modal GitHub
  avatar = 'https://avatars.githubusercontent.com/u/19842736?v=4',
  name = 'John Doe',
  profileUrl = '#',
  location = null,
  bio = 'As we all know, John Doe \'s identity is unknown. I just wanted to contribute without being known.',
  repos = 1,
  followers = 16,
  following = 0,
}) => (
  <div className="modal fade" id="profileModal" tabIndex={-1} aria-hidden="true">
    <div className="modal-dialog modal-lg modal-dialog-centered">
      <div className="modal-content bg-dark text-white">

        <div className="modal-header border-secondary border-opacity-25">
          <h5 className="modal-title fw-semibold">Mon profil GitHub</h5>
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="modal"
            aria-label="Fermer"
          ></button>
        </div>

        <div className="modal-body">
          <div className="row g-4 align-items-start">
            <div className="col-md-5 d-flex justify-content-center">
              <img
                src={avatar}
                alt="Avatar"
                className="img-fluid rounded-3 shadow"
                style={{ maxWidth: 320 }} />
            </div>

            <div className="col-md-7">
              <ul className="list-unstyled small mb-0">

                <li className="py-2 d-flex align-items-center border-bottom border-secondary border-opacity-25">
                  <i className="bi bi-person me-2"></i>
                  <a href={profileUrl} className="link-light text-decoration-underline">
                    {name}
                  </a>
                </li>

                <li className="py-2 d-flex align-items-center border-bottom border-secondary border-opacity-25">
                  <i className="bi bi-geo-alt me-2"></i>
                  <span className="text-white-50">{location}</span>
                </li>

                <li className="py-3 border-bottom border-secondary border-opacity-25">
                  <div className="d-flex">
                    <i className="bi bi-card-text me-2 mt-1"></i>
                    <p className="mb-0 text-white-50">{bio}</p>
                  </div>
                </li>

                <li className="py-2 d-flex justify-content-between align-items-center border-bottom border-secondary border-opacity-25">
                  <span className="d-flex align-items-center">
                    <i className="bi bi-box-seam me-2"></i> Repositories
                  </span>
                  <strong className="text-white">{repos}</strong>
                </li>

                <li className="py-2 d-flex justify-content-between align-items-center border-bottom border-secondary border-opacity-25">
                  <span className="d-flex align-items-center">
                    <i className="bi bi-people me-2"></i> Followers
                  </span>
                  <strong className="text-white">{followers}</strong>
                </li>

                <li className="py-2 d-flex justify-content-between align-items-center">
                  <span className="d-flex align-items-center">
                    <i className="bi bi-person-check me-2"></i> Following
                  </span>
                  <strong className="text-white">{following}</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Bouton */}
        <div className="modal-footer border-top border-secondary border-opacity-25">
          <button type="button" className="btn btn-secondary btn-sm" data-bs-dismiss="modal">
            Fermer
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default ProfileModal;