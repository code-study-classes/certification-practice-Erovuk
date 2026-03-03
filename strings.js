function countUppercaseLetters(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    const a = str[i];
    if (a >= 'A' && a <= 'Z') {
      count++;
    }
  }
  return count;
}
export { countUppercaseLetters };
