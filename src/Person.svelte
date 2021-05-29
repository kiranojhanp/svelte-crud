<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let id;
  export let name;
  export let age;
  let showControls = false;

  const addAge = () => {
    ++age;
  };

  const removeAge = () => {
    --age;
  };

  const toggleControls = () => {
    showControls = !showControls;
  };

  const updatePerson = (e) => {
    e.preventDefault();
    dispatch("updatePerson", { id, name, age });
    showControls = false;
  };

  const deletePerson = (e) => {
    e.preventDefault();
    dispatch("removePerson", id);
  };
</script>

<div class="card">
  <div class="row">
    <h1>
      {name}
    </h1>

    <button class="btn btn-sm btn-dark" on:click={toggleControls}>
      {#if showControls} HIDE {:else} EDIT {/if}
    </button>
    <button class="btn btn-sm btn-danger" on:click={deletePerson}>
      DELETE
    </button>
  </div>

  <h3>Age: {age}</h3>
  {#if showControls}
    <hr />
    <div>
      <button class="btn" on:click={addAge}>+1 Age</button>
      <button class="btn btn-dark" on:click={removeAge}>-1 Age</button>
    </div>

    <input id="new-name" type="text" bind:value={name} />

    <button class="btn btn-primary" on:click={updatePerson}>UPDATE</button>
  {/if}
</div>

<style>
  h1 {
    color: #204f6e;
  }

  h3 {
    margin-bottom: 10px;
  }

  .row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  hr {
    margin-bottom: 10px;
  }
</style>
