function is_Palindrome(in_String) {

    var string_Array = in_String.split('');
    var backIndex =0;
    console.log(string_Array);

    for (let i=0; i < (string_Array.length/2); i++)
    {
        if(string_Array[i]==string_Array[string_Array.length-1-i])
        {
            backIndex = string_Array.length-1-i;
            // console.log(backIndex);
            // console.log(string_Array[i]+ " is equal to " +string_Array[backIndex]);
        }
        else {
            backIndex = string_Array.length-1-i;
            // console.log(string_Array[i]+ " is not equal to " +string_Array[backIndex]);
            // console.log(backIndex);
            return false;
        }
    }
    return true;
}

var string_S = "noonoon";
is_Palindrome(string_S);
console.log(is_Palindrome(string_S));