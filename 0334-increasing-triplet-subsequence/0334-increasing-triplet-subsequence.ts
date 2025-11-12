function increasingTriplet(nums: number[]): boolean {
    // 처음 큰 값, 다음 큰 값을 담을 변수를 만들었다.
    let first: number = Infinity;
    let second: number = Infinity;

    /**
        nums의 요소들이 순회되면서
        first, second에 각각 작은 값들이 담기고
        i < j < k 의 조건을 만족하게 되면 true를 리턴하게 된다.
     */
    for (let n of nums) {
        if (n <= first) {
            first = n;
        } else if (n <= second) {
            second = n;
        } else {
            return true;
        }
    }
    return false;
}
