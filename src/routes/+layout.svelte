<script lang="ts">
	import 'normalize.css';
	import 'sakura.css';

	import { getFlash } from 'sveltekit-flash-message';
	import { page } from '$app/stores';

	const flash = getFlash(page);
</script>

{#if $flash}
	{@const bg = $flash.type == 'success' ? '#3D9970' : '#FF4136'}
	<div style:background-color={bg} class="flash">{$flash.text}</div>
{/if}

<slot />

<style>
	.flash {
		margin: 1rem 0;
		padding: 0.5rem 1rem;
		color: white;
	}
</style>
