const html = document.documentElement;

function blockPopup(btn, wrap) {
    let formWrap = document.querySelector(wrap);
    let formBtn = document.querySelector(btn);
    let formOpened = 'opened';
    let overflowHidden = 'overflowHidden';

    formBtn.addEventListener('click', function(event) {
        event.preventDefault();
        this.classList.add(formOpened);
        formWrap.classList.add(formOpened);
        html.classList.add(overflowHidden);
    });

    html.addEventListener('keyup', function(event) {
        if (formWrap.classList.contains(formOpened) && event.keyCode === 27) {
            formWrap.classList.remove(formOpened);
            html.classList.remove(overflowHidden);
            formBtn.classList.remove(formOpened);
        }
    });

    document.addEventListener('click', function(event) {
        const target = event.target;
        if (!formWrap.contains(target) && !formBtn.contains(target)) { // Применяем метод includes к массиву formBtn
            formWrap.classList.remove(formOpened);
            html.classList.remove(overflowHidden);
            formBtn.classList.remove(formOpened);
        }
    });
}


blockPopup('.btn_modal', '.form_modal_block');