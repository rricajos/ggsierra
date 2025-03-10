<script>
  import NavButton from "./NavButton.svelte";

</script>

<nav class="card">

  <div class="nav-col">
    <NavButton fun="home" title="GSierra" icon="las la-home" />
    <!-- <NavButton fun="dsierra" title="Productos" icon="las la-cube" /> -->
    <NavButton fun="consult" title="Consulta" icon="las la-phone" />
    <NavButton fun="blog"  title="Blog" icon="las la-rss" />
    <!-- <NavButton fun="pills"  title="Vídeos" icon="las la-video" />
    <NavButton fun="podcasts" title="Podcasts" icon="las la-headphones" /> -->
    <NavButton fun="people" title="Personas" icon="las la-smile" />
     <!-- <NavButton fun="patrons" title="Club" icon="las la-users" /> -->
    <!--<NavButton fun="podcasts" title="Cursos" icon="las la-brain" />
    <NavButton fun="books" title="Libros" icon="las la-book" /> -->
  </div>

 

  
</nav>

<style>

  .nav-col {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 1em;
    justify-items: center;
  }
</style>
