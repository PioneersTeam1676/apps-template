<script>
	let title = "";
	let description = "";
	let published = false;
	let result = null;
	
	async function NewPost() {
		const res = await fetch('api/posts', {
			method: 'POST',
			body: JSON.stringify({
				title,
				description,
				published
			}),
 			headers: {
			  "content-type": "application/json"
			}
		})
		
		const json = await res.json()
		result = JSON.stringify(json)
	}
</script>

<main>
	<h1>NewPost</h1>
	<input type="text" bind:value={title} />
	<input type="text" bind:value={description} />
	<input type="checkbox" bind:value={published} />
	<button type="button" on:click={NewPost}>
		POST DATA
	</button>
	<p>
		Result:
	</p>
	<pre>
		{result}
	</pre>
</main>