import { createApp } from 'vue';
import App from './App.vue';
import { reveal } from './directives/reveal';
import './assets/main.css';

const app = createApp(App);

// ثبت دایرکتیو به‌صورت global
app.directive('reveal', reveal);

app.mount('#app');