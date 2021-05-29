<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  let person = {
    id: Math.random().toString(36).substring(7),
    name: "",
    age: 0,
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch("addPerson", person);
    person = {
      id: Math.random().toString(36).substring(7),
      name: "",
      age: 0,
    };
  };
</script>

<form on:submit={onSubmit} class="grid-3">
  <input type="text" placeholder="Enter Name" bind:value={person.name} />
  <input type="number" placeholder="Enter Age" bind:value={person.age} />
  <input
    type="submit"
    on:click={onSubmit}
    class="btn btn-primary"
    value="Add Person"
  />
</form>
