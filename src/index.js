//import './css/style.css';

//import './js/app';


export function healthStatus(character) {
    if (character.health > 50) return 'healthy';
    if (character.health >= 15) return 'wounded';
    return 'critical';
  }
  
// TODO: write your code in app.js
