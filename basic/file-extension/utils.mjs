#! /usr/bin/env zx
export const deviceName = 'iPhone';
export const mobilesOnSale = ['Samsung', 'Apple', 'Huawei'];
export const offers = {
  priceCurrency: 'TWD',
  price: '26,900',
};
export const logPrice = (price) => {
  console.log('price: ', price);
};
export function logDeviceName(deviceName) {
  console.log(deviceName);
}