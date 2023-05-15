export function tabs() {
    const tabsEls = [...document.querySelectorAll('.js-tabs')];

    if (!tabsEls.length) return;

    tabsEls.forEach(el => {
        console.log(el)
        const links = [...el.querySelectorAll('.js-tabs-link')];
        const panes = [...el.querySelectorAll('.js-tabs-pane')];

        links.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();

                let activePane = panes.find(pane => pane.dataset.paneId === link.dataset.target);

                if (!activePane) return;

                panes.forEach(pane => {
                    pane.classList.remove('display');
                    pane.classList.remove('active');
                });
                links.forEach(link => {
                    link.classList.remove('active');
                });

                setActivePane(activePane, link);
            })
        });

        function setActivePane(_pane, _link) {
            _pane.classList.add('display');
            _link.classList.add('active');
            setTimeout(() => {
                _pane.classList.add('active');
            }, 10)
        }
    })
}