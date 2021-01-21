//-----------------sound_def----------------------------//
let title, select, cancel;
let sound_play = 0;

//-----------------map_image_def------------------------//

let logo;
////window
let first, maps, last;
////scene_background
let sea, olive_farm, tomato_farm, market;

////map_thumbnail
let brank_mini, olive_mini, tomato_mini, saba_mini, soap_mini, market_mini, hashi_mini;

////text_data
let tomato_text, olive_text, saba_text, koroke_text;

//item_image_def
////food
let tomato, olive, saba, soap, koroke, hashi;
////item
let pin, pin2, pick;
////mark
let turn, batsu, restart;
let yasai;
//-------------------------------------------------------//

//pinselecter
let map_mouseover = 0;/*1=olive,2=tomato,3=saba,4=soap,5=koroke,6=hashi*/ 
let map_select = 0;
let map_click = 0;

//-----------------scene_transition----------------------//
let start_menu = true;
let map_main = false;
let map_sea = false;
let map_hatakeA = false;
let map_hatakeB = false;
let map_market = false;
let map_finish = false;
//-------------------------------------------------------//
const ingredients = {
    saba: 0,
    olive: 1,
    tomato: 2,
    soap: 3,
    koroke: 4,
    hashi: 5
};

let pickStack = [];

let mouse = 0;

function preload(){
    //-----------------------------------------------------//
    //---------------load_sounds---------------------------//
    title = loadSound("./data/title.mp3");
    select = loadSound("./data/select.mp3");
    cancel = loadSound("./data/cancel.mp3")


    //---------------load_images---------------------------//
    ////scene_image
    logo = loadImage("./data/title.png");
    first = loadImage("./data/main.jpg");
    maps = loadImage("./data/maps.jpg");
    last = loadImage("./data/last.jpg");
    
    ////scene_background
    olive_farm = loadImage("./data/olive_farm.jpg");
    tomato_farm = loadImage("./data/tomato_farm.jpg");
    sea = loadImage("./data/sea.jpg");
    market = loadImage("./data/market.jpg");

    ////map_thumbnail
    brank_mini = loadImage("./data/brank_mini.png");
    olive_mini = loadImage("./data/olive_mini.png");
    tomato_mini = loadImage("./data/tomato_mini.png");
    saba_mini = loadImage("./data/saba_mini.png");
    soap_mini = loadImage("./data/soap_mini.png");
    market_mini = loadImage("./data/market_mini.png");
    hashi_mini = loadImage("./data/hashi_mini.png");


    ////text
    tomato_text = loadImage("./data/tomato_text.png");
    olive_text = loadImage("./data/olive_text.png");
    saba_text = loadImage("./data/saba_text.png");
    koroke_text = loadImage("./data/koroke_text.png");
    
    ////food_image
    olive = loadImage("./data/Olive.png");
    saba = loadImage("./data/saba.png");
    tomato = loadImage("./data/tomato.png");
    soap = loadImage("./data/soap.png");
    koroke = loadImage("./data/koroke.png");
    hashi = loadImage("./data/hashi.png");
    
    ////item_image
    pin = loadImage("./data/pin.png");
    pin2 = loadImage("./data/pin2.png");
    pick = loadImage("./data/tsumayouji.png");
    
    ///mark_image
    turn = loadImage("./data/turn.png");
    batsu = loadImage("./data/batsu.png");
    restart = loadImage("./data/restart.png");
    //-----------------------------------------------------//
}

function setup() {
    //---------------Canvas_settings-----------------------//
    const myCanvas = createCanvas(1280, 720);
    myCanvas.parent("canvasContainer");
    frameRate(60);
    rectMode(CENTER);
    imageMode(CENTER);
    //noCursor(); /*FOR DEBUG*/

    title.loop();
    title.amp(0.2);

}

function draw() {
    //---------------sraw scene----------------------------//
    if(start_menu){
        
        drawFirstScene();
    }else if (map_main) {
        drawMapScene();
    } else if (map_hatakeA) {
        drawTomatoFarmScene();
    } else if (map_hatakeB) {
        drawHatakeBScene();
    } else if (map_sea) {
        drawSeaScene();
    } else if (map_market) {
        drawMarketScene();
    } else if (map_finish) {
        drawFinishScene();
    }

    drawPick();
    fill(0);

    text("x="+mouseX, mouseX+20, mouseY);
    text("y="+mouseY, mouseX+20, mouseY+20);
    text("mouse="+mouse, mouseX+20, mouseY+40);
    text("push="+push, mouseX+20, mouseY+60);
}