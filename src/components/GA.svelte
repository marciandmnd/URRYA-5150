<script>
  import { stores } from '@sapper/app';
  const { page } = stores();
  $: {
    if (typeof gtag !== "undefined"){
      gtag("config", "UA-97008523-6", {
        page_path: $page.path
      });
    }
  }
</script>