<script>
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { disableScrollHandling } from '$app/navigation';
	onMount(async () => {
		disableScrollHandling();
	});
</script>

<div class="container">
	<div class="coming_soon_flyer">
		<h3 in:fly={{ x: 50, duration: 1200, delay: 2000 }} out:fly={{ duration: 500 }}>
			Coming soon...
		</h3>

		<h3 in:fly={{ y: 50, duration: 1200, delay: 3200 }} out:fly={{ duration: 500 }}>
			.. so Watch this space!
		</h3>
	</div>
	<a
		in:fly={{ y: 50, duration: 1200, delay: 4200 }}
		out:fly={{ duration: 500 }}
		href="/contact"
		class="about"
	>
		<p>Contact me</p>
	</a>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 72vh;
		gap: 24px;
		margin-bottom: 120px;
	}
	.coming_soon_flyer {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	h3 {
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 500;
		font-size: 32px;
		line-height: 150%;
		/* or 48px */

		text-align: center;
		letter-spacing: 0.1em;

		color: #303e41;
	}
	.about {
		display: flex;
		justify-content: center;
		width: 250px;
		height: 51px;
		box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.1);

		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 600;
		font-size: 18px;
		line-height: 150%;
		/* identical to box height, or 36px */

		text-align: center;
		letter-spacing: 0.1em;

		color: #303e41;
		text-decoration: none;
		transition: background 0.3s ease-in;
	}
	.about p {
		align-self: center;
	}

	.about:hover {
		width: 250px;
		height: 51px;
		/* border-radius: 0px; */
		background: #98a5a8;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
	}
</style>
