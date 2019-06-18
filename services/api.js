import { stringify } from 'qs';
import request from '../utils/request';

/*获取游戏显示列表*/
export async function gameList(params) {
  return request(`/api/gameList?${stringify(params)}`);
}

/*获取赛事显示列表*/
export async function matchList(params) {
  return request(`/api/eventList?${stringify(params)}`);
}

/*获取赛事显示列表*/
export async function matchHandicap(params) {
  return request('/api/pankou', {
    method: 'POST',
    body: {
      ...params,
    },
  });
}

/*获取盘口赔率列表*/
export async function getOddsList(params) {
  return request(`/api/getOddsList?${stringify(params)}`);
}

/*点击投注，获取投注的详细信息假如投注订单*/
export async function fetchBetOrder(params) {
  return request(`/api/betOrder?${stringify(params)}`);
}

/*获取赛事结果列表*/
export async function matchResult(params) {
  return request(`/api/matchResult?${stringify(params)}`);
}


export async function queryRule(params) {
  return request(`/api/rule?${stringify(params)}`);
}

export async function removeRule(params) {
  return request('/api/rule', {
    method: 'POST',
    data: {
      ...params,
      method: 'delete',
    },
  });
}
