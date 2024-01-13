/*
 * @Author: dushuai
 * @Date: 2024-01-09 16:29:26
 * @LastEditors: dushuai
 * @LastEditTime: 2024-01-11 15:01:19
 * @description: 自动引入插件
 */

interface KeepDesignResolverOptions {
  /**
   * Set the referenced module type.
   *
   * @default 'esm'
   */
  module?: "esm" | "cjs";
}

function getModuleType(options: KeepDesignResolverOptions): string {
  const { module = 'esm' } = options;
  return module === 'cjs' ? 'lib' : 'es';
}

/**
 * KeepDesign组件引入
 * @param {KeepDesignResolverOptions} options 
 * @returns 
 */
export function KeepDesignResolver(options: KeepDesignResolverOptions = {}) {
  const moduleType = getModuleType(options);

  return {
    type: "component" as const,
    resolve: (name: string) => {
      if (name.startsWith("K")) {
        const partialName = name.substring(1);
        return {
          name: "K" + partialName,
          /**
           * ts文件单独打包 使用moduleType方式
           * ts文件统一打包 直接使用包名
           * 
           */
          // from: `keep-design/${moduleType}`,
          from: `keep-design`,
        };
      }
    },
  };
}
