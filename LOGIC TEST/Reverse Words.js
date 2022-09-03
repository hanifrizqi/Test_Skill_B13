const str = 'I am A Great human';
const reverseStartingWith = (str, char) => {
   const strArr = str.split(' ');
   return strArr.reduce((acc, val) => {
      if(val[0] !== char){
         acc.push(val);
         return acc;
      };
      acc.push(val.split('').reverse().join(''));
      return acc;
   }, []).join(' ');
};
console.log(reverseStartingWith(str, 'h'));