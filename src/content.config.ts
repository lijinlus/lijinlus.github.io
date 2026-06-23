import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// ┌──────────────────────────────────────────────────────────────────┐
// │  文章「格式统一」的核心：每篇文章的 frontmatter 必须符合下面的 schema  │
// │  缺字段 / 写错类型，构建时会直接报错 —— 从源头保证格式一致。           │
// └──────────────────────────────────────────────────────────────────┘
const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(), // 标题（必填）
    description: z.string(), // 摘要，用于列表和 SEO（必填）
    pubDate: z.coerce.date(), // 发布日期，如 2026-06-23（必填）
    updatedDate: z.coerce.date().optional(), // 更新日期（可选）
    tags: z.array(z.string()).default([]), // 标签（可选，默认空）
    draft: z.boolean().default(false), // 草稿不在正式构建中显示
  }),
});

export const collections = { blog };
