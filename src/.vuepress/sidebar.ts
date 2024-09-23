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
            icon: "fa-solid fa-stairs",
            prefix: "jianghu/",
            link: "jianghu/",
            children: "structure",
        },
        {
            text: "有家酒馆",
            icon: "fa-solid fa-beer-mug-empty",
            prefix: "jiuguan/",
            link: "jiuguan/",
            children: "structure",
        },
        {
            text: "bug",
            // icon: "fa-solid fa-beer-mug-empty",
            prefix: "bug/",
            link: "bug/",
            children: "structure",
        },
    ]
});
