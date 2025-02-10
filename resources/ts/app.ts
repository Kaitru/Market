// Базовая инициализация
import './bootstrap';
import axios from 'axios';

// Типы для window
declare global {
    interface Window {
        axios: typeof axios;
    }
}

// Инициализация приложения
document.addEventListener('DOMContentLoaded', () => {
    console.log('TypeScript initialized');
}); 