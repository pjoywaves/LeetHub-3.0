function compress(chars: string[]): number {
  let write = 0; // 쓰는 위치
  let count = 1; // 현재 문자의 반복 횟수

  for (let i = 1; i <= chars.length; i++) {
    // 다음 문자가 다르거나 배열 끝이라면 그룹 종료
    if (i === chars.length || chars[i] !== chars[i - 1]) {
      // 문자 하나 기록
      chars[write++] = chars[i - 1];

      // 그룹 길이가 1보다 크면 숫자들 기록
      if (count > 1) {
        for (const c of count.toString()) {
          chars[write++] = c;
        }
      }

      // 다음 그룹 준비
      count = 1;
    } else {
      count++;
    }
  }

  return write;
}