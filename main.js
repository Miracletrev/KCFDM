document.addEventListener('DOMContentLoaded', function() {

    // --- Mobile Navigation ---
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));

    // --- Event Countdown Timer ---
    const countdownElement = document.getElementById('countdown');
    if (countdownElement) {
        // TIP: Set the date of your major event here
        const eventDate = new Date("Dec 25, 2024 09:00:00").getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = eventDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            countdownElement.innerHTML = `
                <div><span>${days}</span><p>Days</p></div>
                <div><span>${hours}</span><p>Hours</p></div>
                <div><span>${minutes}</span><p>Minutes</p></div>
                <div><span>${seconds}</span><p>Seconds</p></div>
            `;

            if (distance < 0) {
                clearInterval(interval);
                countdownElement.innerHTML = "<h4>The Event Is Here!</h4>";
            }
        }, 1000);
    }

    // --- Fade-in Animation on Scroll ---
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('visible');
            appearOnScroll.unobserve(entry.target);
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

});