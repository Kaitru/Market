/**
 * Мы загрузим axios HTTP библиотеку, которая позволяет легко 
 * отправлять запросы на наш Laravel back-end.
 */
import axios from 'axios';
window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'; 