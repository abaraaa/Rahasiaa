document.querySelector('.yes-button').addEventListener('click', function() {
    window.location.href = 'https://api.whatsapp.com/send?phone=6285696086038&text=Halo%2C%20aku%20menginginkan%20kamu%20menjadi%20pacarku.';
});

document.querySelector('.no-button').addEventListener('click', function() {
    window.location.href = 'https://api.whatsapp.com/send?phone=6285696086038&text=Maaf%2C%20aku%20tidak%20dapat%20menerima%20tawaran%20mu.';
});
