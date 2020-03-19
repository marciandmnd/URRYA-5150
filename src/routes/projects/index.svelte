<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`projects.json`).then(r => r.json()).then(projects => {
			return { projects };
		});
	}
</script>

<script>
	export let projects;
</script>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}
	.projects {
		border: 1px black solid;
		padding: 8px;
	}
</style>

<svelte:head>
	<title>Projects</title>
</svelte:head>

<h1>Projects</h1>
<hr/>
<div class="projects">
<h2>Notorious Boris</h2>
<ul>
	{#each projects as project}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
    <div>
		<a rel='prefetch' href='projects/{project.slug}'>{project.title}</a>
  </div>
	{/each}
</ul>
</div>
<div class="projects">
<h2>Urry Yuri</h2>
<ul>
	<p>Got'eem (Under construction)</p>
</ul>
</div>