function mousePressed(){
  
    /*------------------SCENE---------------------------*/
    //------------------sea-----------------------------//
    //saba
    if (map_sea && mouseX >= 1100 && mouseX < 1260 && mouseY >= 550 && mouseY < 700) {
      map_sea = false;
      map_main = true;
      pickStack.push(ingredients.saba);
    }
  
    //-----------------tomato_farm----------------------//
    //tomato
    if (map_hatakeA && mouseX >= 1100 && mouseX < 1260 && mouseY >= 550 && mouseY < 700) {
      map_hatakeA = false;
      map_main = true;
      pickStack.push(ingredients.tomato);
    }
  
    //-----------------olieve_farm---------------------//
    //olieve
    if (map_hatakeB && mouseX >= 1100 && mouseX < 1260 && mouseY >= 550 && mouseY < 700) {
      map_hatakeB = false;
      map_main = true;
      pickStack.push(ingredients.olive);
    }

    //-----------------market--------------------------//
    //koroke
    if (map_market && mouseX >= 1100 && mouseX < 1260 && mouseY >= 550 && mouseY < 700) {
      map_market = false;
      map_main = true;
      pickStack.push(ingredients.koroke);
    }

  }
