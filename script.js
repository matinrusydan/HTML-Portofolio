
const projects = document.querySelector('.projects');
const projectItems = document.querySelectorAll('.project-0');

function autoScroll() {
    const scrollAmount = 388 + 58; 
    let currentScroll = projects.scrollLeft;
    let targetScroll = currentScroll + scrollAmount;


    projects.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
    });
}


setInterval(autoScroll, 3000);


projectItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'scale(1.05)';  
    });

    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)';  
    });
});

// Ambil elemen tombol hamburger dan menu navigasi
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".btn-nav");
    
    // Toggle menu saat hamburger diklik
    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
        menuToggle.classList.toggle("open");
    });
    
    // Tutup menu jika ada yang mengklik di luar menu
    document.addEventListener("click", function (event) {
        if (!menuToggle.contains(event.target) && !navMenu.contains(event.target)) {
            navMenu.classList.remove("active");
            menuToggle.classList.remove("open");
        }
    });
});

