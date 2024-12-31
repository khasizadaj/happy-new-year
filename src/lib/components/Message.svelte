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
				<span class="note">Note:</span> I'm glad I found time to work on this project again this year.
				Not sure if she'll read this, but I'm grateful she reminded me about it. Between work and personal
				matters, I had completely forgotten.
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
			<h1>Yeni ilin mübarək, {nameValue}!!!</h1>

			<p>
				<span class="note">Qeyd:</span> Bu il yenidən bu layihə üzərində işləmək üçün vaxt tapdığım üçün
				şadam. Bunu onun da oxuyub-oxumayacağından əmin deyiləm, amma bu barədə mənə xatırlatdığı üçün
				ona minnətdaram.
			</p>
			<p>
				İlin bu vaxtı həmişə qəribə hisslər oyadır. Yəqin ki, bu, keçən ilə nəzər salıb, növbəti ili
				necə daha yaxşı etmək barədə düşündüyüm yeganə vaxtdır. Bu, çox da yaxşı bir vərdiş deyil,
				amma ümid edirəm ki, bunu edən tək mənəm. 🤞
			</p>
			<p>
				Keçmişə baxanda aydın olur ki, ətrafımızdakı insanlar həyatımızın ən vacib hissəsidir. Onlar
				olmasa, xatirələrimiz də mənasız olar. Səninlə maraqlanan insanlara vaxt ayır. Onların
				yanında ol—istədiyin üçün, yoxsa məcburiyyətə görə yox. Əgər belə insanların olmadığını
				düşünürsənsə, sadəcə ətrafa diqqətlə bax—onlar çox güman ki, gözləyirlər ki, sən onları fərq
				edəsən. :)
			</p>
			<p>
				Vacib olan odur ki, gələn ildə daha çox xoş anlar yaratmağa çalışaq, ətrafımızdakılara dəyər
				verək və kiçik uğurları belə qeyd edək.
			</p>
			<p>
				Belə! Zövq al, gözəl xatirələr yarat və həm sahib olduqlarının, həm də olmadıqlarının qədrini
				bil. Bir də, mənim kimi olma — <b>sosial mediada daha az vaxt keçir</b>!
			</p>
			<p>
				<b>Yeni ilin mübarək!</b> Sevilirsən — bəlkə şəxsən mən tərəfindən yox, mütləq kimsə tərəfindən!
			</p>
			<p>Macarıstandan ürək dolusu salamlarla,</p>
			<br />
			<p><span class="signature">Cavid "JAXA" Xasizadə.</span></p>
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

	p {
		text-align: justify;
	}

	b {
		font-weight: 700;
	}
</style>
