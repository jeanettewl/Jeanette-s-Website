document.querySelectorAll('.filter-buttons button').forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category'); // Ambil kategori dari tombol
        document.querySelectorAll('.portfolio-item').forEach(item => {
            // Tampilkan item jika kategori cocok, atau semua jika kategori "all"
            if (category === 'all' || item.classList.contains(`category-${category}`)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });

        // Atur tombol aktif (highlight tombol yang diklik)
        document.querySelectorAll('.filter-buttons button').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});

// Ambil semua tombol detail
const detailButtons = document.querySelectorAll('.btn-details');

// Buat elemen modal
const modal = document.createElement('div');
modal.className = 'modal';
modal.innerHTML = `
    <p class="modal-content"></p>
    <button class="close-btn">Close</button>
`;

// Tambahkan modal dan overlay ke body
document.body.appendChild(modal);

const overlay = document.createElement('div');
overlay.className = 'overlay-bg';
document.body.appendChild(overlay);

// Fungsi untuk membuka modal
detailButtons.forEach(button => {
    button.addEventListener('click', () => {
        const description = button.getAttribute('data-description');
        modal.querySelector('.modal-content').innerText = description;
        modal.style.display = 'block';
        overlay.style.display = 'block';
    });
});

// Select the carousel and arrows
const carousel = document.querySelector('.carousel');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

// Set the scroll amount (adjust as needed)
const scrollAmount = 300;

// Event listener for left arrow
leftArrow.addEventListener('click', () => {
    carousel.scrollBy({
        left: -scrollAmount,  // Move left
        behavior: 'smooth'    // Smooth scroll
    });
});

// Event listener for right arrow
rightArrow.addEventListener('click', () => {
    carousel.scrollBy({
        left: scrollAmount,   // Move right
        behavior: 'smooth'    // Smooth scroll
    });
});


// Fungsi untuk menutup modal
const closeModal = () => {
    modal.style.display = 'none';
    overlay.style.display = 'none';
};

modal.querySelector('.close-btn').addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);


