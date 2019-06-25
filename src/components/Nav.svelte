<script>
  import initI18n from "../initI18n";
  import { stores } from "@sapper/app";

  const { page } = stores();
  $: lang = $page.params.lang;
  $: path = $page.path;
  $: i18n = initI18n(lang);

  $: pathWithoutLang = $page.path
    .split("/")
    .slice(2)
    .join("/");
</script>

<style>
  nav {
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
    font-weight: 300;
    padding: 0 1em;
    display: flex;
  }

  ul {
    margin: 0;
    padding: 0;
    margin-right: 32px;
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  .selected {
    position: relative;
    display: inline-block;
  }

  .selected::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: rgb(255, 62, 0);
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }
</style>

<nav>
  <ul>
    <li>
      <a class={path === `/${lang}` ? 'selected' : ''} href={lang}>
         {i18n.t('nav:home')}
      </a>
    </li>
    <li>
      <a
        class={path === `/${lang}/about` ? 'selected' : ''}
        href="{lang}/about">
         {i18n.t('nav:about')}
      </a>
    </li>
  </ul>

  <ul>
    <li>
      <a class={lang === 'en' ? 'selected' : ''} href={`en/${pathWithoutLang}`}>
        En
      </a>
    </li>
    <li>
      <a class={lang === 'ru' ? 'selected' : ''} href={`ru/${pathWithoutLang}`}>
        Ru
      </a>
    </li>
  </ul>
</nav>
