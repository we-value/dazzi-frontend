export const nvl = (checkValue, newValue) => {
  if (checkValue === "" || checkValue === null || checkValue === undefined) {
    return newValue == undefined ? "" : newValue;
  }
  return checkValue;
};

export const moneyFormat = (price) => {
  return Number(price).toLocaleString("ko-KR");
};
