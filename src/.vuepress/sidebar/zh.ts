import { hopeTheme, sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    {
      text: "案例",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "文档",
      // icon: "note",
      prefix: "guide/",
      link: "guide/",
      children: "structure",
    },
  ],
});
