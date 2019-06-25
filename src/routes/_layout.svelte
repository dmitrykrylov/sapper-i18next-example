<script context="module">
  export async function preload(page) {
    const DEFAULT_LANGUAGE = "en";

    if (page.path === "/") {
      return this.redirect(302, `/${DEFAULT_LANGUAGE}`);
    }

    return {};
  }
</script>

<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<style>
  main {
    position: relative;
    max-width: 56em;
    background-color: white;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

<Nav {segment} />

<main>
  <slot />
</main>
