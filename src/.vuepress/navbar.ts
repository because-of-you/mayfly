import { navbar } from "vuepress-theme-hope";

export default navbar([
  // "/", 暂时屏蔽主页 为了内容精简
  "/portfolio",
  "/demo/",
  {
    text: "指南",
    icon: "lightbulb",
    prefix: "/guide/",
    children: [
      {
        text: "Bar",
        icon: "lightbulb",
        prefix: "bar/",
        children: [{ text: "baz", icon: "info", link: "baz" }, { text: "...", icon: "ellipsis", link: "" }],
      },
      {
        text: "Foo",
        icon: "lightbulb",
        prefix: "foo/",
        children: [{ text: "ray", icon: "info", link: "ray" }, { text: "...", icon: "ellipsis", link: "" }],
      },
    ],
  },
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
