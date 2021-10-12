window.onload = () => {
    'use strict';

    if('serviceorker' in navigator){
        navigator.serviceWorker.register('./sw/js');
    }
}