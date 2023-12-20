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

<section class="section section-message">
	<div class="wrapper message-wrapper">
		{#if languageValue == 'en'}
			<h1>Happy New Year, {nameValue}!!!</h1>
			<p>
				I wish you to have people around you who understand you and support you regardless of time
				and circumstances.
			</p>
			<p>
				For this year (like last year), I wish you to pursue your own dreams and goals, not those
				influenced by others. The most important thing is to follow what is right and exactly what
				suits you.
			</p>
			<p>
				One of the biggest skills I learned in 2022 was how to communicate better with people, and I
				hope your life is filled with people who have this skill.
			</p>
			<p>Happy New Year. You are loved!</p>
			<br />
			<p>
				With hearty greetings from Hungary, <span class="signature">Javid "JAXA" Khasizada.</span>
			</p>
		{:else}
			<h1>Təbriklər, {nameValue}!!!</h1>

			<p>
				<span class="note">Qeyd:</span> Bu mesaj əvvəldən yazılıb deyə hamıya sən deyə müraciət edəcəm.
			</p>
			<br />
			<p>
				Sənə yeni ildə ətrafında səni anlayan və səni zaman və şəraitdən asılı olmayaraq dəstəkləyən
				adamların olmasını arzu edirəm.
			</p>
			<p>
				Bu il üçün (keçən ildə olduğu kimi) sənə arzu edirəm ki, ətrafdakıların təsiri olan olan
				yox, məhz öz istədiyin arzuların və hədəflərin dalınca qaçasan. Ən əsası doğru və məhz sənə
				uyğun olanlarının arxasınca.
			</p>
			<p>
				2022-də öyrəndiyim ən bpyük bacarıqlaından biri insanlarla daha yaxşı kommunikasiya qurmaq
				olub və ümid edirəm ki, bu bacarığa sahib olan insanlarla dolu olsun həyatın.
			</p>
			<p>Yeni ilin mübarək. Sevilirsən!</p>
			<br />
			<p>
				Macarıstandan ürək dolusu salamlarla, <span class="signature">Cavid "JAXA" Xasizadə.</span>
			</p>
		{/if}

	</div>
</section>

<style>
	.section-message {
		min-height: 80vh;
		display: flex;
	}

	.signature {
		font-style: italic;
	}
</style>
