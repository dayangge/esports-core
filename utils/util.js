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

export const normalizeDataForHandicapItem = (data, schema) => {
  let kvObj = {};
  let ids = [];
  let handicapData = {};
  let handicapItemData = {};
  if(Array.isArray(data)) {
    data.forEach(item => {
      if(item.handicap_items){
        item.handicap_items.map((val) => {
          handicapItemData[val.handicap_item_id] = val
        });
      }
      kvObj[item[schema]] = item;
      ids.push(item[schema])
    })
  } else {
    kvObj[data[schema]] = data;
    ids.push(data[schema])
  }
  handicapData = {
    ['list']: kvObj,
      ids
  }
  return {handicapData, handicapItemData}


};

export const newDataAccordingToID = (data, schema) => {
  let kvObj = {};
  let round = [];
  let arr = [];
  if(Array.isArray(data)) {
    data.forEach(item => {
      if(Array.isArray(arr[item[schema]])){
        arr[item[schema]].push(item)
      }else {
        round.push(
          {
            id: item[schema],
            name:roundName[item[schema]]
          });
        arr[item[schema]] = [];
        arr[item[schema]].push(item)
      }
    })
  }
  round = round.sort(
    function(a,b){
     return a.id-b.id}
     );
  kvObj.list = arr;
  kvObj[schema] = round;
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

export const BORound = {
  0: '',
  1: 'BO1',
  2: 'BO2',
  3: 'BO3',
  4: 'BO4',
  5: 'BO5',
  6: 'BO6',
  7: 'BO7',
};

export const gameBgColor = {
  default: {
    logo:'https://img.avia01.com/upload/201809/0712370353b5.jpeg',
    name:'lol',
    bg:'linear-gradient(to right, #4858a6, #2a304a)'
  },
  lol: {
    logo:'https://img.avia01.com/upload/201809/0712370353b5.jpeg',
    name:'lol',
    bg:'linear-gradient(to right, #4858a6, #2a304a)'
  },
  dota2:{
    logo:'https://img.avia01.com/upload/201804/08142117a58f.png',
    name:'dota2',
    bg:'linear-gradient(to right, #812f2b, #412526)'
  },
  csgo:{
    logo: 'https://img.avia01.com/upload/201804/08142101a2a8.png',
    name: 'csgo',
    bg:'linear-gradient(to right, #b17c29, #6e4300)'
  } ,
  pubg: {
    logo:'https://img.avia01.com/upload/201804/081428128868.png',
    name: 'pubg',
    bg:'linear-gradient(to right, #6b562b, #4a3e24'
  },
  ow: {
    logo: 'https://img.avia01.com/upload/201804/08142054167a.png',
    name: 'ow',
    bg:'linear-gradient(to right, #555964, #2d2e30)'
  },
  aov:{
    logo: 'https://img.avia01.com/upload/201809/17013704496d.png',
    name: 'gok',
    bg:'linear-gradient(to right, #915026, #632d11)'
  },
};
