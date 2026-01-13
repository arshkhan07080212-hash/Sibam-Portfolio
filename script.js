// Smooth scrolling for nav links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Video modal
const modal = document.getElementById('video-modal');
const iframe = document.getElementById('video-iframe');
const closeBtn = document.querySelector('.close');

document.querySelectorAll('.play-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const videoUrl = this.parentElement.getAttribute('data-video');
        iframe.src = videoUrl;
        modal.style.display = 'block';
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    iframe.src = '';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        iframe.src = '';
    }
});

// Load more for more works
const loadMoreBtn = document.getElementById('load-more');
const masonryContainer = document.getElementById('masonry-container');
let itemCount = 6; // Initial count

loadMoreBtn.addEventListener('click', () => {
    // Simulate loading more items (replace with real data)
    for (let i = 0; i < 3; i++) {
        const newItem = document.createElement('div');
        newItem.className = 'work-item';
        newItem.innerHTML = `
            <img src="https://via.placeholder.com/250x150/333/fff?text=Edit${itemCount + i}" alt="Edit">
            <div class="platform">YouTube</div>
        `;
        masonryContainer.appendChild(newItem);
    }
    itemCount += 3;
    if (itemCount >= 15) loadMoreBtn.style.display = 'none'; // Hide after 15
});
