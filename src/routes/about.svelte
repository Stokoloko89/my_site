<script>
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

<div
	class="image-description"
	in:fly={{ x: -50, duration: 1200, delay: 1200 }}
	out:fly={{ duration: 500 }}
>
	<img src="/images/lunga_image.png" alt="" />

	<div class="description">
		<div class="content">
			<p>I’m Lunga, and thank you for visiting this site.</p>
			<br />
			<p>
				I love technology! As a front end developer I specialise in leveraging the power of
				technology to connect people, businesses & artists with their audience.
			</p>
			<br />
			<p>
				I’ve been in sales & customer service for over 10 years. This has helped me to appreciate &
				understand the contact points between the seller & the buyer.
			</p>
			<br />
			<p>
				Get intouch with me to discuss solutions that will optimise your conversion funnel to
				produce improved results for your business.
			</p>
		</div>
		<a href="/contact" class="contact-me">
			<p>Contact me</p>
		</a>
	</div>
</div>

<img
	class="dev_lang"
	src="images/dev_languages.png"
	alt="A list of programming languages that I am competent in"
	in:fly={{ x: -50, duration: 1400, delay: 1400 }}
	out:fly={{ duration: 500 }}
/>

<style>
	.image-description {
		display: flex;
		justify-content: center;
		height: 371.76px;
		gap: 64px;
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 500;
		font-size: 16px;
		line-height: 140%;
		margin: 32px 64px;
		/* or 30px */

		letter-spacing: 0.1em;

		color: #081b1f;
	}

	.image-description img {
		object-fit: scale-down;
	}

	.description a {
		display: flex;
		flex-direction: column;
	}

	.description {
		max-width: 500px;
	}

	.contact-me {
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
		margin-top: 16px;
		z-index: 1.2;
	}

	.contact-me p {
		align-self: center;
	}

	.contact-me:hover {
		width: 250px;
		height: 51px;
		/* border-radius: 0px; */
		background: #98a5a8;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
	}

	.dev_lang {
		/* position: absolute; */
		width: 459.31px;
		height: 212px;
		margin-left: 200px;
		top: 481px;
		z-index: -1;
		object-fit: scale-down;
		margin-bottom: 120px;
	}

	@media screen and (max-width: 1000px) {
		.image-description {
			display: flex;
			flex-direction: column;
			justify-content: center;
			height: 1020.76px;
			font-family: 'Montserrat';
			font-style: normal;
			font-weight: 500;
			font-size: 18px;
			line-height: 150%;
			margin: 32px 64px;
			/* or 30px */

			letter-spacing: 0.1em;
			max-width: 400px;

			color: #081b1f;
		}

		.description a {
			display: flex;
			flex-direction: column;
		}

		.description {
			max-width: 400px;
		}

		.contact-me {
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
			margin-top: 16px;
			z-index: 1.2;
		}

		.contact-me p {
			align-self: center;
		}

		.contact-me:hover {
			width: 250px;
			height: 51px;
			/* border-radius: 0px; */
			background: #98a5a8;
			box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
		}

		.dev_lang {
			/* position: absolute; */
			display: none;
			width: 459.31px;
			height: 212px;
			margin-left: 64px;
			z-index: -1;
			object-fit: scale-down;
			margin-bottom: 120px;
		}
	}
</style>