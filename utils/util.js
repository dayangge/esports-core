// 数组扁平化
export const normalizeData = (data, schema) => {
  let kvObj = {};
  let ids = [];
  if(Array.isArray(data)) {
    data.forEach(item => {
      kvObj[item[schema]] = item;
      ids.push(item[schema])
    })

  } else {
    kvObj[data[schema]] = data;
    ids.push(data[schema])
  }
  return {
    ['list']: kvObj,
    ids
  }
};

export const newDataAccordingToID = (data, schema) => {
  let kvObj = {};
  let log = [];
  let arr = [];
  if(Array.isArray(data)) {
    data.forEach(item => {
      if(Array.isArray(arr[item[schema]])){
        arr[item[schema]].push(item)
      }else {
        log.push(
          {
            id: item[schema],
            name:roundName[item[schema]]
          });
        arr[item[schema]] = [];
        arr[item[schema]].push(item)
      }
    })
  }
  kvObj.list = arr;
  kvObj[schema] = log;
  return kvObj
};

const roundName = {
  0: '全场',
  1: '第一场',
  2: '第二场',
  3: '第三场',
  4: '第四场',
  5: '第五场',
  6: '第六场',
  7: '第七场',
};

export const gameBgColor = {
  1: 'lol',
  2: 'dota2',
  3: 'csgo',
  4: 'pubg',
  5: 'ow',
  6: 'gok',
};
