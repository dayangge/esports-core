export function getToken(str) {
  const tokenString =
    typeof str === 'undefined' ? sessionStorage.getItem('recovery-buss-web-token'): str;
    return tokenString;
}

export function setToken(token) {
  if(token){
    return sessionStorage.setItem('recovery-buss-web-token', token);
  }
}
