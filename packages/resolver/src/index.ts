/*
 * @Author: dushuai
 * @Date: 2024-01-09 16:29:26
 * @LastEditors: dushuai
 * @LastEditTime: 2024-01-10 21:37:31
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

export function KeepDesignResolver(options: KeepDesignResolverOptions = {}) {
  const moduleType = getModuleType(options);

  return {
    type: "component" as const,
    resolve: (name: string) => {
      // console.log("options:>> ", options);
      // console.log("name:>> ", name);
      if (name.startsWith("K")) {
        const partialName = name.substring(1);
        return {
          name: "K" + partialName,
          // from: "@keep-design/components/src"
          from: `keep-design/${moduleType}`,
        };
      }
    },
  };
}
