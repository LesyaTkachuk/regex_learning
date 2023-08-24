/*
Using the provided array, create a second array that only includes the numbers with the 801 area code. (The area code is the first 3 numbers.)
*/
const phoneNums = ["801-766-9754", "801-545-5454", "435-666-1212", "801-796-8010", "435-555-9801", "801-009-0909", "435-222-8013", "801-777-6655"];



const filterArrayByAreaCode1=(array)=>{
    const regex=/801-./;

   return array.filter(string=>regex.test(string));
};

const filterArrayByAreaCode2=(array, areaCode)=>{
    
    const regex=new RegExp(`${areaCode}-...-....`);

   return array.filter(string=>string.match(regex));
};

const filterArrayByAreaCode3=(array, areaCode)=>{
    const regex=new RegExp(`${areaCode}-.`);

    let newArray=[];
    for(let i=0; i<array.length; i+=1){
        if(regex.test(array[i])){
        newArray.push(array[i])
        }
    }

    return newArray;
};

console.log('1 result',filterArrayByAreaCode1(phoneNums) );
console.log('2 result',filterArrayByAreaCode2(phoneNums, 801) );
console.log('3 result',filterArrayByAreaCode3(phoneNums, 801) );