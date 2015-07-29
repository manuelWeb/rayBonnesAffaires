var produitMoisSlider_Speed = 1000; // Rapidité du carrousel

/*
* Contruction du caroussel "Produits du Mois"
*/
function iniProduitMoisSlider() {
    $("#produitMoisSlider").rcarousel({
        visible: 4,
        step: 3,
        width: 235,
        height: 335,
        speed: produitMoisSlider_Speed,
        navigation: { next: "#produitMoisSlider-next", prev: "#produitMoisSlider-prev" },
        auto: { enabled: true, direction: "next", interval: 5000 }
    });
}

function changerCadeau(identifiant) {
    if (identifiant == 'LAB_PREMIER_CADEAU') {
        document.getElementById('<%= IMG_CADEAU_1.ClientID%>').src = document.getElementById('HF_NOM_IMG_CADEAU_1').value;
        document.getElementById('<%= IMG_CADEAU_1.ClientID%>').alt = document.getElementById('HF_LIBELLERAYON_CADEAU_1').value;
        document.getElementById('<%= IMG_CADEAU_1.ClientID%>').title = document.getElementById('HF_LIBELLERAYON_CADEAU_1').value;
        document.getElementById('<%= LAB_POUR_LE_PLAISIR.ClientID%>').innerHTML = document.getElementById('HF_LIBELLE_CADEAU_1').value;
        document.getElementById('<%= LAB_PRIX_CADEAU.ClientID%>').innerHTML = document.getElementById('HF_PRIX_CADEAU_1').value;
    }
    else if (identifiant == 'A_DEUXIEME_PRIVILEGE') {
        document.getElementById('<%= IMG_CADEAU_1.ClientID%>').src = document.getElementById('HF_NOM_IMG_CADEAU_2').value;
        document.getElementById('<%= IMG_CADEAU_1.ClientID%>').alt = document.getElementById('HF_LIBELLERAYON_CADEAU_2').value;
        document.getElementById('<%= IMG_CADEAU_1.ClientID%>').title = document.getElementById('HF_LIBELLERAYON_CADEAU_2').value;
        document.getElementById('<%= LAB_POUR_LE_PLAISIR.ClientID%>').innerHTML = document.getElementById('HF_LIBELLE_CADEAU_2').value;
        document.getElementById('<%= LAB_PRIX_CADEAU.ClientID%>').innerHTML = document.getElementById('HF_PRIX_CADEAU_2').value;
    }
}