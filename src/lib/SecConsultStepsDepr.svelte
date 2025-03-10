<script>
  import { createEventDispatcher } from "svelte";
  import { onMount } from "svelte";

  export let currentActive = 1;

  const dispatch = createEventDispatcher();

  // Función que se llama cuando currentActive cambia
  function updateCurrentActive(newActive) {
    currentActive = newActive;
    dispatch("change", { currentActive }); // Emitir evento 'change'
  }

  let progress, prev, next, circles;

  onMount( () => {
    progress = document.getElementById("progress");
    prev = document.getElementById("prev");
    next = document.getElementById("next");
    circles = document.querySelectorAll(".circle");
  })
 
  function update() {
    updateCurrentActive(currentActive);

    circles.forEach((circle, i) => {
      if (i < currentActive) {
        circle.classList.add("active");
      } else {
        circle.classList.remove("active");
      }
    });

    const actives = document.querySelectorAll(".active");

    //3 bars: 33%, 66%, 99%. active length:2,3,4. circles length: 4. 1/3, 2/3, 3/3
    progress.style.width =
      ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

    if (currentActive === 1) {
      // @ts-ignore
      prev.disabled = true;
    } else if (currentActive === circles.length) {
      // @ts-ignore
      next.disabled = true;
    } else {
      // @ts-ignore
      prev.disabled = false;
      // @ts-ignore
      next.disabled = false;
    }
  }

  function nextClick() {
    console.log("aaa")
    currentActive++;
    if (currentActive > circles.length) {
      currentActive = circles.length;
    }
    update();
  }

  function prevClick() {
    currentActive--;
      if (currentActive < 1) {
        currentActive = 1;
      }
      update();
  }

</script>

<div class="container">
  <div class="progress-container">
    <div class="progress-bar" id="progress"></div>
    <div class="circle active">1</div>
    <div class="circle">2</div>
    <div class="circle">3</div>
    <div class="circle">4</div>
  </div>

  <button
    class="btn"
    id="prev"
    disabled
    on:click={() => nextClick()}
    ><i class="las la-arrow-left" style="color: white;"></i></button
  >
  <button
    class="btn"
    id="next"
    on:click={() => prevClick()}
  >
    <i class="las la-arrow-right" style="color: white;"></i></button
  >
</div>

<!--   
  <div class="step">
    <div class="index">
      <span>1</span>
      <hr>
    </div>
    <div class="info">
      <h3>Tipo de Consulta</h3>
    </div>
    

  </div>
  <h3>2. Reserva la fecha de tu consulta</h3>
  <h3>3. Confirma tu reserva por correo electronico</h3> -->

<style>
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap");

  :root {
    --line-border-fill: #190482;
    --line-border-empty: #c2d9ff;
  }
  /* 
  body {
    background-color: #190482;
    font-family: "Montserrat", sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    overflow: hidden;
    margin: 0;
  } */

  .container {
    text-align: center;
  }

  .progress-container {
    display: flex;
    justify-content: space-between;
    position: relative;
    margin-bottom: 2em;
    max-width: 100%;
    width: 100%;
  }

  .progress-container::before {
    content: "";
    background-color: var(--line-border-empty);
    height: 4px;
    width: 100%;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(
      -50%
    ); /*Positioning bar exactly in the middle of the number*/
    z-index: -1;
  }

  .progress-bar {
    background-color: var(--line-border-fill);
    height: 4px;
    width: 0%;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    z-index: -1;
    transition: 0.4s ease;
  }

  .circle {
    height: 64px;
    width: 64px;
    border-radius: 50%;
    background-color: #fff;
    color: #190482;
    font-size: 24px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid var(--line-border-empty);
    transition: 0.4s ease;
  }

  .circle.active {
    border: 3px solid var(--line-border-fill);
    background-color: var(--line-border-fill);
    color: #fff;
  }

  .btn {
    background-color: var(--line-border-fill);
    color: #fff;
    border: none;
    font-family: inherit;
    font-weight: bold;
    padding: 0.6em 2em;
    border-radius: 5px;
    cursor: pointer;
    font-size: 20px;
    margin: 0.5em;
  }
  .btn:hover {
    background-color: #2006a3;
  }
  .btn:active {
    transform: scale(0.97);
  }
  .btn:disabled {
    background-color: var(--line-border-empty);
    cursor: not-allowed;
  }
</style>
