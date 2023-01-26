<script>
	import Nav from '../components/Nav.svelte';
	import global from '../../src/global.css';
	import Footer from '../components/Footer.svelte';
</script>

<svelte:head>
	<title>Lunga.</title>
	<meta
		name="description"
		content="My name is Lunga Qaba. I am a front end developer and UI / UX designer."
	/>
</svelte:head>

<Nav />
<slot />

<Footer />
