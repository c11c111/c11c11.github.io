# 陈晋钦 · 个人主页

一个纯静态的响应式个人简历网站，采用深色编辑风设计（ink + 香槟金），部署在 GitHub Pages 上。

## 目录结构
```
resume-site/
├── index.html        # 首页
├── about.html        # 关于我（教育、技能、荣誉）
├── projects.html     # 科研项目（含三级大创）
├── awards.html       # 竞赛荣誉
├── experience.html   # 实践经历
├── statement.html    # 自述与推荐（个人陈述/推荐信/自荐信）
├── contact.html      # 联系我
├── css/style.css     # 设计系统与样式
├── js/main.js        # 交互
├── assets/resume.pdf # 简历 PDF
└── .nojekyll
```

## 内容来源
内容整合自 8 份简历文件 + 5 份保研材料（自荐信、个人陈述、推荐信×2、简历专硕）。

## 部署到 GitHub Pages
推送到 `c11c111.github.io` 仓库的 `main` 分支即可，Pages 会自动重新构建。

## 自定义修改
- 配色：`css/style.css` 顶部的 `:root` CSS 变量。
- 联系方式：搜索 `17833952955` 或 `陈晋钦` 批量替换。
- 更新简历：替换 `assets/resume.pdf`。
