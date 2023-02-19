import './style.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { hamburger } from './js/hamburger';

const logo = document.querySelectorAll('#logo path');
for (let i = 0; i < logo.length; i++) {
	console.log(`Letter ${i} length is ${logo[i].getTotalLength()}`);
}

AOS.init();
hamburger();




