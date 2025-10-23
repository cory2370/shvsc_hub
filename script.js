function enableHorizontalScroll() {
    const scrollContainers = document.querySelectorAll('.scroll-container');
    
    scrollContainers.forEach(container => {
        container.addEventListener('wheel', (e) => {
            if (e.deltaY !== 0) {
                e.preventDefault();
                container.scrollLeft += e.deltaY;
            }
        });
    });
}

window.addEventListener('DOMContentLoaded', enableHorizontalScroll);