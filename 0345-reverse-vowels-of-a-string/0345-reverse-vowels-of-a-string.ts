type getVowels = {
  value: string;
  index: number;
};

function reverseVowels(s: string): string {
  let arr: string[] = s.split("");
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let findVowels: getVowels[] = [];

  for (let i = 0; i < arr.length; i++) {
    if (vowels.includes(arr[i])) {
      findVowels.push({
        value: arr[i],
        index: i,
      });
    }
  }

  let modifiedVowls: getVowels[] = findVowels.map((v) => ({ ...v }));
  for (let i = 0; i < findVowels.length; i++) {
    let left = findVowels[i];
    let right = findVowels[findVowels.length - (1 + i * 1)];
    modifiedVowls[i].index = right.index;
    modifiedVowls[findVowels.length - (1 + i * 1)].index = left.index;
  }

  for (let i = 0; i < modifiedVowls.length; i++) {
    arr[modifiedVowls[i].index] = modifiedVowls[i].value;
  }
  return arr.join("");
}
