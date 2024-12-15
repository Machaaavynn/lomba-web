// Menghapus item dari keranjang
document.querySelectorAll('.remove-item').forEach(button => {
    button.addEventListener('click', () => {
        const cartItem = button.closest('.cart-item');
        cartItem.remove();
    });
});

// Proses Pembelian (contoh pengalihan ke halaman pembayaran)
document.querySelector('.checkout-btn').addEventListener('click', () => {
    window.location.href = 'checkout.html'; // Halaman checkout (ganti dengan halaman yang sesuai)
});
