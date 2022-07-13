import { designs } from './App.js';
import { setData } from './fetchData.js';
import './style/style.scss';

designs();

const searchBtn = document.getElementById('search');
    searchBtn.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            setData(searchBtn.value);
            searchBtn.value = '';
    };
});