<script>
	import { fade, fly } from 'svelte/transition';
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

<section class="flex flex-col justify-center text-center text-4xl mt-auto font-normal">
	{#if ready}
		<div>
			<div
				in:fade={{ duration: 800, delay: 1200 }}
				out:fade={{ duration: 500 }}
				class="flex flex-col items-center my-auto space-y-6"
			>
				<h3>Lunga Qaba</h3><br>
				<div
					class="roles"
					in:fade={{ duration: 900, delay: 2000 }}
					out:fade={{ duration: 500 }}
				>
					<p class="font-light">Front end developer</p><br>
					<p class="font-light">Data analysis</p>
				</div>
				<a
					in:fade={{ duration: 900, delay: 2000 }}
					out:fade={{ duration: 500 }}
					href="/about"
					class="about"
				>
					<p
						class="flex items-center justify-center w-48 h-10 mx-auto mt-4 font-montserrat font-semibold text-lg leading-6 text-white transition duration-300 bg-gray-700 border border-gray-700 shadow-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
						>
						Learn more
					</p>
				</a>
			</div>
		</div>
		<!-- <div in:fade={{ duration: 1400, delay: 1000 }} out:fly={{ duration: 500 }}>
			<img src="/images/mainBg.svg" alt="company logo" class="-z-10 absolute top-[15.75rem] w-96" />
		</div> -->
	{/if}
</section>
