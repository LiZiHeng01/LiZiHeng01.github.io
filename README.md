# 李子恒 / ZI-HENG LI — 个人网站 2026

一个中文优先的个人网站，不是作品集，也不是简历页。现在是生活记录站，六个板块：

- **01 关于 / ABOUT**：在青岛生活和工作，做 .NET 开发；不放学校、经历和工具箱。
- **02 近况 / NOW**：上班、遛李哈哈、看球、听歌看电影打游戏、过普通日子。
- **03 李哈哈 / THE DOG**：马尔泰，2 岁，公；单独一栏。
- **04 生活 / LIFE**：暂时用图形占位，以后换成照片。
- **05 兴趣 / LIKES**：篮球、音乐、电影、游戏。
- **06 联系 / CONTACT**：X、Instagram、公开邮箱。

视觉方向是美国街头 / drop page / lookbook：Anton 超大标题、Manrope 正文、DM Mono 标签、粗黑边框、条形码、序列号、贴纸、marquee。纯静态 HTML/CSS/JS，无框架、无构建、无服务器依赖，可直接部署到 Cloudflare Pages 或 GitHub Pages。

## 在线地址

- **站点**：<https://liziheng01.github.io/>
- **仓库**：<https://github.com/LiZiHeng01/LiZiHeng01.github.io>
- 托管：GitHub Pages（`main` 分支根目录）
- 原始照片相册只保留在本地，**没有提交到公开仓库**。

> 2026 更新：已移除原来的卡通本人头像，首屏改成图片占位；页面上只保留小狗的卡通形象。等有合适的真人照片再替换占位。

---

## 1. 文件结构

```text
.
├── index.html                       # 页面结构、文案、内联图形
├── styles.css                       # 设计系统、版式、响应式、动画、头像占位
├── script.js                        # 导航、滚动进度、章节高亮、移动菜单焦点管理
├── README.md
├── preview.png                      # 首屏截图，不参与站点运行
├── assets/
│   ├── favicon.svg                  # 站点图标
│   ├── fonts/
│   │   ├── anton-400.woff2          # Anton（英文超大标题）
│   │   ├── manrope-var.woff2        # Manrope 700–800（英文正文/小标题）
│   │   ├── dm-mono-400.woff2        # DM Mono 400（标签/编号/条码文字）
│   │   └── dm-mono-500.woff2        # DM Mono 500
│   └── images/
│       ├── og-cover.png             # 社交分享封面，1200×630，无人物头像
│       ├── dog-cartoon.webp         # 李哈哈卡通形象（640×640）
│       └── dog-cartoon.svg          # 李哈哈源文件
├── 李子恒相册/                      # 原始参考照片（仅本地，不提交仓库）
└── 李哈哈相册/                      # 小狗原始参考照片（仅本地，不提交仓库）
```

---

## 2. 本地预览

### 方式 A：直接双击

直接打开 `index.html`。字体、图片、JS 都是相对路径，不需要构建。

### 方式 B：本地服务器（推荐，和线上行为一致）

```bash
python -m http.server 8000
```

然后打开 <http://127.0.0.1:8000/>。

---

## 3. 当前页面上的真实信息

这些是按本人确认后的内容，改文案时不要改回旧版本：

| 项目 | 内容 |
|---|---|
| 名字 | 李子恒 / ZI-HENG LI |
| 城市 | 青岛，中国 |
| 工作 | .NET 开发（网站上只留一句，不做成简历） |
| 状态 | 在职，开放交流 |
| 学校 | 不展示 |
| 小狗 | 李哈哈 / 马尔泰 / 2 岁 / 公 |
| 兴趣 | 篮球（科比、爱德华兹）、音乐、电影、游戏 |
| 邮箱 | 18973155056@163.com（公开，可点击） |
| X | <https://x.com/ZihengIRL> |
| Instagram | <https://www.instagram.com/itsziheng/> |

页面上已经删除的内容：

- 设计师 / 前端开发者身份
- 寻找 2026 暑期实习
- 学校 / 专业 / 年级
- 三段虚构经历
- 四个虚构作品和弹窗
- TypeScript / React / Next.js / Node.js / Figma / Three.js 工具箱

---

## 4. 首屏头像占位

`index.html` 里现在是：

```html
<div class="portrait-card__image">
  <div class="portrait-placeholder" role="img" aria-label="肖像图片占位，图片待补">
    ...
  </div>
</div>
```

不是图片加载失败，是有意设计的 `PHOTO / 图片占位`。等有合适的真人照片时再替换。

### 以后换成真人照片

1. 准备一张竖图，建议 **760×950**，WebP 或 JPG。
2. 放到 `assets/images/`，例如 `portrait.webp`。
3. 把 `portrait-card__image` 里的 `portrait-placeholder` 换成：

```html
<img src="assets/images/portrait.webp" width="760" height="950" alt="李子恒" decoding="async">
```

4. 同步替换 `og:image` / `twitter:image`，或继续使用 `assets/images/og-cover.png`。
5. 如果图片很大，用 Squoosh 或 `cwebp -q 88` 压到 200KB 以内。

首屏卡片尺寸由 `.portrait-card` 控制，图片用 `object-fit: contain`，不需要改布局。

---

## 5. 内容怎么改

所有文案都在 `index.html`，按 `id` 搜索：

- `#about`：关于我、档案卡
- `#now`：五条近况
- `#dog`：李哈哈资料
- `#life`：生活占位卡片
- `#likes`：兴趣卡片
- `#contact`：联系方式和页脚

### 换小狗图片

覆盖 `assets/images/dog-cartoon.webp`，保持 1:1 方形；或同时改 `dog-cartoon.svg` 源文件再导出。

### 换生活照片

`#life` 现在四张卡是 CSS 图形占位。以后有照片时：

1. 在卡片里加 `<img>`，或把 `.life-cover` 的背景换成 `background-image`。
2. 同步改掉卡片里的 `PHOTO LATER` 文案。
3. 图片放在 `assets/images/life/`，建议宽度 800–1200px，WebP。

---

## 6. 设计系统

```css
--ink: #0a0a0a;
--bone: #f2f0e8;
--paper: #e9e5da;
--concrete: #d8d4c8;
--orange: #ff4d00;
--blue: #1f44ff;
```

- 英文标题：Anton 400
- 英文正文/小标题：Manrope 700–800
- 标签/编号/条码文字：DM Mono 400/500
- 中文：PingFang SC / HarmonyOS Sans / Noto Sans SC / Microsoft YaHei 系统栈

不要加入金色、紫色、森林绿，也不要加入篮球场、篮筐、球衣 24/5、球员卡、记分牌等 NBA 主题元素；篮球只作为文字兴趣出现。

---

## 7. 部署到 GitHub Pages

仓库已经配置好 Pages：

1. 改完文件后：

```bash
git add index.html styles.css script.js README.md assets
git commit -m "Update personal site content"
git push origin main
```

2. 打开仓库 **Settings → Pages**，确认 Source 是 `Deploy from a branch`，分支 `main`，目录 `/ (root)`。
3. 等 30–60 秒，访问 <https://liziheng01.github.io/>。
4. 如果 CSS/图片没更新，强制刷新（Ctrl/Cmd + Shift + R）。

当前仓库远程示例：

```bash
git remote -v
# origin  https://github.com/LiZiHeng01/LiZiHeng01.github.io.git
```

不要提交 `李子恒相册/`、`李哈哈相册/`、`_shots/` 或本地备份文件。

---

## 8. 绑定自定义域名（可选）

GitHub Pages 的地址只能是 `用户名.github.io`。想要 `ziheng.design` 这种好记地址，需要自己买域名：

1. 在 Cloudflare Registrar / Porkbun / Namecheap 买域名。
2. GitHub 仓库 **Settings → Pages → Custom domain** 填入域名。
3. DNS：
   - 根域名 A：`185.199.108.153`、`185.199.109.153`、`185.199.110.153`、`185.199.111.153`
   - 根域名 AAAA：`2606:50c0:8000::153`、`2606:50c0:8001::153`、`2606:50c0:8002::153`、`2606:50c0:8003::153`
   - `www` CNAME：`LiZiHeng01.github.io`
4. 等 DNS 生效，开启 **Enforce HTTPS**。
5. 把 `index.html` 里的 canonical、`og:url`、`og:image`、`twitter:image`、JSON-LD `url` 改成新域名。
6. 在仓库根目录保留 GitHub 自动生成的 `CNAME` 文件。

如果走 Cloudflare 代理，先把记录设为 **DNS only**，等 GitHub 证书签发后再决定是否开代理。

---

## 9. 可访问性与测试

已处理：

- 跳转到主内容的 skip link
- 移动菜单：打开后焦点进入第一个链接，`Esc` 关闭，关闭后焦点回到按钮，Tab 焦点锁在菜单内
- 背景 `inert`，避免键盘/读屏进入菜单后面的内容
- 所有可点击元素有可见焦点环
- `prefers-reduced-motion` 下关闭动画和平滑滚动
- 图片有 `alt`；纯装饰图形 `aria-hidden="true"`
- 语义化标题层级和 `aria-labelledby`
- 社交链接 `rel="me noopener noreferrer"`

本地检查建议：

```bash
# HTML 里不要有重复 id
# 控制台不要有 JS 报错
# 320 / 390 / 768 / 1024 / 1366 / 1440 / 1920 宽度下不要横向滚动
```

Lighthouse 目标：Accessibility / Best Practices / SEO ≥ 0.95。

---

## 10. 隐私与版权

- 公开邮箱 `18973155056@163.com` 是本人确认要公开的；如果以后不想被爬，改成图片或表单。
- `李子恒相册/`、`李哈哈相册/` 在原图目录里，**不要提交**；`.gitignore` 已忽略。
- 小狗插画是原创矢量图。
- T 恤上的 Kobe 图案是原创丝网印风格插画，仅作为个人 T 恤图案，不是官方图片、官方商品，也不代表任何合作。
- 字体：Anton（SIL OFL）、Manrope（SIL OFL）、DM Mono（SIL OFL）。
- 站点代码可自由修改；人物照片和插画不要用于商业用途。

---

## 11. 常用命令

```bash
# 本地预览
python -m http.server 8000

# 查看改了哪些文件
git status

# 提交并部署
git add -A
git commit -m "Update site"
git push origin main
```
