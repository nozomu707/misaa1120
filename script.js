// フォーム送信処理
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // フォームデータの取得
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // バリデーション
    if (!name || !email || !message) {
        showMessage('すべての項目を入力してください。', 'error');
        return;
    }
    
    // メールアドレスの簡易バリデーション
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showMessage('有効なメールアドレスを入力してください。', 'error');
        return;
    }
    
    // 送信成功のシミュレーション（実際の実装ではサーバーに送信）
    showMessage('お問い合わせありがとうございます。メッセージを送信しました。', 'success');
    
    // フォームをリセット
    this.reset();
    
    // 3秒後にメッセージを非表示
    setTimeout(() => {
        hideMessage();
    }, 3000);
});

// メッセージ表示関数
function showMessage(text, type) {
    const messageDiv = document.getElementById('formMessage');
    messageDiv.textContent = text;
    messageDiv.className = 'form-message ' + type;
}

// メッセージ非表示関数
function hideMessage() {
    const messageDiv = document.getElementById('formMessage');
    messageDiv.className = 'form-message';
    messageDiv.textContent = '';
}

// ナビゲーションのスムーススクロール（追加の処理）
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// スクロール時のナビゲーションバーのスタイル変更（オプション）
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
    } else {
        navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    }
});

