const FORTUNES = [
  {
    rank: '大吉',
    cssClass: 'rank-daikichi',
    weight: 5,
    messages: [
      'えぇえぇ、大吉！どもです～！お尻のひびがキュアフローラのリボンみたいにきれいに出た、すぬまるの占い史上最高傑作だわ！',
      'えぇえぇ！大吉！どもです～！プリキュアの最終回でも滅多に出ない奇跡のひびだよ！イオンタウン名西に行けばもっといいことが重なるね！',
      'えぇえぇ、大吉！どもです～！このひびの美しさはゴープリ39話に匹敵する。すぬまるの読み取り能力、やっぱ天才じゃん！',
      'えぇえぇ！どもです～！大吉中の大吉！お尻がこんなにきれいに割れたの初めて見た、歴史的な瞬間だよ！',
      'えぇえぇ、大吉！どもです～！イオンタウン名西のプリキュアコーナーで絶対いいもの見つかるやつじゃん、行って！',
    ],
    items: [
      { label: '全体運', values: ['最高の運気', '何事も順調', '輝かしい一日', '奇跡が起きる予感', '全力で突き進め'] },
      { label: '恋愛運', values: ['良縁に恵まれる', '想いが通じる', '愛が深まる', '告白するなら今', '運命の出会いあり'] },
      { label: '仕事運', values: ['大きな成果が出る', '昇進の兆しあり', '才能が開花する', 'アイデアが次々湧く', '周囲から注目される'] },
      { label: '金運',   values: ['臨時収入あり', '財運上昇中', '思わぬ収穫がある', 'お金が巡ってくる', 'グッズ購入の吉日'] },
      { label: '健康運', values: ['心身ともに絶好調', '活力みなぎる', 'エネルギー全開', '体が軽く感じる', '疲れ知らずの一日'] },
    ],
    precure: [
      { name: 'キュアフローラ', reason: '大吉の日はゴープリのフローラを見て！夢に向かって諦めない姿勢が今のあなたにぴったりだよ！' },
      { name: 'キュアハッピー', reason: '最高の運気にはキュアハッピーが合う！「ウルトラハッピー！」って叫んでみて、もっと幸せになれるよ！' },
      { name: 'キュアエール', reason: 'HUGっとのエールは未来を諦めない子。大吉の今日、あなたも未来に向かって全力で行って！' },
      { name: 'キュアプリズム', reason: 'ひろプリのプリズムみたいに純粋に輝ける日！自分を信じて突き進んで！' },
    ],
  },
  {
    rank: '吉',
    cssClass: 'rank-kichi',
    weight: 20,
    messages: [
      'えぇえぇ、吉！どもです～！イオンタウン名西でプリキュアのガチャ絶対当たるやつじゃん、行くしかないよ！',
      'えぇえぇ！吉！どもです～！これはトロピカル～ジュ！プリキュア序盤の上り調子と同じひびの出方だわ！',
      'えぇえぇ、吉！どもです～！キュアサマーのパワーがお尻に宿ってる、すぬまるにしか分からない読みだよこれ！',
      'えぇえぇ、吉！どもです～！いい運気だよ、このまま素直に行けばプリキュアみたいに輝けるから！',
      'えぇえぇ！吉！どもです～！ひびの形がキュアサンシャインの変身ポーズに似てる、これは上昇サインだわ！',
    ],
    items: [
      { label: '全体運', values: ['運気は上昇中', '良い流れにいる', '穏やかな好機', 'いい風が吹いてる', '前向きに行けば吉'] },
      { label: '恋愛運', values: ['素直な気持ちが大切', '相手を思いやると吉', '縁が結ばれやすい', '距離を縮めるチャンス', 'デートの誘いに応じて'] },
      { label: '仕事運', values: ['着実に前進できる', '努力が報われる', '信頼を積み重ねる時', '周囲との連携が吉', '新しい仕事が来る予感'] },
      { label: '金運',   values: ['堅実な管理が吉', '計画的な支出が大切', '蓄えが増える', 'プチ贅沢はOK', 'お気に入りのグッズを買って'] },
      { label: '健康運', values: ['規則正しい生活が吉', '無理しなければ良好', '適度な運動が吉', '気力が充実している', '外に出ると運気UP'] },
    ],
    precure: [
      { name: 'キュアサマー', reason: '吉の日はトロピカルのサマーを見て！自分らしく突き進む元気をもらえるよ！' },
      { name: 'キュアサンシャイン', reason: 'ハートキャッチのサンシャインみたいに、陽の光で着実に進める日！真面目にコツコツいこう。' },
      { name: 'キュアスター', reason: 'スタートゥインクルのスターは夢を大切にする子。吉の今日、自分の夢をちゃんと見つめて！' },
      { name: 'キュアグレース', reason: 'ヒーリングのグレースみたいに周りに優しくすると、さらに運気上がるよ！' },
    ],
  },
  {
    rank: '中吉',
    cssClass: 'rank-chukichi',
    weight: 25,
    messages: [
      'えぇえぇ、中吉！どもです～！イオンタウン名西のフードコートで英気を養えばもっと上がるね、すぬまるがそう読んだ！',
      'えぇえぇ、中吉！どもです～！これはプリキュア第20話あたりのひびの形だわ、ここから盛り上がるやつ！すぬまるの分析は外れない！',
      'えぇえぇ！中吉！どもです～！すぬまるもイオンタウン名西でコツコツグッズ集めてるし、コツコツが一番強いんだよね！',
      'えぇえぇ、中吉！どもです～！悪くないよ！プリキュアで言うと中盤戦、ここが踏ん張りどころだって分かる人が勝つんだよね！',
      'えぇえぇ、中吉！どもです～！ひびが均等に出てる、これは安定の証だわ。地に足つけて行こう！',
    ],
    items: [
      { label: '全体運', values: ['平穏な運気', '大過なく過ごせる', '小さな幸せが積み重なる', '安定した一日', '地道が勝ちの日'] },
      { label: '恋愛運', values: ['焦らず育てて', 'ゆっくり距離を縮めよ', '誠実さが鍵', '日常の会話を大切に', '友達として信頼を積んで'] },
      { label: '仕事運', values: ['地道な努力が大事', '丁寧に取り組めば吉', '基礎を固める時期', '焦りは禁物', 'ミスなく着実にこなして'] },
      { label: '金運',   values: ['無駄遣いに注意', '節約が吉', '急な投資は避けて', '計画的に使えば問題なし', '欲しいものはリストアップして待って'] },
      { label: '健康運', values: ['睡眠を十分に', '食事バランスに気をつけて', 'ストレスを溜め込まないで', '軽い運動が効く', '水分補給を忘れずに'] },
    ],
    precure: [
      { name: 'キュアブロッサム', reason: 'ハートキャッチのブロッサムは最初は弱かったけど着実に成長した子。中吉の今日、コツコツ積み上げて！' },
      { name: 'キュアミルキー', reason: 'スタートゥインクルのミルキーみたいに、冷静に丁寧に進める日。焦らなくて大丈夫！' },
      { name: 'キュアホイップ', reason: 'キラキラのホイップは努力でスイーツを磨いた子。中吉の日はコツコツ努力が実る！' },
      { name: 'キュアコーラル', reason: 'トロピカルのコーラルみたいに、自分のペースで着実に行けば絶対大丈夫！' },
    ],
  },
  {
    rank: '小吉',
    cssClass: 'rank-shokichi',
    weight: 20,
    messages: [
      'えぇえぇ、小吉！どもです～！プリキュアだって第1話は普通の女の子からだし、小さい吉を侮るなってすぬまるは知ってる！',
      'えぇえぇ、小吉！どもです～！イオンタウン名西の100円ショップで掘り出し物あるやつだよ、すぬまるのお尻がそう言ってる！',
      'えぇえぇ、小吉！どもです～！すぬまるも今日イオンタウン名西行くし、一緒に運気上げてこ！',
      'えぇえぇ、小吉！どもです～！ひびは小さめだけど、ちゃんと出てるよ！小さくても確かな運気があるから！',
      'えぇえぇ、小吉！どもです～！キュアカスタードだって小さいのに強いじゃん、小さい吉をなめたらあかんよ！',
    ],
    items: [
      { label: '全体運', values: ['小さな喜びを大切に', '穏やかで無難', '心の余裕が大切', '細部に幸運が潜む', '見過ごしがちなことに注目して'] },
      { label: '恋愛運', values: ['友人として接するのが吉', '信頼関係を築いてから', '一歩引いて観察して', '相手の小さな変化に気づいて', '焦らず自分を磨いて'] },
      { label: '仕事運', values: ['現状維持が賢明', '新挑戦は少し待って', '周囲との協調が大切', 'サポート役に徹すると吉', '今は実力を蓄える時'] },
      { label: '金運',   values: ['大きな出費は控えめに', '財布の紐を固く', '地道に貯蓄して', '小さな節約が積み重なる', 'セール品を活用するのが吉'] },
      { label: '健康運', values: ['疲れを溜めないように', '体の声に耳を傾けて', '早めの休養が大事', '無理しないのが一番', 'リラックスタイムを作って'] },
    ],
    precure: [
      { name: 'キュアカスタード', reason: 'キラキラのカスタードは小柄でも頭脳派で強い！小吉の今日、知恵と観察力で乗り切って！' },
      { name: 'キュアピース', reason: 'スマイルのピースはちょっとドジだけど、それが愛されてた。小吉の日は素のままでいいんだよ！' },
      { name: 'キュアリズム', reason: 'スイートのリズムみたいに、確かな技術と冷静さで小さな吉を大きく育てて！' },
      { name: 'キュアウィング', reason: 'ひろプリのウィングは成長途中でも空を飛んだ！今は小吉でも、これからどんどん伸びるよ！' },
    ],
  },
  {
    rank: '末吉',
    cssClass: 'rank-suekichi',
    weight: 15,
    messages: [
      'えぇえぇ、末吉！どもです～！変身前のキュアブラックも最初は冴えない女の子だったじゃん、そういう時期だよ！',
      'えぇえぇ、末吉！どもです～！イオンタウン名西でのんびりするのが今一番正解な動きだわ、すぬまるが断言する！',
      'えぇえぇ、末吉！どもです～！焦ったら負けだよ、プリキュアオタク歴のあるすぬまるが言うんだから間違いない！',
      'えぇえぇ、末吉！どもです～！ひびが遠慮がちに出てる、これは「今は待て」のサインだよ！',
      'えぇえぇ、末吉！どもです～！末吉って「末に吉」って書くんだよ、つまり後から来るやつじゃん！楽しみにしてていいよ！',
    ],
    items: [
      { label: '全体運', values: ['今は準備の時期', 'いずれ好転する', '辛抱が大切', '蓄えを作る時', '焦らず待つのが正解'] },
      { label: '恋愛運', values: ['時期を待つことが大切', '自分を磨く時間に', '縁は焦らず待って', '今は自分のことに集中して', 'じっくり相手を見極めて'] },
      { label: '仕事運', values: ['基礎固めに専念する時', '今は学びの時期', '焦らず力をつけて', '実績を積み上げる時', '下積みが後で生きてくる'] },
      { label: '金運',   values: ['支出に十分注意して', '蓄積の時期', '贅沢は後回しに', '衝動買いは厳禁', 'お金の流れを見直す時'] },
      { label: '健康運', values: ['無理は禁物', '休めることが大切', 'メンタルのケアも大事', '早寝早起きを心がけて', '疲れたら迷わず休んで'] },
    ],
    precure: [
      { name: 'キュアムーンライト', reason: 'ハートキャッチのムーンライトは一度敗北してから復活した子。末吉の今は充電期間、必ず蘇れる！' },
      { name: 'キュアスカーレット', reason: 'ゴープリのスカーレットは遅れて参戦したけど一番強かった。今は準備の時、あとで圧倒的に輝いて！' },
      { name: 'キュアマジェスティ', reason: 'ひろプリのマジェスティは長い年月を経て仲間と出会えた。今は焦らず、縁が繋がる時を待って！' },
      { name: 'キュアショコラ', reason: 'キラキラのショコラは厳しい自分にずっと向き合ってた。末吉の今日、自分を鍛える時間に使って！' },
    ],
  },
  {
    rank: '凶',
    cssClass: 'rank-kyo',
    weight: 10,
    messages: [
      'えぇえぇ、凶！どもです～！でもプリキュアだってラスボス戦の前は必ず苦しい回があるじゃん、そういうタイミングだよ！',
      'えぇえぇ、凶！どもです～！こういう時こそイオンタウン名西で気分転換、すぬまるの経験則では絶対これが正解！',
      'えぇえべ、凶！どもです～！ひびがそう出ちゃってるんだから仕方ない、でもすぬまるの占いは最後まで続くよ！',
      'えぇえぇ、凶！どもです～！プリキュアも絶体絶命の回があるけど、そこからの逆転が一番熱いじゃん！',
      'えぇえぇ、凶か…どもです～！慎重にいけばちゃんと乗り越えられるよ、すぬまるのお尻が保証する！',
    ],
    items: [
      { label: '全体運', values: ['注意が必要な時期', '慎重に行動して', '無理は禁物', '守りを固める時', 'リスクを避けて行動して'] },
      { label: '恋愛運', values: ['誤解が生じやすい', '言葉には十分気をつけて', '感情的にならないように', '距離感を大切に', '今は自分の整理を先に'] },
      { label: '仕事運', values: ['ミスに気をつけて', '独断専行は控えて', '確認を怠らずに', '報連相を徹底して', '二重チェックを習慣に'] },
      { label: '金運',   values: ['金銭トラブルに注意', '衝動買いは厳禁', '保証人は引き受けないで', 'ギャンブル系は全回避', '財布の中身を把握して'] },
      { label: '健康運', values: ['体調管理に注意して', '無理な運動は控えて', '定期的な検診を', '疲労のサインを見逃さないで', '睡眠を最優先に'] },
    ],
    precure: [
      { name: 'キュアブラック', reason: 'ふたりはプリキュアのブラックは何度倒されても立ち上がった！凶の今日、その根性を借りて！' },
      { name: 'キュアアンジュ', reason: 'HUGっとのアンジュは傷ついた過去を持つ子。凶の今日、弱さを認めて立ち上がる強さを思い出して！' },
      { name: 'キュアフォンテーヌ', reason: 'ヒーリングのフォンテーヌは冷静沈着。凶の今日こそ感情を抑えて冷静に行動するのが正解！' },
      { name: 'キュアマカロン', reason: 'キラキラのマカロンはクールでドライだけど心は熱い。凶の今日は冷静さを武器にして！' },
    ],
  },
  {
    rank: '大凶',
    cssClass: 'rank-daikyo',
    weight: 5,
    messages: [
      'えぇえぇ、大凶！どもです～！このひびの形、ラスボスが覚醒した時のやつじゃん…でもプリキュアは最終決戦で必ず勝つし、あなたも勝てる！',
      'えぇえぇ！大凶！どもです～！ひびが大変なことになってる、すぬまるも初めて見た形だわ…でも一番下まで来たら上がるだけだよ！イオンタウン名西行って！',
      'えぇえぇ、大凶！どもです～！これはもうGoプリのディスピアばりの絶望感のひびだけど、キュアフローラは諦めなかったじゃん！',
      'えぇえぇ、大凶！どもです～！ここまで割れたお尻は見たことない、ある意味すごい。でも大丈夫、プリキュアに不可能はない！',
      'えぇえぇ、大凶…どもです～！でもね、大凶って引いた人はイオンタウン名西来ると運気反転するんだよ、すぬまる調べだよ！',
    ],
    items: [
      { label: '全体運', values: ['今は慎重に', '大事な決断は先送りに', '身を縮めて嵐を待って', '動かないのが正解', '今日は守り一択'] },
      { label: '恋愛運', values: ['今は恋愛より自分を整えて', '大きな決断は今じゃない', '自己成長に専念して', '今の関係を丁寧に維持して', '新しいことは始めないで'] },
      { label: '仕事運', values: ['現状維持が最善', '大きなリスクは避けて', '着実な一歩だけ', '新規案件は持ち越して', '今日は仕込みだけして'] },
      { label: '金運',   values: ['財布の管理を徹底して', '騙されやすい時期', '投資・ギャンブル厳禁', '大きな買い物は全部延期', '今日は一円も余分に使わないで'] },
      { label: '健康運', values: ['体のサインを見逃さないで', '早急に医師に相談を', '十分な休息が必要', '今日は無理せず休んで', 'メンタルが一番大事な日'] },
    ],
    precure: [
      { name: 'キュアホワイト', reason: '最初のプリキュアのホワイトは何度絶望しても諦めなかった。大凶の今日、その精神力を全力で借りて！' },
      { name: 'キュアエトワール', reason: 'HUGっとのエトワールは自分の弱さと戦い続けた。大凶の今こそ、内側の強さを信じて！' },
      { name: 'キュアスパークル', reason: 'ヒーリングのスパークルはどんな暗闇でも光を灯せる子。大凶の今日、あなたの周りを明るくしてあげて！' },
      { name: 'キュアパルフェ', reason: 'キラキラのパルフェはみんなをまとめる最強の存在。大凶でも仲間がいれば乗り越えられるよ！' },
    ],
  },
];

function weightedRandom(fortunes) {
  const total = fortunes.reduce((sum, f) => sum + f.weight, 0);
  let r = Math.random() * total;
  for (const f of fortunes) {
    r -= f.weight;
    if (r <= 0) return f;
  }
  return fortunes[fortunes.length - 1];
}

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function setSpeech(text) {
  const bubble = document.getElementById('speechBubble');
  bubble.style.animation = 'none';
  bubble.offsetHeight;
  bubble.style.animation = 'fadeIn 0.4s ease';
  bubble.innerHTML = text;
}

// ひびをcanvasに描画
function drawCracks(canvas, count) {
  const ctx = canvas.getContext('2d');
  const w = canvas.offsetWidth;
  const h = canvas.offsetHeight;
  canvas.width = w;
  canvas.height = h;
  ctx.clearRect(0, 0, w, h);

  ctx.strokeStyle = 'rgba(60, 20, 0, 0.85)';
  ctx.lineWidth = 1.5;
  ctx.shadowColor = 'rgba(255, 100, 0, 0.6)';
  ctx.shadowBlur = 4;

  for (let i = 0; i < count; i++) {
    const cx = w * (0.3 + Math.random() * 0.4);
    const cy = h * (0.3 + Math.random() * 0.4);
    drawOneCrack(ctx, cx, cy, Math.random() * Math.PI * 2, 30 + Math.random() * 60, 3);
  }
}

function drawOneCrack(ctx, x, y, angle, length, depth) {
  if (depth === 0 || length < 8) return;
  const endX = x + Math.cos(angle) * length;
  const endY = y + Math.sin(angle) * length;
  ctx.beginPath();
  ctx.moveTo(x, y);
  const mx = (x + endX) / 2 + (Math.random() - 0.5) * length * 0.3;
  const my = (y + endY) / 2 + (Math.random() - 0.5) * length * 0.3;
  ctx.quadraticCurveTo(mx, my, endX, endY);
  ctx.stroke();
  if (Math.random() < 0.6) {
    const branchAngle = angle + (Math.random() - 0.5) * Math.PI * 0.8;
    drawOneCrack(ctx, endX, endY, branchAngle, length * 0.55, depth - 1);
  }
  const nextAngle = angle + (Math.random() - 0.5) * 0.4;
  drawOneCrack(ctx, endX, endY, nextAngle, length * 0.65, depth - 1);
}

/* ===== 火の粉パーティクル ===== */
let sparkParticles = [];
let sparkAnimId = null;

function startSparks() {
  const canvas = document.getElementById('sparkCanvas');
  const ctx = canvas.getContext('2d');
  const W = canvas.width  = canvas.offsetWidth;
  const H = canvas.height = canvas.offsetHeight;
  const cx = W / 2;
  const cy = H / 2;
  const r  = 120;

  sparkParticles = [];

  function spawnSpark() {
    const angle = Math.random() * Math.PI * 2;
    const dist  = r * (0.6 + Math.random() * 0.5);
    sparkParticles.push({
      x:  cx + Math.cos(angle) * dist,
      y:  cy + Math.sin(angle) * dist,
      vx: (Math.random() - 0.5) * 3,
      vy: -(2 + Math.random() * 5),
      life: 1,
      decay: 0.018 + Math.random() * 0.025,
      size: 1.5 + Math.random() * 3,
      hue:  Math.random() < 0.5 ? 30 : 50,
    });
  }

  function loop() {
    ctx.clearRect(0, 0, W, H);
    for (let i = 0; i < 5; i++) spawnSpark();
    sparkParticles.forEach(p => {
      p.x    += p.vx;
      p.y    += p.vy;
      p.vy   *= 0.97;
      p.vx   *= 0.98;
      p.life -= p.decay;
      const alpha = Math.max(0, p.life);
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size * alpha, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${p.hue}, 100%, ${50 + 40 * alpha}%, ${alpha})`;
      ctx.shadowColor = `hsla(${p.hue}, 100%, 60%, 0.8)`;
      ctx.shadowBlur  = 6;
      ctx.fill();
    });
    sparkParticles = sparkParticles.filter(p => p.life > 0);
    sparkAnimId = requestAnimationFrame(loop);
  }

  loop();
}

function stopSparks() {
  if (sparkAnimId) {
    cancelAnimationFrame(sparkAnimId);
    sparkAnimId = null;
  }
  const canvas = document.getElementById('sparkCanvas');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  sparkParticles = [];
}

function setFireLayers(on) {
  ['fireOverlay1','fireOverlay2','fireOverlay3','fireOverlay4'].forEach(id => {
    document.getElementById(id).classList.toggle('burning', on);
  });
  document.getElementById('buttContainer').classList.toggle('burning', on);
}

let currentFortune = null;

function drawOmikuji() {
  document.getElementById('drawBtn').disabled = true;
  document.getElementById('boxWrapper').style.display = 'none';
  document.getElementById('buttWrapper').style.display = 'flex';

  setSpeech('えぇえぇ、どもです～！じゃあ始めるよ、すぬまるの本気の占いを見せてあげる！');
  setFireLayers(true);
  startSparks();

  const phaseBtn = document.getElementById('phaseBtn');
  phaseBtn.textContent = 'ひびを読む';
  phaseBtn.onclick = phaseReadCracks;
}

function phaseReadCracks() {
  setFireLayers(false);
  stopSparks();

  currentFortune = weightedRandom(FORTUNES);
  const crackCanvas = document.getElementById('crackCanvas');
  const crackCount = currentFortune.rank === '大吉' ? 8 :
                     currentFortune.rank === '大凶' ? 12 : 6;
  drawCracks(crackCanvas, crackCount);
  crackCanvas.classList.add('visible');

  setSpeech('おしりが二つに割れました');

  const phaseBtn = document.getElementById('phaseBtn');
  phaseBtn.textContent = '結果を見る';
  phaseBtn.onclick = phaseShowResult;
}

function phaseShowResult() {
  document.getElementById('buttWrapper').style.display = 'none';
  showResult(currentFortune);
}

function showResult(fortune) {
  setSpeech(pick(fortune.messages));

  const rankEl = document.getElementById('fortuneRank');
  rankEl.textContent = fortune.rank;
  rankEl.className = 'fortune-rank ' + fortune.cssClass;

  const itemsEl = document.getElementById('fortuneItems');
  itemsEl.innerHTML = '';
  fortune.items.forEach(item => {
    const div = document.createElement('div');
    div.className = 'fortune-item';
    div.innerHTML = `<span class="item-label">${item.label}</span><span class="item-value">${pick(item.values)}</span>`;
    itemsEl.appendChild(div);
  });

  const precure = pick(fortune.precure);
  document.getElementById('precureName').textContent = precure.name;
  document.getElementById('precureReason').textContent = precure.reason;

  document.getElementById('resultWrapper').style.display = 'flex';
}

function reset() {
  document.getElementById('resultWrapper').style.display = 'none';

  setFireLayers(false);
  stopSparks();
  const crackCanvas = document.getElementById('crackCanvas');
  crackCanvas.classList.remove('visible');
  const ctx = crackCanvas.getContext('2d');
  ctx.clearRect(0, 0, crackCanvas.width, crackCanvas.height);

  setSpeech('えぇえぇ、どもです～！もう一回占う？すぬまるのお尻はいつでも戦える状態だよ！');

  const btn = document.getElementById('drawBtn');
  btn.disabled = false;
  document.getElementById('boxWrapper').style.display = 'flex';
}
