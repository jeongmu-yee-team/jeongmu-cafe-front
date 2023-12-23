<script lang="ts">
	import { onMount } from 'svelte';

	export let toggleModal: boolean;
	let modalState: HTMLDialogElement;
	let closeButton: HTMLButtonElement;

	$: if (modalState && toggleModal) modalState.showModal();

	onMount(() => {
		closeButton.focus();
	});
</script>

<dialog bind:this={modalState} on:close={() => (toggleModal = false)}>
	<slot name="title" />
	<slot name="contents">No Contents</slot>
	<button bind:this={closeButton} on:click={() => modalState.close()}>닫기</button>
</dialog>
