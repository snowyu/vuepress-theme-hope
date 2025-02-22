import { config } from "docs-shared";
import theme from "./theme";

export default config(
  {
    base: `blog`,
    indexName: "vuepress-theme-hope-blog2",
  },
  {
    locales: {
      "/": {
        lang: "en-US",
        title: "Blog plugin",
        description: "Blog plugin for VuePress2",
      },

      "/zh/": {
        lang: "zh-CN",
        title: "博客插件",
        description: "VuePress2 的博客插件",
      },
    },

    theme,
  }
);
