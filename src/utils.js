const isConditionVerified = (value) => {
  const lastDigit1Str = String(value).slice(-1);
  const lastDigit1Num = Number(lastDigit1Str);
  const firstCondition = lastDigit1Num === 7;
  const secondCondition = value % 7 === 0 && value !== 0;
  return firstCondition || secondCondition;
};

export { isConditionVerified };
