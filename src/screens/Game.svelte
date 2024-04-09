<script lang="ts">
import { createId } from "../functions";
import { game, games, screen } from "../stores";
import NewCharacter from './partials/NewCharacter.svelte';

$: name = '';
$: characters = [];

let open = false;

$: disabled = !(name !== '' && characters.length === 0) ? true: undefined;

function createGame() {
  $game.id = createId(16);
  $game.name = name;
  $game.created = Date.now();
  $game.characters = [...characters];

  $games.push($game);
  $screen = 'session';

}

function createCharacter() {
  open = true;
}

function addCharacter(e: CustomEvent) {
  characters.push(e.detail.character);
  open = false;
}

</script>

<div id="new-game" class="flex flex-col">
  <h1>New Game</h1>
  <label>
    <span class="label">Game Name</span>
    <input type="text" bind:value={name}/>
  </label>

  <div class="mb-3">
    <strong>Characters</strong>
    <ul class="list-disc list-inside mb-3">
      {#each characters as character}
        <li>{character.name}</li>
        {:else}
        <li>No Characters</li>
      {/each}
    </ul>
    <button on:click={createCharacter}>Create Character</button>
    {#if open}
      <NewCharacter on:character-created={addCharacter}/>
    {/if}
  </div>

  <div>
    <button on:click={createGame} {disabled}>Create Game</button>
  </div>
 
</div>