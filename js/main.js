window.onload = () => {
    'use strict';

    if('serviceWorker' in navigator){
        navigator.serviceWorker.register('./sw.js').catch(
            error => {
                console.log("Service worker registeration Error");
            }
        );
    }
    
}