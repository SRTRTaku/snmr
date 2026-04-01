# すぬまるちゃんのおみくじ

すぬまるちゃんが自身のお尻を燃やし、ひびの入り方で運勢を占うWebアプリです。LAN内の任意のデバイスからアクセスできます。

---

## 起動方法

### 1. WSL2でサーバーを起動

WSLのターミナルで以下を実行します。

```bash
cd /mnt/c/Users/takum/Documents/etc/snmr
python3 -m http.server 8080 --bind 0.0.0.0
```

### 2. ポートフォワード設定（WSL2再起動後に毎回必要）

PowerShellを **管理者として実行** し、以下を順番に実行します。

```powershell
# WSL2のIPアドレスを取得
wsl hostname -I

# ポートフォワード設定（YOUR_WSL_IPは上で確認したIPに置き換え）
netsh interface portproxy delete v4tov4 listenport=8080 listenaddress=0.0.0.0
netsh interface portproxy add v4tov4 listenport=8080 listenaddress=0.0.0.0 connectport=8080 connectaddress=YOUR_WSL_IP
```

### 3. ファイアウォール設定（初回のみ）

同じ管理者PowerShellで実行します。

```powershell
New-NetFirewallRule -DisplayName "WSL2 Omikuji" -Direction Inbound -Protocol TCP -LocalPort 8080 -Action Allow
```

### 4. アクセス

WindowsのIPアドレスを確認します。

```powershell
ipconfig
```

| 端末 | URL |
|------|-----|
| このPC | http://localhost:8080 |
| LAN内の他のデバイス | http://[WindowsのIPアドレス]:8080 |

---

## 使い方

1. **「占いを始める」** を押す → すぬまるちゃんのお尻が燃え始める
2. **「ひびを読む」** を押す → 炎が消え、お尻にひびが入る。すぬまるちゃんが「おしりが二つに割れました」と宣言
3. **「結果を見る」** を押す → 占い結果が表示される
4. **「もう一度占う」** で最初に戻る

---

## 占い仕様

### 占い方法

亀卜（きぼく）の儀式にならい、すぬまるちゃん自身のお尻を燃やし、ひびの入り方で運勢を判定します。

### 運勢の種類と出現確率

| 運勢 | 重み | 確率（目安） |
|------|------|-------------|
| 大吉 | 5    | 約 5%        |
| 吉   | 20   | 約 20%       |
| 中吉 | 25   | 約 25%       |
| 小吉 | 20   | 約 20%       |
| 末吉 | 15   | 約 15%       |
| 凶   | 10   | 約 10%       |
| 大凶 | 5    | 約  5%       |

### 占い項目

各運勢につき以下の5項目を表示します。結果は毎回ランダムに選ばれます。

- 全体運
- 恋愛運
- 仕事運
- 金運
- 健康運

### おすすめプリキュア

結果の最後に、その運勢に合ったプリキュアキャラクターをすぬまるちゃんが推薦します。各運勢につき4キャラクターのうち1人がランダムで表示されます。

---

## すぬまるちゃんのキャラクター設定

- **口癖**：「えぇえぇ」「どもです～」
- **趣味**：イオンタウン名西に行くこと
- **特技**：プリキュアに関する深い知識
- **特徴**：得意げなオタク。お尻を燃やしても痛がらない

---

## ファイル構成

```
snmr/
├── index.html   # メインページ
├── style.css    # スタイル
├── script.js    # 占いロジック・エフェクト
├── README.md    # このファイル
└── img/
    ├── 1.jpeg   # すぬまるちゃんの顔
    └── 2.jpeg   # すぬまるちゃんのお尻
```
