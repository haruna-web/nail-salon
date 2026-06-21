// const btn = document.getElementById("btn");

// btn.addEventListener("click", () => {
//   alert("押されました");
// });



console.log("script読めてる");
console.log(document.querySelector(".ml3"));

// 文字を1文字ずつ span タグで囲む
var textWrapper = document.querySelector('.ml3');

textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

// アニメーションのタイムラインを作成（繰り返し実行）
anime.timeline({ loop: true })

  // 1文字ずつフェードイン
  .add({
    targets: '.ml3 .letter',   // 対象の文字
    opacity: [0, 1],           // 透明 → 表示
    easing: "easeInOutQuad",   // なめらかな動き
    duration: 2250,            // アニメーション時間
    delay: (el, i) => 150 * (i + 1) // 文字ごとに少し遅らせる
  })

  // テキスト全体をフェードアウト
  .add({
    targets: '.ml3',           // テキスト全体
    opacity: 0,                // 非表示にする
    duration: 1000,            // フェードアウト時間
    easing: "easeOutExpo",     // 減速しながら消える
    delay: 1000                // 1秒待ってから消える
  });