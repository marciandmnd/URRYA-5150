<script context="module">
	export async function preload({ params, query }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`projects/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { project: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	import { onMount } from 'svelte';
	import AudioPlayer from '../../components/AudioPlayer.svelte';
	export let project;
	let player, current = {};

	const	playTrack = async (track) => {
		current = track;

		if(!player.autoplay) player.autoplay = true;
		player.play();
	}

	onMount(() => {
		current = project.tracks[0];
		player = document.querySelector('audio');
	})
		
</script>

<style>
	/*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{project.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/
	.content :global(h2) {
		font-size: 1.4em;
		font-weight: 500;
	}

	.content :global(pre) {
		background-color: #f9f9f9;
		box-shadow: inset 1px 1px 5px rgba(0,0,0,0.05);
		padding: 0.5em;
		border-radius: 2px;
		overflow-x: auto;
	}

	.content :global(pre) :global(code) {
		background-color: transparent;
		padding: 0;
	}

	.content :global(ul) {
		line-height: 1.5;
	}

	.content :global(li) {
		margin: 0 0 0.5em 0;
	}
 	.content :global(.play-btn) {
    visibility: hidden;
	}

	.content li {
		width: fit-content; 
	}
    
	.content :global(.track:hover .play-btn) {
		visibility: visible;
	}

	.pointer {
		cursor: pointer;
	}

	.content {
		padding: 1em 0em;
	}
</style>

<svelte:head>
	<title>{project.title}</title>
</svelte:head>
<a href='/projects'>&lt;---</a>

<div style="text-align: center;">
	<h1 style="font-size: 3em;">{project.title}</h1>
	{#if project.slug == "5150d"}
		<img style='max-width: 100%;' src="{project.slug}.jpg"/>
	{/if}
</div>

<div class='content'>
	{@html project.html}
	<AudioPlayer src={current.objectUrl} title={current.title}/>
	<ol>
	{#each project.tracks as track}
			<li class="track pointer" on:click={playTrack(track)}>{track.title}&nbsp; 
				<span class='play-btn'>▶️</span>
			</li>
	{/each}
	</ol>

</div>
