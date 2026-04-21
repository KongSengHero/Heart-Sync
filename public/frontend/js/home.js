document.addEventListener('DOMContentLoaded', () => {

    // ── Floating Hearts Background ──────────────────
    const heartsBg = document.getElementById('heartsBg');
    const heartEmojis = ['♥', '❤', '💕', '💗', '💖'];
    const HEART_COUNT = 18;

    for (let i = 0; i < HEART_COUNT; i++) {
        const el = document.createElement('span');
        el.classList.add('floating-heart');
        el.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
        el.style.setProperty('--dur', (6 + Math.random() * 8) + 's');
        el.style.setProperty('--delay', (Math.random() * 10) + 's');
        el.style.left = (Math.random() * 100) + '%';
        el.style.fontSize = (0.8 + Math.random() * 1.2) + 'rem';
        heartsBg.appendChild(el);
    }

    // ── Hamburger Menu ──────────────────────────────
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    hamburger?.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });
    // Close on link click
    navLinks?.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => navLinks.classList.remove('open'));
    });

    // ── Testimonials Slider ─────────────────────────
    const track = document.getElementById('testimonialsTrack');
    const dotsWrap = document.getElementById('testiDots');
    const prevBtn = document.getElementById('testiPrev');
    const nextBtn = document.getElementById('testiNext');

    if (track) {
        const cards = track.querySelectorAll('.testi-card');
        let current = 0;
        let autoTimer;

        // Create dots
        cards.forEach((_, i) => {
            const dot = document.createElement('div');
            dot.classList.add('testi-dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goTo(i));
            dotsWrap.appendChild(dot);
        });

        function goTo(idx) {
            current = (idx + cards.length) % cards.length;
            // On mobile show 1 card, else 2
            const perView = window.innerWidth < 768 ? 1 : 2;
            const cardWidth = cards[0].offsetWidth + 24; // gap = 24px
            track.style.transform = `translateX(-${current * cardWidth}px)`;
            dotsWrap.querySelectorAll('.testi-dot').forEach((d, i) => {
                d.classList.toggle('active', i === current);
            });
            resetAuto();
        }

        function resetAuto() {
            clearInterval(autoTimer);
            autoTimer = setInterval(() => goTo(current + 1), 4500);
        }

        prevBtn?.addEventListener('click', () => goTo(current - 1));
        nextBtn?.addEventListener('click', () => goTo(current + 1));
        resetAuto();
    }

    // ── Counter Animation ───────────────────────────
    function animateCounter(el, target, duration = 2000) {
        const start = performance.now();
        const startVal = 0;
        const isLarge = target > 999;

        function tick(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(startVal + (target - startVal) * eased);

            if (isLarge) { el.textContent = current.toLocaleString(); }
            else { el.textContent = current; }

            if (progress < 1) requestAnimationFrame(tick);
            else el.textContent = isLarge ? target.toLocaleString() : target;
        }
        requestAnimationFrame(tick);
    }

    // Intersection Observer for stats
    const statNums = document.querySelectorAll('.stats-num[data-target]');
    if (statNums.length) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const target = parseInt(el.dataset.target, 10);
                    animateCounter(el, target);
                    observer.unobserve(el);
                }
            });
        }, { threshold: 0.4 });

        statNums.forEach(el => observer.observe(el));
    }

    // Animate the feature stat card counter
    const counterEl = document.getElementById('counterMatches');
    if (counterEl) {
        const obs = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                animateCounter(counterEl, 247, 1800);
                obs.unobserve(counterEl);
            }
        }, { threshold: 0.5 });
        obs.observe(counterEl);
    }
})
