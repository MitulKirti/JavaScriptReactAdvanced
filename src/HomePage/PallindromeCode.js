const PallindromeCode = (str) => {
    var regExp = /[\W_]/g;
    var lowRegStr = str.toString().toLowerCase().replace(regExp, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
  }
  console.log(PallindromeCode("malayalam"));
  console.log(PallindromeCode("A man, a plan, a canal. Panama"));

  export default PallindromeCode;