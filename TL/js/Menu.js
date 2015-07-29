var closetimer = null; // Gestio du Timer pour l'affichage du menu
var item = null; // item du menu selectionné (univers)

/*
* Initialisation du menu
*/
function iniMenu() {
    $('#menu > ul > li').bind('mouseenter', function() {
        item = this;
        closetimer = window.setTimeout("ouvre_menu()", 200);

    }).bind('mouseleave', function() {
        window.clearTimeout(closetimer);
        $(this).children('a:first').removeClass('hover');
        $('div', this).hide();
    });
}

/*
* Affiche le choix des rayons
*/
function ouvre_menu() {
    $(item).children('a:first').addClass('hover');
    $('div', item).show();
}

$(document).ready(function() {
    
    var colonne = $("[id$=HF_NBR_COLONNE_RAYON_PAR_UNIVERS]").val();
    if (colonne != undefined && colonne != '') {
        var tabColonne = colonne.split(';');

        for (i = 0; i < 6; i++) {
            j = i + 1;
            var layer = '#layer' + j;

            if (i < 3)
                $(layer).css("left", "30px");

            if (tabColonne[i] == 1) {
                $(layer).css("width", "547px");

                if (i >= 3)
                    $(layer).css("left", "370px");
            }

            if (tabColonne[i] == 2) {
                $(layer).css("width", "762px");

                if (i >= 3)
                    $(layer).css("left", "170px");
            }
        }
    }
});
