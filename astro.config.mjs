import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

// https://astro.build/config
export default defineConfig({
  // 部署地址。GitHub Pages 个人站点（USERNAME.github.io）用根路径，base 保持默认 "/"。
  // 如果将来用「项目站点」（仓库名不是 USERNAME.github.io），需要把 base 设为 "/仓库名"。
  site: "https://lijinlus.github.io",

  markdown: {
    // 学术写作常用的数学公式支持：$...$ 行内、$$...$$ 块级
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
    // 代码高亮：浅色主题，贴合简洁学术风
    shikiConfig: {
      theme: "github-light",
      wrap: true,
    },
  },

  integrations: [sitemap()],
});
