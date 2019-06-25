<script>
  import initI18n from "../../initI18n";
  import { stores } from "@sapper/app";

  const { page } = stores();
  $: i18n = initI18n($page.params.lang);
</script>

<svelte:head>
  <title>{i18n.t('about:title')}</title>
</svelte:head>

<h1>{i18n.t('about:h1')}</h1>

<p>{i18n.t('about:text')}</p>
