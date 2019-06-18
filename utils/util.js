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
