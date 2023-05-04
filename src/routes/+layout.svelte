<script>
	import Nav from '../components/Nav.svelte';
	import '../app.css';
	import Footer from '../components/Footer.svelte';
</script>

<svelte:head>
	<title>Lunga.</title>
	<meta
		name="description"
		content="My name is Lunga Qaba. I am a front end developer and UI / UX designer."
	/>
</svelte:head>

<div class="flex flex-col h-screen max-w-5xl mx-auto">
	<Nav />
	<slot />
	<Footer />
</div>
