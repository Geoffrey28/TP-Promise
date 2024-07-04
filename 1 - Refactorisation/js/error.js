const errorPanel = document.querySelector('.error');

export function showError(error) {
    errorPanel.removeAttribute('hidden');
    errorPanel.textContent = error;
}

export function hideError(error) {
    setTimeout(() => {
        errorPanel.setAttribute('hidden', true);
    }, 3000);
}
