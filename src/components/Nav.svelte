<script>
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	let ready = false;
	onMount(() => (ready = true));
</script>

<nav>
	{#if ready}
		<div
			class="flex flex-col sm:flex-row sm:justify-between items-center sm:items-baseline px-8 py-5 "
			in:fly={{ x: -50, duration: 800, delay: 800 }}
			out:fly={{ duration: 500 }}
		>
			<a
				href="/"
				title="Home"
				class="text-3xl text-center leading-59 text-gray-800 hover:text-gray-900 focus:text-gray-900 w-32 h-14 top-4 no-underline"
				>Home</a
			>
			<ul class="flex list-none gap-4">
				<li>
					<a
						href="/about"
						class="text-gray-800 font-normal font-montserrat text-xl leading-5 tracking-wider transition duration-300 hover:text-blue-500 hover:text-shadow-md hover:text-shadow-sm"
						>About</a
					>
				</li>
				<li>
					<a
						href="/myprojects"
						title="Projects"
						class="text-gray-800 font-normal font-montserrat text-xl leading-5 tracking-wider transition duration-300 hover:text-blue-500 hover:text-shadow-md hover:text-shadow-sm"
						>Projects</a
					>
				</li>
				<li>
					<a
						href="https://www.linkedin.com/in/lunga-qaba-b19325236"
						title="Contact"
						class="text-gray-800 font-normal font-montserrat text-xl leading-5 tracking-wider transition duration-300 hover:text-blue-500 hover:text-shadow-md hover:text-shadow-sm"
						>Contact</a
					>
				</li>
			</ul>
		</div>
	{/if}
</nav>
