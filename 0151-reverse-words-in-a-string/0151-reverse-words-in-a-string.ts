function reverseWords(s: string): string {
    // s를 " "을 기준으로 나눈다.
    // 나눠진 값중 실제 데이터가 들어있는 값만 filter 처리한다.
    // 배열 반전을 한다
    // 다시 " "로 join 하여 결과를 도출한다.
    return s
        .split(" ")
        .filter((s) => s !== "")
        .reverse()
        .join(" ");
};