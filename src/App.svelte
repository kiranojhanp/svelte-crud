<script>
  import Navbar from "./Navbar.svelte";
  import Person from "./Person.svelte";
  import AddPlayer from "./AddPlayer.svelte";

  import { peopleData } from "./DATA";

  var people = localStorage.getItem("peopleList")
    ? JSON.parse(localStorage.getItem("peopleList"))
    : peopleData;

  const addPerson = (e) => {
    const { detail } = e;
    people = [...people, detail];
    localStorage.setItem("peopleList", JSON.stringify(people));
  };

  const updatePerson = (e) => {
    const { detail } = e;
    const index = people.findIndex((person) => person.id === detail.id);
    people[index] = detail;
    localStorage.setItem("peopleList", JSON.stringify(people));
  };

  const removePerson = (e) => {
    const { detail } = e;
    const newPeople = people.filter((person) => person.id !== detail);
    localStorage.setItem("peopleList", JSON.stringify(newPeople));
  };
</script>

<!-- markup -->
<Navbar />
<div class="container">
  <AddPlayer on:addPerson={addPerson} />
  {#if people.length !== 0}
    {#each people as person}
      <Person
        on:updatePerson={updatePerson}
        on:removePerson={removePerson}
        id={person.id}
        name={person.name}
        age={person.age}
      />
    {/each}
  {:else}
    <h1>No Person found</h1>
  {/if}
</div>
