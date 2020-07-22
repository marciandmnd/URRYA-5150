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
		margin: 0px auto;
		background-color:#fff;
		display:grid;
		grid-template-columns: 250px 250px;
		grid-row: auto auto;
		grid-column-gap: 20px;
		grid-row-gap: 20px;
		width: 500px;
	}

	.project {
		background-color:#333;
    color:#fff;
    display:flex;
    align-items:center;
    justify-content:center;
    font-family:sans-serif;
	}
</style>

<svelte:head>
	<title>Projects</title>
</svelte:head>

<div class="projects">
	{#each projects as project}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<div class="project">
			<!-- <a rel='prefetch' href='projects/{project.slug}'>
				{project.title}
			</a> -->
			<a rel='prefetch' href='projects/{project.slug}'>
				<img style="width: 250px; max-width: 100%" alt="{project.title}" src="{project.cover}" />
			</a>
		</div>
	{/each}
</div>

