function processPurchase() {
    const productName = document.getElementById('productName').textContent;
    const productPrice = document.getElementById('productPrice').textContent;
    const quantity = document.getElementById('quantity').value;

    // Menampilkan pesan konfirmasi
    alert(`Anda berhasil membeli ${quantity} ${productName} seharga ${productPrice}.`);

    // Setelah konfirmasi, sembunyikan kontainer pembelian
    const purchaseContainer = document.getElementById('purchaseContainer');
    purchaseContainer.style.display = 'none';
}
    // Tambahkan fungsi untuk scroll ke kontainer pembelian
    document.querySelectorAll('.menu-item a').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Mencegah link reload
        const urlParams = new URLSearchParams(this.getAttribute('href').substring(1));
        const name = urlParams.get('name');
        const image = urlParams.get('image');
        const price = urlParams.get('price');
        
        // Perbarui kontainer pembelian dengan data produk
        document.getElementById('productImage').src = image;
        document.getElementById('productName').textContent = name;
        document.getElementById('productPrice').textContent = `Harga: ${price}`;

        // Tampilkan kontainer pembelian
        const purchaseContainer = document.getElementById('purchaseContainer');
        purchaseContainer.style.display = 'block';

        // Scroll ke kontainer pembelian
        purchaseContainer.scrollIntoView({ behavior: 'smooth' });
    });
});
