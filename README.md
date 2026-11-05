# 李子恒 / ZI-HENG LI — 个人网站 2026

一个中文优先的个人网站，不是作品集，也不是简历页。四个板块：

- **01 关于 / ABOUT**：我是谁、在做什么、工具箱、经历占位
- **02 近况 / NOW**：五条“现在进行时”
- **03 作品 / SELECTED WORK**：四个占位项目，封面是抽象街头海报
- **04 联系 / CONTACT**：只走 X 私信，不放邮箱

视觉方向是美国街头 / drop page / lookbook：Anton 超大标题、Manrope 正文、DM Mono 标签、粗黑边框、条形码、序列号、贴纸、marquee。纯静态 HTML/CSS/JS，无框架、无构建、无服务器依赖，可直接部署到 Cloudflare Pages 或 GitHub Pages。

## 在线地址

- **站点**：<https://liziheng01.github.io/>
- **仓库**：<https://github.com/LiZiHeng01/LiZiHeng01.github.io>
- 托管：GitHub Pages（`main` 分支根目录）
- 原始照片相册只保留在本地，**没有提交到公开仓库**。

---

## 1. 文件结构

```text
.
├── index.html                       # 页面结构、文案、项目数据、内联 SVG 封面
├── styles.css                       # 设计系统、版式、响应式、动画
├── script.js                        # 导航、滚动进度、章节高亮、菜单/弹窗焦点管理
├── README.md
├── preview.png                      # 可选：首屏截图，不参与站点运行，可删
├── assets/
│   ├── favicon.svg                  # 站点图标
│   ├── fonts/
│   │   ├── anton-400.woff2          # Anton（英文超大标题）
│   │   ├── manrope-var.woff2        # Manrope 700–800（英文正文/小标题）
│   │   ├── dm-mono-400.woff2        # DM Mono 400（标签/编号/条码文字）
│   │   └── dm-mono-500.woff2        # DM Mono 500
│   └── images/
│       ├── portrait-cartoon.webp    # 本人卡通肖像（首屏，760×950）
│       ├── portrait-cartoon.svg     # 肖像源文件，方便修改/重导出
│       ├── dog-cartoon.webp         # 小狗卡通形象（640×640）
│       └── dog-cartoon.svg          # 小狗源文件
├── 李子恒相册/                      # 原始参考照片（仅本地，不提交仓库）
└── 李哈哈相册/                      # 小狗原始参考照片（仅本地，不提交仓库）
```

> 原始照片只作为绘画参考，页面没有大面积直接展示原图。肖像和小狗都是重新绘制的矢量贴纸风插画。

---

## 2. 本地预览

### 方式 A：直接双击

直接打开 `index.html` 即可。字体、图片、JS 都是相对路径，不需要构建。

### 方式 B：本地服务器（推荐，和线上行为一致）

在本目录执行：

```bash
python -m http.server 8000
```

然后访问：

```text
http://localhost:8000
```

如果 8000 被占用，换成 `python -m http.server 8080`。

---

## 3. 必须替换的占位内容

下面这些内容目前是占位或未提供的信息，上线前请逐项替换。**不要保留“TODO / YOUR ROLE / ORGANIZATION / PLACEHOLDER”之类的字样上线。**

| 位置 | 当前内容 | 说明 |
|---|---|---|
| 关于 → 档案卡 → `EDU` | `学校 / 专业 / 年级` + `TODO` | 学校、专业、年级没有提供。替换后把 `.file-card__row--todo` 的虚线/`tag-todo` 去掉。 |
| 关于 → 经历 | 三条 `YOUR ROLE / ORGANIZATION / YOUR PROJECT` | 全部是占位，不要编造真实公司/学校/奖项。改成真实经历，保留 2–4 条即可，不要做成简历长页。 |
| 作品 → 四个项目 | Northbound / Signal / Paper Trail / Common Ground | 全部是占位项目，页面里也有“占位内容”提示。替换成真实项目，或保留为概念项目但要标注。 |
| 小狗名字 | `THE DOG` / `我的小狗` | 小狗名字没有提供。素材文件夹叫「李哈哈相册」；如果这就是它的名字，请替换为「李哈哈 / HAHA」。 |
| 邮箱 | 页面没有邮箱 | 你没有提供邮箱，所以全站联系入口只用 X 私信。**不要加假邮箱。** |
| 域名 / canonical / OG 图 | 已使用 GitHub Pages 地址 | `canonical`、`og:url`、`og:image`、`twitter:image` 已指向 `https://liziheng01.github.io/`。以后绑定自定义域名时再整体替换。 |
| 2026 暑期实习 | 写在档案卡和近况里 | 如果状态变化，记得同步改这两处。 |
| 年份 / SS26 | 品牌区、首屏、作品编号、页脚 | 2026 是站点年份，不是真实“毕业年份”。 |

### 3.1 改姓名 / 品牌

在 `index.html` 搜索：

- `李子恒`：首屏中文名、品牌区、档案、页脚
- `ZI-HENG LI` / `ZI-HENG`：超大 wordmark、标题、图注、页脚
- `PERSONAL SITE 2026`：品牌区、首屏 meta

如果只换英文名，注意同时改 `<title>`、`<meta name="description">`、Open Graph、Twitter Card、JSON-LD 里的 `name` / `alternateName`。

### 3.2 改学校 / 专业 / 年级

`index.html` → 关于 → 档案卡：

```html
<div class="file-card__row file-card__row--todo">
  <dt lang="en">EDU</dt>
  <dd>学校 / 专业 / 年级 <span class="tag-todo">TODO</span></dd>
</div>
```

改成例如：

```html
<div class="file-card__row">
  <dt lang="en">EDU</dt>
  <dd>你的学校 · 你的专业 · 大几</dd>
</div>
```

CSS 里不需要改。`file-card__row--todo` 只负责虚线提示。

### 3.3 改社交链接

当前使用：

- X：<https://x.com/ZihengIRL>
- Instagram：<https://www.instagram.com/itsziheng/>

这些链接出现在：

1. 顶部右侧的 `X ↗`
2. 移动端全屏菜单底部
3. 关于？没有
4. 联系区的大号 `@ZihengIRL`
5. 联系区右侧 `X / Twitter`、`Instagram`
6. 页脚没有社交链接
7. `index.html` 的 JSON-LD `sameAs`
8. `README.md` 本文件

全部搜索 `x.com/ZihengIRL`、`instagram.com/itsziheng` 替换。`rel="me"` 保留，它表示这是本人账号。

### 3.4 改经历

`index.html` 搜索 `experience__list`。当前三条：

```html
<li>
  <span class="experience__year" lang="en">2025</span>
  <span class="experience__role">YOUR ROLE<br><span lang="en">ORGANIZATION</span></span>
  <span class="experience__tag">占位 / PLACEHOLDER</span>
</li>
```

替换为真实内容，例如：

```html
<li>
  <span class="experience__year" lang="en">2025</span>
  <span class="experience__role">品牌设计实习<br><span lang="en">YOUR COMPANY</span></span>
  <span class="experience__tag">实习 / INTERNSHIP</span>
</li>
```

- 年份用英文数字，`experience__year` 会用 Anton 显示。
- 经历保持 2–4 条；这一块不是简历，不要写成长页。
- 没有真实公司/学校/奖项就不要写。

### 3.5 改小狗名字

当前占位：

- 首屏贴纸：`THE DOG` / `我的小狗`
- 关于 → ME & THE DOG 卡：`ME & THE DOG / 2026`、`THE DOG / QINGDAO`
- 近况第 5 条：`我的小狗`
- 联系区小贴纸：`THE DOG / 彩蛋`

如果名字是「李哈哈」，可以统一替换为：

- 中文：`李哈哈`
- 英文：`HAHA` / `THE DOG` 可保留
- 图片 `alt` 建议仍然写「李子恒的小狗卡通形象」，方便无障碍描述。

### 3.6 改近况

`index.html` 搜索 `now-row`。五条分别是：

1. 在学：前端 & 动效
2. 在做：一些个人项目
3. 在看：NBA，科比和爱德华兹
4. 在找：2026 暑期实习
5. 在遛：我的小狗

这是全站**唯一**在正文里提到 NBA/科比/爱德华兹的地方，不要扩展成篮球主题。肖像衣服上的科比头像属于视觉彩蛋，见第 4 节。

---

## 4. 肖像与小狗图片（重点）

### 4.1 当前版本

- `assets/images/portrait-cartoon.webp`：760×950，WebP，透明背景。
- `assets/images/dog-cartoon.webp`：640×640，WebP，透明背景。
- 两张图共用一套视觉语言：粗黑描边、平涂色块、少量网点/丝网印质感，像街头贴纸。

当前肖像根据你后续的要求做了调整：

- **去掉了眼镜**；
- 头发保留蓬松、偏厚的黑色发型；
- 上衣改成**深色 T 恤**；
- 胸口是**科比本人的黑白丝网印头像**（不是“KOBE”几个字母），旁边有 `MAMBA / 001` 小标签和橙色块；
- 没有球场、篮筐、篮球、球衣号码、球员卡、紫金配色等元素。

> 说明：胸口的科比头像是**原创的丝网印风格插画**，不是官方照片或官方商品，也不代表任何品牌合作。如果你不想在衣服上出现科比，或担心形象使用范围，替换这一张图即可，页面其他部分不用动。

### 4.2 替换成新的肖像

1. 准备一张 **760×950** 的图片（比例 4:5），透明背景或和卡片一致的米白背景。
2. 导出为 **WebP**，建议质量 85–92，控制在 150KB 以内。
3. 覆盖 `assets/images/portrait-cartoon.webp`。
4. 如果尺寸比例变了：
   - 同时改 `index.html` 中 `<img>` 的 `width` / `height`；
   - 改 `styles.css` 里 `.portrait-card__image { aspect-ratio: 760 / 950; }`；
   - 检查 1440×900、1366×768 下首屏是否仍完整。
5. 首屏肖像**不要加 `loading="lazy"`**。当前已经有：

```html
<link rel="preload" href="assets/images/portrait-cartoon.webp" as="image" type="image/webp" fetchpriority="high">
```

以及 `<img ... fetchpriority="high" decoding="async">`。这些保留。

6. `alt` 用「李子恒的卡通肖像」或更具体的描述；不要写“图片”“头像”这种空 alt。

### 4.3 替换小狗

1. **640×640**，WebP，透明背景。
2. 覆盖 `assets/images/dog-cartoon.webp`。
3. 保持白毛、黑鼻头、圆黑眼睛、长耳、两个侧边小辫、头顶黑夹这些特征；如果换品种，记得同步改文案。
4. 首屏小狗贴纸是 eager；关于和联系区的小狗图可以使用 `loading="lazy"`。当前关于区是 lazy，联系区已改为 eager，避免彩蛋图懒加载后空白。
5. `alt` 用「李子恒的小狗卡通形象」。

### 4.4 如果想换成“更像本人”的照片丝网印

当前是矢量卡通，不是照片。如果你觉得不够像、想换成照片处理（高对比黑白/双色丝网印），可以：

- 用你自己的照片做 760×950 的高对比处理，导出 WebP；
- 保持深色衣服和胸口图案（如果需要）；
- 覆盖 `portrait-cartoon.webp`；
- 注意：原 brief 更偏卡通；照片处理会更像本人，但风格会从“贴纸”变成“海报照片”。两种都可以，按你最终想要的来。

### 4.5 想继续改 SVG

`portrait-cartoon.svg` 和 `dog-cartoon.svg` 是源文件。修改后用任意 SVG → WebP 工具导出（例如浏览器截图、Figma、Inkscape、resvg 等），再覆盖 WebP。不要只改 WebP 不改 SVG，否则下次重导出会回到旧版。

---

## 5. 字体

字体已经本地化，不依赖 Google Fonts CDN：

| 字体 | 文件 | 用途 | 许可 |
|---|---|---|---|
| Anton | `assets/fonts/anton-400.woff2` | 英文超大标题、wordmark | SIL Open Font License |
| Manrope | `assets/fonts/manrope-var.woff2` | 英文正文/小标题 700–800 | SIL Open Font License |
| DM Mono | `assets/fonts/dm-mono-400.woff2` / `500.woff2` | 标签、编号、条形码文字 | SIL Open Font License |

中文使用系统字体栈：

```css
"PingFang SC", "HarmonyOS Sans SC", "Noto Sans SC", "Microsoft YaHei", sans-serif
```

- macOS / iOS：PingFang SC
- Windows：Noto Sans SC 或微软雅黑
- Android：Noto Sans SC / HarmonyOS Sans

换字体时改 `styles.css` 顶部的 `@font-face` 和 `:root` 里的 `--display` / `--sans` / `--mono`。如果换掉 Anton，记得同步改 `<link rel="preload">`。

字体许可见：

- Anton: <https://fonts.google.com/specimen/Anton>
- Manrope: <https://fonts.google.com/specimen/Manrope>
- DM Mono: <https://fonts.google.com/specimen/DM+Mono>

如果要把字体文件再分发给别人，建议在 `assets/fonts/` 里附上对应 OFL 文本。

---

## 6. 改作品项目

作品卡的结构是：

```html
<article class="work-card">
  <button class="work-open" type="button" ... data-index="001" data-title="Northbound" data-subtitle="品牌与网站" data-meta="BRAND &amp; WEBSITE / 2025">
    <span class="work-media">
      <svg>...</svg>                <!-- 封面：只维护这一份 -->
      ...
    </span>
  </button>
  <div class="work-card__body">
    <h3>Northbound</h3>             <!-- 卡片上可见标题 -->
    <p class="work-card__meta">品牌与网站 / BRAND &amp; WEBSITE</p>
  </div>
  <template class="work-detail">
    <p class="work-detail__sub">...</p>
    <h3>亮点 / HIGHLIGHTS</h3>
    <ul class="work-detail__list">...</ul>
    <ul class="tag-list">...</ul>
  </template>
</article>
```

### 要改的地方

1. **封面 SVG**：只改 `.work-media` 里的内联 SVG。弹窗打开时会自动克隆这份 SVG，不需要第二套图。
2. **按钮 data 属性**：
   - `data-index`：001–004
   - `data-title`：项目标题
   - `data-subtitle`：中文副标题
   - `data-meta`：英文类型 + 年份
3. **卡片可见文字**：`h3`、`.work-card__meta`、年份、`NO. 00X / SS26`。
4. **`<template class="work-detail">`**：弹窗里的描述、3 条要点、标签。
5. **无障碍文字**：按钮末尾的 `.sr-only` 写「查看项目 001 Northbound 详情」，项目换名时同步改。

### 增加 / 删除项目

- 复制整个 `<article class="work-card">`，保证 `data-index`、标题、编号唯一。
- 2×2 网格会自动排；项目多于 4 个会继续往下排。想保持 4 个就删掉多余的。
- 卡片封面比例是 `4 / 3`；SVG 的 `viewBox="0 0 800 600"` 可以保留。
- 不要编造真实客户、奖项、学校。占位项目可以保留，但页面里的“占位”提示不要删（除非你换成真实项目）。

### 弹窗封面为什么不会重复维护

`script.js` 的 `openModal` 里：

```js
const coverSvg = qs('.work-media > svg', card);
modalCover.replaceChildren(coverSvg.cloneNode(true));
```

所以你只需要改卡片封面 SVG。弹窗里会自动复用。

---

## 7. 交互与无障碍实现

已实现：

- 固定导航：滚动 16px 后变黑、变矮（74px → 58px 左右）
- 顶部橙色滚动进度条
- 当前章节高亮（`aria-current="location"`）
- 滚动入场动画；`prefers-reduced-motion` 下全部关闭
- 首屏 marquee；`prefers-reduced-motion` 下停止
- 移动端全屏菜单：
  - 打开后焦点自动到第一个菜单项
  - `main` / `footer`（以及 header）设为 `inert`
  - Esc 关闭
  - 关闭后焦点回到 MENU 按钮
  - Tab 焦点圈在菜单内
  - body 滚动锁
- 项目弹窗：
  - 打开后焦点到关闭按钮
  - 背景 `inert`
  - Esc 关闭
  - 关闭后焦点回到触发的项目卡
  - Tab 焦点圈在弹窗内
  - 点遮罩关闭
- skip link、语义化 header/nav/main/footer、`aria-*`、可见焦点环
- 无自动播放音频、无背景音乐、无 cookie、无统计脚本
- 颜色对比度：正文与背景达到 WCAG AA；橙色只用于深色底/大色块，避免浅底小字对比不足

### 测试结果（本地）

在 2026 年的本地 Chrome + Lighthouse 13.6 中：

| 类别 | Mobile | Desktop |
|---|---|---|
| Accessibility | 1.00 | 1.00 |
| Best Practices | 1.00 | 1.00 |
| SEO | 1.00 | 1.00 |
| Performance | 约 0.88–0.90 | 1.00 |

- axe-core 扫描：页面、移动菜单、项目弹窗均为 **0 violations**。
- 焦点测试：菜单首项、Esc 关闭、焦点返回 MENU；弹窗关闭按钮、Esc 关闭、焦点返回项目卡，均通过。
- 1366×768、1440×900、1440×1000、1280×800、1024×768、1920×1080 下首屏（含 marquee）完整显示；桌面和移动端均无横向溢出。
- Lighthouse 分数会随网络、Chrome 版本、字体缓存、是否开 DevTools 浮动；以你自己部署后的结果为准。

### 重新跑测试

```bash
# 终端 1
python -m http.server 8000

# 终端 2
npx lighthouse http://localhost:8000 --view
```

没有 Node/npm 也没关系，页面本身不需要构建。

---

## 8. 部署

### 当前部署（已完成）

- 仓库：<https://github.com/LiZiHeng01/LiZiHeng01.github.io>
- 站点：<https://liziheng01.github.io/>
- 分支：`main`
- Pages 源：`main` 分支 `/ (root)`
- 构建：无需构建（静态文件）

以后更新内容：

```bash
git add .
git commit -m "update site"
git push
```

GitHub Pages 会自动重新发布，通常 1–2 分钟生效。**根目录的原始相册文件夹已在 `.gitignore` 中排除，不会上传。**

### 8.1 Cloudflare Pages（可选）

1. 把整个目录（`index.html`、`styles.css`、`script.js`、`assets/`）推到 GitHub / GitLab 仓库。
2. Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git。
3. 选择仓库。
4. 构建设置：
   - Framework preset：**None**
   - Build command：留空
   - Build output directory：`/`
   - Root directory：`/`
5. Deploy。
6. 在 Pages 项目 → Custom domains 绑定你的域名；Cloudflare 会自动配 DNS 和 HTTPS。

也可以在本地用 Wrangler 直接上传：

```bash
npx wrangler pages deploy . --project-name=ziheng-site
```

（不是必须。纯静态文件直接上传也可以。）

### 8.2 GitHub Pages

1. 新建仓库，把文件推到 `main` 分支根目录。
2. 仓库 Settings → Pages → Build and deployment：
   - Source：Deploy from a branch
   - Branch：`main`
   - Folder：`/ (root)`
3. 保存后访问 `https://<username>.github.io/<repo>/`。
4. 因为所有资源都是相对路径，项目页子路径也能正常加载。
5. 绑定自定义域名：Settings → Pages → Custom domain，然后在 DNS 加 CNAME。

> GitHub Pages 不支持服务端代码；这个站点正好不需要。

### 8.3 自定义域名（可选）

当前先用 GitHub Pages 免费地址：<https://liziheng01.github.io/>。以后想换更好记的域名，可以买：

- **Cloudflare Registrar**：按成本价，DNS 一体，推荐
- **Porkbun**：价格透明，界面简单
- **Namecheap**：老牌，促销多

建议 `.com` 或 `.me`；`.dev` 也可以（强制 HTTPS）。买完后：

1. 在 GitHub Pages → Custom domain 绑定域名，按提示加 DNS 记录；
2. 把 `index.html` 里已经写好的这几处统一替换：

```html
<link rel="canonical" href="https://你的域名/">
<meta property="og:url" content="https://你的域名/">
<meta property="og:image" content="https://你的域名/assets/images/portrait-cartoon.webp">
<meta name="twitter:image" content="https://你的域名/assets/images/portrait-cartoon.webp">
```

3. 把 JSON-LD 里的 `"url"` 也改成新域名；
4. 可选：加 `sitemap.xml`、`robots.txt`；
5. 更新 README 里的域名说明。

不要先写一个假域名上线再改，分享卡片会缓存旧地址。

---

## 9. 国内访问与 ICP 备案

这一节很重要，别忽略。

### 9.1 海外托管

Cloudflare Pages、GitHub Pages 都是海外托管：

- **不需要 ICP 备案**（备案针对中国大陆境内服务器/接入商）；
- 但中国大陆访问可能不稳定，Cloudflare 免费版在国内的速度不保证；
- GitHub Pages 在国内也可能间歇性访问慢；
- 这不影响你发给海外朋友、申请海外实习，但国内访问体验要自己测。

### 9.2 什么情况需要 ICP

- 使用**中国大陆服务器**（阿里云/腾讯云/华为云等）托管；
- 使用**中国大陆 CDN**；
- 使用 `.cn` 域名（注册和解析有额外实名/资质要求）；
- 使用 Cloudflare 的中国大陆网络（通常需要企业合作/备案，个人免费版不包含）。

如果以后要备案：

1. 先买可备案的域名（很多后缀支持，`.com` 可以）；
2. 用大陆服务器/接入商提交 ICP 备案；
3. 备案通过后再解析到大陆服务器；
4. 个人网站备案通常需要身份证、真实性核验、网站内容合规；
5. 备案期间网站不能先上线到大陆服务器。

### 9.3 内容合规

- 这是个人网站，不放违法内容、不放未授权的商业素材；
- 肖像和科比插画仅用于个人展示，不做官方/商业背书；
- 不放假邮箱、假学校、假公司、假奖项；
- 不放自动播放音乐/视频。

> 如果你只是想让国内朋友能打开，最省事的是 Cloudflare Pages 免费版 + 自定义域名；先测实际访问速度，再决定要不要备案/换大陆托管。

---

## 10. 设计系统速查

`styles.css` 的 `:root`：

```css
--ink: #0a0a0a;        /* 墨黑 */
--bone: #f2f0e8;       /* 冷白 */
--paper: #f8f5ec;      /* 卡片纸白 */
--concrete: #d8d4c8;   /* 混凝土灰 */
--orange: #ff4d00;     /* 安全橙 */
--blue: #1f44ff;       /* 电光蓝 */
```

字体：

- `--display`: Anton
- `--sans`: Manrope + 中文系统字体
- `--mono`: DM Mono

不要引入：

- 金色/紫色/森林绿主色
- 紫金湖人配色、森林狼绿
- 球场线、篮球、篮筐、球衣号码 24/5、球员卡、记分牌
- Georgia / Times 等杂志衬线
- 手绘纸张、胶带、拍立得、印章、复古剪贴簿
- 大量渐变、玻璃拟态、堆叠圆角卡片

---

## 11. 常见问题

### 双击 `index.html` 字体不加载？

某些浏览器对 `file://` 加载字体有安全限制。用 `python -m http.server 8000` 预览最稳。线上不会出现。

### 首屏在 1366×768 被裁切？

当前版本已在 1366×768 完整显示跑马灯。如果你改了文案或加大了字号，检查：

- `.hero` 的 `min-height: 100svh`
- `@media (min-width: 961px) and (max-height: 840px)` 的压缩规则
- 首屏肖像的 `width: clamp(280px, 25vw, 480px)`

### 移动端菜单打不开？

确认 `script.js` 正常加载，浏览器支持 `inert`（现代浏览器都支持）。菜单按钮在 ≤900px 才显示；桌面用顶部导航。

### 项目弹窗没内容？

确认：

- 按钮有 `data-index/title/subtitle/meta`
- 卡片里有 `<template class="work-detail">`
- `script.js` 里 `#work-modal` 的 id 没改

### 我看到狗的图片没加载？

首屏小狗是 eager；关于区是 lazy；联系区小彩蛋是 eager。若某张图不显示，检查路径是否 `assets/images/dog-cartoon.webp`，以及是否被 `loading="lazy"` 放在视口外。

### 页面没有邮箱，怎么联系？

只走 X：<https://x.com/ZihengIRL>。大号链接和「在 X 聊聊」都指向这里。不要为了“完整”加一个假邮箱。

---

## 12. 最后检查清单

- [ ] 替换学校 / 专业 / 年级，移除 TODO
- [ ] 替换三条经历占位，移除 PLACEHOLDER
- [ ] 替换四个项目或明确保留为占位
- [ ] 替换小狗名字（如「李哈哈」）
- [ ] 确认 X / Instagram 链接
- [ ] 确认肖像（无眼镜 / 深色 Kobe 印花）符合你的预期
- [ ] 用 1366×768、1440×900 检查首屏跑马灯
- [ ] 手机宽度 360 / 390 / 768 检查横向溢出
- [ ] 键盘测试：Tab、Esc、菜单、弹窗、焦点返回
- [ ] 部署后跑一次 Lighthouse
- [ ] 如需自定义域名，更新 canonical / og:url / og:image / twitter:image / JSON-LD
- [ ] 国内访问测速，决定是否备案

---

## 13. 版权与素材说明

- 代码、文案、排版：李子恒个人项目。
- 字体：Anton、Manrope、DM Mono，SIL Open Font License。
- 肖像、小狗插画：根据提供的照片重绘的定制插画；原始照片未直接用于页面。
- 胸口的科比头像是原创的丝网印风格插画，仅作为个人 T 恤图案，不是官方图片、官方商品，也不代表任何合作或背书。发布前请自行确认肖像/形象使用范围；如不需要，替换 `portrait-cartoon.webp` 即可。
- 项目名（Northbound / Signal / Paper Trail / Common Ground）和描述均为占位，不代表真实客户。

---

有问题，直接在 X 私信：<https://x.com/ZihengIRL>
