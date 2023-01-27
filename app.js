function getNumberFromString(s) {
    let myStr = s.split('');
    let myArr = [];
    for (let i = 0; i < myStr.length; i++){
        if(isNaN(s[i])){
            // do nothing
        } else {
            myArr.push(myStr[i]);
        }
    }
    // let myStr2 = myArr.toString();
    const result = myArr.filter(myArr => myArr.trim().length > 0);
    let myStr2 = result.join('');
    // let mystr2 = myArr.replace(/\s/g, '');
    return myStr2;
}

console.log(getNumberFromString("1")); // 1
console.log(getNumberFromString("123")); // 123
console.log(getNumberFromString("this is number: 7")); // 7