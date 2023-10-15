<!-- Fonts -->
<link
rel="stylesheet"
href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>
<link
rel="stylesheet"
href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700"
/>

<!-- Material Typography -->
<link
rel="stylesheet"
href="https://unpkg.com/@material/typography@14.0.0/dist/mdc.typography.css"
/>

<!-- SMUI -->
<link rel="stylesheet" href="https://unpkg.com/svelte-material-ui/bare.css" />

<script lang="ts">
	import svelteLogo from './assets/svelte.svg';
	import viteLogo from '/vite.svg';
	import Counter from './libs/Counter.svelte';
	import Tabbar from './libs/Tabbar.svelte';
</script>


<main>
	<div>
		<Tabbar/>
	</div>
</main>
