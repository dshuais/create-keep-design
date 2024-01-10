/**
 * 生成class list name
 * @param name 模块名
 * @param mods 方法list
 * @returns string 规则类名
 */
export function cln(name: string, mods?: (string | undefined)[]) {
  if (!mods) return `keep-${name}`
  if (Array.isArray(mods)) {
    return mods.reduce((ret, mod) => {
      if (mod) return ret + ` keep-${name}--${mod}`
      return ret
    }, `keep-${name}`)
  }
}
