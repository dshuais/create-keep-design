/*
 * @Author: dushuai
 * @Date: 2024-01-09 16:29:26
 * @LastEditors: dushuai
 * @LastEditTime: 2024-01-09 18:42:11
 * @description: 自动引入插件
 */
function KeepDesignResolver() {
  return {
    type: "component",
    resolve: (name) => {
      // console.log('name:>> ', name);
      if (name.startsWith('K')) {
        const partialName = name.substring(1);
        // console.log('return:>> ', partialName, {
        //   name: 'K' + partialName,
        //   from: '@keep-design/components/src' // 这里应该是 k-design 的路径
        // });
        return {
          name: 'K' + partialName,
          from: '@keep-design/components/src' // 这里应该是 k-design 的路径
        }
      }
    }
  }
}

module.exports = {
  KeepDesignResolver
}
