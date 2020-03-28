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
		margin: 1em;
		border-radius: 8px;
		box-shadow: 4px 8px 8px rgba(0,0,255,.2);
	}
</style>

<svelte:head>
	<title>Projects</title>
</svelte:head>

<h1>JECTS</h1>
<hr/>

<div class="projects">
<h1>URRY YURI</h1>
<h2 style='color: orange; padding-left: 8px;'>GOT'EEM</h2>
</div>

<div class="projects">
<h1>NOTORIOUS BORIS</h1>
<ul>
	{#each projects as project}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<h2>
		<a rel='prefetch' href='projects/{project.slug}'>
			{project.title}
		</a>
		</h2>
	{/each}
</ul>
</div>

