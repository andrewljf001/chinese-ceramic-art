# chinese-ceramic-art

## 项目概述

本仓库用于开发**中国陶瓷艺术精品 B2C 电商网站**，以高端紫砂壶为核心品类，面向全球高净值收藏爱好者，展示中国传统陶瓷工艺之美，引导客户下单购买。

## 网站信息

| 字段 | 内容 |
|------|------|
| 项目类型 | B2C 精品电商展示站 |
| 目标受众 | 全球紫砂壶 / 陶瓷艺术收藏买家 |
| 核心品类 | 紫砂壶、茶叶末釉、汝窑、青瓷、高温颜色釉 |
| 购买方式 | 在线浏览 → 联系购买（WhatsApp / Email）→ 线下汇款 |
| 网站风格 | 东方禅意美学 · 极简高端 · 留白为美 |
| 仓库地址 | https://github.com/andrewljf001/chinese-ceramic-art |

## 文件索引

| 文件 / 目录 | 说明 |
|------------|------|
| `src/` | 网站源代码 |
| `src/index.html` | 首页（品牌主视觉 + 精选作品）|
| `src/collection.html` | 藏品列表页（全部产品）|
| `src/product.html` | 产品详情页模板 |
| `src/about.html` | 品牌故事 / 工艺介绍 |
| `src/contact.html` | 联系 / 购买咨询页 |
| `src/css/style.css` | 全局样式（东方极简风格）|
| `src/js/main.js` | 交互逻辑（轮播、筛选、WhatsApp）|
| `assets/products/` | 产品实拍图 |
| `assets/story/` | 品牌故事配图 |
| `docs/design.md` | 设计规范（色彩、字体、组件）|
| `docs/progress.md` | 项目进度管理 |
| `docs/products.md` | 产品数据表（名称、价格、描述）|

## 页面架构

```
首页 (index.html)
├── Hero              品牌意境大图 + 一句话定位
├── Featured          精选作品（4-6件，带价格）
├── Categories        品类导航（紫砂壶、青瓷、汝窑...）
├── Story Teaser      品牌故事引导
├── Testimonials      买家评价（可选）
└── Footer            联系方式 + 社媒（可选）

藏品页 (collection.html)
├── 筛选栏（品类 / 价格区间 / 艺术家）
└── 产品卡片网格（图 + 名 + 材质 + 价格 + 咨询按钮）

详情页 (product.html) [模板]
├── 产品大图（多图轮播）
├── 名称 + 艺术家 + 规格（容量、高度、泥料）
├── 工艺介绍（正文）
├── 购买方式说明（WhatsApp / Email 联系）
└── 相关推荐

品牌故事 (about.html)
├── 宜兴紫砂文化起源
├── 工艺师介绍
└── 选材与烧制工艺

联系页 (contact.html)
├── WhatsApp 直达
├── Email 联系
└── 简单询价表单
```

## 技术栈

- 纯 HTML5 / CSS3 / Vanilla JS（零依赖）
- GitHub Pages 静态托管
- 东方极简美学设计系统
- 产品数据存于 `docs/products.md`（后期可迁至 JSON）

## 里程碑

| 里程碑 | 目标 | 状态 |
|--------|------|------|
| v1.0 | 首页 + 藏品页 + 联系页上线 | ⏳ 待开始 |
| v1.1 | 产品详情页 + 品牌故事页 | ⏳ 待开始 |
| v2.0 | 中英双语 + 产品 JSON 化 | ⏳ 规划中 |

## 更新记录

| 日期 | 更新人 | 描述 |
|------|--------|------|
| 2026-05-24 | Claude (Anthropic) | 初始化仓库结构 |

---
**最后更新**：2026-05-24 by Claude (Anthropic)
