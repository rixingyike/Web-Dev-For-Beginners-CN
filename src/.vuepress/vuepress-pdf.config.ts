// .vuepress/vuepress-pdf.config.ts
import { defineUserConfig } from "@condorhero/vuepress-plugin-export-pdf-v2";
// import { defaultTheme as theme } from "@vuepress/theme-default";
import theme from "./theme.js";

export default defineUserConfig({
  theme,
});