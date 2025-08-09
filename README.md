// ==UserScript== // @name         Enable Continue Button Only // @namespace    http://tampermonkey.net/ // @version      1.0 // @description  يفك تعطيل زر Continue فقط بدون الضغط عليه تلقائيًا // @match        https://visa.vfsglobal.com/* // @grant        none // ==/UserScript==  (function() {     'use strict';      setInterval(() => {         const btn = Array.from(document.querySelectorAll('button, input[type="button"], input[type="submit"]'))             .find(el => el.textContent?.trim() === 'Continue' || el.value === 'Continue');          if (btn && btn.disabled) {             btn.disabled = false;             btn.classList.remove('disabled');             btn.style.pointerEvents = 'auto';             console.log('✅ زر Continue مفعل');         }     }, 2000); // يفحص كل 2 ثانية// ==UserScript==
// @name         Enable Continue Button Only
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  يفك تعطيل زر Continue فقط بدون الضغط عليه تلقائيًا
// @match        https://visa.vfsglobal.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    setInterval(() => {
        const btn = Array.from(document.querySelectorAll('button, input[type="button"], input[type="submit"]'))
            .find(el => el.textContent?.trim() === 'Continue' || el.value === 'Continue');

        if (btn && btn.disabled) {
            btn.disabled = false;
            btn.classList.remove('disabled');
            btn.style.pointerEvents = 'auto';
            console.log('✅ زر Continue مفعل');
        }
    }, 2000); // يفحص كل 2 ثانية

})();  })();
