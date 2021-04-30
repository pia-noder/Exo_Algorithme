const alpha = ["A", "B", "C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z", " " ];
const ROT13 = ["N","O","P","Q","R","S","T","U","V","W","X","Y","Z","A", "B", "C","D","E","F","G","H","I","J","K","L","M", " "];



function codeInROT13 (word){
  
  let result = '';

  let arrayOfWordUp= word.toUpperCase().split('');
 
    arrayOfWordUp.forEach(letter => {
       let letterInROT13 = ROT13[alpha.indexOf(letter)];
        result += letterInROT13;
    });
  
  return result
};


//test
console.log(codeInROT13('URYYB JBEYQ'));
console.log(codeInROT13('BCRAPYNFFEBBZF'));


