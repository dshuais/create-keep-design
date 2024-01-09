/*
 * @Author: dushuai
 * @Date: 2024-01-09 16:29:26
 * @LastEditors: dushuai
 * @LastEditTime: 2024-01-09 17:45:49
 * @description: 自动引入插件
 */
function KeepDesignResolver() {
  return {
    type: "component",
    resolve: (name: string) => {
      if (name.startsWith('k-')) {
        const partialName = name.substring(2);
        return {
          name: 'k-' + partialName,
          from: '@keep-design/components/src' // 这里应该是 k-design 的路径
        }
      }
    }
  }
}

module.exports = {
  KeepDesignResolver
}
