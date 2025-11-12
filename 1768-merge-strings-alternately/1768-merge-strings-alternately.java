class Solution {
    public String mergeAlternately(String word1, String word2) {
        // word1, word2를 char 배열에 담음.
        char[] wordArr1 = word1.toCharArray();
        char[] wordArr2 = word2.toCharArray();

        // 가공된 문자열이 들어갈 변수
        String formatedStr = "";

        // word1, word2 중 길이가 짧은 값 구하기
        int length = Math.min(word1.length(), word2.length());

        // 번갈아가면서 변수안에 값 넣기
        for(int i = 0; i < length; i++){
            formatedStr += Character.toString(wordArr1[i]);
            formatedStr += Character.toString(wordArr2[i]);
        }

        // 길이가 더 긴 변수값을 formatedStr 에 붙여주기
        if(word1.length() > length){
            formatedStr += word1.substring(length);
        } else if(word2.length() > length){
            formatedStr += word2.substring(length);
        }

        return formatedStr;
    }
}