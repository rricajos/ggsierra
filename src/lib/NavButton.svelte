<script>
  import { run } from "../main.js";

  export let fun;
  export let title;
  export let icon;

  let button;
  let click = () => {
    run(fun);
  };
</script>

<button bind:this={button} on:click={click}>
  <a href="#{fun}">
    <i class={icon}></i>
    <span> {title}</span>
   
  </a>
</button>

<style>
  button {
    background-color: transparent;
    border: none;
    padding: 0;
    border-radius: 0;
    transition: none;
    cursor: none;
    outline: inherit;
    width: 100%;
    aspect-ratio: 1 / 1; /* Esto hará que el alto sea igual al ancho */
  }
  i {
    font-size: 4rem;

  }
  span {
    font-size: 1.2rem;
   
  }
  a {
    
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    align-items: center;
    background-color: #eee;
    text-shadow: 0px 0px 0px black;

    filter: brightness(110%);
    overflow: hidden;

    width: 100%;
    height: 100%;

    box-sizing: border-box;
    padding: 1.5em 1em;

    border-radius: 1em;
  }
</style>
