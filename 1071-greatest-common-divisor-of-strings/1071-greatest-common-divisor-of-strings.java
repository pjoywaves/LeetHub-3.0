class Solution {
    public String gcdOfStrings(String str1, String str2) {

        // str1과 str2를 순서만 바꿔서 붙여봤을 때 같지 않으면
        // 패턴이 없는것으로 "" 리턴
        if(!((str1 + str2).equals(str2 + str1))){
            return "";
        }

        // str1과 str2 길이의 최대공약수를 구하기
        int gcdResult = gcd(str1.length(), str2.length());

        // 0의 자리부터 최대공약수 위치까지 잘라서 패턴을 찾아낸다.
        return str1.substring(0, gcdResult);
    }

    public int gcd(int a, int b){
        // 0이 나올때까지 gcd()를 타서 최대공약수가 무엇인지 찾기
        return b == 0 ? a : gcd(b, a % b);
    }
}