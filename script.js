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
