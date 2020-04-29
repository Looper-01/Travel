/*
 * @Description: city store
 * @Author: Looper
 * @Date: 2020-04-07 15:37:40
 * @LastEditors: Looper
 * @LastEditTime: 2020-04-29 23:03:16
 * @FilePath: /Travel/src/store/state.js
 */
let defaultCity = "上海";
try {
  if (localStorage.city) {
    defaultCity = localStorage.city;
  }
} catch (e) {
  console.log(e);
}

export default {
  city: defaultCity
};
