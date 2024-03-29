<script lang="ts">
    import ActionBar from "./ui/ActionBar.svelte";
import Dropbox from "./ui/Dropbox.svelte";


</script>

<div id="app" class="w-screen h-screen flex flex-col">
  <header class="p-3">
    Solo Cypher
    <Dropbox/>
  </header>

  <main class="flex-grow flex gap-3 p-3">
    <section id="actions" class="w-60">
      <ActionBar/>
    </section>
    <section id="story" class="flex-grow flex flex-col">
      <section id="status">
        Adventure Status
      </section>
      <section id="log" class="flex-grow overflow-y-scroll">
        Story Log
      </section>
      <section id="input">
        User Input
      </section>
    </section>
    <section id="information" class="w-80">
      <section id="character" class="overflow-y-scroll">
        Character Information
      </section>
    </section>
  </main>

  <footer class="text-xs text-center w-11/12 mx-auto p-3">
    <p>This product is an independent production and is not affiliated with Monte Cook Games, LLC. It is published under the Cypher System Open License, found at <a href="http://csol.montecookgames.com">http://csol.montecookgames.com/</a>.</p>

    <p>CYPHER SYSTEM and its logo are trademarks of Monte Cook Games, LLC in the U.S.A. and other countries. All Monte Cook Games characters and character names, and the distinctive likenesses thereof, are trademarks of Monte Cook Games, LLC.</p>
  </footer>
</div>