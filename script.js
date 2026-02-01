document.addEventListener("DOMContentLoaded", function() {
    
    // 1. LOADER LOGIC
    setTimeout(function() {
        document.body.classList.add('loaded');
        document.body.classList.remove('loading-active');
    }, 3000);

    // 2. MOUSE FOLLOWER LOGIC
    const cursorImg = document.getElementById('cursor-image');
    const rows = document.querySelectorAll('.project-row');

    // Move image with mouse
    document.addEventListener('mousemove', (e) => {
        cursorImg.style.left = e.clientX + 'px';
        cursorImg.style.top = e.clientY + 'px';
    });

    // Show/Hide image on hover
    rows.forEach(row => {
        row.addEventListener('mouseenter', () => {
            const imgUrl = row.getAttribute('data-image');
            cursorImg.style.backgroundImage = `url(${imgUrl})`;
            cursorImg.classList.add('show-img');
        });
        
        row.addEventListener('mouseleave', () => {
            cursorImg.classList.remove('show-img');
        });
    });
});
