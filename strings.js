// 1 задание

function countUppercaseLetters(str) {
  let count = 0;
  for (let i = 0; i < str.length; i += 1) {
    const a = str[i];
    if (a >= 'A' && a <= 'Z') {
      count += 1;
    }
  }
  return count;
}
export { countUppercaseLetters };

// 2 задание

function combineStrings(N1, N2, S1, S2) {
  let De1 = '';
  for (let i = 0; i < N1; i += 1) {
    De1 += S1[i];
  }

  let De2 = '';
  for (let i = 0; i < N2; i += 1) {
    De2 += S2[S2.length - N2 + i];
  }
  const rez = De1 + De2;
  return rez;
}
export { combineStrings };

// 3 задание

function containsSubstring(S, S0) {
  return S.includes(S0);
}

export { containsSubstring };
