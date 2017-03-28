$(document).ready(function(){
    $("#fight").click(function(){
        $("#jugador1>h3").css({"background-color":"white"});
        $("#rock1,#paper1,#scissor1,#rock2,#paper2,#scissor2").css(
        {"height":"120px","position":"relative","left":"0px","top":"0px"});
        $("#fight,#player1Win,#player2Win,#draw,#jugador2>img").hide();
        $("#jugador1>img").mouseenter(amplia);
        $("#jugador1>img").click(selecciona);
        $("#rock1,#paper1,#scissor1").click(turnplayer2);
        $("#jugador2>img").mouseenter(amplia2);
        $("#jugador2>img").click(selecciona2);  
        $("#fight").show();
    });
});

function amplia(){
    $("#jugador1>img").stop();
    $(this).animate({"width":"140px","height":"140px"},{"duration":500});
    $(this).siblings("img").animate({"width":"100px","height":"100px"},{"duration":500});
    $("#jugador1>img").click(selecciona);  
}

function turnplayer2(){
    $("#jugador2>img").show();
    $("#jugador1>img").hide();
    $("#jugador1>img").off();
    $("#jugador2>h3").css({"background-color":"white"});
    $("#jugador1>h3").css({"background-color":"initial"});
    $("#jugador2>img").click(selecciona2);   
}

function amplia2(){
    $("#jugador2>img").stop();
    $(this).animate({"width":"140px","height":"140px"},{"duration":500});
    $(this).siblings("img").animate({"width":"100px","height":"100px"},{"duration":500});
    $("#jugador2>img").click(selecciona2);
}

var opc1;
var opc2;

function selecciona(){
    opc1=$(this).attr("alt");
    $(this).stop(true,false);
     
}

var results={
    rock:{rock:"draw",paper:"player2Win",scissor:"player1Win"},
    paper:{rock:"player1Win",paper:"draw",scissor:"player2Win"},
    scissor:{rock:"player2Win",paper:"player1Win",scissor:"draw"}
};
var results3={
    rock:{rock:"draw",paper:"paper2",scissor:"rock1"},
    paper:{rock:"paper1",paper:"draw",scissor:"scissor2"},
    scissor:{rock:"rock2",paper:"scissor1",scissor:"draw"}
};


function selecciona2(){
    opc2=$(this).attr("alt"); 
    $(this).stop(true,false);
    $("#jugador2>img").off();
    $("#jugador2>img").hide();
       
    var winner=results[opc1][opc2];
    var img=results3[opc1][opc2];
    
    $("#"+opc1+"1").animate({left:"150px","top":"50px"},{duration:1500});
    $("#"+opc2+"2").animate({left:"-150px","top":"50px"},{duration:1500});
    
    $("#"+winner).show();
    $("#"+img).show();  
}












