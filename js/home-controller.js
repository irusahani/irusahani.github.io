

var Letters=['A','B','C','D','E','F','G','H'];
var numbers=[1, 2, 3, 4, 5, 6, 7, 8];

var currentPossition;
var suares;
var area;

var pondCount;
var CountArray= new Array(9);

$(document).ready(function () {
 suares=$('.col');
 chesspieces=$('.area');
 pondCount=0;
 for(var i=0;i<CountArray.length;i++){
 CountArray[i]=0;
 }
 });

$('.area').on("click",function (eventData) {
    currentPossition=$(this);
    console.log(currentPossition);

    if (!(currentPossition.hasClass('clickpiece')) && currentPossition.hasClass('blackpond')){
        pondCount=0;
        pathofBlackpond(currentPossition);

    }
    if (!(currentPossition.hasClass('clickpiece')) && currentPossition.hasClass('whitepond')){
        pondCount=0;
        pathofWhitekpond(currentPossition);

    }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////

function pathofBlackpond(eventData) {
    currentPossition=eventData;
    suares.removeClass('selectpath');
    chesspieces.removeClass('clickpiece');
    var currentId=currentPossition.parent().attr('id');
    var letter=currentId.charAt(0);
    var no=currentId.charAt(1);
    var LettersArrayPossition=($.inArray(letter,Letters));
    var numArrayPossition=($.inArray(parseInt(no),numbers));
    var tempId=Letters[LettersArrayPossition]+numbers[numArrayPossition+1];
    var x=LettersArrayPossition;

    for (var y=numArrayPossition+1;y<4;y++) {
        tempId = Letters[x] + numbers[y];
        if (!($("#" + tempId).children().hasClass('area'))) {
            $("#" + tempId).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        else {
            break;
        }
    }

    if (!($("#"+tempId).children().hasClass('area'))){
        $("#"+tempId).addClass('selectpath');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');

    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function pathofWhitekpond(eventData) {
    currentPossition=eventData;
    suares.removeClass('selectpath');
    chesspieces.removeClass('clickpiece');
    var currentId=currentPossition.parent().attr('id');
    console.log(currentId);
    var letter=currentId.charAt(0);
    var no=currentId.charAt(1);
    var LettersArrayPossition=($.inArray(letter,Letters));
    var numArrayPossition=($.inArray(parseInt(no),numbers));
    var tempId1=Letters[LettersArrayPossition]+numbers[numArrayPossition-1];
    var tempId2=Letters[LettersArrayPossition]+numbers[numArrayPossition-2];

    switch(currentPossition.attr('id')){
        case "black7" :CountArray[0]++; break;
        case "black18" :CountArray[1]++; break;
        case "black19" :CountArray[2]++; break;
        case "black20" :CountArray[3]++; break;
        case "black21" :CountArray[4]++; break;
        case "black22" :CountArray[5]++; break;
        case "black23" :CountArray[6]++; break;
        case "black24" :CountArray[7]++; break;
    }

    if (CountArray[0]==1){
        if (!($("#"+tempId1).children().hasClass('area'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        if (!($("#"+tempId2).children().hasClass('area'))){
            $("#"+tempId2).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
    }else{
        if (!($("#"+tempId1).children().hasClass('area'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');

        }
    }
    if (CountArray[1]==1){
        if (!($("#"+tempId1).children().hasClass('area'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        if (!($("#"+tempId2).children().hasClass('area'))){
            $("#"+tempId2).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
    }else{
        if (!($("#"+tempId1).children().hasClass('area'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');

        }
    }
    if (CountArray[2]==1){
        if (!($("#"+tempId1).children().hasClass('area'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        if (!($("#"+tempId2).children().hasClass('area'))){
            $("#"+tempId2).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
    }else{
        if (!($("#"+tempId1).children().hasClass('area'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');

        }
    }
    if (CountArray[3]==1){
        if (!($("#"+tempId1).children().hasClass('area'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        if (!($("#"+tempId2).children().hasClass('area'))){
            $("#"+tempId2).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
    }else{
        if (!($("#"+tempId1).children().hasClass('area'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');

        }
    }
    if (CountArray[4]==1){
        if (!($("#"+tempId1).children().hasClass('area'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        if (!($("#"+tempId2).children().hasClass('area'))){
            $("#"+tempId2).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
    }else{
        if (!($("#"+tempId1).children().hasClass('area'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');

        }
    }
    if (CountArray[5]==1){
        if (!($("#"+tempId1).children().hasClass('area'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        if (!($("#"+tempId2).children().hasClass('area'))){
            $("#"+tempId2).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
    }else{
        if (!($("#"+tempId1).children().hasClass('area'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');

        }
    }
    if (CountArray[6]==1){
        if (!($("#"+tempId1).children().hasClass('area'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        if (!($("#"+tempId2).children().hasClass('area'))){
            $("#"+tempId2).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
    }else{
        if (!($("#"+tempId1).children().hasClass('area'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');

        }
    }
    if (CountArray[7]==1){
        if (!($("#"+tempId1).children().hasClass('area'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        if (!($("#"+tempId2).children().hasClass('area'))){
            $("#"+tempId2).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
    }else{
        if (!($("#"+tempId1).children().hasClass('area'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');

        }
    }
    if (CountArray[8]==1){
        if (!($("#"+tempId1).children().hasClass('area'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        if (!($("#"+tempId2).children().hasClass('area'))){
            $("#"+tempId2).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
    }else{
        if (!($("#"+tempId1).children().hasClass('area'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');

        }
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

$(".col").on("click",function (eventData) {
    var currentSquar=$(this);
    var currentpiece=$(".area.clickpiece");
    if ($(currentSquar).hasClass('selectpath')){
        currentSquar.append(currentpiece);
        area.removeClass('clickpiece');
        suares.removeClass('selectpath');

    }
});









