//Code une fonction qui détermine si le mot est un palindrome (2versions)

//version 1 :
//Comparer le mot d'origine avec son inverse; fonction intégrée dans 
function comparedLetters(toCompare, reversed){
	let x = 0;
	//boucle qui ittére sur les lettres des 2 tableaux passés en argument est compare leur valeur 
	//Valeur de x sert à s'assurer que l'on analyse toutes les lettres du mot 
	//si lettre identique alors x += 1 sinon retourn false
	  for(let i = 0; i < toCompare.length; i++){
		if(toCompare[i]===reversed[i]){
		  x++
		}else{
		  return false
		};
		//si on a bien ittéré sur toutes les lettres cela veux dire que le mot est un palindrome donc on retourne true
		if(x === toCompare.length){
		   return true;
		 }  
	  };
	};
	
//Découper le mot de départ pour inverser les lettres
function isPalindrome(word){
	//Vérifier que l'on passe bien une string
	if(typeof word === 'string'){

    //Récupérer chaque lettre du mot individuellement 
    let char = [];
    let wordInTable = [];//garder le mot initial diviser dans un tableau
      
		for(let i = 0; i < word.length; i++){
      char.push(word.charAt(i)); 
          wordTable.push(word.charAt(i));
    }

    const reversed = char.reverse();

    //appelle fonction pour comparer les lettres entre elles
   return comparedLetters(wordInTable, reversed);
	}
    
};

console.log(isPalindrome('anne'))
console.log(isPalindrome('anna'))
isPalindrome('anne');

isPalindromeShort('anna');


//______________________________________________________________________________________________

//version 2 :
//Fonction similaire à celle du dessus mais en condensé, avec les fonctions attachées sur une même ligne
function isPalindromeShort(word){
	if(typeof word === 'string'){
		var re = /[\W_]/g;//Cibler les caractère spéciaux et le underscore
		var wordLowerCaseReg = word.toLowerCase().replace(re, '');//Supprimer les caractères ciblés par la Regex et tout mettre en minuscules
		let reversed = wordLowerCaseReg.split('').reverse().join('');

		//Vérifier si l'argument word est égal à word retourné
		if(wordLowerCaseReg === reversed){
			return true
		}else{
			return false
		}
	}else{
		alert('Passez une chaîne de caractères (= un mot) en argument');
	}
};

isPalindromeShort('Kayak');
console.log(isPalindromeShort('anna'));
console.log(isPalindromeShort('anne'));
