<script>
  export let href;
  export let handleClick;
</script>

<a {href}>
  <button on:click={handleClick}> 
    {href}
  </button>
</a>

<style>
  button {
    margin: 0.25rem;
    font-size: 1.3rem;
  }
</style>
