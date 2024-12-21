<script lang="ts">
	import { STATE } from '$lib/stores.js';

	import Message from '$lib/components/Message.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import SongCTA from '$lib/components/SongCTA.svelte';
	import SubmittedSongs from '$lib/components/SubmittedSongs.svelte';
	import WishForm from '$lib/components/WishForm.svelte';
	import Footer from '../lib/components/Footer.svelte';

	let languageValue: string;
	let formIsFilledValue: boolean;

	const unsubscribe = STATE.subscribe((data) => {
		languageValue = data.language;
		formIsFilledValue = data.formIsFilled;
	});
	export let data;

	let n = 42;
	let items = Array.from({ length: n }, (_, index) => index);
</script>

<section class="section-lightrope">
	<ul class="lightrope">
		{#each items as item}
			<li></li>
		{/each}
	</ul>
</section>

<Navbar {languageValue} />

{#if formIsFilledValue === false}
	<WishForm {languageValue} />
	<SubmittedSongs {languageValue} songs={data.songs} />
{:else}
	<Message {languageValue} />
	<SongCTA {languageValue} />
	<SubmittedSongs {languageValue} songs={data.songs} />
{/if}

<Footer {languageValue} />

<style>
	/*
	
	CHRISTMAS LIGHTS
	* Credits to Toby (https://codepen.io/tobyj/pen/QjvEex)

	*/

	.section-lightrope {
		height: 40px;
	}

	.lightrope {
		text-align: center;
		white-space: nowrap;
		overflow: hidden;
		position: absolute;
		z-index: 1;
		margin: -15px 0 0 0;
		padding: 0;
		pointer-events: none;
		width: 100%;
	}

	.lightrope li {
		position: relative;
		-webkit-animation-fill-mode: both;
		animation-fill-mode: both;
		-webkit-animation-iteration-count: infinite;
		animation-iteration-count: infinite;
		list-style: none;
		margin: 0;
		padding: 0;
		display: block;
		width: 12px;
		height: 28px;
		border-radius: 50%;
		margin: 20px;
		display: inline-block;
		background: #00f7a5;
		box-shadow: 0px 4.6666666667px 24px 3px #00f7a5;
		-webkit-animation-name: flash-1;
		animation-name: flash-1;
		-webkit-animation-duration: 2s;
		animation-duration: 2s;
	}

	.lightrope li:nth-child(2n + 1) {
		background: aqua;
		box-shadow: 0px 4.6666666667px 24px 3px rgba(0, 255, 255, 0.5);
		-webkit-animation-name: flash-2;
		animation-name: flash-2;
		-webkit-animation-duration: 0.4s;
		animation-duration: 0.4s;
	}

	.lightrope li:nth-child(4n + 2) {
		background: #edc85e;
		box-shadow: 0px 4.6666666667px 24px 3px #edc85e;
		-webkit-animation-name: flash-3;
		animation-name: flash-3;
		-webkit-animation-duration: 1.1s;
		animation-duration: 1.1s;
	}

	.lightrope li:nth-child(odd) {
		-webkit-animation-duration: 1.8s;
		animation-duration: 1.8s;
	}

	.lightrope li:nth-child(3n + 1) {
		-webkit-animation-duration: 1.4s;
		animation-duration: 1.4s;
	}

	.lightrope li:before {
		content: '';
		position: absolute;
		background: #222;
		width: 10px;
		height: 9.3333333333px;
		border-radius: 3px;
		top: -4.6666666667px;
		left: 1px;
	}

	.lightrope li:after {
		content: '';
		top: -14px;
		left: 9px;
		position: absolute;
		width: 52px;
		height: 18.6666666667px;
		border-bottom: solid #222 2px;
		border-radius: 50%;
	}

	.lightrope li:last-child:after {
		content: none;
	}

	.lightrope li:first-child {
		margin-left: -40px;
	}

	@-webkit-keyframes flash-1 {
		0%,
		100% {
			background: #00f7a5;
			box-shadow: 0px 4.6666666667px 24px 3px #00f7a5;
		}

		50% {
			background: rgba(0, 247, 165, 0.4);
			box-shadow: 0px 4.6666666667px 24px 3px rgba(0, 247, 165, 0.1);
		}
	}

	@keyframes flash-1 {
		0%,
		100% {
			background: #00f7a5;
			box-shadow: 0px 4.6666666667px 24px 3px #00f7a5;
		}

		50% {
			background: rgba(0, 247, 165, 0.4);
			box-shadow: 0px 4.6666666667px 24px 3px rgba(0, 247, 165, 0.1);
		}
	}

	@-webkit-keyframes flash-2 {
		0%,
		100% {
			background: aqua;
			box-shadow: 0px 4.6666666667px 24px 3px aqua;
		}

		50% {
			background: rgba(0, 255, 255, 0.4);
			box-shadow: 0px 4.6666666667px 24px 3px rgba(0, 255, 255, 0.1);
		}
	}

	@keyframes flash-2 {
		0%,
		100% {
			background: aqua;
			box-shadow: 0px 4.6666666667px 24px 3px aqua;
		}

		50% {
			background: rgba(0, 255, 255, 0.4);
			box-shadow: 0px 4.6666666667px 24px 3px rgba(0, 255, 255, 0.1);
		}
	}

	@-webkit-keyframes flash-3 {
		0%,
		100% {
			background: #edc85e;
			box-shadow: 0px 4.6666666667px 24px 3px #edc85e;
		}

		50% {
			background: rgba(255, 215, 0, 0.4);
			box-shadow: 0px 4.6666666667px 24px 3px rgba(255, 215, 0, 0.1);
		}
	}

	@keyframes flash-3 {
		0%,
		100% {
			background: #edc85e;
			box-shadow: 0px 4.6666666667px 24px 3px #edc85e;
		}

		50% {
			background: rgba(255, 215, 0, 0.4);
			box-shadow: 0px 4.6666666667px 24px 3px rgba(255, 215, 0, 0.1);
		}
	}

	/* CHRISTMAS LIGHTS */
</style>
