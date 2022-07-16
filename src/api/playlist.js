// import axios from 'axios';
import request from '@/utils/request';
/**
 * 推荐歌单
 * 说明 : 调用此接口 , 可获取推荐歌单
 * - limit: 取出数量 , 默认为 30 (不支持 offset)
 * - 调用例子 : /personalized?limit=1
 * @param {Object} params
 * @param {number=} params.limit
 */
export function recommendPlaylist(params) {
  return request({
    url: '/personalized',
    method: 'get',
    params,
  });
}
