import { nameGen } from './fetch.js';

console.log('btn click');
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn').addEventListener('click', () => {
        nameGen();
    });
});
