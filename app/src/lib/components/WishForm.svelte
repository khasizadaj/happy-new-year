<script lang="ts">
	import { STATE } from '$lib/stores.js';
	export let languageValue: string;

	const handleFormWithName = async (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);

		if (!formData.get('name')) {
			let feedback = document.querySelector('.feedback') as HTMLElement;
			feedback.style.display = 'block';
			return;
		}

		let nameValue = formData.get('name');
		STATE.update((currentValue) => ({
			...currentValue,
			name: {
				...currentValue.name,
				value: (nameValue || '').toString()
			}
		}));
	};
</script>

<section class="section section-form active">
	<div class="wrapper form-wrapper">
		{#if languageValue === 'en'}
			<p>
				It's the second (oh, it's already been third) year that I've been congratulating some of you
				in this form. I'm both writing code and congratulations, two birds with one stone. In order
				to see my wishes, add your name and click on "See message" button.
			</p>
			<p>
				<span class="note">Note: </span>If you don't want to add your name, click on
				<i>"I don't wanna add my name"</i>.
			</p>
			<form method="POST" on:submit|preventDefault={handleFormWithName} id="name-form">
				<div class="input-wrapper">
					<label for="name-input">Your name</label>
					<input type="text" class="name-input js-name-input" name="name" id="name-input" />
					<small class="feedback">
						You forgot to add your name. If you don't want to add your name, click on
						<i>"I don't wanna add my name"</i>.
					</small>
				</div>
				<button type="submit" class="button button-wide">See JAXA's message</button>
				<button type="submit" formaction="?/anonymous" class="anonymous link"
					>> I don't wanna add my name</button
				>
			</form>
		{:else}
			<p>
				Artıq ikinci, artıq 3 olubmuş ildir ki, bu formada təbrik edirəm bəzilərini. Həm kod
				yazıram, həm də təbrik edirəm, bir daşla iki quş.
			</p>
			<p>
				<span class="note">Qeyd: </span>Adını əlavə et və "Təbriki gör" düyməsinə kliklə. Əgər adını
				əlavə etmək istəmirsənsə, <i>"Adımı yazmaq istəmirəm"</i> düyməsinə klikləyə bilərsən.
			</p>
			<form action="?/named" id="name-form" method="post">
				<div class="input-wrapper">
					<label for="name-input">Ad</label>
					<input type="text" class="name-input js-name-input" id="name-input" />
					<small class="feedback">
						Adınızı əlavə etməyi unutdunuz. Əgər adınızı vermək istəmirsinizsə, aşağıda olan "Adımı
						yazmaq istəmirəm" düyməsinə klikə.
					</small>
				</div>
				<button type="submit" class="button button-wide">Təbriki gör</button>
				<button type="submit" formaction="?/anonymous" class="anonymous link"
					>> Adımı yazmaq istəmirəm</button
				>
			</form>
		{/if}
	</div>
</section>

<style>
	.section-form {
		display: none;
	}

	.section-form.active {
		min-height: 80vh;
		display: flex;
	}

	.button-wide {
		width: 100%;
	}

	.anonymous {
		font-size: 1.5rem;
		margin-top: 2rem;
		display: block;
		text-align: center;
	}

	@media screen and (max-width: 400px) {
		.feedback {
			display: none;
			padding-top: 1rem;
			font-size: 1.5rem;
			color: var(-white);
		}
	}
	.feedback {
		display: none;
		padding-top: 1rem;
		font-size: 1.5rem;
		color: var(-white);
	}
</style>
