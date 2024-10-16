document.querySelectorAll('.page').forEach(button => {
    button.addEventListener('click', () => {
        
        console.log(`Page ${button.textContent} clicked`);
    });
});

document.querySelector('.prev').addEventListener('click', () => {
   
    console.log('Previous page clicked');
});

document.querySelector('.next').addEventListener('click', () => {
    
    console.log('Next page clicked');
});
