// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		interface PageData {
			flash?: { type: 'success' | 'error'; text: string };
		}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
