<script>
	import { onMount } from "svelte";
	import { api, data } from './helpers/store.js';
	
	onMount(async () => {
	  fetch("api/posts")
	  .then(response => response.json())
	  .then(data => {
	    api.set(data);
	  }).catch(error => {
	    console.log(error);
	    return [];
	  });
	});
</script>

<main>
	<h1>Posts</h1>
	<ul>
	{#each $data as {title, description}}
		<li><b>{title}</b> - {description}</li>
	{/each}
	</ul>
</main>