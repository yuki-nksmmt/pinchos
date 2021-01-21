function drawPick() {
    // translate(mouseX, mouseY); 
    // rotate(PI/6);
    // image(pick,0,-125,300,300);
    if(map_finish!=true){
        noCursor();
        image(pick,mouseX,mouseY-125,300,300);
        for (yasai = 0; yasai < pickStack.length; yasai++) {
            let x = mouseX;
            let y = mouseY - 100 + (50 * yasai);
            if (pickStack[yasai] == ingredients.tomato) {
                image(tomato, x, y, 100, 100);
            } else if (pickStack[yasai] == ingredients.saba) {
                image(saba, x, y, 100, 100);
            } else if (pickStack[yasai] == ingredients.olive) {
                image(olive, x, y, 100, 100);
            } else if (pickStack[yasai] == ingredients.soap) {
                image(soap, x, y, 100, 100);
            } else if (pickStack[yasai] == ingredients.koroke) {
                image(koroke, x, y, 100, 100);
            } else if (pickStack[yasai] == ingredients.hashi) {
                image(hashi, x, y, 100, 100);
            }
            if(yasai == 2){
                map_main = false;
                map_finish = true;
            }
        }
    }else{
        cursor();
        image(pick,width/2,height/2,300,300);
        for (yasai = 0; yasai < pickStack.length; yasai++) {
            let x = width/2;
            let y = (height/2) + (50 * yasai);
            if (pickStack[yasai] == ingredients.tomato) {
                image(tomato, x, y, 100, 100);
            } else if (pickStack[yasai] == ingredients.saba) {
                image(saba, x, y, 100, 100);
            } else if (pickStack[yasai] == ingredients.olive) {
                image(olive, x, y, 100, 100);
            } else if (pickStack[yasai] == ingredients.soap) {
                image(soap, x, y, 100, 100);
            } else if (pickStack[yasai] == ingredients.koroke) {
                image(koroke, x, y, 100, 100);
            } else if (pickStack[yasai] == ingredients.hashi) {
                image(hashi, x, y, 100, 100);
            }
            if(yasai == 2){
                map_main = false;
                map_finish = true;
            }
        }
    }
}

//-------main_menu-----------
function drawFirstScene() {
    noStroke();
    image(first, width/2, height/2, width, height);
    image(logo, width/2, 200, 1200, 400);
    if (mouseX >= 440 && mouseX < 840 && mouseY >= 460 && mouseY < 560) {
        if (mouseIsPressed) {
            start_menu = false;
            map_main = true;
        } else {
            fill(180);
            rect((width/2)+5, (height/2)+155, 400, 100, 20);
            fill("#40FF74");
            rect(width/2, height/2+150, 400, 100, 20);
        }
    } else {
        fill(180);
        rect((width/2)+5, (height/2)+155, 400, 100, 20);
        fill("#40FFCE");
        rect(width/2, height/2+150, 400, 100, 20);
    }
    noStroke();
    textAlign(CENTER,CENTER);
    textSize(50);
    fill(150);
    text("START",width/2+2,height/2+152);
    fill(240);
    text("START",width/2,height/2+150);
    textSize(10);
    
}

//-------map-----------
function drawMapScene() {
    noFill();
    stroke(0);
    
    image(maps, width/2, height/2, width, height);
    
    
    noStroke();
    fill(255,50);
    rect(width-300,300,500,500,20);
    
    if (map_main &&mouseX >= 525 && mouseX < 575 && mouseY >= 285 && mouseY < 335 ||map_select == 1) {//olive
        image(pin, 500, 410, 50, 50);//tomato
        image(pin, 550, 455, 50, 50);//saba
        image(pin2, 550, 310, 50, 50);//olive
        image(pin, 560, 55, 50, 50);//market
        image(pin, 460, 350, 50, 50);//saijotaku
        image(pin, 620, 500, 50, 50);//kadowaki
        image(olive_mini, width-300, 200, 480, 270);//thumbnail
        stroke(0,150);
        strokeWeight(3);
        fill(255, 240);
        rect(width-103, 293, 80, 80, 20);
        image(olive, width-103, 293, 75, 75);
        
        noStroke();
        fill(0);
        textSize(30);
        text("富戸オリーブファーム",width-300,height/2+20);
        text("南欧のような気候を\n活かしたオリーブ栽培",width-300,height/2+100);
        
        map_mouseover = 1;
        
        if(mouseIsPressed){
            map_select = map_mouseover;
        }
        
    }else if(map_main &&mouseX >= 475 && mouseX < 525 && mouseY >= 385 && mouseY < 435 ||map_select == 2) {//tomato
        image(pin2, 500, 410, 50, 50);//tomato
        image(pin, 550, 455, 50, 50);//saba
        image(pin, 550, 310, 50, 50);//olive
        image(pin, 560, 55, 50, 50);//market
        image(pin, 460, 350, 50, 50);//saijotaku
        image(pin, 620, 500, 50, 50);//kadowaki
        image(tomato_mini, width-300, 200, 480, 270);//thumbnail
        stroke(0,150);
        strokeWeight(3);
        fill(255, 240);
        fill(255, 240);
        rect(width-103, 293, 80, 80, 20);
        image(tomato, width-103, 293, 75, 75);
        
        noStroke();
        fill(0);
        textSize(30);
        text("トマト畑",width-300,height/2+20);
        text("地域品種「アイランドルビー」",width-300,height/2+100);
        
        map_mouseover = 2;
        
        if(mouseIsPressed){
            map_select = map_mouseover;
        }
        
    }else if(map_main &&mouseX >= 525 && mouseX < 575 && mouseY >= 425 && mouseY < 475 ||map_select == 3) {//saba
        image(pin, 500, 410, 50, 50);//tomato
        image(pin2, 550, 455, 50, 50);//saba
        image(pin, 550, 310, 50, 50);//olive
        image(pin, 560, 55, 50, 50);//market
        image(pin, 460, 350, 50, 50);//saijotaku
        image(pin, 620, 500, 50, 50);//kadowaki
        image(saba_mini, width-300, 200, 480, 270);//thumbnail
        stroke(0,150);
        strokeWeight(3);
        fill(255, 240);
        fill(255, 240);
        rect(width-103, 293, 80, 80, 20);
        image(saba, width-103, 293, 75, 75);
        
        noStroke();
        fill(0);
        textSize(30);
        text("富戸漁港",width-300,height/2+20);
        text("新鮮な海の幸が穫れる",width-300,height/2+100);
        
        map_mouseover = 3;
        
        if(mouseIsPressed){
            map_select = map_mouseover;
        }
        
    }else if(map_main &&mouseX >= 435 && mouseX < 475 && mouseY >= 325 && mouseY < 375 ||map_select == 4) {//soap
        image(pin, 500, 410, 50, 50);//tomato
        image(pin, 550, 455, 50, 50);//saba
        image(pin, 550, 310, 50, 50);//olive
        image(pin, 560, 55, 50, 50);//market
        image(pin2, 460, 350, 50, 50);//saijotaku
        image(pin, 620, 500, 50, 50);//kadowaki
        image(soap_mini, width-300, 200, 270, 270);//thumbnail
        stroke(0,150);
        strokeWeight(3);
        fill(255, 240);
        fill(255, 240);
        rect(width-103, 293, 80, 80, 20);
        image(soap, width-103, 293, 75, 75);
        
        noStroke();
        fill(0);
        textSize(30);
        text("富戸オリーブ石鹸",width-300,height/2+20);
        text("BASEにてネットからも購入可能\n(QRコードから飛べます)",width-300,height/2+100);
        
        map_mouseover = 4;
        
        if(mouseIsPressed){
            map_select = map_mouseover;
        }
        
    }else if(map_main &&mouseX >= 535 && mouseX < 585 && mouseY >= 30 && mouseY < 80 ||map_select == 5) {//soap
        image(pin, 500, 410, 50, 50);//tomato
        image(pin, 550, 455, 50, 50);//saba
        image(pin, 550, 310, 50, 50);//olive
        image(pin2, 560, 55, 50, 50);//market
        image(pin, 460, 350, 50, 50);//saijotaku
        image(pin, 620, 500, 50, 50);//kadowaki
        image(market_mini, width-300, 200, 480, 270);//thumbnail
        stroke(0,150);
        strokeWeight(3);
        fill(255, 240);
        fill(255, 240);
        rect(width-103, 293, 80, 80, 20);
        image(koroke, width-103, 293, 75, 75);
        
        noStroke();
        fill(0);
        textSize(30);
        text("いで湯っこ市場",width-300,height/2+20);
        text("富戸の食が揃ってる",width-300,height/2+100);
        
        map_mouseover = 5;
        
        if(mouseIsPressed){
            map_select = map_mouseover;
        }
        
    }else if(map_main &&mouseX >= 595 && mouseX < 645 && mouseY >= 475 && mouseY < 525 ||map_select == 6) {//hashi
        image(pin, 500, 410, 50, 50);//tomato
        image(pin, 550, 455, 50, 50);//saba
        image(pin, 550, 310, 50, 50);//olive
        image(pin, 560, 55, 50, 50);//market
        image(pin, 460, 350, 50, 50);//saijotaku
        image(pin2, 620, 500, 50, 50);//kadowaki
        image(hashi_mini, width-300, 200, 270, 270);//thumbnail
        stroke(0,150);
        strokeWeight(3);
        fill(255, 240);
        fill(255, 240);
        rect(width-103, 293, 80, 80, 20);
        image(hashi, width-103, 293, 75, 75);
        
        noStroke();
        fill(0);
        textSize(30);
        text("門脇つり橋",width-300,height/2+20);
        text("QRコードよりサウンド版が制作した\nVRアプリにて実際に橋にいけます",width-300,height/2+100);
        
        map_mouseover = 6;
        
        if(mouseIsPressed){
            map_select = map_mouseover;
        }
        
        
    }else{
        image(brank_mini, width-300, 200, 480, 270);
        image(pin, 500, 410, 50, 50);//tomato
        image(pin, 550, 455, 50, 50);//saba
        image(pin, 550, 310, 50, 50);//olive
        image(pin, 560, 55, 50, 50);//market
        image(pin, 460, 350, 50, 50);//saijotaku
        image(pin, 620, 500, 50, 50);//kadowaki
        noStroke();
        fill(0);
        textSize(30);
        text("-行き先を選択-",width-300,height/2+20);
        sound_play = 0;
        map_mouseover = 0;
    }    
    
    noStroke();
    fill("#036b07");
    textSize(46);
    text("富戸",400,height/2-80);
    textSize(10); 
    
    //map_chenge//
    if (mouseX >= 725 && mouseX < 1025 && mouseY >= 555 && mouseY < 630) {
        if (map_select !=0 && mouseIsPressed) {
            if(map_select==1){
                map_main = false;
                map_hatakeB = true;
            }else if(map_select==2){
                map_main = false;
                map_hatakeA = true;
            }else if(map_select==3){
                map_main = false;
                map_sea = true;
            }else if(map_select==4){
                pickStack.push(ingredients.soap);
                map_select = 0;
            }else if(map_select==5){
                map_main = false;
                map_market = true;
            }else if(map_select==6){
                pickStack.push(ingredients.hashi);
                map_select = 0;
            }else{
                map_select = 0;
            }
            
        } else {
            fill(180);
            rect(width-405, (height/2)+240, 300, 75, 20);
            fill("#40FF74");
            rect(width-400, height/2+235, 300, 75, 20);
        }
    } else {
        fill(180);
        rect(width-405, (height/2)+240, 300, 75, 20);
        fill("#40FFCE");
        rect(width-400, height/2+235, 300, 75, 20);
    }
    
    //select_cancel//
    if (mouseX >= 1040 && mouseX < 1240 && mouseY >= 555 && mouseY < 630) {
        if (mouseIsPressed) {
            fill("#40FF74");
            rect(width-145, (height/2)+240, 200, 75, 20);
            image(turn,width-145,height-120,65,65);
            map_select = 0;
        } else {
            fill(180);
            rect(width-145, (height/2)+240, 200, 75, 20);
            fill("#40FF74");
            rect(width-140, height/2+235, 200, 75, 20);
            image(turn,width-140,height-125,65,65);
        }
    } else {
        fill(180);
        rect(width-145, (height/2)+240, 200, 75, 20);
        fill("#40FFCE");
        rect(width-140, height/2+235, 200, 75, 20);
        image(turn,width-140,height-125,65,65);
    }
    
    
    
    noStroke();
    textAlign(CENTER,CENTER);
    textSize(50);
    fill(150);
    text("Go!",width-400,height/2+235);
    fill(240);
    text("Go!",width-402,height/2+232);
    textSize(10);
}


//-------scene-----------
function drawTomatoFarmScene() {
    image(tomato_farm, width/2, height/2, width, height);
    fill(255, 120);
    stroke(0);
    rect(width/2, (height/2)-100, 1240, 450, 20);
    rect(1185, 625, 150, 150, 25);
    image(tomato_text,width/2, (height/2)-100, 1240, 450);
    image(tomato, 1185, 625, 150, 150);
    noStroke();
    if (mouseX >= 20 && mouseX < 170 && mouseY >= 550 && mouseY < 700) {
        if (mouseIsPressed) {
            map_hatakeA = false;
            map_main = true;
            map_select = 0;
        } else {
            fill(180);
            rect(90, 630, 150, 150, 20);
            fill("#40FF74");
            rect(95, 625, 150, 150, 20);
            image(turn,95,630,125,125);
        }
    } else {
        fill(180);
        rect(90, 630, 150, 150, 20);
        fill("#40FFCE");
        rect(95, 625, 150, 150, 20);
        image(turn,95,630,125,125);
    }
}

function drawHatakeBScene() {
    image(olive_farm, width/2, height/2, width, height);
    fill(255, 120);
    stroke(0);
    rect(width/2, (height/2)-100, 1240, 450, 20);
    rect(1185, 625, 150, 150, 25);
    image(olive_text,width/2, (height/2)-100, 1240, 450);
    image(olive, 1185, 625, 150, 150);
    noStroke();
    if (mouseX >= 20 && mouseX < 170 && mouseY >= 550 && mouseY < 700) {
        if (mouseIsPressed) {
            map_hatakeB = false;
            map_main = true;
            map_select = 0;
        } else {
            fill(180);
            rect(90, 630, 150, 150, 20);
            fill("#40FF74");
            rect(95, 625, 150, 150, 20);
            image(turn,95,630,125,125);
        }
    } else {
        fill(180);
        rect(90, 630, 150, 150, 20);
        fill("#40FFCE");
        rect(95, 625, 150, 150, 20);
        image(turn,95,630,125,125);
    }
}

function drawSeaScene() {
    image(sea, width/2, height/2, width, height);
    fill(255, 120);
    stroke(0);
    rect(width/2, (height/2)-100, 1240, 450, 20);
    rect(1185, 625, 150, 150, 25);
    image(saba_text,width/2, (height/2)-100, 1240, 450);
    image(saba, 1185, 625, 150, 150);
    noStroke();
    if (mouseX >= 20 && mouseX < 170 && mouseY >= 550 && mouseY < 700) {
        if (mouseIsPressed) {
            map_sea = false;
            map_main = true;
            map_select = 0;
        } else {
            fill(180);
            rect(90, 630, 150, 150, 20);
            fill("#40FF74");
            rect(95, 625, 150, 150, 20);
            image(turn,95,630,125,125);
        }
    } else {
        fill(180);
        rect(90, 630, 150, 150, 20);
        fill("#40FFCE");
        rect(95, 625, 150, 150, 20);
        image(turn,95,630,125,125);
    }
    
}

function drawMarketScene() {
    image(market, width/2, height/2, width, height);
    fill(255, 120);
    stroke(0);
    rect(width/2, (height/2)-100, 1240, 450, 20);
    rect(1185, 625, 150, 150, 25);
    image(koroke_text,width/2, (height/2)-100, 1240, 450);
    image(koroke, 1185, 625, 150, 150);
    noStroke();
    if (mouseX >= 20 && mouseX < 170 && mouseY >= 550 && mouseY < 700) {
        if (mouseIsPressed) {
            map_market = false;
            map_main = true;
            map_select = 0;
        } else {
            fill(180);
            rect(90, 630, 150, 150, 20);
            fill("#40FF74");
            rect(95, 625, 150, 150, 20);
            image(turn,95,630,125,125);
        }
    } else {
        fill(180);
        rect(90, 630, 150, 150, 20);
        fill("#40FFCE");
        rect(95, 625, 150, 150, 20);
        image(turn,95,630,125,125);
    }
}

function drawFinishScene(){
    image(last, width/2, height/2, width, height);
    noStroke();
    if (mouseX >= 20 && mouseX < 170 && mouseY >= 290 && mouseY < 440) {
        if (mouseIsPressed) {
            map_finish= false;
            start_menu = true;
            pickStack = [];
            map_select = 0;
        } else {
            fill(180);
            rect(90, height/2, 150, 150, 20);
            fill("#40FF74");
            rect(95, (height/2)+5, 150, 150, 20);
            image(restart,95,(height/2)+5,125,125);
        }
    } else {
        fill(180);
        rect(90, height/2, 150, 150, 20);
        fill("#40FFCE");
        rect(95, (height/2)+5, 150, 150, 20);
        image(restart,95,(height/2)+5,125,125);
    }
}