import {defineUserConfig} from "vuepress";

import theme from "./theme.js";
import viteBundler from "@vuepress/bundler-vite";

export default defineUserConfig({
    base: "/",

    lang: "zh-CN",
    title: "文档演示",
    description: "vuepress-theme-hope 的文档演示",

    theme,

    // 和 PWA 一起启用
    // shouldPrefetch: false,
    bundler: viteBundler({
        viteOptions: {
            ssr: {
                // noExternal: ['naive-ui', 'vueuc', 'date-fns']
                noExternal: ['naive-ui']
            },
        }
    })
});
