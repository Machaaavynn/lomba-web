document.querySelector('.search-bar button').addEventListener('click', function () {
    const query = document.querySelector('.search-bar input').value.toLowerCase(); // Ambil input search
    const cards = document.querySelectorAll('.product-card'); // Ambil semua produk

    // Loop melalui semua produk
    cards.forEach(card => {
        const title = card.querySelector('h3').innerText.toLowerCase(); // Ambil nama produk
        if (title.includes(query)) {
            card.style.display = 'block'; // Tampilkan jika cocok
        } else {
            card.style.display = 'none'; // Sembunyikan jika tidak cocok
        }
    });
});

// Fungsi agar bisa search saat tekan "Enter" di keyboard
document.querySelector('.search-bar input').addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        document.querySelector('.search-bar button').click(); // Panggil tombol Cari
    }
});

// Fungsi untuk pindah halaman dari tombol "Lihat" atau produk
document.querySelectorAll('.product-card button').forEach((button, index) => {
    button.addEventListener('click', () => {
        const pages = [
            'buy.html',
            'keranjang.html',
            'profile.html',
            'index.html'
        ];
        window.location.href = pages[index % pages.length]; // Pindah ke halaman sesuai index
    });
});

document.querySelectorAll('.cart-btn').forEach(button => {
    button.addEventListener('click', function() {
        window.location.href = 'sidebar/keranjang.html'; // Arahkan ke halaman keranjang
    });
});
