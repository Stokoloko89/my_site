<script>
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { afterUpdate } from 'svelte';
	import { disableScrollHandling } from '$app/navigation';

	afterUpdate(() => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	});

	let ready = false;
	onMount(() => (ready = true));
	onMount(async () => {
		disableScrollHandling();
	});
</script>

<section>
	{#if ready}
		<div class="logo_roles">
			<div
				class="container"
				in:fly={{ y: 50, duration: 1200, delay: 1200 }}
				out:fly={{ duration: 500 }}
			>
				<h3>Lunga Qaba</h3>
				<div
					class="roles"
					in:fly={{ y: 50, duration: 1200, delay: 2000 }}
					out:fly={{ duration: 500 }}
				>
					<p>Front end developer<br /> UI / UX designer</p>
				</div>
				<a
					in:fly={{ y: 50, duration: 1200, delay: 2000 }}
					out:fly={{ duration: 500 }}
					href="/about"
					class="about"
				>
					<p>Learn more</p>
				</a>
			</div>
			<div class="bg-img" in:fly={{ y: 50, duration: 800, delay: 800 }} out:fly={{ duration: 500 }}>
				<img src="/images/mainBg.svg" alt="company logo" />
			</div>
		</div>
	{/if}
</section>

<style>
	.container {
		display: flex;
		flex-direction: column;
		width: 50%;
		gap: 12px;
		align-items: center;
		padding-top: 220px;
	}

	.container h3 {
		font-size: 34px;
		font-style: normal;
		font-weight: 500;
		font-size: 36px;
		line-height: 150%;
		letter-spacing: 0.2em;
		margin-bottom: 8px;
	}

	.roles {
		display: flex;
		justify-content: center;
		align-items: center;

		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 500;
		font-size: 26px;
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
	.bg-img {
		height: 650px;
		position: absolute;
		width: 800px;
		top: 150px;
		left: 361px;
		z-index: -2;
	}

	img {
		max-width: 100%;
		max-height: 100%;
	}

	@media screen and (max-width: 820px) {
		.container {
			display: flex;
			flex-direction: column;
			min-height: 456px;
			width: 100%;
			align-items: center;
			padding-top: 220px;
		}

		.container h3 {
			font-size: 24px;
			font-style: normal;
			font-weight: 500;
			font-size: 42px;
			line-height: 130%;
			letter-spacing: 0.2em;
			margin-bottom: 8px;
		}

		.roles {
			display: flex;
			justify-content: center;
			align-items: center;

			font-family: 'Montserrat';
			font-style: normal;
			font-weight: 500;
			font-size: 28px;
			line-height: 150%;
			/* or 48px */

			text-align: center;
			letter-spacing: 0.1em;

			color: #303e41;
		}

		.about {
			display: flex;
			justify-content: center;
			width: 220px;
			height: 45px;
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
			width: 220px;
			height: 45px;
			/* border-radius: 0px; */
			background: #98a5a8;
			box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
		}

		@media screen and (max-width: 720px) {
			.container h3 {
				font-size: 36px;
				font-style: normal;
				font-weight: 500;
				line-height: 130%;
				letter-spacing: 0.2em;
				margin-bottom: 8px;
			}

			.roles {
				display: flex;
				justify-content: center;
				align-items: center;

				font-family: 'Montserrat';
				font-style: normal;
				font-weight: 500;
				font-size: 26px;
				line-height: 150%;
				/* or 48px */

				text-align: center;
				letter-spacing: 0.1em;

				color: #303e41;
			}

			.about {
				display: flex;
				justify-content: center;
				width: 210px;
				height: 42px;
				box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.1);

				font-family: 'Montserrat';
				font-style: normal;
				font-weight: 600;
				font-size: 20px;
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
				width: 210px;
				height: 42px;
				/* border-radius: 0px; */
				background: #98a5a8;
				box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
			}
		}

		@media screen and (max-width: 820px) {
			.bg-img {
				display: none;
			}
		}
	}

	@media screen and (max-width: 520px) {
		.container h3 {
			font-size: 24px;
			font-style: normal;
			font-weight: 500;
			font-size: 32px;
			line-height: 130%;
			letter-spacing: 0.2em;
			margin-bottom: 8px;
			text-align: center;
		}

		.roles {
			display: flex;
			justify-content: center;
			align-items: center;

			font-family: 'Montserrat';
			font-style: normal;
			font-weight: 500;
			font-size: 24px;
			line-height: 150%;
			/* or 48px */

			text-align: center;
			letter-spacing: 0.1em;

			color: #303e41;
		}

		.about {
			display: flex;
			justify-content: center;
			width: 200px;
			height: 38px;
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
			width: 200px;
			height: 38px;
			/* border-radius: 0px; */
			background: #98a5a8;
			box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
		}
	}
</style>
