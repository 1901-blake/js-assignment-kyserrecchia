/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */


function isPalindrome(someStr) {
    let len = someStr.length;
    let halfLen = len/2;
    let i=0;
    while(i<halfLen){
        if(someStr[len-i-1]!=someStr[i]){
            return false;
        }
        i++;
    }
    return true;
}

console.log(isPalindrome("cac"));