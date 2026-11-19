# 陈晋钦 · 个人主页

一个纯静态的响应式个人简历网站，部署在 GitHub Pages 上。

## 目录结构
```
resume-site/
├── index.html        # 首页
├── about.html        # 关于我（教育、技能、荣誉）
├── projects.html     # 科研项目
├── awards.html       # 竞赛荣誉
├── experience.html   # 实践经历
├── contact.html      # 联系我
├── css/style.css     # 样式
├── js/main.js        # 交互
├── assets/resume.pdf # 简历 PDF
└── .nojekyll         # 告诉 GitHub Pages 跳过 Jekyll 构建
```

## 部署到 GitHub Pages

1. 在 GitHub 上新建一个仓库，名称必须为 `<你的用户名>.github.io`（例如 `zhangsan.github.io`），设为 Public。
2. 将本目录中的所有文件上传/推送到该仓库的 `main` 分支根目录。
3. 进入仓库 **Settings → Pages**，Source 选择 `Deploy from a branch`，分支选 `main`、目录选 `/ (root)`，保存。
4. 等待几分钟后访问 `https://<你的用户名>.github.io` 即可。

> 也可以直接用 Git 命令推送（把 `YOUR_USERNAME` 换成你的用户名）：
> ```bash
> git init
> git add .
> git commit -m "init portfolio"
> git branch -M main
> git remote add origin https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io.git
> git push -u origin main
> ```

## 自定义修改
- 联系方式、姓名等信息集中在各 HTML 中，搜索 `17833952955` 或 `陈晋钦` 批量替换。
- 更新简历 PDF：替换 `assets/resume.pdf` 即可。
- 配色在 `css/style.css` 顶部的 `:root` 变量中调整。
