// JavaScript untuk menangani pengiriman form
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah pengiriman form secara default

    // Mendapatkan nilai input dari form
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    // Validasi input
    if (name && email && message) {
        // Menampilkan pesan sukses
        document.getElementById('formStatus').innerHTML = 'Pesan Anda berhasil dikirim! Kami akan segera menghubungi Anda.';
        document.getElementById('formStatus').style.color = 'green';

        // Menyelesaikan form
        document.getElementById('contactForm').reset();
    } else {
        // Menampilkan pesan error jika ada input kosong
        document.getElementById('formStatus').innerHTML = 'Semua kolom harus diisi!';
        document.getElementById('formStatus').style.color = 'red';
    }
});