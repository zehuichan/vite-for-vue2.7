import { isObject } from '@/utils/is'

// 深度合并
export function deepMerge(src = {}, target = {}) {
  let key
  for (key in target) {
    src[key] = isObject(src[key])
      ? deepMerge(src[key], target[key])
      : (src[key] = target[key])
  }
  return src
}
