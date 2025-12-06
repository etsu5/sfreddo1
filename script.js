// カスタムカーソル
document.addEventListener('DOMContentLoaded', function() {
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');

    // カーソルを画面外に初期配置
    let mouseX = -100;
    let mouseY = -100;
    let outlineX = -100;
    let outlineY = -100;

    // マウス移動を追跡
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;

        // ドットはマウスと同じ位置
        cursorDot.style.left = mouseX + 'px';
        cursorDot.style.top = mouseY + 'px';
    });

    // アウトラインは少し遅れて追従（滑らかな動き）
    function animateOutline() {
        outlineX += (mouseX - outlineX) * 0.15;
        outlineY += (mouseY - outlineY) * 0.15;

        cursorOutline.style.left = outlineX + 'px';
        cursorOutline.style.top = outlineY + 'px';

        requestAnimationFrame(animateOutline);
    }
    animateOutline();

    // ホバーエフェクト
    const interactiveElements = document.querySelectorAll('a, button, .gallery-item');

    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursorOutline.style.borderColor = 'var(--accent)';
        });

        element.addEventListener('mouseleave', function() {
            cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorOutline.style.borderColor = 'rgba(26, 26, 26, 0.3)';
        });
    });
});

// 言語切り替え機能
document.addEventListener('DOMContentLoaded', function() {
    let currentLang = 'ja'; // デフォルトは日本語
    const langToggle = document.getElementById('langToggle');
    const langCurrent = document.querySelector('.lang-current');
    const langNext = document.querySelector('.lang-next');

    // 言語切り替え関数
    function switchLanguage() {
        // 言語を切り替え
        currentLang = currentLang === 'ja' ? 'en' : 'ja';

        // すべてのdata-ja, data-en属性を持つ要素を取得
        const elements = document.querySelectorAll('[data-ja][data-en]');

        elements.forEach(element => {
            const jaText = element.getAttribute('data-ja');
            const enText = element.getAttribute('data-en');

            if (currentLang === 'ja') {
                element.innerHTML = jaText;
            } else {
                element.innerHTML = enText;
            }
        });

        // ボタンのテキストを更新
        if (currentLang === 'ja') {
            langCurrent.textContent = '日本語';
            langNext.textContent = 'EN';
        } else {
            langCurrent.textContent = 'English';
            langNext.textContent = '日本語';
        }

        // 選択した言語をローカルストレージに保存
        localStorage.setItem('preferredLanguage', currentLang);
    }

    // ページ読み込み時に保存された言語設定を確認
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && savedLang !== currentLang) {
        switchLanguage();
    }

    // ボタンクリックイベント
    langToggle.addEventListener('click', switchLanguage);

    console.log('sfreddo hair - Website Loaded');
});

// Scroll Reveal Animations
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right').forEach(element => {
        observer.observe(element);
    });

    // Stagger animation for menu items
    const staggerItems = document.querySelectorAll('.stagger-item');
    staggerItems.forEach((item, index) => {
        setTimeout(() => {
            observer.observe(item);
            item.style.transitionDelay = `${index * 0.1}s`;
        }, 100);
    });
});
