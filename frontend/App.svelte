<script>
	import Router, {location, link} from 'svelte-spa-router';
	import Posts from './views/Posts.svelte';
	import NewPost from './views/NewPost.svelte';
</script>

<nav>
	<a  href="/">Posts</a>
	<a href="/#/new">NewPost</a>
</nav>

<Router routes={{
	'/': Posts,
	'/new': NewPost
}} />