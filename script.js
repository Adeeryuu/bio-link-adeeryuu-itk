document.addEventListener('DOMContentLoaded', () => {
    const profilePicture = document.querySelector('.profile-picture');
    
    profilePicture.addEventListener('mouseover', () => {
        profilePicture.style.transform = 'rotate(10deg)';
        profilePicture.style.filter = 'brightness(1.3)';
    });

    profilePicture.addEventListener('mouseout', () => {
        profilePicture.style.transform = 'rotate(0deg)';
        profilePicture.style.filter = 'brightness(1)';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const nameElement = document.querySelector('.name');
    const nameText = nameElement.textContent;
    const words = nameText.split(''); // Membagi teks menjadi array karakter
    
    // Kosongkan elemen untuk mengganti dengan spanned text
    nameElement.textContent = '';
    
    // Menambahkan span untuk setiap karakter
    words.forEach(char => {
        const span = document.createElement('span');
        span.textContent = char;
        span.setAttribute('data-text', char);
        nameElement.appendChild(span);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const bioElement = document.querySelector('.bio');
    const mirrorEffect = document.createElement('div');
    mirrorEffect.className = 'mirror-effect';
    document.body.appendChild(mirrorEffect);
    
    document.addEventListener('mousemove', (event) => {
        const x = event.clientX;
        const y = event.clientY;
        
        mirrorEffect.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        mirrorEffect.style.background = `rgba(255, 255, 255, 0.2)`;
    });

    bioElement.addEventListener('mouseover', () => {
        bioElement.classList.add('cursor-mirror');
    });
    
    bioElement.addEventListener('mouseout', () => {
        bioElement.classList.remove('cursor-mirror');
    });
});
