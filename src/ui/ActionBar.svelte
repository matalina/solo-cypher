<script lang="ts">
import { screen } from "../stores";

function newGame() {
  $screen = 'game';
}
function continueGame() {}

function newSession() {}
function loadSession() {}
function saveSession() {}

function askOracle() {}
function taskCheck() {}

function randomDungeon() {
  
}
</script>

<div class="actions">
  <button on:click={newGame}>New Game</button>
  <button on:click={continueGame}>Continue Game</button>
  <hr/>
  <button on:click={newSession}>New Session</button>
  <button on:click={loadSession}>Load Session</button>
  <button on:click={saveSession}>Save Session</button>
  <hr/>
  <button on:click={askOracle}>Ask Oracle</button>
  <button on:click={taskCheck}>Task Check</button>
  <hr/>
</div>
<!--Like to have Features
  <button on:click={randomDungeon}>Random Dungeon</button>
Roll NPC
Roll Encounter/Creature
Roll Dungeon
AI Questions
-->

<style lang="postcss">
   button {
    @apply mb-2 w-full;
  }
</style>