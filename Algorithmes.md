# Algorithmes à faire

## En cours 
### isPalindrome
    Vérifier si le mot passé en argument est un palindrome ou non;
    renvoie true ou false

## A venir
### findMax
    Trouver le nombre le plus grand dans un tableau T sans utiliser de fonction "max"
### isThirtiable
    Déterminer s'il existe 3 entiers dans le tableau T dont le produit est 30.
### averageOutcome
    Déterminer la moyenne de fréquence d'apparation pour la face d'un dé sur le nbre de lancé global (~10 000) et sur un sous-échantillon (~4000) 
### isWin
On considère deux jeux de hasard :

Le jeu A est un jeu de pile ou face avec une pièce biaisée (pile avec une probabilité de p=0.49). On lance la pièce. Si l'on obtient pile, on gagne un euro, sinon on perd un euro.
Le jeu B est un jeu avec deux pièces biaisées. La pièce 1 donne pile avec une probabilité p1 = 0.09 et la pièce 2 donne pile avec une probabilité p2 = 0.74. Si la somme en jeu de K euros est un multiple de 3, on lance la pièce 1, sinon on lance la pièce 2. Comme dans le jeu A, si l'on obtient pile, on gagne un euro, sinon on perd un euro.
Le jeu A est clairement perdant. Le jeu B l'est aussi (vous pourrez le vérifier). À présent, on va mixer les deux ! En effet, à chaque tour, on lance une pièce (cette fois-ci...) équilibrée ! Si l'on a pile, on joue au jeu A, sinon on joue au jeu B.

On suppose que le joueur a 0 euros comme capital de départ.
Après avoir joué 1.000.000 de parties, quel est le statut du jeu, du point de vue du joueur ?