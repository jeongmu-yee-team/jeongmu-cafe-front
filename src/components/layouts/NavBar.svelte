<script lang="ts">
	let selectMenu: string;
	function handleChangeMenu() {
		selectMenu = 'asdasd';
	}
</script>

<section>
	<div class=" flex justify-center">
		<button on:click={handleChangeMenu} class="">select : {selectMenu}</button>
	</div>
</section>
