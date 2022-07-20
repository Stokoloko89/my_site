<script>
	import MainRoles from '../components/Main_Roles.svelte';
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { afterUpdate } from 'svelte';

	afterUpdate(() => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	});

	let ready = false;
	onMount(() => (ready = true));
</script>

<MainRoles />

{#if ready}
	<div class="roles" in:fly={{ y: 50, duration: 1200, delay: 2000 }} out:fly={{ duration: 500 }}>
		<p>Front end developer<br /> UI / UX designer</p>
	</div>
{/if}

<style>
	.roles {
		font-family: 'Montserrat';
		font-size: 72px;
		line-height: 150%;
		text-align: center;
		letter-spacing: 0.1em;
		color: #303e4112;
		position: relative;
		z-index: -3;
		top: -1037px;
		right: -460px;
	}

	@media screen and (max-width: 385px) {
		.roles {
			font-family: 'Montserrat';
			font-size: 58px;
			line-height: 150%;
			letter-spacing: 0.1em;
			color: #303e4112;
			position: relative;
			z-index: -3;
			top: -134px;
			right: -137px;
			overflow: clip;
		}
	}
</style>