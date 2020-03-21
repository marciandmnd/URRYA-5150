<script>
	import Nav from '../components/Nav.svelte';
	import GA from '../components/GA.svelte';

	export let segment;
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 5em auto;
		border-radius: 8px;
		box-sizing: border-box;
	}
</style>
<GA/>
<Nav {segment}/>

<main>
	<slot></slot>
</main>