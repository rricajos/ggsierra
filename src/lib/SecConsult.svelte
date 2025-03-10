<script>
 

  let type = "";
  let booking = false;
  let step = 1;
  let steps = {
    1: {
      index: 1,
      icon: "check",
      done: false,
      donnete: false,
      delay: false,
    },
    2: {
      index: 2,
      icon: "pencil-alt",
      done: false,
      donnete: false,
      delay: false,
    },
    3: {
      index: 3,
      icon: "clock",
      done: false,
      donnete: false,
      delay: false,
    },
    4: {
      index: 4,
      icon: "check-double",
      done: false,
      donnete: false,
      delay: false,
    },
  };
  function toggleDone(index) {
    steps[index].done = !steps[index].done;
  }

  function next() {
    steps[step].done = true;

    setTimeout(() => {
      steps[step].delay = true;
      step++;
    }, 100);
  }

  async function back(index) {
    let aux = Object.keys(steps).length;

    if (steps[index].done) {
      // Función recursiva que itera sobre los pasos
      async function iterate(i) {
        if (i > index - 1) {
          console.log(step);
          steps[i].done = false;
          // Verificar si delay es false antes de continuar
          if (steps[i].delay) {
            setTimeout(() => {
              steps[i].delay = false;
              iterate(i);
            }, 200); // Esperar 100 milisegundos y luego volver a intentar
            return; // Salir de la función actual
          }

          // Si delay es false, continuar con la lógica del bucle

          iterate(i - 1); // Llamar recursivamente a la función con el siguiente índice
        }
      }

      // Iniciar la iteración desde el último índice
      await iterate(aux).then((step = index));
    }
  }

  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
</script>

<div id="progress">
  {#each Object.values(steps) as step}
    <div class="step-container {step.done ? 'done' : ''}">
      <button
        class="step {step.delay ? 'delay' : ''} full-w"
        on:click={() => {
          back(step.index);
        }}
      >
        <i class="las la-{step.icon}"></i>
      </button>
      {#if step.index !== Object.values(steps).length}
        <hr />
      {/if}
    </div>
  {/each}
</div>

{#if step === 1}
  <article>
    <div id="step-1">
      <button
        class="consult-type"
        on:click={() => {
          type = "medical";
          next();
        }}
      >
        <div
          class="consult-type-radio {type == 'medical' ? 'check' : ''}"
        ></div>
        <div class="consult-type-title">Consulta Médica</div>
      </button>
      <button
        class="consult-type"
        on:click={() => {
          type = "academy";
          next();
        }}
      >
        <div
          class="consult-type-radio {type == 'academy' ? 'check' : ''}"
        ></div>
        <div class="consult-type-title">Consulta Académica</div>
      </button>
      <button
        class="consult-type"
        on:click={() => {
          type = "comercial";
          next();
        }}
      >
        <div
          class="consult-type-radio {type == 'comercial' ? 'check' : ''}"
        ></div>
        <div class="consult-type-title">Consulta Comercial</div>
      </button>
    </div>
  </article>
{/if}

{#if step === 2}
  <article>
    <div id="step-2">
      <iframe

        title=""  
        style="border-radius: 1em; padding-top: 2em"
        src="https://docs.google.com/forms/d/e/1FAIpQLSfMSEWOdMxqsRik4cZetv5fIEw-qBBg1QwP2hsjcrD88fzuYA/viewform?embedded=true"
        width="100%"
        height="720px"
        frameborder="0"
        marginheight="500"
        marginwidth="0">Cargando…</iframe
      >
      <script>
        var iframe = document.getElementById("myiframe");
        iframe.width = iframe.contentWindow.document.body.scrollWidth;
        iframe.height = iframe.contentWindow.document.body.scrollHeight;
     </script>
    </div>
  </article>
{/if}

{#if step === 3}
  <article>
    <h3>Tipo de Consulta</h3>
    <div id="step-1">
      <button
        class="consult-type"
        on:click={() => {
          type = "medical";
          next();
        }}
      >
        <div
          class="consult-type-radio {type == 'medical' ? 'check' : ''}"
        ></div>
        <div class="consult-type-title">Consulta Médica</div>
      </button>
      <button
        class="consult-type"
        on:click={() => {
          type = "academy";
          next();
        }}
      >
        <div
          class="consult-type-radio {type == 'academy' ? 'check' : ''}"
        ></div>
        <div class="consult-type-title">Consulta Académica</div>
      </button>
      <button
        class="consult-type"
        on:click={() => {
          type = "comercial";
          next();
        }}
      >
        <div
          class="consult-type-radio {type == 'comercial' ? 'check' : ''}"
        ></div>
        <div class="consult-type-title">Consulta Comercial</div>
      </button>
    </div>
  </article>
{/if}
{#if step === 4}
  <article>
    <h3>Tipo de Consulta</h3>
    <div id="step-1">
      <button
        class="consult-type"
        on:click={() => {
          type = "medical";
          next();
        }}
      >
        <div
          class="consult-type-radio {type == 'medical' ? 'check' : ''}"
        ></div>
        <div class="consult-type-title">Consulta Médica</div>
      </button>
      <button
        class="consult-type"
        on:click={() => {
          type = "academy";
          next();
        }}
      >
        <div
          class="consult-type-radio {type == 'academy' ? 'check' : ''}"
        ></div>
        <div class="consult-type-title">Consulta Académica</div>
      </button>
      <button
        class="consult-type"
        on:click={() => {
          type = "comercial";
          next();
        }}
      >
        <div
          class="consult-type-radio {type == 'comercial' ? 'check' : ''}"
        ></div>
        <div class="consult-type-title">Consulta Comercial</div>
      </button>
    </div>
  </article>
{/if}

<style>
  #progress,
  .step,
  .step-container {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  #progress > :not(:last-child) {
    width: 100%;
  }

  .step-container {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
  }

  .done > .step:hover {
    font-size: 2.5em;
    padding: 0.4em;
    cursor: pointer !important;
  }
  hr {
    position: absolute;
    z-index: -2;
    width: 95%;
    margin-left: 5%;
    height: 0.5em;
    background: linear-gradient(to left, white 50%, #190482 50%) right;
    background-size: 200% 100%;
    transition: background 0.5s ease-in-out;
  }
  .step {
    cursor: initial;
    padding: 0.25em;
    background: linear-gradient(to left, white 50%, #190482 50%) right;
    color: black;
    background-size: 200% 100%;
    border-radius: 50%;
    font-size: 3em;
    outline: none;
    border: none;
    transition:
      color,
      background 0.1s linear;
  }
  .delay {
    transition-delay: 0.4s;
  }
  .done > .step {
    color: white;
    background-position: left;
  }
  .done > hr {
    background-position: left;
  }

  #step-1 {
  }

  .consult-type {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 1em;
    background-color: white;
    outline: solid rgb(59 130 246 / 0.5);
    margin: 1em 0;
  }
  .consult-type-title {
    font-size: 1.4em;
    margin-left: 1em;
  }
  .consult-type-radio {
    border: 2px solid rgb(59 130 246 / 0.5);
    background-color: white;
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
  .check {
    background-color: rgb(59 130 246 / 0.5);
  }
</style>
