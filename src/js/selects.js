export function initSelects() {
    const els = [...document.querySelectorAll('.js-select')];

    if (!els.length) return;

    els.forEach(el => {
        const top = el.querySelector('.select__top');
        const items = [...el.querySelectorAll('.select__item')];
        const selected = el.querySelector('.select__selected');
        
        items.forEach(item => {
            let radio = item.querySelector('input');
            let label = item.querySelector('label');

            label.textContent = item.dataset.labelText;

            if (radio.checked) {
                el.classList.add('selected')
                setCurrentItem(el, item, selected);
            }
    
            radio.addEventListener('change', function() {
                if (!this.checked) return;
                setCurrentItem(el, item, selected);
            });
        })

        top.addEventListener('click', function() {
            el.classList.toggle('active');
        })

        window.addEventListener('click', function(e) {
            if (e.composedPath().includes(top)) return;
            el.classList.remove('active');
        })
    });

    function setCurrentItem(_el, _item, _selected) {
        _el.classList.add('selected');
        _selected.textContent = _item.dataset?.labelText;
    }
}