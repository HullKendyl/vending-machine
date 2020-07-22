let tenderAmount = 0;

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

export function insertCoin(coin) {
    if (coin === "quarter") tenderAmount += 0.25;
    if (coin === "dime") tenderAmount += 0.10;
    if (coin === "nickel") tenderAmount += 0.05;
    if (coin === "penny");

    return formatter.format(Math.round(100*tenderAmount)/100);
}

