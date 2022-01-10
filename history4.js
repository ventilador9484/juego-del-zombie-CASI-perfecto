function  historia4 () {



    if (estado === 23){
        var play23 = createSprite (510,height-20);
        play23.addImage(playI);
        play23.scale=0.05;       
        if (mousePressedOver(play23))
        { 
                historia.changeAnimation("imag24",ima24);
                historia.scale =0.4;
                estado=24;
        }
        play23.lifetime=5;
    }
    if (estado === 24){
        var play24 = createSprite (530,height-20);
        play24.addImage(playI);
        play24.scale=0.05;       
        if (mousePressedOver(play24))
        { 
                historia.changeAnimation("imag25",ima25);
                historia.scale =0.4;
                estado=25;
        }
        play24.lifetime=5;
    }

    if (estado === 25){
        var play25 = createSprite (550,height-20);
        play25.addImage(playI);
        play25.scale=0.05;       
        if ( mousePressedOver(play25))
        { 
                historia.changeAnimation("imag26",ima26);
                historia.scale =0.5;

                estado=26;
        }
        play25.lifetime=5;
    }

    if (estado === 26){
        var play26 = createSprite (570,height-20);
        play26.addImage(playI);
        play26.scale=0.05;       
        if ( mousePressedOver(play26))
        { 
                historia.changeAnimation("imag27",ima27);
                historia.scale =0.98;

        }
        play26.lifetime=5;
    }
}