module.exports = {
  title: "OuHao's Blog",
  description: "OuHao's personal blog.",
  dest: "public",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/avatar.jpg",
      },
    ],
    // [
    //   "meta",
    //   {
    //     name: "viewport",
    //     content: "width=device-width,initial-scale=1,user-scalable=no",
    //   },
    // ],
  ],
  theme: "reco",

  themeConfig: {
    nav: [
      {
        text: "首页",
        link: "/",
        icon: "reco-home",
      },
      {
        text: "时间轴",
        link: "/timeline/",
        icon: "reco-date",
      },
      // {
      //   "text": "Docs",
      //   "icon": "reco-message",
      //   "items": [
      //     {
      //       "text": "vuepress-reco",
      //       "link": "/docs/theme-reco/"
      //     }
      //   ]
      // },
      // {
      //   "text": "Contact",
      //   "icon": "reco-message",
      //   "items": [
      //     {
      //       "text": "GitHub",
      //       "link": "https://github.com/recoluan",
      //       "icon": "reco-github"
      //     }
      //   ]
      // }
    ],
    // sidebar: {
    //   "/docs/theme-reco/": ["", "theme", "plugin", "api"],
    // },
    type: "blog",
    blogConfig: {
      category: {
        location: 3,
        text: "分类",
      },
      tag: {
        location: 4,
        text: "标签",
      },
    },
    // friendLink: [
    //   {
    //     title: "午后南杂",
    //     desc: "Enjoy when you can, and endure when you must.",
    //     email: "1156743527@qq.com",
    //     link: "https://www.recoluan.com",
    //   },
    //   {
    //     title: "vuepress-theme-reco",
    //     desc: "A simple and beautiful vuepress Blog & Doc theme.",
    //     avatar: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
    //     link: "https://vuepress-theme-reco.recoluan.com",
    //   },
    // ],
    logo: "/avatar.jpg",
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: "Last Updated",
    // 设置时区偏移量（8小时）
    timezoneOffset: 8 * 60 * 60 * 1000,
    author: "OuHao",
    authorAvatar: "/avatar.jpg",

    // 备案
    record: "浙ICP备2023035604号-1",
    recordLink: "https://beian.miit.gov.cn",
    cyberSecurityRecord: "公安部备案文案",
    cyberSecurityLink: "公安部备案指向链接",
    startYear: "2023",

    valineConfig: {
      appId: "vgUREOpYfbPYdSleUuWtOzCa-gzGzoHsz",
      appKey: "FB6FEnTqPllIdMPrFA5MJddk",
    },
  },

  markdown: {
    lineNumbers: true,
  },

  plugins: [
    [
      "@vuepress/medium-zoom",
      {
        selector: ".page :not(a) > img",
      },
    ],
  ],

  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
};
