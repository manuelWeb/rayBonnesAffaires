### HEADER
**LOGO** (a#ctl00_UC_HEADER_HL_LOGO) > supprimer style en ligne (la css fait son job).  ~~*style="background:url(/images/Version4/bg_logo.png) no-repeat"*~~  

**script js** > à rapatrier depuis le body.  

**IMG css bg** à compiler dans un sprite = 1 requête  

**Evt secondaire** > passer l'ombre en png transparent > donc resizer les boites en css
<code>
    
    ligne 166
    #hpAnimCo .encart {
    ~~background: #fff url("../images/Version4/bg_home-encart-shadow.png") no-repeat scroll 50% bottom;~~
    bottom: 12px;
    height: 192px;
    position: absolute;
    width: 295px;
    }

    à ajouter
    #hpAnimCo .encart::after {
        background: #fff url("../images/Version4/bg_home-encart-shadow.png") no-repeat scroll 0 bottom;
        bottom: -12px;
        content: "";
        display: inline-block;
        height: 12px;
        position: absolute;
        width: 295px;
    }
</code> 

### MENU NAV.MAIN
**navigation pourquoi pas de réponsive style burger menu**  
Voir l'article : [**deep.design/the-hamburger-menu**](http://deep.design/the-hamburger-menu/?ref=webdesignernews.com)  
