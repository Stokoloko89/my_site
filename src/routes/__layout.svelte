<script>
	import Nav from '../components/Nav.svelte';
	import global from '../../src/global.css';
	import Footer from '../components/Footer.svelte';
</script>

<svelte:head>
	<title>Lunga.</title>
</svelte:head>

<Nav />
<slot />

<Footer />