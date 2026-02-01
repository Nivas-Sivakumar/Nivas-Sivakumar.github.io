window.addEventListener('load', () => {
    const body = document.body;
    
    // The "min 3 seconds" logic
    setTimeout(() => {
        // Add the class 'loaded' to the body
        // This triggers the CSS transformation on #loader
        body.classList.add('loaded');
        
        // Remove the class 'loading-active' to allow scrolling
        // (We usually hide scrollbars during loading)
        body.classList.remove('loading-active');
        
    }, 3000); // 3000ms = 3 Seconds
});
