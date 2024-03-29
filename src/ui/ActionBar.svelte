<script lang="ts">
function newGame() {
  //create dropbox folder for game sessions
  //create game store
}
function continueGame() {}

function newSession() {}
function loadSession() {}
function saveSession() {}

function askOracle() {}
function taskCheck() {}
</script>

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
<!--Like to have Features
Roll NPC
Roll Encounter/Creature
Roll Dungeon
AI Questions
-->

<style lang="postcss">
  button {
    @apply block;
  }
</style>