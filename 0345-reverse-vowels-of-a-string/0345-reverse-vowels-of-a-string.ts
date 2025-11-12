// value와 index 객체 타입
type getVowels = {
  value: string;
  index: number;
};

function reverseVowels(s: string): string {
    // s 를 나누어 저장할 배열 변수
    let arr: string[] = s.split("");

    // 모음 정의
    let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

    let findVowels: getVowels[] = [];

    // arr을 도는 동안
    // 정의된 모음값에 arr[i]이 포함되면
    // 특정 타입으로 정의된 findVowls 에 해당 값과 index(i)값을 저장한다.
    for (let i = 0; i < arr.length; i++) {
        if (vowels.includes(arr[i])) {
        findVowels.push({
            value: arr[i],
            index: i,
        });
        }
    }

    // arr 에서 찾은 모음들을 순회하며
    // 양끝부터 가운데로 차례대로 자리(index)를 바꾼다.
    let modifiedVowls: getVowels[] = findVowels.map((v) => ({ ...v }));
    for (let i = 0; i < findVowels.length; i++) {
        let left = findVowels[i];
        let right = findVowels[findVowels.length - (1 + i * 1)];
        modifiedVowls[i].index = right.index;
        modifiedVowls[findVowels.length - (1 + i * 1)].index = left.index;
    }

    // 바뀐 index 값에 맞게 arr에 다시 넣고 string으로 join 하여 결과를 도출한다.
    for (let i = 0; i < modifiedVowls.length; i++) {
        arr[modifiedVowls[i].index] = modifiedVowls[i].value;
    }
    return arr.join("");
}
