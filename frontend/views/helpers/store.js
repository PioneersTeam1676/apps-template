import { writable, derived } from 'svelte/store';

export const api = writable([]);

export const data = derived(api, ($api) => {
  return $api.map(obj => obj);
});