/*
 * @Description: mutations
 * @Author: Looper
 * @Date: 2020-04-07 15:37:40
 * @LastEditors: Looper
 * @LastEditTime: 2020-04-29 23:03:51
 * @FilePath: /Travel/src/store/mutations.js
 */
export default {
  changeCity(state, city) {
    state.city = city;
    try {
      localStorage.city = city;
    } catch (e) {
      console.log(e);
    }
  }
};
