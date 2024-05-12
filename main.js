const input = document.querySelector('input');
let errorSpan = document.getElementById('error-span');
errorSpan.style.display = 'none';

function emailError() {
    if(input.value.includes('@')) {
        window.location.reload()
        
    } else {
        errorSpan.style.display = 'block'
    }
}

