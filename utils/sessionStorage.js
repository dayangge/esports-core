const storage = window.sessionStorage;
const _isSessionStorageSupported = function() {
  try {
    window.sessionStorage.setItem('test', 1);
    window.sessionStorage.removeItem('test');
    return true;
  } catch (err) {
    return false;
  }
};

const SessionStorage = {
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
        SessionStorage.add(key, resValue);
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

export default SessionStorage;
