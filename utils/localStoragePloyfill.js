const _isLocalStorageSupported = function() {
  try {
    window.localStorage.setItem('test', 1);
    window.localStorage.removeItem('test');
    return true;
  } catch (err) {
    return false;
  }
};

export const getStorage = function(key) {
  ///localStorage.getItem / cookies
let res = ''  ;
if(_isLocalStorageSupported()) {
  res = window.localStorage.getItem(key)
}else {
  ///cookie
 let name = `${key}=`;
  let cache = document.cookie.split(';');
  for(let i=0; i<cache.length; i++) {
    let c = cache[i].trim();
    if (c.indexOf(name) === 0) {
      res = c.substring(name.length, c.length)
    }
  }
}
  return res;
};
export const setStorage = function(key, val) {
  ///localStorage.setItem / cookies
  if(_isLocalStorageSupported()) {
    window.localStorage.setItem(key, val)
  }else {
    ///cookie
      let d = new Date();
      d.setTime(d.getTime()+(30*24*60*60*1000));
      let expires = `expires=${d.toGMTString()}`;
      document.cookie = `${key}=${val}; ${expires}`;
  }
};


const LocalStorage = {
  add: (key, value) => {
    if (typeof value === 'object') {
      value = JSON.stringify(value);
    }
    storage.setItem(key, value);
  },
  // 覆盖原先的对象
  addCoverObject: (key, value) => {
    if (typeof value === 'string') {
      value = JSON.parse(value);
    }
    let currValue = storage.getItem(key);
    let resValue = {};
    if (currValue) {
      currValue = JSON.parse(currValue);
      resValue = { ...currValue, ...value };
    } else {
      resValue = value;
    }
    LocalStorage.add(key, resValue);
  },
  get: (key) => {
    return storage.getItem(key);
  },
  remove: (key) => {
    storage.removeItem(key);
  },
  clear: () => {
    storage.clear();
  },
};



