import {defineUserConfig} from "vuepress";

import theme from "./theme.js";
import viteBundler from "@vuepress/bundler-vite";

export default defineUserConfig({
    base: "/",

    lang: "zh-CN",
    title: "蜉蝣",
    description: "蜉蝣之羽，衣裳楚楚。心之忧矣，於我归处。蜉蝣之翼，采采衣服。心之忧矣，於我归息。蜉蝣掘阅，麻衣如雪。心之忧矣，於我归说。",

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
