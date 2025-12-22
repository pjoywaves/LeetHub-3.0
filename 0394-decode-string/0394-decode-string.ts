function decodeString(s: string): string {
  const countStack: number[] = [];
  const stringStack: string[] = [];

  let current = '';
  let k = 0;

  for (const ch of s) {
    // 숫자 (여러 자리 대응)
    if (ch >= '0' && ch <= '9') {
      k = k * 10 + Number(ch);
    }

    // 여는 괄호
    else if (ch === '[') {
      countStack.push(k);
      stringStack.push(current);

      k = 0;
      current = '';
    }

    // 닫는 괄호
    else if (ch === ']') {
      const repeat = countStack.pop()!;
      const prev = stringStack.pop()!;

      current = prev + current.repeat(repeat);
    }

    // 일반 문자
    else {
      current += ch;
    }
  }

  return current;
};