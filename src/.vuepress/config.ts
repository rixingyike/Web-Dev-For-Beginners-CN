import { defineUserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import theme from "./theme.js";

export default defineUserConfig({
  // 每个GitHub帐号下只能有1个主页repo，但是可以有不限数量的项目主页repo
  // 这个配置对应于repo的名字
  base: "/Web-Dev-For-Beginners-CN/",

  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
    }),
  ],

  locales: {
    "/": {
      lang: "zh-CN",
      title: "给初学者看的Web开发教程",
      description: "课时12周，共24课，主要讲解JavaScript、CSS、HTML相关的基础知识，并通过开发打字游戏、虚拟玻璃容器、浏览器扩展、太空游戏、银行应用程序共5个实战项目，带你了解Web开发的整体流程。该教程英文版为微软团队出品，在国外颇受好评。",
    },
  },

  theme,

  shouldPrefetch: false,
});
