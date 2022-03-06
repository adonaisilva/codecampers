function checkCashRegister(price, cash, cid) {
  const CURRENCY = [
    ["ONE HUNDRED", 100],
    ["TWENTY", 20],
    ["TEN", 10],
    ["FIVE", 5],
    ["ONE", 1],
    ["QUARTER", 0.25],
    ["DIME", 0.1],
    ["NICKEL", 0.05],
    ["PENNY", 0.01],
  ];
  let due = cash - price;
  if (cid.reduce((a, b) => a + b[1], 0).toFixed(2) == due)
    return { status: "CLOSED", change: cid };
  let changeArr = [];
  cid = cid.reverse();
  for (let i = 0; i < CURRENCY.length; i++) {
    if (due >= CURRENCY[i][1]) {
      let bills = 0;
      while (cid[i][1] >= CURRENCY[i][1] && due.toFixed(2) >= CURRENCY[i][1]) {
        due -= CURRENCY[i][1];
        cid[i][1] -= CURRENCY[i][1];
        bills += 1;
      }
      changeArr.push([CURRENCY[i][0], bills * CURRENCY[i][1]]);
    }
  }
  if (due.toFixed(2) != 0) return { status: "INSUFFICIENT_FUNDS", change: [] };
  return { status: "OPEN", change: changeArr };
}

checkCashRegister(3.26, 100, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);
checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);

checkCashRegister(19.5, 20, [
  ["PENNY", 0.01],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
]);

checkCashRegister(19.5, 20, [
  ["PENNY", 0.01],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 1],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
]);

checkCashRegister(19.5, 20, [
  ["PENNY", 0.5],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
]);
