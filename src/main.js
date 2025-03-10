import './app.css'
import App from './App.svelte'

export function podcasts() {
  console.log("podcasts")
}



const app = new App({
  target: document.getElementById('app'),
})

export * from './lib/NavController.js';

export default app
