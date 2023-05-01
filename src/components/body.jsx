export default function Body() {
  return (
    <div className='container sections-wrapper'>
      <div className='row'>
        <div className='primary col-md-8 col-sm-12 col-xs-12'>
          <section className='about section'>
            <div className='section-inner'>
              <h2 className='heading'>Qui suis-je ?</h2>
              <div className='content'>
                <p>
                  Je suis Buysschaert Quentin, ancien auxiliaire de vie ayant accompagné des personnes en situation de
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
                  <h3 className='title'>
                    <a href='' target='_blank'>
                      Liberty Frip&#39;
                    </a>
                  </h3>
                  <p className='summary'>Une interface de gestion de caisse adaptée </p>
                  <div className='featured-image'>
                    <a href='https://buysschaertquentin.github.io/Liberty-Frip-/' target='_blank' rel='noreferrer'>
                      <img
                        className='img-responsive project-image'
                        src='./src/assets/images/libertyFrip.png'
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
                      l&#39;association APF France Handicap 59/62 afin de concevoir un site web leur facilitant la
                      gestion de la caisse de l&#39;événement Liberty Frip&#39;.
                      <p>
                        Cette application sera utilisée par une personne en situation de handicap qui tiendra la caisse
                        le jour de l&#39;événement. J&#39;ai tenu compte des demandes du CD2A et j&#39;ai réalisé ce
                        projet sur 2 jours.{' '}
                      </p>
                    </p>
                  </div>
                </div>
                <hr className='divider' />
                <div className='item row'>
                  <a className='col-md-4 col-sm-4 col-xs-12' href='' target='_blank'>
                    <img className='img-responsive project-image' src='./src/assets/images/html_css_js.jpg' />
                  </a>
                  <div className='desc col-md-8 col-sm-8 col-xs-12'>
                    <h3 className='title'>
                      <a href='' target='_blank'>
                        HTML - CSS - Javascript
                      </a>
                    </h3>
                    <p>
                      La base de la base ! J&#39;ai passé une grande partie de ma formation à les apprendres. Je sais
                      construire une page HTML de A à Z, la stylisé avec du CSS et la dynamisez avec du Javascript.
                    </p>
                  </div>
                </div>

                <div className='item row'>
                  <a className='col-md-4 col-sm-4 col-xs-12' href='' target='_blank'>
                    <img
                      className='img-responsive project-image'
                      src='./src/assets/images/sequalize.png'
                      alt='project name'
                    />
                  </a>
                  <div className='desc col-md-8 col-sm-8 col-xs-12'>
                    <h3 className='title'>
                      <a href='' target='_blank'>
                        Sequalize et la Programmation Orientée Objet
                      </a>
                    </h3>
                    <p>Sequalize est l&#39;ORM que j&#39;ai principalement utilisée...</p>
                  </div>
                </div>

                <div className='item row'>
                  <a className='col-md-4 col-sm-4 col-xs-12' href='' target='_blank'>
                    <img
                      className='img-responsive project-image'
                      src='./src/assets/images/expressJs.png'
                      alt='project name'
                    />
                  </a>
                  <div className='desc col-md-8 col-sm-8 col-xs-12'>
                    <h3 className='title'>
                      <a href='' target='_blank'>
                        NodeJs, ExpressJs et EJS
                      </a>
                    </h3>
                    <p>
                      {' '}
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
                  <h3 className='title'>
                    <a href='#'></a>
                  </h3>
                  <p className='summary'>
                    Provide a brief description of your project. Ut enim ad minima veniam, quis nostrum exercitationem
                    ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatu.
                  </p>
                </div>
                <div className='item'>
                  <h3 className='title'>
                    <a href='#'>Project Title Cras eget lacus</a> <span className='label label-theme'>Open Source</span>
                  </h3>
                  <p className='summary'>
                    Provide a brief description of your project. Maecenas ornare ultricies risus, in fermentum augue
                    consectetur in. Vestibulum vitae mauris iaculis, sollicitudin velit in, molestie nulla.{' '}
                  </p>
                  <p>
                    <a className='more-link' href='' target='_blank'>
                      <i className='fa fa-external-link'></i> View on GitHub
                    </a>
                  </p>
                </div>
                <div className='item'>
                  <h3 className='title'>
                    <a href='#'>Project Title Maecenas Ornare</a> <span className='label label-theme'>Open Source</span>
                  </h3>
                  <p className='summary'>
                    Provide a brief description of your project. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. In vel purus enim. Etiam tortor felis, fermentum ac ultrices sed.
                  </p>
                  <p>
                    <a className='more-link' href='' target='_blank'>
                      <i className='fa fa-external-link'></i> View on GitHub
                    </a>
                  </p>
                </div>

                <a className='btn btn-cta-secondary' href='#'>
                  More on CoderWall <i className='fa fa-chevron-right'></i>
                </a>
              </div>
            </div>
          </section>

          <section className='experience section'>
            <div className='section-inner'>
              <h2 className='heading'>Expériences professionnelles</h2>
              <div className='content'>
                <div className='item'>
                  <h3 className='title'>
                    Auxiliaire de vie à domicile{' '}
                    <span className='place'>
                      <a href='http://savslille.blogs.apf.asso.fr/qui-sommes-nous/'>SAAD APF France Handicap </a>
                      qui est devenu
                      <a href='https://annuaire-entreprises.data.gouv.fr/entreprise/artaban-922824685'> Artaban</a>
                    </span>{' '}
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
                    Agent d&#39;entretien <span className='place'>pour Gom Propreté</span>{' '}
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
              <p>
                Graphique d&#39;activité de Janvier 2023 au premier Mai 2023 <a href='' target='_blank'></a>
              </p>
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

          {/* <aside className='skills aside section'>
            <div className='section-inner'>
              <h2 className='heading'>Skills</h2>
              <div className='content'>
                <p className='intro'>
                  Intro about your skills goes here. Keep the list lean and only show your primary skillset. You can
                  always provide a link to your Linkedin or Coderwall profile so people can get more info there.
                </p>

                <div className='skillset'>
                  <div className='item'>
                    <h3 className='level-title'>
                      Python &amp; Django
                      <span
                        className='level-label'
                        data-toggle='tooltip'
                        data-placement='left'
                        data-animation='true'
                        title='You can use the tooltip to add more info...'
                      >
                        Expert
                      </span>
                    </h3>
                    <div className='level-bar'>
                      <div className='level-bar-inner' data-level='96%'></div>
                    </div>
                  </div>

                  <div className='item'>
                    <h3 className='level-title'>
                      Javascript &amp; jQuery<span className='level-label'>Expert</span>
                    </h3>
                    <div className='level-bar'>
                      <div className='level-bar-inner' data-level='96%'></div>
                    </div>
                  </div>

                  <div className='item'>
                    <h3 className='level-title'>
                      HTML5, CSS3, SASS &amp; LESS<span className='level-label'>Expert</span>
                    </h3>
                    <div className='level-bar'>
                      <div className='level-bar-inner' data-level='96%'></div>
                    </div>
                  </div>

                  <div className='item'>
                    <h3 className='level-title'>
                      Ruby on Rails<span className='level-label'>Pro</span>
                    </h3>
                    <div className='level-bar'>
                      <div className='level-bar-inner' data-level='85%'></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside> */}

          <aside className='skills aside section'>
            <div className='section-inner'>
              <h2 className='heading'>Soft Skills</h2>
              <div className='content'>
                <p className='intro'>
                  Cette section vous énonce les soft skills que j&#39;ai acquis lors de mes 8 années d&#39;expérience
                  professionnelle.
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
                      <div className='level-bar-inner' data-level='95%'></div>
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

          {/* <aside className='testimonials aside section'>
            <div className='section-inner'>
              <h2 className='heading'>Testimonials</h2>
              <div className='content'>
                <div className='item'>
                  <blockquote className='quote'>
                    <p>
                      <i className='fa fa-quote-left'></i>James is an excellent software engineer and he is passionate
                      about what he does. You can totally count on him to deliver your projects!
                    </p>
                  </blockquote>
                  <p className='source'>
                    <span className='name'>Tim Adams</span>
                    <br />
                    <span className='title'>Curabitur commodo</span>
                  </p>
                </div>

                <p>
                  <a className='more-link' href='#'>
                    <i className='fa fa-external-link'></i> More on Linkedin
                  </a>
                </p>
              </div>
            </div>
          </aside> */}

          <aside className='education aside section'>
            <div className='section-inner'>
              <h2 className='heading'>Scolarité</h2>
              <div className='content'>
                <div className='item'>
                  <h3 className='title'>
                    <i className='fa fa-graduation-cap'></i> Titre Professionnel Développeur web et web mobile (Bac +2)
                  </h3>
                  <h4 className='university'>
                    {' '}
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
                      <i className='fa fa-star'></i> <i className='fa fa-star'></i> <i className='fa fa-star'></i>{' '}
                      <i className='fa fa-star'></i> <i className='fa fa-star'></i>
                    </span>
                  </li>
                  <li className='item'>
                    <span className='title'>
                      <strong>English : </strong>
                    </span>
                    <span className='level'>
                      <i className='fa fa-star'></i> <i className='fa fa-star'></i> <i className='fa fa-star'></i>{' '}
                      <i className='fa fa-star-o'></i> <i className='fa fa-star-o'></i>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </aside>

          {/* <aside className='blog aside section'>
            <div className='section-inner'>
              <h2 className='heading'>Latest Blog Posts</h2>
              <p>
                You can use Sascha Depold&#39;s{' '}
                <a href='' target='_blank'>
                  jQuery RSS plugin
                </a>{' '}
                to pull in your blog post feeds.
              </p>
              <div id='rss-feeds' className='content'></div>
            </div>
          </aside> */}

          {/* <aside className='list music aside section'>
            <div className='section-inner'>
              <h2 className='heading'>Favourite coding music</h2>
              <div className='content'>
                <ul className='list-unstyled'>
                  <li>
                    <i className='fa fa-headphones'></i> <a href='#'>Etiam hendrerit urna nunc</a>
                  </li>
                  <li>
                    <i className='fa fa-headphones'></i> <a href='#'>Ut sollicitudin in mauris non auctor</a>
                  </li>
                  <li>
                    <i className='fa fa-headphones'></i> <a href='#'>Etiam hendrerit urna nunc</a>
                  </li>
                  <li>
                    <i className='fa fa-headphones'></i> <a href='#'>Duis et felis bibendum</a>
                  </li>
                </ul>
              </div>
            </div>
          </aside> */}

          {/* <aside className='list conferences aside section'>
            <div className='section-inner'>
              <h2 className='heading'>Conferences</h2>
              <div className='content'>
                <ul className='list-unstyled'>
                  <li>
                    <i className='fa fa-calendar'></i>{' '}
                    <a href='' target='_blank'>
                      WWDC 2014
                    </a>{' '}
                    (San Francisco)
                  </li>
                  <li>
                    <i className='fa fa-calendar'></i> <a href=''>Hive</a> (Seattle)
                  </li>
                </ul>
              </div>
            </div>
          </aside> */}
        </div>
      </div>
    </div>
  );
}
