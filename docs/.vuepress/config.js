module.exports = {
  title: 'LeetCode',
  description: 'LeetCode solutions in Python, Java, and C++',
  themeConfig: {
    repo: 'algobot76/leetcode',
    searchPlaceholder: 'Search...',
    sidebar: [
      ['/problems/1_50', '1 - 50'],
      ['/problems/51_100', '51 - 100'],
      ['/problems/101_150', '101 - 150'],
      ['/problems/151_200', '151 - 200'],
      ['/problems/201_250', '201 - 250'],
      ['/problems/251_300', '251 - 300'],
      ['/problems/301_350', '301 - 350'],
      ['/problems/351_400', '351 - 400'],
      ['/problems/651_700', '651 - 700'],
      ['/problems/951_1000', '951 - 1000'],
      ['/lintcode/', 'LintCode'],
      ['/snippets/', 'Snippets'],
    ],
  },
  markdown: {
    lineNumbers: true,
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
