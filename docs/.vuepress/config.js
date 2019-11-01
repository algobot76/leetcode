module.exports = {
  title: 'LeetCode',
  description: 'LeetCode solutions in Python, Java, and C++',
  themeConfig: {
    searchPlaceholder: 'Search...',
    sidebar: [['/problems/1_50', '1 - 50'], ['/snippets/', 'Snippets']],
  },
  markdown: {
    lineNumbers: true,
  },
  plugins: ['@vuepress/back-to-top', 'vuepress-plugin-nprogress'],
}
