import { stringify } from 'qs';
import request from '../utils/request';
const baseUrl  = 'http://fg.hong.meng';

/*登陆*/
export async function login1(params) {
  return request(`http://192.168.10.108:84/api2.php?account=member450128&agent=5ae76a27001e5c`);
}


/*登陆*/
export async function loginApp(params) {
  return request(`http://192.168.10.244:8082/v1/auth?${stringify(params)}`);
}
/*

/!*获取游戏显示列表*!/
export async function gameList(params) {
  return request(`/api/gameList?${stringify(params)}`);
}

/!*获取赛事显示列表*!/
export async function matchList(params) {
  return request(`/api/eventList?${stringify(params)}`);
}

/!*获取赛事显示列表*!/
export async function matchHandicap(params) {
  return request('/api/pankou', {
    method: 'POST',
    body: {
      ...params,
    },
  });
}
*/


/*获取游戏显示列表*/
export async function gameList(params) {
  return request(`${baseUrl}/v1/esports/games?${stringify(params)}`);
}

/*获取赛事显示列表*/
export async function matchList(params) {
  return request(`${baseUrl}/v1/esports/matchs`,{
      method: 'POST',
      body: {
        ...params,
      },
    }
  );
}

/*获取单个赛事*/
export async function matchInfo(params) {
  return request(`${baseUrl}/v1/esports/match`,
    {method: 'POST',
      body: {
        ...params,
      }},);
}

/*获取赛事盘口列表*/
export async function matchHandicap(params) {
  return request(`${baseUrl}/v1/esports/handicaps`,
    {method: 'POST',
      body: {
        ...params,
      }},);
}


/*获取盘口赔率列表*/
export async function getOddsList(params) {
  return request(`${baseUrl}/v1/esports/odds`,
    {method: 'POST',
      body: {
        ...params,
      }},);
}

/*点击投注，获取投注的详细信息假如投注订单*/
export async function postBetOrder(params) {
  return request(`${baseUrl}/v1/esports/bet`,
    {method: 'POST',
      body: {
        ...params,
      }
    }
    );
}

/*获取赛事结果列表*/
export async function matchResult(params) {
  return request(`/api/matchResult?${stringify(params)}`);
}

/*获取赛事结果详细信息*/
export async function matchResultInfo(params) {
  return request(`/api/matchDetail?${stringify(params)}`);
}

/*获取账变信息列表*/
export async function runningAccount(params) {
  return request(`/api/runningAccount?${stringify(params)}`);
}

/*获取所有游戏记录列表*/
export async function gameLog(params) {
  return request('/api/gameLog', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

/*获取规则列表*/
export async function ruleDesc(params) {
  return request(`/api/ruleDesc?${stringify(params)}`);
}

/*获取公告列表*/
export async function annList(params) {
  return request('/api/annList', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

/*

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
*/
