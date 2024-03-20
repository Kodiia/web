import { writable } from 'svelte/store';

export let width = writable(1920)
export let height = writable(1080)

export let theme = writable('dark');
export let bgColor = writable('0, 0%, 5%');
export let textColor = writable('0, 0%, 98%');
export let secondaryColor = writable('0, 0%, 15%');
export let primaryColor = writable('155, 70%, 55%');
export let accentColor = writable('80, 95%, 60%');