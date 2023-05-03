import { FaPython, FaJava, FaDocker, FaGitAlt } from 'react-icons/fa';

export default function Body() {
  return (
    <div className='container sections-wrapper'>
      <div className='row'>
        <div className='primary col-md-8 col-sm-12 col-xs-12'>
          <section className='about section'>
            <div className='section-inner'>
              <h2 className='heading'>Qui suis-je ? </h2>
              <div className='content'>
                <p>
                  Je suis Quentin Buysschaert, ancien auxiliaire de vie ayant accompagné des personnes en situation de
                  handicap moteur et/ou psychique dans leur vie quotidienne pendant 8 ans. J&#39;ai développé une
                  passion pour le développement web et entrepris une formation à l&#39;école O&#39;clock pour acquérir
                  des compétences pour débuter dans le développement de sites web.
                  <br />
                  Grâce à cette formation, j&#39;ai pu développer des compétences solides. Je suis actuellement en train
                  d&#39;explorer de nouvelles technologies telles que ReactJS et bientôt Java pour améliorer mes
                  compétences en développement.
                  <br />
                  Mon objectif est de continuer à élargir mes compétences pour pouvoir proposer des solutions de
                  développement innovantes et de haute qualité. Je suis convaincu que mon expérience en tant
                  qu&#39;auxiliaire de vie, combinée à mes compétences techniques en développement web, me permettront
                  de créer des sites web accessibles, conviviaux et fonctionnels pour un large public.
                </p>
                <br />
                <p>
                  Je vous invite à parcourir mon portfolio pour découvrir mes différents projets et à me contacter pour
                  toute question ou demande de collaboration. Je suis enthousiaste à l&#39;idée de travailler avec vous
                  sur votre prochain projet de développement web.
                </p>
              </div>
            </div>
          </section>

          <section className='latest section'>
            <div className='section-inner'>
              <h2 className='heading'>Projets</h2>
              <div className='content'>
                <div className='item featured text-center'>
                  <h3 className='title'>Liberty Frip&#39;</h3>
                  <p className='summary'>Une interface de gestion de caisse adaptée </p>
                  <div className='featured-image'>
                    <a href='https://buysschaertquentin.github.io/Liberty-Frip-/' target='_blank' rel='noreferrer'>
                      <img
                        className='img-responsive project-image'
                        src={import.meta.env.BASE_URL + 'assets/images/libertyFrip.png'}
                        alt='project name'
                      />
                    </a>
                    <div className='ribbon'>
                      <div className='text'>App</div>
                    </div>
                  </div>

                  <div className='desc text-left'>
                    <p>
                      J&#39;ai été contacté par le chargé de développement des actions associatives (CD2A) de
                      l&#39;association{' '}
                      <a
                        className='link'
                        href='https://www.linkedin.com/company/apf-france-handicap-nord-pas-de-calais/'
                        target='_blank'
                        rel='noreferrer'
                      >
                        APF France Handicap 59/62&nbsp;
                      </a>
                      afin de concevoir un site web leur facilitant la gestion de la caisse de l&#39;événement Liberty
                      Frip&#39; qu&#39;il organise prochainement.
                      <br />
                      Cette application sera utilisée par une personne en situation de handicap qui tiendra la caisse le
                      jour de l&#39;événement. J&#39;ai tenu compte des demandes du CD2A et j&#39;ai réalisé ce projet
                      sur 2 jours.
                    </p>
                  </div>
                </div>
                <hr className='divider' />
                <div className='item row'>
                  <a className='col-md-4 col-sm-4 col-xs-12' href='' target='_blank'>
                    <img className='img-responsive project-image' src='/html_css_js.jpg' />
                  </a>
                  <div className='desc col-md-8 col-sm-8 col-xs-12'>
                    <h3 className='title'>HTML - CSS - Javascript</h3>
                    <p>
                      La base de la base ! J&#39;ai passé une grande partie de ma formation à les apprendres. Je sais
                      construire une page HTML de A à Z, la stylisé avec du CSS et la dynamisez avec du Javascript.
                    </p>
                  </div>
                </div>

                <div className='item row'>
                  <a
                    className='col-md-4 col-sm-4 col-xs-12'
                    href='https://sequelize.org/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <img className='img-responsive project-image' src='/sequalize.png' alt='project name' />
                  </a>
                  <div className='desc col-md-8 col-sm-8 col-xs-12'>
                    <h3 className='title'>Sequalize et la Programmation Orientée Objet</h3>
                    <p>
                      Sequalize est l&#39;ORM que j&#39;ai principalement utilisé pour interagir avec des bases de
                      données relationnelles dans mes projets web. En utilisant Sequalize, j&#39;ai pu écrire des
                      requêtes SQL en utilisant des objets et des méthodes orientées objet (JavaScript + ExpressJs), ce
                      qui a rendu la manipulation des données beaucoup plus intuitive et facile à comprendre.
                    </p>
                  </div>
                </div>

                <div className='item row'>
                  <a
                    className='col-md-4 col-sm-4 col-xs-12'
                    href='https://expressjs.com/fr/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <img
                      className='img-responsive project-image'
                      src='./src/assets/images/expressJs.png'
                      alt='project name'
                    />
                  </a>
                  <div className='desc col-md-8 col-sm-8 col-xs-12'>
                    <h3 className='title'>NodeJs, ExpressJs et EJS</h3>
                    <p>
                      Au niveau back-end, j&#39;ai principalement utilisée ces trois technologies. Je sais mettre en
                      place un serveur selon l&#39;architecture Model Views Controllers, ainsi que des routes complexes.
                      Je sais mettre en place un système de log admin/utilisateurs ou encore mettre en place une API
                      REST.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className='projects section'>
            <div className='section-inner'>
              <h2 className='heading'>Autres technologies</h2>
              <div className='content'>
                <div className='item'>
                  <h3 className='title'></h3>
                  <p className='summary'>
                    Voici une liste non exhaustive des technologies que j&#39;ai appris lors de ma formation chez
                    O&#39;clock.
                  </p>
                </div>
                <div className='item'>
                  <h3 className='title'>
                    <FaGitAlt className='my-icon' /> Git et Github&nbsp;&nbsp;
                    <span className='label label-theme-everyday'>Utilisée quotidiennement</span>
                  </h3>
                  <p className='summary'>
                    Je suis très à l&#39;aise avec Git et GitHub, et je suis familier avec les fonctionnalités courantes
                    telles que les pull requests, les remotes et les branches. Je sais utiliser Git pour gérer les
                    versions de mes projets et pour collaborer avec d&#39;autres développeurs. J&#39;ai régulièrement
                    les pull requests pour proposer des modifications à des projets lors de ma formation et pour
                    travailler sur des branches distinctes pour des fonctionnalités spécifiques. Je suis également
                    capable de résoudre des conflits de fusion et de travailler avec des dépôts Git à distance en
                    utilisant des commandes telles que git clone, git push et git fetch. Git est devenu mon meilleur
                    ami.
                  </p>
                </div>
                <div className='item'>
                  <h3 className='title'>
                    Language SQL et PostgreSQL&nbsp;&nbsp;
                    <span className='label label-theme-everyday'>Utilisée quotidiennement</span>
                  </h3>
                  <p className='summary'>
                    Je suis familier avec le langage SQL ainsi que le système de gestion de base de données PostgreSQL.
                    Je suis capable de concevoir et de créer des bases de données en utilisant PostgreSQL, en
                    établissant des modèles de données tels que MLD (Modèle Logique de Données) et MCD (Modèle
                    Conceptuel de Données). Je suis en mesure d&#39;établir des requêtes SQL pour extraire des données
                    précises à partir d&#39;une base de données et de les utiliser pour répondre à des besoins
                    spécifiques. J&#39;ai également une expérience dans l&#39;élaboration d&#39;users stories, qui sont
                    des descriptions courtes et simples des fonctionnalités d&#39;un système, du point de vue de
                    l&#39;utilisateur.
                  </p>
                </div>
                <div className='item'>
                  <h3 className='title'>
                    API, conception et consommation au format REST&nbsp;&nbsp;
                    <span className='label label-theme-sometimes'>Souvent utilisée</span>
                  </h3>
                  <p className='summary'>
                    Je suis capable de créer et de consommer des API, en utilisant ExpressJs. Je peux définir des points
                    d&#39;accès pour permettre à d&#39;autres applications d&#39;interagir avec mes services, et
                    utiliser des bibliothèques et des outils pour appeler des API externes et récupérer les données dont
                    j&#39;ai besoin.
                  </p>
                </div>
                <div className='item'>
                  <h3 className='title'>
                    Strapi&nbsp;&nbsp;<span className='label label-theme-little'>Abordée</span>
                  </h3>
                  <p className='summary'>
                    Lors de ma formation, j&#39;ai eu l&#39;occasion de pratiquer brièvement Strapi. J&#39;ai pu
                    explorer les fonctionnalités et comprendre comment elle peut être utilisée pour développer des API.
                    J&#39;ai également eu l&#39;occasion de créer quelques projets simples en utilisant Strapi, ce qui
                    m&#39;a permis de me familiariser avec l&#39;interface et les outils de développement. Bien que je
                    ne sois pas expert de cette plateforme, cette expérience m&#39;a donné un aperçu des possibilités
                    qu&#39;un CMS peut offrire.
                  </p>
                </div>
                <div className='item'>
                  <h3 className='title'>
                    Autres&nbsp;&nbsp;<span className='label label-theme-little'>Abordée</span>
                  </h3>
                  <ul className='summary'>
                    <p>- JEST - TDD (Test-Driven Development) - Squitch - Regex - NoSQL - MongoDB</p>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className='experience section'>
            <div className='section-inner'>
              <h2 className='heading'>Expériences professionnelles</h2>
              <div className='content'>
                <div className='item'>
                  <h3 className='title'>
                    Etudiant chez
                    <span className='place'>
                      <a href='https://oclock.io/'> O&#39;clock&nbsp;</a>
                      en&nbsp;
                      <a href='https://oclock.io/formations/developpeur-web-fullstack-javascript'>
                        Formation Developpeur Fullstack JS&nbsp;
                      </a>
                    </span>
                    <span className='year'>(Janvier 2023 - Present)</span>
                  </h3>
                  <p>
                    Depuis le 9 janvier 2023, je suis en formation chez O&#39;clock pour obtenir le Titre Professionnel
                    de développeur web et web mobile. J&#39;ai pu suivre cette formation via un financement par
                    transition pro.&#39; O&#39;clock m&#39;a permis d&#39;apprendre la plupart des technologies que je
                    maîtrise aujourd&#39;hui. Je suis actuellement en formation jusqu&#39;au 28 juin 2023, et je me suis
                    spécialisé en backend, je vais approfondir entre autres MongoDB / NoSQL et apprendre GraphQL ainsi
                    que du &#39;Big Data&#39;. Je passerai l&#39;examen du Titre Professionnel vers mi-août pour valider
                    mes compétences acquises.
                  </p>
                </div>
                <div className='item'>
                  <h3 className='title'>
                    Auxiliaire de vie à domicile&nbsp;
                    <span className='place'>
                      <a href='http://savslille.blogs.apf.asso.fr/qui-sommes-nous/'>SAAD APF France Handicap</a>&nbsp;
                      qui est devenu&nbsp;
                      <a href='https://annuaire-entreprises.data.gouv.fr/entreprise/artaban-922824685'>Artaban</a>&nbsp;
                    </span>
                    <span className='year'>(2014 - Present)</span>
                  </h3>
                  <p>
                    J&#39;ai travaillé en tant qu&#39;auxiliaire de vie à domicile pour SAAD APF France Handicap, qui
                    est devenu Artaban, pendant huit ans. Cette expérience a été très importante pour moi car j&#39;ai
                    appris énormément de choses sur moi-même et sur les autres. En travaillant avec des personnes
                    handicapées ou dépendantes, j&#39;ai compris l&#39;importance de l&#39;empathie, de la patience et
                    de la bienveillance. J&#39;ai également développé ma capacité à travailler de manière autonome tout
                    en étant responsable de la santé et du bien-être de mes patients. Cette expérience m&#39;a également
                    permis de comprendre la complexité du système de santé et les enjeux liés au financement des
                    services à domicile. En somme, cette expérience a été très enrichissante à la fois sur le plan
                    personnel et professionnel, et elle m&#39;a aidé à devenir la personne que je suis aujourd&#39;hui.
                  </p>
                </div>
                <div className='item'>
                  <h3 className='title'>
                    Agent d&#39;entretien <span className='place'>pour Gom Propreté</span>&nbsp;
                    <span className='year'>(2013 - 2014)</span>
                  </h3>
                  <p>
                    J&#39;ai travaillé en tant qu&#39;agent d&#39;entretien chez Gom Propreté pendant les vacances
                    scolaires. Bien que ce fût mon premier emploi, cette expérience m&#39;a permis de développer de
                    nombreuses compétences, notamment la capacité à travailler de manière autonome et à respecter des
                    délais serrés. J&#39;ai également appris l&#39;importance de la rigueur et de la précision dans le
                    travail. En travaillant pour une entreprise de nettoyage, j&#39;ai compris l&#39;importance du
                    travail d&#39;équipe et j&#39;ai pu développer ma capacité à collaborer efficacement avec mes
                    collègues pour atteindre nos objectifs communs. Cette expérience m&#39;a également permis de
                    découvrir le monde professionnel et de comprendre comment une entreprise fonctionne au quotidien.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className='github section'>
            <div className='section-inner'>
              <h2 className='heading'>Mon GitHub</h2>
              <p>Graphique d&#39;activité de Janvier 2023 au premier Mai 2023</p>
              <p>
                <img
                  className='img-responsive'
                  src='./src/assets/images/github_contributions.png'
                  alt='GitHub Contributions Chart'
                />
              </p>
              <div id='ghfeed' className='ghfeed'></div>
            </div>
          </section>
        </div>
        <div className='secondary col-md-4 col-sm-12 col-xs-12'>
          <aside className='info aside section'>
            <div className='section-inner'>
              <h2 className='heading sr-only'>Informations de base</h2>
              <div className='content'>
                <ul className='list-unstyled'>
                  <li>
                    <i className='fa fa-map-marker'></i>
                    <span className='sr-only'></span> Ronchin, France
                  </li>
                  <li>
                    <i className='fa fa-envelope-o'></i>
                    <span className='sr-only'></span>
                    <a
                      href='https://mail.google.com/mail/?view=cm&fs=1&to=quentin.buysschaert@gmail.com&'
                      target='_blank'
                      rel='noreferrer'
                    >
                      quentin.buysschaert@gmail.com
                    </a>
                  </li>
                  <li>
                    <i className='fa fa-phone'></i>
                    <span className='sr-only'></span>
                    <a href='tel:06.18.51.63.56'>06.18.51.63.56</a>
                  </li>
                </ul>
              </div>
            </div>
          </aside>

          <aside className='skills aside section'>
            <div className='section-inner'>
              <h2 className='heading'>Soft Skills</h2>
              <div className='content'>
                <p className='intro'>
                  Cette section vous énonce les principaux soft skills que j&#39;ai acquis lors de mes 8 années
                  d&#39;expérience professionnelle.
                </p>

                <div className='skillset'>
                  <div className='item'>
                    <h3 className='level-title'>
                      Travail d&#39;équipe
                      <span className='level-label' data-toggle='tooltip' data-placement='left' data-animation='true'>
                        Expert
                      </span>
                    </h3>
                    <div className='level-bar'>
                      <div className='level-bar-inner' data-level='100%'></div>
                    </div>
                  </div>

                  <div className='item'>
                    <h3 className='level-title'>
                      Capacité d&#39;adaptation<span className='level-label'>Expert</span>
                    </h3>
                    <div className='level-bar'>
                      <div className='level-bar-inner' data-level='96%'></div>
                    </div>
                  </div>

                  <div className='item'>
                    <h3 className='level-title'>
                      Organisation<span className='level-label'>Expert</span>
                    </h3>
                    <div className='level-bar'>
                      <div className='level-bar-inner' data-level='96%'></div>
                    </div>
                  </div>
                  <div className='item'>
                    <h3 className='level-title'>
                      Autonomie<span className='level-label'>Pro</span>
                    </h3>
                    <div className='level-bar'>
                      <div className='level-bar-inner' data-level='85%'></div>
                    </div>
                  </div>
                  <div className='item'>
                    <h3 className='level-title'>
                      Rigueur<span className='level-label'>Pro</span>
                    </h3>
                    <div className='level-bar'>
                      <div className='level-bar-inner' data-level='85%'></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <aside className='education aside section'>
            <div className='section-inner'>
              <h2 className='heading'>Scolarité</h2>
              <div className='content'>
                <div className='item'>
                  <h3 className='title'>
                    <i className='fa fa-graduation-cap'></i> Titre Professionnel Développeur web et web mobile (Bac +2)
                  </h3>
                  <h4 className='university'>
                    École O&#39;clock <span className='year'> (Août 2023) </span>
                  </h4>
                </div>
                <div className='item'>
                  <h3 className='title'>
                    <i className='fa fa-graduation-cap'></i> Baccalauréat Profesionnel accompagnement soins et services
                    à la personne
                  </h3>
                  <h4 className='university'>
                    Lycée Valentine Labbé - La Madeleine <span className='year'> (2011-2014) </span>
                  </h4>
                </div>
              </div>
            </div>
          </aside>

          <aside className='languages aside section'>
            <div className='section-inner'>
              <h2 className='heading'>Langues</h2>
              <div className='content'>
                <ul className='list-unstyled'>
                  <li className='item'>
                    <span className='title'>
                      <strong>Français : </strong>
                    </span>
                    <span className='level'>
                      <i className='fa fa-star'></i> <i className='fa fa-star'></i> <i className='fa fa-star'></i>&nbsp;
                      <i className='fa fa-star'></i> <i className='fa fa-star'></i>
                    </span>
                  </li>
                  <li className='item'>
                    <span className='title'>
                      <strong>English : </strong>
                    </span>
                    <span className='level'>
                      <i className='fa fa-star'></i> <i className='fa fa-star'></i> <i className='fa fa-star'></i>&nbsp;
                      <i className='fa fa-star-o'></i> <i className='fa fa-star-o'></i>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
          <aside className='list music aside section'>
            <div className='section-inner'>
              <h2 className='heading'>Apprendre toujours plus !</h2>
              <div className='content'>
                <ul className='list-unstyled'>
                  <li>J&#39;aimerais apprendre ces technos :</li>
                  <li>
                    <span className='my-icon'>
                      <FaPython /> Python
                    </span>
                  </li>
                  <li>
                    <span className='my-icon'>
                      <FaJava /> Java (En cours d&#39;apprentissage en autodidacte)
                    </span>
                  </li>
                  <li>
                    <span className='my-icon'>
                      <FaDocker /> Docker
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
