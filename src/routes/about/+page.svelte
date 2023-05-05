<script>
	import { fly, fade } from 'svelte/transition';
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

<div
	class="flex flex-col flex-wrap sm:grid grid-cols-2 mx-auto font-montserrat font-medium text-xs leading-6 tracking-wider text-gray-800 gap-8"
	in:fade={{ duration: 1200, delay: 1200 }}
	out:fade={{ duration: 500 }}
>
	<div class="w-96 mx-auto col-span-1 px-2 text-[13px] max-w-xs text-justify sm:max-w-none">
		<p>
			I’m Lunga, and thank you for visiting this site. As a front end developer I specialise in
			leveraging the power of technology to connect people, businesses & artists with their
			audience. I’ve been in sales & customer service for over 10 years. <br /> This has helped me to
			appreciate & understand the contact points between the seller & the buyer. Get intouch with me
			to discuss solutions that will optimise your conversion funnel to produce improved results for
			your business.
		</p>
		<br />
		<p>
			I also possess strong data analysis skills, which allows me to identify key performance
			indicators and optimize conversion funnels for businesses to achieve improved results.
		</p>
		<br />
		<p>
			I would be delighted to discuss with you how my expertise can benefit your business and help
			you achieve your goals. Please feel free to contact me at your convenience to arrange a
			consultation.
		</p>
	</div>

	<img
		class="col-span-1 w-72 sm:w-96 mt-6 ml-4 sm:mt-[30%]"
		src="images/dev_languages.png"
		alt="A list of programming languages that I am competent in"
		in:fade={{ duration: 1400, delay: 1400 }}
		out:fade={{ duration: 500 }}
	/>
	<a
		href="https://www.linkedin.com/in/lunga-qaba-b19325236"
		class="col-span-2 flex items-center justify-center w-48 h-10 mx-auto my-8 font-montserrat font-semibold text-lg leading-6 text-white transition duration-300 bg-gray-700 border border-gray-700 shadow-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
	>
		<p class="self-center">Contact me</p>
	</a>
</div>
