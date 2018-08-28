/*Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.*/

function convertToRoman(num) {
    const placeVal = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
    const romNumeral = ['I','IV','V','IX','X','XL','L','XC','C','CD','D','CM','M'];
    var str="";
    // checking value range
    if (num<1 || num>3999){
        console.log ("Not a valid number for conversion");
        return false;
    }
    while (num!==0){ 
        for (let j = 0; j<13; j++){
            while (num>=placeVal[j] && !(j<13 && num>=placeVal[j+1])){
                str+=romNumeral[j];
                num -= placeVal[j];
            }
        }
    }
    num = str;
    return num;
}

convertToRoman(36);
