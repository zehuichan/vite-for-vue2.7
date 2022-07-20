import request from '@/utils/request'

const IS_PROD = ['production', 'staging', 'prod'].includes(import.meta.env.MODE)

export function wxconfig(REDIRECT_URI) {
  return request({
    url: IS_PROD
      ? `/api/wechat/jssdk/config?REDIRECT_URI=${REDIRECT_URI}`
      : `/api/wechat/jssdk/configTest?REDIRECT_URI=${REDIRECT_URI}`,
    method: 'post'
  })
}
