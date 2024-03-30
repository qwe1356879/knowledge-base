export default {
  title: "知识库",
  description: "软件开发知识库",
  lang: "zh-CN",
  cleanUrls: true,
  // If this is disabled, when building it it will give deadlink errors if your markdown has the wrong links
  ignoreDeadLinks: true,
  lastUpdated: true,
  themeConfig: {
    logo: "/logo.svg",
    siteTitle: "知识库",
    search: {
      provider: "local",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/qwe1356879/knowledge-base" },
    ],
    // Sidebar
    sidebar: [
      {
        text: "前端知识库",
        collapsible: true,
        items: [
          {
            text: "框架使用",
            collapsible: false,
            items: [
              {
                text: "Vben Admin",
                collapsible: false,
                items: [
                  { text: "开始", link: "/front/frame/Vben/start" },
                  { text: "常见问题", link: "/front/frame/Vben/question" },
                ],
              },
              {
                text: "DhGis",
                collapsible: false,
                items: [
                  { text: "开始", link: "/front/frame/DhGis/start" }
                ],
              },
              {
                text: "VueThree3",
                collapsible: false,
                items: [
                  { text: "开始", link: "/front/frame/VueThree3/start" }
                ],
              },
            ],
          },
          { text: "前端工具库", collapsible: false },
          { text: "代码积累", collapsible: false },
          { text: "常见问题汇总", collapsible: false },
        ],
      },
    ],
    // you can disable the previous and next page here
    docFooter: {
      prev: false,
      next: true,
    },
    editLink: {
      pattern: "https://github.com/qwe1356879/knowledge-base/:path",
      text: "发现此页有错？我要纠错",
    },
    footer: {
      message: "Released under the MIT License.",
      copyright:
        "Copyright © 2024-present 数字港湾科技（湖北）有限公司 - 软件研发团队",
    },
    markdown: {
      theme: "material-palenight",
      lineNumbers: true,
    },
    // Mobile Config only
    returnToTopLabel: "顶部",
    sidebarMenuLabel: "菜单",
  },
};
