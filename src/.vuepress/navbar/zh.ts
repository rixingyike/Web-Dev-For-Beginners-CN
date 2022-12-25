import { navbar } from "vuepress-theme-hope";

// 可用图标在这里查看：
// https://vuepress-theme-hope.github.io/v2/zh/guide/interface/icon.html#iconfont-精选图标
export const zhNavbar = navbar([
  {
    text: "首页",
    icon: "home",
    link: "/",
  },
  {
    text: "博客",
    // icon: "blog",
    prefix: "https://yishulun.com",
    link: "https://yishulun.com",
    children: [
      {text: "文章", link: "/posts.html"},
      {text: "标签", link: "/tags.html"},
      {text: "分类", link: "/categories.html"},
      {text: "归档", link: "/archives.html"},
      {text: "友情链接", link: "/friendlinks.html"},
      {text: "留言", link: "/guestbook.html"},
      {text: "联系作者", link: "/about.html"},
    ],
  },
  {
    text: "电子书",
    // icon: "read",
    children: [
      // {text: "TS PBL一本通", link: "https://yishulun.com/ts/"},
      {text: "给初学者看的Web开发教程", link: "/"},
    ],
  },
]);
