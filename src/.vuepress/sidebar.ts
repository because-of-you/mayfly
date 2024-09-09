import {sidebar} from "vuepress-theme-hope";

export default sidebar({
    "/": [
        "",
        "portfolio",
        // {
        //   text: "案例",
        //   icon: "laptop-code",
        //   prefix: "demo/",
        //   link: "demo/",
        //   children: "structure",
        // },
        // {
        //   text: "幻灯片",
        //   icon: "person-chalkboard",
        //   link: "https://plugin-md-enhance.vuejs.press/zh/guide/content/revealjs/demo.html",
        // },
    ],
    "/zhaosheng/": [
        {
            text: "江湖",
            icon: "book",
            prefix: "jianghu/",
            link: "jianghu/",
            children: "structure",
        },
    ]
});
