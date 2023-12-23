<script lang="ts">
	import Modal from '@components/layouts/Modal.svelte';

	let toggle: boolean = true;
	function T() {
		toggle = !toggle;
	}
</script>

<section>
	<Modal bind:toggleModal={toggle}
		><h1 slot="title">정무 커피</h1>
		<div slot="contents">
			<span>커피 이미지</span>
			<span>아무곳이나 클릭하세요</span>
		</div>
	</Modal>
</section>
