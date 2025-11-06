class Solution {
    public String mergeAlternately(String word1, String word2) {
        char[] wordArr1 = word1.toCharArray();
        char[] wordArr2 = word2.toCharArray();

        String formatedStr = "";

        int length = Math.min(word1.length(), word2.length());
        for(int i = 0; i < length; i++){
            formatedStr += Character.toString(wordArr1[i]);
            formatedStr += Character.toString(wordArr2[i]);
        }

        if(word1.length() > length){
            formatedStr += word1.substring(length);
        } else if(word2.length() > length){
            formatedStr += word2.substring(length);
        }

        return formatedStr;
    }
}