<script>
  import { createEventDispatcher } from "svelte";
  import SecConsultSteps from "./SecConsultStepsDepr.svelte";
  let currentActive = 1;
  let step1 = null;

  const dispatch = createEventDispatcher();

  // Función que se llama cuando currentActive cambia
  function updateCurrentActive(newActive) {
    currentActive = newActive;
    dispatch("change", { currentActive }); // Emitir evento 'change'
  }

  function handleChange(event) {
    currentActive = event.detail.currentActive;
  }

  // Función para actualizar el valor de currentActive
  function handleRadioChange(event) {
    step1 = event.target.value;
    currentActive++;
    updateCurrentActive(currentActive)
    console.log(step1);
  }
</script>

<SecConsultSteps bind:currentActive/>
<h2>Consultas @gsierra</h2>
{#if currentActive === 1}
  <article id="1">
    <h3>Tipo de Consulta</h3>

    <form class="radio-form">
      <label class="radio-label">
        <input
          class="radio-input"
          type="radio"
          name="option"
          value="medical"
          bind:group={step1}
          checked
          on:change={handleRadioChange}
        />
        <span>Consulta Médica</span>
      </label>
      <label class="radio-label">
        <input
          class="radio-input"
          type="radio"
          name="option"
          value="academy"
          bind:group={step1}
          on:change={handleRadioChange}
        />
        <span>Consulta Académica</span>
      </label>
      <label class="radio-label">
        <input
          class="radio-input"
          type="radio"
          name="option"
          value="general"
          bind:group={step1}
          on:change={handleRadioChange}
        />
        <span>Consulta General</span>
      </label>
    </form>
  </article>
{:else if currentActive === 2}
  <div id="2">Content for step 2</div>
{:else if currentActive === 3}
  <div id="3">Content for step 3</div>
{:else}
  <div>Select a step</div>
{/if}

<style>
  .radio-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: #f9f9f9;
    max-width: 300px;
    margin: auto;
  }

  .radio-label {
    display: flex;
    align-items: center;
    padding: 10px;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }

  .radio-input {
    margin-right: 10px;
  }

  .radio-label:hover {
    background-color: #e0e0e0;
  }

  .radio-input:checked + span {
    font-weight: bold;
    color: #007bff;
  }
</style>
