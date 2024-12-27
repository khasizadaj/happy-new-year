<script lang="ts">
	import { STATE } from '$lib/stores.js';
	export let languageValue: string;

	let nameValue: string;

	STATE.subscribe((data) => {
		nameValue =
			data.name.value.length > 0
				? data.name.value
				: data.name.default[data.language as keyof typeof data.name.default];
	});
</script>

<section class="section section-message">
	<div class="wrapper message-wrapper">
		{#if languageValue == 'en'}
			<h1>Happy New Year, {nameValue}!!!</h1>
			<p>
				I'm glad I found time to work on this project again this year. Not sure if she'll read this,
				but I'm grateful she reminded me about it. Between work and personal matters, I had
				completely forgotten.
			</p>
			<p>
				This time of year always feels bittersweet. It's probably the only time I slow down to
				reflect on the past year and think about ways to make the next one better (not the best
				habit, but hopefully it's just me).
			</p>
			<p>
				Looking back, one thing is clear — what truly matters is the people around you. Without
				them, you're not really you, and your memories wouldn't mean much. Make time for those who
				care about you. Be there for them — not out of obligation, but because you want to be. And
				if you feel like you don't have such people, look closer or put your glasses on — they're
				probably just waiting to be noticed. :)
			</p>
			<p>
				For me, personal connections are what matter most, and this year made that even clearer.
			</p>
			<p>
				So, have fun, make memories, and appreciate both what you have and what you don't. Oh, and
				don't be like me — <b>spend less time on social media!</b>
			</p>
			<p>
				<b>Happy New Year!</b> You are loved — maybe not by me personally, but definitely by someone
				out there!
			</p>
			<p>Warm greetings from Hungary,</p>

			<p><span class="signature">Javid "JAXA" Khasizada.</span></p>
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
				Bu il üçün (keçən ildə olduğu kimi) sənə arzu edirəm ki, ətrafdakıların təsiri olan yox,
				məhz öz istədiyin arzuların və hədəflərin üçün çalışasan. Ən əsası doğru və məhz sənə uyğun
				olanlarının arxasınca.
			</p>
			<p>
				2022-də öyrəndiyim ən böyük bacarıqlarımdan biri insanlarla daha yaxşı kommunikasiya qurmaq
				olub. Ümid edirəm ki, qarşıdan gələn ildə həyatın bu bacarığa sahib olan insanlarla dolu
				olar.
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
		padding-block: 5rem;
		height: 90vh;
		min-height: 500px;
		display: flex;
	}

	.signature {
		font-style: italic;
	}
	
	b {
		font-weight: 700;
	}
</style>
