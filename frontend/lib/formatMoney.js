export default function(amount) {
  const options = {
    style: 'currency',
    currency: 'KRW',
    minimumFractionDigits: 0,
  };
  // if its a whole, dollar amount, leave off the .00
  const formatter = new Intl.NumberFormat('ko-KR', options);
  return formatter.format(amount / 1);
}
