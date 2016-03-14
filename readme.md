*** STRUCTURE ***

J'ai d'abord dessiné tout mon père noel en finissant par les jambes que je voulais animer.

Puis j'ai découpé mon code en deux fonctions :
	- drawSantaClaus pour dessiner le pere noel sans les jambes
	- drawLegs pour dessiner les jambes

Je voulais appliquer une rotation sur les deux jambes pour les faire "s'inverser" et donner une impression de running au pere noel. Du coup j'ai déclaré un deuxieme context (context2) pour modifier le point d'origine et appliquer la rotation par rapport au centre du ventre (sans que cela s'applique sur tout mon dessin).

Ma fonction drawLegs prend donc 3 paramètres : rad1, rad2 et varOffSetX (le nom n'est pas très bien choisi je vous l'accorde) qui modifie respectivement la valeur du rotate pour la jambe 1, la valeur du rotate pour la jambe 2 et la valeur de l'ombre en X d'une des jambes.

Puis j'ai fais une fonction move qui :
- incrémente mes 3 variables et (tente) de les décrementer pour faire un aller retour
- dessine le pere noel en appelant la fonction drawSanta
- dessine les jambes en appelant drawLegs avec les 3 paramètres

Pour finir, j'ai décidé d'appeler cette fonction move que lorsque l'utilisateur clique sur le canvas, et de rajouter un petit rire de père noel.

Du coup, j'ai du appeler quand meme mes deux fonctions drawSanta et drawLegs (sans paramètres) pour dessiner le pere noel fixe.

*** PROBLEMES ***

J'ai mis beaucoup de temps à faire fonctionner l'animation car je pensais qu'il fallait faire une boucle for pour incrémenter mes variables mais du coup ca dessinait mes jambes plein de fois sans s'effacer. Alors que la fonction etait deja en soi une boucle avec le window.requestAnimationFrame..

Puis au final, il s'avere que mes rotations de jambes donnent un truc plutot moche mais le temps m'a manqué pour améliorer le rendu.

J'ai eu pas mal de petits problèmes au niveau du dessin aussi, car je trouve le pathfinder un peu limité, donc j'ai du "récuperer" quelques bavures à plusieurs endroits avec des magouilles et elles m'ont géné au moment de l'animation.

Pour faire l'aller retour des jambes, il a fallu incrémenter et decrementer, ce qui a été trèès compliqué car à cause de l'imprécision des nombres flottants utilisés, j'ai du utiliser une fonction de la librairie Math incluse dans JavaScript qui prend pas mal de puissance processeur du coup non seulement c'est moche mais en plus ca lag :)



*** FEATURES ***

CLICK = le père noel "court" + déclenche bruitage rire
PAGE ONLOAD = le père noel fait "hoho"... (y)