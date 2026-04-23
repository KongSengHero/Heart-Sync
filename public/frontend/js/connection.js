const PROFILES = [
    {
        "id": 1,
        "name": "TheFatRat",
        "age": 46,
        "location": "Leipzig, Germany",
        "status": "Spinning beats for gamers and coffee lovers.",
        "tags": ["Music", "DJ", "EDM", "Gaming", "Glitch-Hop"],
        "match": 85,
        "isOnline": true,
        "banner": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FeWOuuwrREh0%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=2989638c8ad26634d0540483975a84411bb747e56338a86fadb5f589e0105f80",
        "avatar": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyt3.ggpht.com%2F-iiX3gjXdpb4%2FAAAAAAAAAAI%2FAAAAAAAAAAA%2Fo-Ym1OhAfxA%2Fs900-c-k-no-mo-rj-c0xffffff%2Fphoto.jpg&f=1&nofb=1&ipt=2777fc5e63426808734e92dea4cd2e653f6de3225e8e42f9d4fa81b596325aca"
    },
    {
        "id": 2,
        "name": "Goku",
        "age": 35,
        "location": "Earth (Universe 7)",
        "status": "Kamehameha! Training to be the strongest.",
        "tags": ["Saiyan", "Martial Arts", "Dragon Ball", "Family", "Food"],
        "match": 95,
        "isOnline": true,
        "banner": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic1.cbrimages.com%2Fwordpress%2Fwp-content%2Fuploads%2F2022%2F05%2FGoku-Joins-The-Z-Fighters-In-Dragon-Ball-Z.jpg&f=1&nofb=1&ipt=f5e018a03ff3f85bf3e6ef12a806679f710493aedabb253d5908fb4e6d0dce9d",
        "avatar": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapers.com%2Fimages%2Fhd%2Fblue-anime-goku-ultra-instinct-xnhk14mzfow4ouhl.jpg&f=1&nofb=1&ipt=7d5e50e871f90aa073b5150f6a9c6f0587c23ab63cea7ac7a3401169f6f505f3"
    },
    {
        "id": 3,
        "name": "Reze",
        "age": 18,
        "location": "Japan/Soviet Union",
        "status": "Bombs away – I always aim for the heart.",
        "tags": ["Anime", "ChainsawMan", "Bomb Devil", "Spy"],
        "match": 76,
        "isOnline": false,
        "banner": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.i3Jeav27Q2bk6Vsj6K8gsAHaEK%3Fpid%3DApi&f=1&ipt=f28f88d3a46f63a8ffbc2416eb12e9cc21d45aa3a2260dd30967dd72ccaad292&ipo=images",
        "avatar": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages7.alphacoders.com%2F140%2Fthumb-1920-1400571.jpg&f=1&nofb=1&ipt=2edcfdbbd0d351d3a7e7822c4ed8170ef2e154d710f806247cf1aba79b60b08b"
    },
    {
        "id": 4,
        "name": "Jojo",
        "age": 22,
        "location": "Morioh, Japan",
        "status": "ORA ORA ORA! Fighting for the Joestar legacy.",
        "tags": ["Anime", "JoJo", "Stand", "Hamon", "Adventure"],
        "match": 88,
        "isOnline": true,
        "banner": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.mRbLWLNp3rID7a6PMDhfZwHaEK%3Fpid%3DApi&f=1&ipt=8512e588e0d3ca8bb593463b683aaa7cd84589e9484a377bb9b71eec6860a4ea&ipo=images",
        "avatar": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.TkUuJyt10gPepRuqp9rbXAHaEK%3Fpid%3DApi&f=1&ipt=601f531f6ebb041cdf263e2cd00c75731383636c379904d78129de4423af9128&ipo=images"
    },
    {
        "id": 5,
        "name": "John Wick",
        "age": 45,
        "location": "New York City, USA",
        "status": "Retired? My loyalty is to my honor.",
        "tags": ["Assassin", "Action", "Gun", "Baba Yaga", "Dog"],
        "match": 90,
        "isOnline": true,
        "banner": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.h_u4cwJ33juyJwBPoPo8SAHaEK%3Fpid%3DApi&f=1&ipt=ac3cb501b6ea3eb6e369f81e344872acd81a8a7c12e6662ea8c6c1ed647c5982&ipo=images",
        "avatar": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.ckud64fBE7mqDuyzUeyOjwHaD4%3Fpid%3DApi&f=1&ipt=04fe2531246d39f445bdf093e98c5be02ff34598822a2b5de23209426ab2cf1c&ipo=images"
    },
    {
        "id": 6,
        "name": "IronMan",
        "age": 50,
        "location": "New York, USA",
        "status": "Genius billionaire in a suit of iron.",
        "tags": ["Superhero", "Tech", "Avengers", "Engineer", "Armor"],
        "match": 95,
        "isOnline": false,
        "banner": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.iNZSbYHyeCCZUiwX46g4LQHaEK%3Fpid%3DApi&f=1&ipt=2da718c2b1d575d8582001ab30d497c33cc3665915a7ffc6bd52aeebc0ee6fbf&ipo=images",
        "avatar": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.3WS9O5-QZ0PWHDszpZitdAHaHa%3Fpid%3DApi&f=1&ipt=429c693813ee2661d53da8cfa8bb9ad5c5583553ffe8aa1aad97ffb304e534b3&ipo=images"
    },
    {
        "id": 7,
        "name": "Introvert Dude",
        "age": 30,
        "location": "Phnom Penh, KH",
        "status": "I recharge with coffee and a good book.",
        "tags": ["Books", "Coffee", "Gaming", "Introvert", "Music"],
        "match": 70,
        "isOnline": false,
        "banner": "",
        "avatar": "https://i.pinimg.com/736x/f2/ff/8a/f2ff8a69c4b359e4127d6d59cc1844fc.jpg"
    },
    {
        "id": 8,
        "name": "Introvert Gal",
        "age": 28,
        "location": "Phnom Penh, KH",
        "status": "Making art and sipping tea in peace.",
        "tags": ["Art", "Coffee", "Books", "Introvert", "Nature"],
        "match": 72,
        "isOnline": false,
        "banner": "",
        "avatar": "https://i.pinimg.com/736x/24/62/05/246205cd880051f42ba39ad9ffbdbf53.jpg"
    },
    {
        "id": 9,
        "name": "Jerry",
        "age": 2,
        "location": "Cartoon House",
        "status": "Chasing cheese and chasing Tom!",
        "tags": ["Cartoon", "Mouse", "Mischief", "Classic Animation"],
        "match": 80,
        "isOnline": true,
        "banner": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.GU6deOrOTzdCCXkeH8LkVgHaEK%3Fpid%3DApi&f=1&ipt=4600551b50a423f9b26dd1bd0c3726c3abf94ff68c4ac24d862fdc62349acd0b&ipo=images",
        "avatar": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.iVkXtfbGleu8fsK52ipAOAHaJQ%3Fpid%3DApi&f=1&ipt=78a1f85a664e6352e484454e5ec3e59c88ca44a8b35758c3d90c8db4d5bd1bed&ipo=images"
    },
    {
        id: 10,
        name: 'Naruto',
        age: 19,
        location: 'Konoha',
        status: 'I never go back on my word. That’s my ninja way.',
        tags: ['Anime', 'Ninja', 'Determination', 'Friends'],
        match: 91,
        isOnline: true,
        banner: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.L_4R6m3YAlK6VndyV3XXgAHaDt%3Fpid%3DApi&f=1&ipt=e1f0b52bf630c23d646ce4a0aef1ee09050bb75a854d592db8c38736c5430c25&ipo=images',
        avatar: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.sXVeFKKL3fOj0r4ow71KDQHaEK%3Fpid%3DApi&f=1&ipt=125ca7fe687f6952cc642475c4354d649947032c11829818d18c71cc1cba1f3f&ipo=images'
    },
    {
        id: 11,
        name: 'Levi Ackerman',
        age: 34,
        location: 'Paradise Island',
        status: 'Cleanliness is next to survival.',
        tags: ['Anime', 'Soldier', 'Discipline', 'Strategy'],
        match: 88,
        isOnline: false,
        banner: '',
        avatar: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.0N3mlIg8DHgdk35vSpuf9AHaQB%3Fpid%3DApi&f=1&ipt=b482a81a507f42ae552b9aaec52864de4eb1daafa540a88a6de94a1899f4d00f&ipo=images'
    },
    {
        id: 12,
        name: 'Deadpool',
        age: 35,
        location: 'Somewhere breaking the 4th wall',
        status: 'Maximum effort.',
        tags: ['Marvel', 'Chaos', 'Humor', 'Action'],
        match: 84,
        isOnline: true,
        banner: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.pOpEhkd-IL7SdaSEseePbwHaDq%3Fpid%3DApi&f=1&ipt=41093efa030e36854adc798c8529d54c320e7e6f594b0bf900d89cc3b6b886fd&ipo=images',
        avatar: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.PhFYUYsYV0LqvHp6jQxyXAHaNL%3Fpid%3DApi&f=1&ipt=5d31af8b4a22c1b08732e6b59b1619eaeaae8c8bfadb8f4ed49780d13f5a37b0&ipo=images'
    },
    {
        id: 13,
        name: 'Batman',
        age: 40,
        location: 'Gotham',
        status: 'I am vengeance. I am the night.',
        tags: ['DC', 'Detective', 'Dark', 'Justice'],
        match: 89,
        isOnline: false,
        banner: '',
        avatar: ''
    },
    {
        id: 14,
        name: 'Spider-Man',
        age: 21,
        location: 'New York',
        status: 'With great power comes great responsibility.',
        tags: ['Marvel', 'Hero', 'Agility', 'Science'],
        match: 93,
        isOnline: true,
        banner: '',
        avatar: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.S0Oyt_9aGGAe_pObmVGzfAHaE8%3Fpid%3DApi&f=1&ipt=e07f788fc9a4d484a20b63219ac175a505f16753d02e7bc5584c7e4e301decbd&ipo=images'
    },
    {
        id: 15,
        name: 'Walter White',
        age: 50,
        location: 'Albuquerque',
        status: 'I am the one who knocks.',
        tags: ['BreakingBad', 'Chemistry', 'Power', 'Control'],
        match: 77,
        isOnline: false,
        banner: 'https://images.unsplash.com/photo-1519681393784-d120267933ba',
        avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d'
    },
    {
        id: 16,
        name: 'Mr. Bean',
        age: 45,
        location: 'London',
        status: '...',
        tags: ['Comedy', 'Silent', 'Chaos', 'Classic'],
        match: 82,
        isOnline: true,
        banner: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330'
    },
    {
        id: 17,
        name: 'Light Yagami',
        age: 23,
        location: 'Tokyo',
        status: 'I will become the god of a new world.',
        tags: ['Anime', 'DeathNote', 'Intelligence', 'Justice'],
        match: 86,
        isOnline: true,
        banner: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d',
        avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c'
    },
    {
        id: 18,
        name: 'Elon Musk',
        age: 54,
        location: 'Mars (soon)',
        status: 'Occupy Mars.',
        tags: ['Tech', 'Space', 'Business', 'Innovation'],
        match: 83,
        isOnline: true,
        banner: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa',
        avatar: 'https://images.unsplash.com/photo-1557862921-37829c790f19'
    },
    {
        id: 19,
        name: 'NPC #4721',
        age: 999,
        location: 'Background Loop',
        status: 'I used to be an adventurer like you...',
        tags: ['Troll', 'NPC', 'Loop', 'Glitch'],
        match: 60,
        isOnline: true,
        banner: 'https://images.unsplash.com/photo-1511512578047-dfb367046420',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde'
    }
]



// Gradient fallbacks used when the image file isn't available yet
const FALLBACK_BANNERS = [
    'linear-gradient(135deg, #ef5b3f, #ff896c)',
    'linear-gradient(135deg, #1f2a42, #4b5f8f)',
    'linear-gradient(135deg, #f3ad64, #f68a5f)'
];
const FALLBACK_AVATARS = [
    'linear-gradient(135deg, #ef5b3f, #ff7a59)',
    'linear-gradient(135deg, #1f2a42, #4b5f8f)',
    'linear-gradient(135deg, #f3ad64, #f68a5f)'
];

async function renderProfiles(openDirectPanel) {
    const grid = document.getElementById('profileGrid');
    if (!grid) return;

    const res = await fetch('./components/connection_profile.html');
    const html = await res.text();
    const doc = new DOMParser().parseFromString(html, 'text/html');
    const template = doc.getElementById('profileCardTemplate');
    if (!template) return;

    PROFILES.forEach((p, i) => {
        const card = template.content.cloneNode(true).querySelector('.profile-card');

        // Banner
        const cover = card.querySelector('.profile-cover');
        const img = new Image();
        img.onload = () => { cover.style.backgroundImage = `url('${p.banner}')`; };
        img.onerror = () => { cover.style.background = FALLBACK_BANNERS[i]; };
        img.src = p.banner;

        // Match badge
        card.querySelector('.match-badge').textContent = `${p.match}% Match`;

        // Avatar
        const avatar = card.querySelector('.card-avatar');
        const avatarImg = new Image();
        avatarImg.onload = () => {
            avatar.style.backgroundImage = `url('${p.avatar}')`;
            card.querySelector('.avatar-initials').textContent = '';
        };
        avatarImg.onerror = () => {
            avatar.style.background = FALLBACK_AVATARS[i];
            card.querySelector('.avatar-initials').textContent = p.name[0];
        };
        avatarImg.src = p.avatar;

        // Online dot
        const dot = card.querySelector('.online-dot');
        if (!p.isOnline) dot.style.display = 'none';

        // Text content
        card.querySelector('.profile-name').textContent = `${p.name}, ${p.age}`;
        card.querySelector('.profile-location').textContent = p.location;
        card.querySelector('.profile-status').textContent = `"${p.status}"`;

        // Tags
        const tagList = card.querySelector('.tag-list');
        p.tags.forEach(tag => {
            const span = document.createElement('span');
            span.textContent = tag;
            tagList.appendChild(span);
        });

        // Stagger animation
        card.style.animationDelay = `${i * 0.08}s`;

        // Message button wires into direct chat
        card.querySelector('.btn-message').addEventListener('click', () => {
            openDirectPanel();
        });

        grid.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const globalPanel = document.getElementById('globalChatPanel');
    const directPanel = document.getElementById('directChatPanel');
    const openGlobalBtn = document.getElementById('openGlobalChat');
    const openDirectBtn = document.getElementById('openDirectChat');

    function openPanel(panel) {
        panel.classList.add('active');
        panel.setAttribute('aria-hidden', 'false');
        document.body.classList.add('panel-open');
    }

    function closePanel(panel) {
        panel.classList.remove('active');
        panel.setAttribute('aria-hidden', 'true');
        if (!globalPanel.classList.contains('active') && !directPanel.classList.contains('active')) {
            document.body.classList.remove('panel-open');
        }
    }

    // Render profile cards
    renderProfiles(() => openPanel(directPanel));

    // FAB open buttons
    openGlobalBtn.addEventListener('click', () => openPanel(globalPanel));
    openDirectBtn.addEventListener('click', () => openPanel(directPanel));

    // Close buttons (data-panel="global" or "direct")
    document.querySelectorAll('.panel-close').forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.dataset.panel === 'global' ? globalPanel : directPanel;
            closePanel(target);
        });
    });

    // Click the backdrop (overlay itself) to close
    [globalPanel, directPanel].forEach(panel => {
        panel.addEventListener('click', e => {
            if (e.target === panel) closePanel(panel);
        });
    });

    // Escape key
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            if (globalPanel.classList.contains('active')) closePanel(globalPanel);
            if (directPanel.classList.contains('active')) closePanel(directPanel);
        }
    });
});
