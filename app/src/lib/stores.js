import { writable } from 'svelte/store';

export const STATE = writable({
	"language": "en",
	"name": {
		"default": {
			"az": "Anonim insan",
			"en": "Mr. Anonymous"
		},
		"value": ""
	},
	"formIsFilled": false
});