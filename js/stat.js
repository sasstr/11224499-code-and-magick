'use strict';

var SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';
var BACKGROUND_COLOR = 'rgba(256, 256, 256, 1)';
var CLOUD_COORDINATE_X = 100;
var CLOUD_COORDINATE_Y = 10;
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var FIRST_LINE_TEXT = 'Вы победили!';
var SECOND_LINE_TEXT = 'Список результатов';
var FONT = '16px PT Mono';
var BAR_GRAPH_HEIGHT =  150;
var BAR_GRAPH_WIDTH = 40;
var BAR_MY_COLOR = 'rgba(255, 0, 0, 1)';
var BAR_GAP = 50;
var times = [1200, 6500, 3200, 7000];

// Функция которая возращает лучший результат игры
var getBestResult = function (times) {
  return Math.max.apply(null, times);
};
var maxResult = getBestResult(times);

//  Функция возращает массив с высотами гистограмм игроков пропорционально их времени игры
var playerHeightBar = times.map( function (item, i, times) {
  return Math.round((item / maxResult) * BAR_GRAPH_HEIGHT);
});

// Функция возращает координату Y гистограммы игрока
var getBarStartCoordinateY = function (heightDifference) {
  return (100 + heightDifference);
};

// Поучаем цвет колонок других игроков
var getPlayerBarColor = function (name) {
  var PlayerColorSaturation = 'hsla(235, 100%, '+ Math.ceil(Math.random()*100) +'% , 1)';
  return (name ==='Вы') ? BAR_MY_COLOR : PlayerColorSaturation;
};

var renderStatistics = function (ctx, names, times) {
  var drawPlayerBar = function(playerHeightBar) {
    var nextCoordinateX = 155;
    var heightDifference = BAR_GRAPH_HEIGHT;
    for (var i = 0; i < playerHeightBar.length; i++) {
      heightDifference -= playerHeightBar[i];
      var nextCoordinateY = getBarStartCoordinateY(heightDifference);

      ctx.fillStyle = getPlayerBarColor(names[i]);
      ctx.fillRect(nextCoordinateX, nextCoordinateY, BAR_GRAPH_WIDTH, playerHeightBar[i]);
      nextCoordinateX += 90;
      heightDifference = BAR_GRAPH_HEIGHT;
    }
};



  if (ctx){
    ctx.fillStyle = SHADOW_COLOR;
    ctx.fillRect(CLOUD_COORDINATE_X+10, CLOUD_COORDINATE_Y+10, CLOUD_WIDTH, CLOUD_HEIGHT);

    ctx.fillStyle = BACKGROUND_COLOR;
    ctx.fillRect(CLOUD_COORDINATE_X, CLOUD_COORDINATE_Y, CLOUD_WIDTH, CLOUD_HEIGHT);

    ctx.font = FONT;
    ctx.textBaseline = "hanging";
    ctx.strokeText(FIRST_LINE_TEXT, (CLOUD_WIDTH / 3), (CLOUD_HEIGHT / 6) );
    ctx.strokeText(SECOND_LINE_TEXT, (CLOUD_WIDTH / 3), (CLOUD_HEIGHT / 4));
    drawPlayerBar(playerHeightBar);
  }
  else {
    // Ваш браузер не поддерживает тег CANVAS установите другой браузер.
  }
};

/*
ctx.strokeText("Hello world", 10, 50);
renderStatistics(ctx, NAMES, times);
 fillRect(x, y, width, height)
Рисование заполненного прямоугольника.
strokeRect(x, y, width, height)
Рисование прямоугольного контура.
fillText(text, x, y [, maxWidth])
Вставляет заданный текст в положении (x,y).
Опционально может быть указана максимальная ширина.
strokeText(text, x, y [, maxWidth])
Вставляет контур заданного текста в положении (x,y).
Опционально может быть указана максимальная ширина.
*/
/*console.log(item);
console.log(playerHeightBar);
var getBestResult = function (times) {
  times.slice().sort(function (a, b){
    return b-a;
  });
  return Math.round(times[0]);
};
var getBestResult = function (times) {
   times.reduce( function( bestResult, currentItem, index, array) {
          return bestResult;
  }, 0);
};
//console.log('Текущий лучший результат ' + bestResult);
          //console.log('Текущий item массива ' + array[index]);
var maxResult = getBestResult(times);
//console.log('Что вернула функция с reduce ' + maxResult);
*/
