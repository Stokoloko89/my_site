<script>
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	let ready = false;
	onMount(() => (ready = true));
</script>

<nav>
	{#if ready}
		<div
			class="container"
			in:fly={{ x: -50, duration: 800, delay: 800 }}
			out:fly={{ duration: 500 }}
		>
			<a href="/" title="Home" class="logo">Home</a>
			<ul class="nav-links">
				<li><a href="/about" title="About">About</a></li>
				<li><a href="/myprojects" title="Projects">Projects</a></li>
				<li><a href="/contact" title="Contact">Contact</a></li>
			</ul>
		</div>
	{/if}
</nav>

<style>
	.container {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		margin: 40px 150px;
		height: 150px;
	}

	.logo {
		font-style: normal;
		font-weight: 400;
		font-size: 32px;
		line-height: 59px;
		color: rgba(48, 62, 65, 0.976471);
		width: 130px;
		height: 60px;
		left: 0px;
		top: 20px;
		text-decoration: none;
		z-index: 1;
	}

	.nav-links {
		display: flex;
		list-style: none;
		gap: 29px;
	}
	.nav-links a {
		text-decoration: none;
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 400;
		font-size: 18px;
		line-height: 29px;
		color: rgba(48, 62, 65, 0.976471);
		letter-spacing: 0.1em;
		transition: text-shadow 0.3s;
	}

	.nav-links a:hover {
		text-shadow: 0 0 0.7px #333, 0 0 0.65px #333;
	}

	@media screen and (max-width: 720px) {
		.container {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;
			margin: 30px 64px 0px 64px;
			height: 120px;
		}

		.logo {
			font-style: normal;
			font-weight: 400;
			font-size: 28px;
			line-height: 32px;
			color: rgba(48, 62, 65, 0.976471);
			width: 100px;
			height: 50px;
			left: 0px;
			top: 20px;
			text-decoration: none;
			z-index: 1;
		}

		.nav-links {
			display: flex;
			list-style: none;
			gap: 18px;
		}
		.nav-links a {
			text-decoration: none;
			font-family: 'Montserrat';
			font-style: normal;
			font-weight: 400;
			font-size: 18px;
			line-height: 29px;
			color: rgba(48, 62, 65, 0.976471);
			letter-spacing: 0.1em;
			transition: text-shadow 0.3s;
		}

		.nav-links a:hover {
			text-shadow: 0 0 0.7px #333, 0 0 0.65px #333;
		}
	}
</style>
