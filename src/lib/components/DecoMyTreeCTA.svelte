<script lang="ts">
	import { STATE } from '$lib/stores.js';
	export let languageValue: string;

	let nameValue: string;

	const unsubscribe = STATE.subscribe((data) => {
		nameValue =
			data.name.value.length > 0
				? data.name.value
				: data.name.default[languageValue as keyof typeof data.name.default];
	});
</script>

<section class="section section-songs">
	<div class="wrapper songs-wrapper">
		{#if languageValue == 'en'}
			<div class="cta cta-ghost mb-5">
				<h1>I wanna hear from you as well!</h1>
				<p>
					If you would like to share your thoughts with me, please do so! Follow do the link to send
					your message to me.
				</p>
				<p>I will be looking forward to it.</p>
				<a href="https://decomytree.com/home?hashedId=4fnfwzl-w0vi" target="_blank"
					><button class="button button-wide">Send me a message</button></a
				>
			</div>
		{:else}
			<div class="cta cta-ghost mb-5">
				<h1>Sənin də bəlkə mənə sözün ola?</h1>
				<p>
					O zaman aşağıdakı linkdən mənə öz ürək sözlərini yaza bilərsən. Yeni il qabağı bu kasıb
					bəndəni sevindir :))
				</p>
				<p>Səbrsizliklə mesajını oxumağı gözləyirəm!</p>
				<a href="https://decomytree.com/home?hashedId=4fnfwzl-w0vi" target="_blank"
					><button class="button button-wide">Getdik yazmağa!</button></a
				>
			</div>
		{/if}
	</div>
</section>

<style>
	.section-songs {
		display: flex;
	}
</style>
