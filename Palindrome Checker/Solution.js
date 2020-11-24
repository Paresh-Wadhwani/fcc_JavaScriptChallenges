function palindrome(str)
{
  var str1 = str.replace(/[^0-9a-z]/gi, '').toLowerCase()
  var str2 = str1.split("").reverse().join("")

  return str1 == str2;
}
