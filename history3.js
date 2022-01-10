function historia3 () {
    if (estado === 18)
    {
      console.log(estado);
        var play18 = createSprite (410,height-20);
        play18.addImage(playI);
        play18.scale=0.05;   
            if ( mousePressedOver(play18))
            {            
                historia.visible = true;
                historia.changeAnimation("imag19",ima19);
                
                historia.scale =0.8;
                estado = 19;
            }
            play18.lifetime=5;
    }
    if (estado === 19)
    {
        var play19 = createSprite (430,height-20);
        play19.addImage(playI);
        play19.scale=0.05;       
        if ( mousePressedOver(play19))
        { 
                historia.changeAnimation("imag20",ima20);
                historia.scale =0.5;

                estado=20;
        }
        play19.lifetime=5;
    }

    if (estado === 20)
    {
      var play20 = createSprite (450,height-20);
      play20.addImage(playI);
      play20.scale=0.05;
    
        if ( mousePressedOver(play20))
        { 
              historia.changeAnimation("imag21",ima21);
              historia.scale =0.5;
               estado = 21;
            }
            play20.lifetime=5;
    }

    if (estado === 21)
    {
      var play21 = createSprite (470,height-20);
      play21.addImage(playI);
      play21.scale=0.05;
    
        if ( mousePressedOver(play21))
        { 
            historia.changeAnimation("imag22",ima22);
            historia.scale =0.5;
             estado = 22;

            }
        play21.lifetime=5;
    }

    if (estado === 22)
    {
      var play22 = createSprite (490,height-20);
      play22.addImage(playI);
      play22.scale=0.05;
    
        if ( mousePressedOver(play22))
        { 
            estadoHistoria = 4;
            estadoJuego3 = 1;
            estado = 23; 

            }
            play22.lifetime=5;
    }
}