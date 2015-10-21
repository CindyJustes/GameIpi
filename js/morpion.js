/**
 * Created by matthieu.beauvin on 21/10/2015.
 */
var grille, tours, finJeu;

function init(){
    //Parcours de toutes les cases pour les vider et mettre leur data chiffre � 0
    //Le data chiffre contient 0 si personne n'a jou� dessus, 1 si on a jou� une croix et 2 si on a jou� un rond
    $('.case').each(function(){
        $(this).html("");
        $(this).setAttribute('data-chiffre','0');
    });



    //Le joueur 1 doit jouer
    tours = 1;

    // Nombre de coups jou�s
    finJeu = 0;

    //Initialisation des cardinalit�s des cases
    //var i = 0, j = 0;
    //while(i<2)
    //{
    //    while(j<2)
    //    {
    //        $(this).setAttribute('data-position', i.toString()+','+ j.toString());
    //        j++;
    //    }
    //    j=0;
    //    i++;
    //}
}

function jouer(caseselect){
    if(caseselect.attr("chiffre") != 0){
        alert("Vous venez de jouer dans une case d�ja jou�e");
        return false;
    }
    else{
        setAttribute('data-chiffre', tours);
        if(tours==1)
            tours++;
        else
            tours--;
    }
    finJeu++;
}

$(document).ready(function(){
    $('.case').click(function(){
        jouer($(this))
    });
});
