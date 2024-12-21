# 配置 eslint 工程

## 配置流程

1. 安装 eslint `pnpm create @eslint/config@latest`
2. 配置 lint 命令 `eslint src/**/*.js --fix --cache`
3. 安装 husky `npm install husky lint-staged --save-dev`
4. 初始化 `npx husky-init`
