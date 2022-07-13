import { designs } from './App.js';
import { setData } from './fetchData.js';
import './style/style.scss';

designs();

const searchBtn = document.getElementById('search');
const subButton = document.querySelector('.btn');

;subButton.addEventListener('click', () => {setData(searchBtn.value); searchBtn.value = '';});
    searchBtn.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            setData(searchBtn.value);
            searchBtn.value = '';
    };
});