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

// Функция которая возращает лучший результат игры
var getBestResult = function (times) {
  return Math.max.apply(null, times);
};

var maxResult = getBestResult(times);
console.log(maxResult);

var times = [20, 200, 2200, 202000, 220000, 34, 34567546765, 99999999999];

var getBestResult = function (times) {
   times.reduce( function( bestResult, currentItem, index, array) {
          console.log('Текущий лучший результат ' + bestResult);
          console.log('Текущий item массива ' + array[index]);
          return bestResult;
  }, 0);
};

var maxResult = getBestResult(times);
console.log('Что вернула функция с reduce ' + maxResult);

var getBestResult = function (times) {
  return Math.max.apply(null, times);
}

var getBestResult = function (times) {
  times.slice().sort(function (a, b){
    return b-a;
  });
  return Math.round(times[0]);
};

/**/

// Поучаем цвет колонок других игроков

var getPlayerBarColor = function (name) {

    var PlayerColorSaturation = 'hsla(235, 100%, '+ Math.ceil(Math.random()*100) +'% , 1)';

    var PlayerBarColor = (name ==='Вы') ? BAR_MY_COLOR : PlayerColorSaturation;

    return PlayerBarColor;
};

var renderStatistics = function (ctx, names, times) {

  if (ctx){
    ctx.fillStyle = SHADOW_COLOR;
    ctx.fillRect (CLOUD_COORDINATE_X+10, CLOUD_COORDINATE_Y+10, CLOUD_WIDTH, CLOUD_HEIGHT);

    ctx.fillStyle = BACKGROUND_COLOR;
    ctx.fillRect (CLOUD_COORDINATE_X, CLOUD_COORDINATE_Y, CLOUD_WIDTH, CLOUD_HEIGHT);

    ctx.font = FONT;
    ctx.fillText(FIRST_LINE_TEXT, 240, 180);
    ctx.fillText(SECOND_LINE_TEXT, 260, 180);
  }
  else {
    // Ваш браузер не поддерживает тег CANVAS установите другой браузер http://www.slo.ru/files/browsers/
  }
};

/*renderStatistics(ctx, NAMES, times);
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
