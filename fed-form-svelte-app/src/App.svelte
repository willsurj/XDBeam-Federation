<script>
	import Header from './components/Header.svelte';
	import Footer from './components/Footer.svelte';
	import Popup from './components/Popup.svelte';
	import Form from './components/Form.svelte';

	import {
		loggedIn
	} from './store'
	
	import Button from './components/Button.svelte';
</script>

<Header />

	<div>
		<article class="ui">
			<Form />
		</article>
	</div>

<Popup />
<Footer />

<style>
	div {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		width: 100%;
		margin: 1em 0;
	}

	.ui {
		justify-content: space-between;
	}
	article {
		display: flex;
		width: 100%;
		max-width: 750px;
		flex-direction: row;
		box-sizing: border-box;
	}
</style>