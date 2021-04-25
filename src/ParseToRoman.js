//Objectif : Transformer les nombres fournis en chiffre arabes en chiffres romain

//1)Vérifier que la valeur passé en argument est bien une valeur numérique et vérifier que la valeur est supérieur à 0.
//2)Décomposer le nombre par tranche de mille, cent , dix  et un; et y associé la valeur romaine et concaténer à chaque fois cette valeur
//3)Regrouper les valeurs par groupe de 5 est remplacer ce groupe par soit V, L ou D en conséquence
//4)Prendre en compte que nombre écrit sous forme d'une soustraction (ex: 9 => VIIII => IX) est remplacer en conséquence ces valeurs
function parseToRoman (num){
    if(num == 0){
      alert('Les romains n ont pas inventé le zéro !')
    } else if (typeof num !== "number"){
      alert('Indiquer une valeur numérique');
    } else {
      
     let romanNum = 'valeur : ';
     let valeurNum = num
      
      while(valeurNum > 0){
        if(valeurNum >= 1000){
     
          romanNum = romanNum.concat('M');
          valeurNum -= 1000;
          
        } else if(valeurNum >= 100){
          valeurNum -= 100;
          romanNum = romanNum.concat('C');
        }else if(valeurNum >= 10){
              valeurNum -= 10;
              romanNum = romanNum.concat('X');
           
        }
        else if(valeurNum >= 1){
          valeurNum -= 1;
          romanNum = romanNum.concat('I');
        }
        else{
          break;
        }
   
      }
      
      romanNum = romanNum.replace('XXXXX', 'L');
      romanNum = romanNum.replace('CCCCC', 'D');
      romanNum = romanNum.replace('IIIII', 'V');
      romanNum = romanNum.replace('VIIII', 'IX');
      romanNum = romanNum.replace('LXXXX', 'XC');
      romanNum = romanNum.replace('DCCCC', 'CM');
      console.log(romanNum);
    }
    
  };
  
  parseToRoman(2589);
  parseToRoman(3999);
  