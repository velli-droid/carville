export function initDropdowns() {
    const els = [...document.querySelectorAll('.js-dropdown')];

    if (!els.length) return;

    els.forEach(el => {
        const head = el.querySelector('.dropdown__head');
        const body = el.querySelector('.dropdown__body');

        if (!head || !body) return;

        head.addEventListener('click', function(e) {
            e.preventDefault();
            if (!el.classList.contains('active')) {
                body.style.maxHeight = `${body.scrollHeight}px`;
                
                setTimeout(() => {
                    body.style.maxHeight = '';
                }, 300);
            } else {
                body.style.maxHeight = `${body.scrollHeight}px`;
              
                setTimeout(() => {
                    body.style.maxHeight = '';
                }, 10);
            }
            el.classList.toggle('active');
        })
    })
}