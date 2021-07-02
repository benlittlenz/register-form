export function isValidExpiry(expiry: string) {
  if (expiry.length === 4) {
    const expiryMonth = Number(expiry.slice(0, 2));
    const expiryYear = Number(expiry.slice(2, 4));

    const todayDate = new Date();
    const todayYear = todayDate.getFullYear() % 100;
    const todayMonth = todayDate.getMonth();
    console.log(todayYear)
    if (!(expiryMonth >= 1 && expiryMonth <= 12)) return false;
    if (expiryYear > todayYear) return true;
    else if (expiryMonth > todayMonth) return true;
    else return false;
  }
  return;

}
