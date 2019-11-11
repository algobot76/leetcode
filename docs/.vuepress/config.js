module.exports = {
  title: 'LeetCode',
  description: 'LeetCode solutions in Python, Java, and C++',
  themeConfig: {
    searchPlaceholder: 'Search...',
    sidebar: [
      ['/problems/1_50', '1 - 50'],
      ['/problems/51_100', '51 - 100'],
      ['/problems/101_150', '101 - 150'],
      ['/problems/151_200', '151 - 200'],
      ['/problems/201_250', '201 - 250'],
      ['/problems/251_300', '251 - 300'],
      ['/lintcode/', 'LintCode'],
      ['/snippets/', 'Snippets'],
    ],
  },
  markdown: {
    lineNumbers: true,
    extendMarkdown: (md) => {
      md.use(require('markdown-it-vuepress-code-snippet-enhanced'))
    },
  },
  plugins: ['@vuepress/back-to-top', 'vuepress-plugin-nprogress'],
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': '../../',
      },
    },
  },
}
