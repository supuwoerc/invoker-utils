/**
 * @description 检查 URL 是否以 "http://" 或 "https://" 开头
 * @category Boolean
 * @param url 需要检查的url字符串
 * @returns 是否是http或https开始的字符串
 */
export declare function isHttpOrHttps(url: string): boolean;
/**
 * @description 判断当前浏览器是否是pc端
 * @category Boolean
 * @returns 当前浏览器是否是pc端
 */
export declare function isPc(): boolean;
/**
 * @description 判断当前浏览器是否是移动端
 * @category Boolean
 * @returns 当前浏览器是否是移动端
 */
export declare function isMobile(): boolean;
/**
 * @description 判断当前浏览器是否支持某一个字体
 * @category Boolean
 * @param family 浏览器是否支持某种字体
 * @returns 是否支持
 */
export declare function isSupportFontFamily(family: string): boolean;
/**
 * @description 判断一个值不是undefined
 * @category Boolean
 * @param val 原始值
 * @returns 当值不是undefined返回true,否则为false
 */
export declare function isDefined<T = any>(val?: T): val is T;
/**
 * @description 判断一个值是undefined
 * @category Boolean
 * @param val 原始值
 * @returns 当值是undefine返回true,否则为false
 */
export declare function isUndefined(val: any): val is undefined;
/**
 * @description 判断一个值是不是boolean
 * @category Boolean
 * @param val 原始值
 * @returns 当值是boolean返回true,否则为false
 */
export declare function isBoolean(val: any): val is boolean;
/**
 * @description 判断一个值是不是function
 * @category Boolean
 * @param val 原始值
 * @returns 当值是function返回true,否则为false
 */
export declare function isFunction<T extends Function>(val: any): val is T;
/**
 * @description 判断一个值是不是number
 * @category Boolean
 * @param val 原始值
 * @returns 当值是number返回true,否则为false
 */
export declare function isNumber(val: any): val is number;
/**
 * @description 判断一个值是不是string
 * @category Boolean
 * @param val 原始值
 * @returns 当值是string返回true,否则为false
 */
export declare function isString(val: any): val is string;
/**
 * @description 判断一个值是不是Object
 * @category Boolean
 * @param val 原始值
 * @returns 当值是object返回true,否则为false
 */
export declare function isObject(val: any): val is object;
/**
 * @description 判断一个值是不是null
 * @category Boolean
 * @param val 原始值
 * @returns 当值是null返回true,否则为false
 */
export declare function isNull(val: any): val is null;
/**
 * @description 判断一个值是不是RegExp
 * @category Boolean
 * @param val 原始值
 * @returns 当值是RegExp返回true,否则为false
 */
export declare function isRegExp(val: any): val is RegExp;
/**
 * @description 判断一个值是不是Date
 * @category Boolean
 * @param val 原始值
 * @returns 当值是Date返回true,否则为false
 */
export declare function isDate(val: any): val is Date;
