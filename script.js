
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


