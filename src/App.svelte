<script>
  import "./app.css";
  import routes from "../.routify/routes.default.js";
  import { Router, createRouter } from "@roxi/routify";
  import Nav from "./lib/Nav.svelte";
  import SecHome from "./lib/SecHome.svelte";
  import SecBlog from "./lib/SecBlog.svelte";
  import SecConsult from "./lib/SecConsult.svelte";
  import NavDetails from "./lib/NavDetails.svelte";
  import Hastag from "./lib/Hastag.svelte";

  let handleClick = () => {
    console.log(handleClick);
  };
</script>

<main>
  <Nav></Nav>
  <section id="home" class="card"><SecHome></SecHome></section>
  <section id="consult" class="card not-active">
    <SecConsult></SecConsult>
  </section>
  <section id="blog" class="card not-active"><SecBlog></SecBlog></section>
  <section id="people" class="card not-active"><SecBlog></SecBlog></section>
  <NavDetails></NavDetails>
  <!-- <section id="podcasts" class="card not-active">
    <h2>Sierra Podcast</h2>

    <div id="embed-iframe"></div>
    <div class="episodes">
      <button
        class="episode"
        data-spotify-id="spotify:episode:7makk4oTQel546B0PZlDM5"
      >
        My Path to Spotify
      </button>

      <button
        class="episode"
        data-spotify-id="spotify:episode:43cbJh4ccRD7lzM2730YK3"
      >
        What is Backstage?
      </button>

      <button
        class="episode"
        data-spotify-id="spotify:episode:6I3ZzCxRhRkNqnQNo8AZPV"
      >
        Introducing Nerd Out@Spotify
      </button>
    </div>

    <article>
      <h3>¡Hola a todos! Soy GSierra y bienvenidos a mi podcast.</h3>
      <p>
        Aquí, exploramos una amplia gama de temas que van desde la tecnología y
        la ciencia, hasta el arte, la cultura y las historias inspiradoras de
        personas de todo el mundo.
      </p>
      <p>
        Ya sea que estés buscando aprender algo nuevo, encontrar motivación o
        simplemente disfrutar de una buena conversación, este es tu espacio.
        Acompáñame en este viaje de descubrimiento y conocimiento. ¡Vamos a
        sumergirnos juntos en el fascinante mundo del saber y la creatividad!
        ¡Comencemos!
      </p>
    </article>

    <article>
      <h3>Entrevistas insipiradoras en nuestro podcast</h3>
      <p>
        Desde expertos en tecnología y científicos innovadores, hasta artistas
        creativos y líderes inspiradores, esta es la colección completa de las
        increíbles personas que han compartido su tiempo y sabiduría con
        nosotros.
      </p>
      <p>
        Explora cada perfil para descubrir más sobre sus historias, logros y los
        episodios en los que han participado. ¡Sumérgete en este viaje de
        aprendizaje y descubre nuevas ideas con cada invitado!
      </p>
    </article>

    <article>
      <h3>Tengamos una Entrevista!</h3>
      <p>
        ¿Te apasiona compartir tus conocimientos y experiencias? ¿Tienes una
        historia inspiradora que contar o ideas innovadoras que deseas difundir?
        Me encantaría invitarte a ser parte del podcast como invitado especial.
      </p>
      <p>
        Aquí en el podcast de GSierra, buscamos voces diversas y perspectivas
        únicas para enriquecer nuestras conversaciones y ofrecer contenido
        valioso a nuestra audiencia. Si estás interesado en unirte a nosotros y
        participar en una charla profunda y amena, por favor, ponte en contacto.
        ¡Será un honor tenerte con nosotros!
      </p>

      <p><big>¿Te animas a ser nuestro próximo invitado?</big></p>
    </article>

    <article>
      <h3>Envia tu pregunta</h3>
      <p>
        Quiero invitarte a participar en un episodio especial del podcast donde
        respondo tus preguntas. ¿Tienes alguna duda, curiosidad o tema que te
        gustaría que abordemos?
      </p>
      <p>
        Envía tus preguntas y únete a nosotros en una conversación interactiva y
        enriquecedora. Tu participación es lo que hace que este podcast sea
        especial.
      </p>
      <p>
        ¿Te animas a enviarnos tu pregunta y ser parte de este episodio único?
      </p>
      <p><big>¡Espero con ganas tus preguntas!</big></p>
    </article>
  </section> -->

  <!-- 
  <section id="patrons" class="card not-active">
    <h2>Patrocinadores</h2>
    <p>
      Crear una marca personal fuerte es esencial en el mundo actual, ya sea que
      esté buscando avanzar en mi carrera, atraer clientes o establecerme como
      un líder en mi industria. Los patrocinadores de mi marca personal juegan
      un papel crucial en este proceso. Aquí explico quiénes son y cómo pueden
      ayudarme:
    </p>

    <h3>¿Quiénes son los patrocinadores de mi marca personal?</h3>

    <ul>
      <li>
        Mentores: Personas con más experiencia en mi campo que me guían y
        aconsejan sobre cómo mejorar mi imagen y estrategia de marca personal.
      </li>
      <li>
        Colegas y Amigos: Aquellos en mi red personal y profesional que apoyan y
        promocionan mis habilidades y logros.
      </li>
      <li>
        Empresas y Marcas: Compañías que ven el valor en asociarse conmigo
        debido a mi influencia y reputación, y que pueden ofrecerme
        oportunidades de patrocinio financiero o colaboraciones.
      </li>
      <li>
        Clientes y Seguidores: Personas que han tenido experiencias positivas
        conmigo y que comparten sus testimonios y recomiendan mis servicios o
        productos a otros.
      </li>
    </ul>

    <h3>¿Cómo pueden ayudarme los patrocinadores?</h3>
    <ol>
      <li>
        Visibilidad: Los patrocinadores pueden amplificar mi alcance,
        presentándome a nuevas audiencias a través de sus propias redes y
        plataformas.
      </li>
      <li>
        Credibilidad: Asociarme con marcas o individuos respetados puede
        aumentar mi credibilidad y validar mi autoridad en mi campo.
      </li>

      <li>
        Oportunidades: Los patrocinadores pueden abrir puertas a nuevas
        oportunidades de negocio, colaboraciones, conferencias y más.
      </li>
      <li>
        Recursos: Pueden ofrecerme recursos financieros, herramientas, formación
        y otros apoyos necesarios para desarrollar y mantener mi marca personal.
      </li>
    </ol>
  </section>
 -->
  <!-- <section id="contact" class="card not-active">
    <h2>Reservar Cosulta Privada</h2>

  </section>  -->

  <!-- <aside class="card">
    <h2>#️⃣ Filtrar por Hastags</h2>
    <Hastag href="#Running" {handleClick} />
    <Hastag href="#Diseño3D" {handleClick} />
    <Hastag href="#Impresion3D" {handleClick} />
    <Hastag href="#Salud" {handleClick} />
    <Hastag href="#Trumatologia" {handleClick} />
    <Hastag href="#Ortopedia" {handleClick} />
    <Hastag href="#Medicina" {handleClick} />
    <Hastag href="#Química" {handleClick} />
    <Hastag href="#Biologia" {handleClick} />
    <Hastag href="#Agricultura" {handleClick} />
    <Hastag href="#Ganaderia" {handleClick} />
  </aside> -->
</main>

<footer></footer>

<style>
  section.not-active {
    display: none;
  }
  section {
    max-width: 100vw;
    overflow: hidden;
    min-height: 100vh;
  }

  /* .episode:hover {
    background: #1db954;
  }
  .episode {
    min-width: max-content;
    margin-top: 0.5em;
    margin-left: 0.5em;
    padding: 0.8rem 1rem;
    border-radius: 0px;
    border: 0;
    background: #191414;
    color: #fff;
    cursor: pointer;
  }

  .episodes {
    margin: 0.5em 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  } */
</style>
