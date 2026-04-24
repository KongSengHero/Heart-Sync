document.addEventListener('DOMContentLoaded', () => {

    // ── Helpers ────────────────────────────────────
    const $ = id => document.getElementById(id);
    const $$ = (sel, el = document) => el.querySelectorAll(sel);

    // ── Floating Hearts ────────────────────────────
    const hearts = $('heartsBg');
    if (hearts) {
        const emojis = ['♥', '❤', '💕', '💗', '💖'];
        Array.from({ length: 18 }, () => {
            const el = document.createElement('span');
            el.className = 'floating-heart';
            el.textContent = emojis[Math.random() * emojis.length | 0];
            Object.assign(el.style, {
                left: Math.random() * 100 + '%',
                fontSize: (0.8 + Math.random() * 1.2) + 'rem'
            })
            el.style.setProperty('--dur', (6 + Math.random() * 8) + 's');
            el.style.setProperty('--delay', (Math.random() * 10) + 's');
            hearts.appendChild(el);
        })
    }

    // ── Hamburger ──────────────────────────────────
    const nav = $('navLinks');
    const hamburger = $('hamburger');
    if (hamburger && nav) hamburger.onclick = () => nav.classList.toggle('open');
    if (nav) $$('a', nav).forEach(a => a.onclick = () => nav.classList.remove('open'));

    // ── Testimonials ───────────────────────────────
    const track = $('testimonialsTrack');
    if (track) {
        const cards = $$('.testi-card', track);
        const dots = $('testiDots');
        let i = 0, timer;
        const go = n => {
            i = (n + cards.length) % cards.length;
            const w = cards[0].offsetWidth + 24;
            track.style.transform = `translateX(-${i * w}px)`;
            $$('.testi-dot', dots).forEach((d, idx) =>
                d.classList.toggle('active', idx === i)
            )
            clearInterval(timer);
            timer = setInterval(() => go(i + 1), 4500);
        }

        cards.forEach((_, idx) => {
            const d = document.createElement('div');
            d.className = 'testi-dot' + (idx === 0 ? ' active' : '');
            d.onclick = () => go(idx);
            dots.appendChild(d);
        })
        const prev = $('testiPrev');
        const next = $('testiNext');
        if (prev) prev.onclick = () => go(i - 1);
        if (next) next.onclick = () => go(i + 1);
        go(0);
    }

    // ── Counter ────────────────────────────────────
    const animate = (el, target, dur = 0) => {
        const start = performance.now();
        const large = target > 999;

        const tick = now => {
            const p = Math.min((now - start) / dur, 1);
            const val = Math.round(target * (1 - (1 - p) ** 3));
            el.textContent = large ? val.toLocaleString() : val;
            p < 1
                ? requestAnimationFrame(tick)
                : el.textContent = large ? target.toLocaleString() : target;
        }
        requestAnimationFrame(tick);
    }

    const observe = (els, cb, t = 0.4) => {
        const obs = new IntersectionObserver(e =>
            e.forEach(x => x.isIntersecting && (cb(x.target), obs.unobserve(x.target)))
            , { threshold: t });

        els.forEach(el => obs.observe(el));
    }

    observe($$('.stats-num[data-target]'), el => animate(el, +el.dataset.target));

    const counter = $('counterMatches');
    if (counter) observe([counter], () => animate(counter, 247, 0), 0.5);
})