import { hamburger } from "../../../js/hamburger";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
hamburger();
console.log('This is the ' + document.title + ' page.');