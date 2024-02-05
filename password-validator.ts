export function passwordValidator(password: string) {
  const numbers = "0,1,2,3,4,5,6,7,8,9".split(',');
  const includesNumbers = numbers.some(a => password.includes(a));
  const specials = "!@#$%^&*?".split('');
  const includesSpecials = specials.some(s => password.includes(s));
  
  
  if (password.length < 8 || !includesNumbers || !includesSpecials) {
    return false;
  }
  return true;
}
