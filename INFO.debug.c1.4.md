### branch menu_c1.3
debug optimis menu + ajout ray BA :

- **line 141 au bout de la ligne (2 déclaration sur cette même ligne) modifier le selecteur (ajout de poids)**
- <code> ~~.item6 span {width: 90px;}~~</code>
- <code> #menu ul li.item6 span {width: 90px;}</code>  
- **line 142 ajout prefix constructeurs**
- <code>-moz-transition: all 0.2s ease 0.1s; -o-transition: all 0.2s ease 0.1s; -webkit-transition: all 0.2s ease; -webkit-transition-delay: 0.1s; transition: all 0.2s ease 0.1s;</code>  
- **line 145 ajout prefix constructeurs**
- <code>-moz-transition: all 0.2s ease 0.1s; -o-transition: all 0.2s ease 0.1s; -webkit-transition: all 0.2s ease; -webkit-transition-delay: 0.1s; transition: all 0.2s ease 0.1s;</code>  

### PB affichage IE7 uniquement
- **Ligne 1697 pannier déroulant : img decote affichée dans tous les cas SOLUTION supprimer cette ligne**
- <code>.open span {line-height: 12px;display: inline-block;}</code>   
- **Ligne 1665 commande/pannier.aspx PB PICTOS énormes > les moyens de paiements acceptés SOLUTION supprimer toutes les propriétés width (à tester sur tts les navigateurs)**
- <code>#processCmd .tabCaddie #footerCaddie #moyenPaiement img{float:none;~~width:100%;*width:inherit;~~height:auto;margin:0;}</code>   