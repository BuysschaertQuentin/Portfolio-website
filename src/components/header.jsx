export default function Header() {
  return (
    <header className='header'>
      <div className='container'>
        <img
          className='profile-image img-responsive pull-left'
          src='./src/assets/images/photo_profil.jpg'
          alt='James Lee'
        />
        <div className='profile-content pull-left'>
          <h1 className='name'>Buysschaert Quentin</h1>
          <h2 className='desc'>Développeur Fullstack</h2>
          <ul className='social list-inline'>
            <li>
              <a href='https://www.linkedin.com/in/quentin-buysschaert-1b3573218/' target='_blank' rel='noreferrer'>
                <i className='fa fa-linkedin'></i>
              </a>
            </li>
            <li>
              <a href='https://github.com/BuysschaertQuentin' target='_blank' rel='noreferrer'>
                <i className='fa fa-github-alt'></i>
              </a>
            </li>
          </ul>
        </div>
        <a
          className='btn btn-cta-primary pull-right'
          href='https://mail.google.com/mail/?view=cm&fs=1&to=quentin.buysschaert@gmail.com&'
          target='_blank'
          rel='noreferrer'
        >
          <i className='fa fa-paper-plane'></i> Contactez-moi
        </a>
      </div>
    </header>
  );
}
