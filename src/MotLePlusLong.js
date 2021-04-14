//consigne : 
//retourner le mot le plus long d'une phrase

function retournerLeMotLePlusLong(mot){
    //Diviser les mots de la phrase et les intégrer à un tableau
    const listMotsDeDépart = mot.split(' ');
   
    let motLePlusLong = [];
    let longueurLaPlusLongue = 0;
    
      listMotsDeDépart.forEach(element => {
        //Comparer la longueur des différents mots pour trouver le          plus long
          if(element.length > longueurLaPlusLongue){
            motLePlusLong = [];
            longueurLaPlusLongue = element.length;
            motLePlusLong.push(element);
          } else if(element.length == longueurLaPlusLongue){
             motLePlusLong.push(element);
          }
    })
    return motLePlusLong[0];
  }
  
  
  console.log(retournerLeMotLePlusLong('Comment vas-tu ?'));