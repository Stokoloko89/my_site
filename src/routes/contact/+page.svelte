<script>
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { afterUpdate } from 'svelte';
	import { disableScrollHandling } from '$app/navigation';
	import { createNewMessage } from '../../lib/messages';

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

	let messageSent = false;

	/**
	 * @type {string}
	 */
	let name;
	/**
	 * @type {string}
	 */
	let email;
	/**
	 */

	function submitedForm() {
		createNewMessage({ name, email });

		name = '';
		email = '';
		messageSent = true;
		setTimeout(() => {
			messageSent = false;
		}, 5000);

		clearTimeout(5000);
	}
</script>

<div class="form-contact">
	<form
		on:submit|preventDefault={submitedForm}
		class="contact-form"
		in:fly={{ x: -50, duration: 1200, delay: 1200 }}
		out:fly={{ duration: 500 }}
	>
		<h3>Get in touch</h3>
		<div class="text-inputs">
			<label for="name"
				>name
				<input type="text" name="name" id="name" bind:value={name} minlength="3" required />
			</label>
		</div>
		<div class="text-inputs">
			<label for="email"
				>email
				<input type="email" name="email" id="email" bind:value={email} required />
			</label>
		</div>
		{#if messageSent}
			<input type="submit" class="send-message" value="Message sent!!" />
		{:else}
			<input type="submit" class="send-message" value="Send message" />
		{/if}
	</form>

	<div
		class="contact-platforms"
		in:fly={{ x: -50, duration: 1400, delay: 1400 }}
		out:fly={{ duration: 500 }}
	>
		<div class="social">
			<a
				href="https://github.com/Stokoloko89"
				title="Github"
				target="_blank"
				rel="noopener noreferrer"
			>
				<svg
					width="64"
					height="64"
					viewBox="0 0 85 85"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clip-path="url(#clip0_41_129)">
						<path
							d="M42.8792 0.213745C19.6133 0.213745 0.769043 19.058 0.769043 42.3239C0.769043 60.9576 12.8231 76.6963 29.5619 82.2759C31.6674 82.6444 32.4569 81.3811 32.4569 80.2757C32.4569 79.2756 32.4043 75.9594 32.4043 72.4327C21.8241 74.3803 19.087 69.8534 18.2448 67.4847C17.771 66.2741 15.7181 62.5368 13.9285 61.5367C12.4546 60.7471 10.3491 58.7995 13.8758 58.7469C17.192 58.6942 19.5607 61.7998 20.3503 63.0632C24.1402 69.4323 30.1935 67.6426 32.6149 66.5372C32.9833 63.8001 34.0887 61.9578 35.2994 60.905C25.9299 59.8523 16.1393 56.2203 16.1393 40.1131C16.1393 35.5336 17.771 31.7437 20.4555 28.796C20.0344 27.7433 18.5606 23.427 20.8766 17.6368C20.8766 17.6368 24.4034 16.5314 32.4569 21.9531C35.8257 21.0056 39.4051 20.5319 42.9845 20.5319C46.5638 20.5319 50.1432 21.0056 53.512 21.9531C61.5656 16.4788 65.0923 17.6368 65.0923 17.6368C67.4084 23.427 65.9345 27.7433 65.5134 28.796C68.1979 31.7437 69.8297 35.481 69.8297 40.1131C69.8297 56.2729 59.9865 59.8523 50.6169 60.905C52.1434 62.221 53.4594 64.7476 53.4594 68.6954C53.4594 74.3276 53.4067 78.8545 53.4067 80.2757C53.4067 81.3811 54.1963 82.697 56.3018 82.2759C64.6619 79.4545 71.9265 74.082 77.0728 66.915C82.2191 59.7479 84.9879 51.1472 84.9894 42.3239C84.9894 19.058 66.1451 0.213745 42.8792 0.213745Z"
							fill="#081B1F"
						/>
					</g>
					<defs>
						<clipPath id="clip0_41_129">
							<rect
								width="84.2203"
								height="84.2203"
								fill="white"
								transform="translate(0.769043 0.213745)"
							/>
						</clipPath>
					</defs>
				</svg>
			</a>
			<a
				href="https://www.linkedin.com/in/lunga-qaba-b19325236"
				title="Linkedin"
				target="_blank"
				rel="noopener noreferrer"
			>
				<svg
					width="64"
					height="64"
					viewBox="0 0 86 85"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clip-path="url(#clip0_41_127)">
						<path
							d="M0.851562 6.24603C0.851562 2.91406 3.62031 0.213745 7.03649 0.213745H78.8869C82.3031 0.213745 85.0719 2.91406 85.0719 6.24603V78.4018C85.0719 81.7337 82.3031 84.4341 78.8869 84.4341H7.03649C3.62031 84.4341 0.851562 81.7337 0.851562 78.4018V6.24603ZM26.8704 70.7167V32.6859H14.2321V70.7167H26.8704ZM20.5539 27.4906C24.9596 27.4906 27.7021 24.5745 27.7021 20.9214C27.6231 17.1894 24.9649 14.3522 20.6381 14.3522C16.3113 14.3522 13.4846 17.1947 13.4846 20.9214C13.4846 24.5745 16.227 27.4906 20.4696 27.4906H20.5539ZM46.3884 70.7167V49.4774C46.3884 48.3404 46.4727 47.2034 46.8095 46.3928C47.7202 44.1241 49.7994 41.7712 53.2945 41.7712C57.8687 41.7712 59.6952 45.2558 59.6952 50.3722V70.7167H72.3336V48.9036C72.3336 37.218 66.1012 31.7858 57.7845 31.7858C51.0785 31.7858 48.0728 35.4705 46.3884 38.0655V38.1971H46.3042C46.3322 38.1532 46.3602 38.1093 46.3884 38.0655V32.6859H33.7554C33.9133 36.2548 33.7554 70.7167 33.7554 70.7167H46.3884Z"
							fill="#081B1F"
						/>
					</g>
					<defs>
						<clipPath id="clip0_41_127">
							<rect
								width="84.2203"
								height="84.2203"
								fill="white"
								transform="translate(0.851562 0.213745)"
							/>
						</clipPath>
					</defs>
				</svg>
			</a>
		</div>
	</div>
</div>

<style>
	.form-contact {
		gap: 20px;
		display: flex;
		flex-direction: column;
		margin: 0px 8px 8px 8px;
		justify-content: space-evenly;
		width: auto;
		margin-bottom: 120px;
	}
	h3 {
		width: 422px;
		height: 48px;
		margin-top: 16px;
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 600;
		font-size: 32px;
		line-height: 49px;
		text-align: center;
	}
	.contact-form {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 14px;
		width: 100%;
	}
	.contact-form label {
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 500;
		font-size: 18px;
		line-height: 29px;
		width: 70px;
	}
	.contact-form input {
		width: 299px;
		height: 45px;
		background: #d9d9d9;
		/* Input Stroke */

		border: 1px solid rgba(48, 62, 65, 0.5);
		border-radius: 5px;
		padding: 10px;
		font-size: 16px;
		transition: 0.5s;
	}

	.contact-form .send-message {
		display: flex;
		justify-content: center;
		width: 250px;
		height: 51px;
		box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.1);
		margin-left: auto;
		margin-bottom: 8px;
		margin-right: auto;
		padding: 10px;

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

	.contact-form .send-message:hover {
		width: 250px;
		height: 51px;
		/* border-radius: 0px; */
		background: #98a5a8;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
	}
	.contact-form .send-message:active {
		width: 250px;
		height: 51px;
		/* border-radius: 0px; */
		background: #c6d4d7;
		box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.1);
	}

	.contact-platforms {
		display: flex;
		flex-direction: column;
		text-align: center;
		font-size: 18px;
	}

	.social {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		height: 50%;
		width: 100%;
	}
</style>
