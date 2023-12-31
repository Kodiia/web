import { writable } from 'svelte/store';

export let width = writable(1920)
export let height = writable(1080)

export let theme = writable('light')