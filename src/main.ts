import './app.css';
import Window from './Window.svelte';

const window = new Window({
	target: document.getElementById('window') as Element,
});

export default window;
