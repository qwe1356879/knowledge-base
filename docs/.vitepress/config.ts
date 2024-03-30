export default {
  title: "软件研发知识库",
  description: "An awesome docs template built by me",
  lang: 'en-US',
  cleanUrls: true,
  // If this is disabled, when building it it will give deadlink errors if your markdown has the wrong links
  ignoreDeadLinks: true,
  
  themeConfig: {
    logo: "/logo.svg",
    siteTitle: "知识库",
    search: {
      provider: "local",
    },
    // Navbar Link
    // nav: [
    //   { text: "About", link: "/about" },
    //   { text: "Contact", link: "/contact" },
    //   { text: "Guide", link: "/guide" },
    //   { text: "Configs", link: "/configs" },
    //   {
    //     // Dropdown Menu
    //     text: "Changelog",
    //     items: [
    //       { text: "v0.0.1", link: "/item-1" },
    //       { text: "v0.0.2", link: "/item-2" },
    //       { text: "v0.0.3", link: "/item-3" },
    //     ],
    //   },
    // ],
    // Social Icons
    socialLinks: [
      { icon: "github", link: "https://github.com/qwe1356879/knowledge-base" },
    ],
    // Sidebar
    sidebar: [
      {
        text: "Section A",
        collapsible: true,
        items: [
          { text: "Introduction", link: "/introduction" },
          { text: "Getting Started", link: "/getting-started" },
        ],
      },
      {
        text: "Section B",
        collapsible: false,
        items: [
          { text: "Introduction", link: "/introduction" },
          { text: "Getting Started", link: "/getting-started" },
        ],
      },
    ],
    // you can disable the previous and next page here
    docFooter: {
      prev: false,
      next: true,
    },
    editLink: {
      pattern: 'https://github.com/Evavic44/adocs/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2024-present 数字港湾科技（湖北）有限公司 - 软件研发团队",
    },
    markdown: {
      theme: "material-palenight",
      lineNumbers: true,
    },
    // Mobile Config only
    returnToTopLabel: '顶部',
    sidebarMenuLabel: '菜单',
  },
};
