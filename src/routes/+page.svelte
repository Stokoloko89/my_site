<script>
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { afterUpdate } from 'svelte';
	import MainRoles from '../components/Main_Roles.svelte';


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

<!-- {#if ready}
	<div
		class="font-montserrat text-6xl leading-150 text-center tracking-wider text-gray-500 relative z-0 top-[-1037px] right-[-460px] md:text-4xl md:top-[-860px] md:right-[-137px] md:overflow-clip"
		in:fly={{ y: 50, duration: 1200, delay: 2000 }}
		out:fly={{ duration: 500 }}
	>
	</div>
{/if} -->
