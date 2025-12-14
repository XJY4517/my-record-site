import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/my-record-site/', // 正确：和仓库名一致
  title: '我的日常记录', // 修正：用英文引号
  description: '记录每日饮食，训练等事项', // 修正：用英文引号
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
    socialLinks: [
      // 修正：指向你自己的仓库
      { icon: 'github', link: 'https://github.com/XJY4517/my-record-site' }
    ]
  }
})
