<script lang="ts">
	import { getRequest } from '@libs/utils/hooks';

	function handleSubmit() {
		getRequest('http://localhost:8000/coffee.php');
	}
</script>

<form action="" method="POST">
	<label>
		Email
		<input name="email" type="email" />
	</label>
	<label>
		Password
		<input name="password" type="password" />
	</label>
	<button on:click={handleSubmit}>Log in</button>
</form>
