function enableHorizontalScroll() {
    const scrollContainers = document.querySelectorAll('.scroll-container');
    
    scrollContainers.forEach(container => {
        container.addEventListener('wheel', (e) => {
            if (e.deltaY !== 0) {
                e.preventDefault();
                e.stopPropagation();
                container.scrollLeft += e.deltaY;
            }
        }, { passive: false });
    });
}

window.addEventListener('DOMContentLoaded', enableHorizontalScroll);