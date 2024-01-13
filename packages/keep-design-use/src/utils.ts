
/**
 * 格式化时间 Date 转化为指定格式的String
 * 年(y)可以用 1-4 个占位符、月(M)、日(d)、12小时(h)、24小时(H)、分(m)、秒(s)、毫秒(S)只能用 1 个占位符(是 1-3 位的数字)、周(E)、季度(q)可以用 1-2 个占位符
 * @param {string | number | Date} [date] 时间 可选，默认为当前时间
 * @param {string} [fmt] 格式 可选，默认为 yyyy-MM-dd HH:mm:ss
 * @returns {string}  时间date as fmt
 * 
 * formatDate('2023-03-23 15:30:59:60', 'yyyy-MM-dd HH:mm:ss:S EEE qq')
 * // => 2023-03-23 15:30:59:60 星期四 01
*/
export const formatDate = (date?: string | number | Date, fmt?: string): string => {
  if (date === void 0) date = new Date();
  if (fmt === void 0) fmt = "yyyy-MM-dd HH:mm:ss";
  if (typeof date === "string") {
    date = new Date(date);
  } else if (typeof date === "number") {
    date = new Date(date);
  }
  type O = {
    [key in string]: number;
  };
  var o: O = {
    "M+": date.getMonth() + 1, // 月份
    "d+": date.getDate(), // 日
    "h+": date.getHours() % 12 === 0 ? 12 : date.getHours() % 12, // 小时
    "H+": date.getHours(), // 小时
    "m+": date.getMinutes(), // 分
    "s+": date.getSeconds(), // 秒
    "q+": Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds(), // 毫秒
  };
  var week = {
    "0": "\u65e5",
    "1": "\u4e00",
    "2": "\u4e8c",
    "3": "\u4e09",
    "4": "\u56db",
    "5": "\u4e94",
    "6": "\u516d",
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  if (/(E+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (RegExp.$1.length > 1
        ? RegExp.$1.length > 2
          ? "\u661f\u671f"
          : "\u5468"
        : "") + week[(date.getDay() + "") as keyof typeof week]
    );
  }
  for (var k in o) {
    // type K = typeof o[keyof typeof o]
    if (new RegExp("(" + k + ")").test(fmt)) {
      let ff: any;
      if (RegExp.$1.length === 1) ff = o[k];
      else ff = ("00" + o[k]).substr(("" + o[k]).length);
      fmt = fmt.replace(RegExp.$1, ff);
    }
  }
  return fmt;
};

/**
 * 解析url参数
 * @param {string} [url] url 可选，默认为window.location.search（可用''当占位符）
 * @param {string} [name] 字段名 可选，默认全部
 * @returns {string | object} 传了name返回值string，不传则为object
 */
export const getUrlParam = (url?: string, name?: string): string | object => {
  if (!url || url === '') url = window.location.search
  url = decodeURIComponent(url)
  url = url.substring(url.indexOf('?') + 1)
  const obj: { [key: string]: string } = {}
  const urlList: string[] = url.split('&')
  if (!url || url === '') return obj
  urlList.forEach(url => {
    const q: string[] = url.split('=')
    obj[q[0]] = q[1]
  })
  if (name) return obj[name]
  return obj
}

/**
 * 获取随机字符串
 * @param {number} [e] 长度 可选，默认32位
 * @returns {string} 随机字符串
 */
export const randomString = (e: number = 32): string => {
  var t: string = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678',
    a: number = t.length,
    n: string = ''
  for (let i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a))
  return n
}

/**
 * 生成随机且不重复的的数组
 * @param {number} num 要生成的随机数的长度
 * @param {number} min 随机数的最小值 默认10
 * @param {number} max 随机数的最大值 默认50
 * @returns {number[]} number[].length = num
*/
export const randomList = (num: number, min: number = 10, max: number = 50): number[] => {
  let RLIST: number[] = []
  while (RLIST.length < num) {
    let MRNUMBER: number = Math.floor(Math.random() * (max - min) + min)
    if (RLIST.indexOf(MRNUMBER) == -1) {
      RLIST.push(MRNUMBER)
    }
  }
  return RLIST
}

/** 
 * 页面滚动 等同于element.scrollTo() 兼容性比scrollTo()好
 * @param {number} scroll 将要滚动到的 距离顶部的距离
 * @param {string} id 滚动区域的id 默认#app
 * @param {number} duration 滚动时间 可选，默认2.5毫秒
 * @param {number} offset 安全范围，范围内不进行滚动 可选，默认10
 */
export const scrollPageTo = (scroll: number, id: string = 'app', duration: number = 250, offset: number = 10): void => {
  if (!document.getElementById(id)) return

  const requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame
  const cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame
  const scale: number = document.body.clientWidth / 375

  const totalScrollDistance: number = scroll * scale
  const scrollTop: number = document.getElementById(id)!.scrollTop
  const isDown: boolean = scrollTop <= totalScrollDistance
  let scrollY: number = scrollTop,
    oldTimestamp: number | null = null

  if ((scrollTop - totalScrollDistance <= offset && scrollTop - totalScrollDistance >= 0) ||
    (totalScrollDistance - scrollTop <= offset && totalScrollDistance - scrollTop >= 0)) return

  function step(newTimestamp: number): void {
    if (oldTimestamp !== null) {
      if (scrollY <= totalScrollDistance && isDown) {
        scrollY += (totalScrollDistance - scrollTop) / duration * (newTimestamp - oldTimestamp)
      } else if (scrollY > totalScrollDistance && !isDown) {
        scrollY -= (scrollTop - totalScrollDistance) / duration * (newTimestamp - oldTimestamp)
      }
      document.getElementById(id)!.scrollTop = scrollY
    }
    if ((scrollY <= totalScrollDistance && isDown) || (scrollY >= totalScrollDistance && !isDown)) {
      oldTimestamp = newTimestamp
      requestAnimationFrame(step)
    }
  }
  requestAnimationFrame(step)
}
