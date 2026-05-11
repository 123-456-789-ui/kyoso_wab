// ページが読み込まれたあとに実行される処理
window.addEventListener('DOMContentLoaded', function () {
  // 「詳しく知る」ボタンを取得
  var learnMoreButton = document.getElementById('learnMoreButton');

  // ボタンがクリックされたときのイベントを設定
  learnMoreButton.addEventListener('click', function () {
    // 案内メッセージを表示する小さな例
    alert('オープンキャンパスや学部紹介ページで、もっと詳しく学んでみましょう！');
  });
});
