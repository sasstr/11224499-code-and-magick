'use strict';

var NUMBER_OF_PERSON = 4;

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия' , 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

var blockSetup = document.querySelector('.setup');

blockSetup.classList.remove('hidden');

var randomQuality = function (array) {
  return parseInt(Math.random() * array.length);
};

var getPersonName = function(names, surnames) {
  var randomName = names[ randomQuality(names) ];
  var randomSurname = surnames[ randomQuality(surnames) ];
  return  (Math.random() > 0.5) ? randomName + " " + randomSurname : randomSurname + " " + randomName ;
};

var getCoatColor = function (coatColors) {
  return coatColors[ randomQuality(coatColors) ];
};

var getEyesColor = function (eyesColor) {
  return eyesColor[ randomQuality(eyesColor) ];
};

var createWizards = function () {
  var wizards = [];

  for (var i = NUMBER_OF_PERSON; i > 0; i--) {
    var someNameAndSurname =  getPersonName(names, surnames);
    var someCoat =  getCoatColor(coatColors);
    var someEyesColor =  getEyesColor(eyesColor);

    wizards.push( {
      name: someNameAndSurname,
      coatColor: someCoat,
      eyesColor: someEyesColor
    });
  }
   return wizards;
};

var randomWizards = createWizards();
var setupSimilarList = document.querySelector('.setup-similar-list');
var similarWizardTamplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var renderWizard = function (randomWizards) {
  var wizardElement = similarWizardTamplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = randomWizards.name;
  wizardElement.querySelector('.wizard-coat').style.fill = randomWizards.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = randomWizards.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();

for (var j = 0; j < randomWizards.length ; j++) {
  fragment.appendChild(renderWizard(randomWizards[j]));
}

setupSimilarList.appendChild(fragment);
document.querySelector('.setup-similar').classList.remove('hidden');


//console.log(fourRandomWizards);
//console.log(similarWizardTamplate);
//    console.log(similarWizardTamplate);
//console.log(Persons);

// console.log(someEyesColor);
// console.log(someCoat);
// console.log(some);
/*var persons = [];

    //var randomName = names[ parseInt( Math.random() * names.length)];
    //var randomSurname = surnames[ parseInt( Math.random() * surnames.length ) ];
    var coatColorPerson = coatColors[ parseInt( Math.random() * coatColors.length) ];
    var eyesColorPerson = eyesColor[ parseInt( Math.random() * eyesColor.length) ];
var somePerson = {


};

 return {
            'name': namePerson
    };
        Подготовка
В форке учебного проекта создайте ветку module3-task1 и в этой ветке выполните следующие шаги:

• Создайте файл js/setup.js в вашем учебном проекте. Это файл, в котором
вы будете вести работу со всплывающим окном настройки персонажа.

• В файле index.html подключите ваш файл при помощи тега script.

В файле setup.js

1. Покажите блок .setup, убрав в JS-коде у него класс .hidden.

2. Создайте массив, состоящий из 4 сгенерированных JS объектов,
    которые будут описывать похожих персонажей. Объекты должны содержать следующие поля:
    o name, строка — случайно сгенерированное имя персонажа.
    Имя генерируется из массивов имен и фамилий: нужно случайным образом выбрать из массива имен имя,   ++
    а из массива фамилий фамилию и сложить их.

    При желании имя и фамилию можно в случайном порядке менять местами:)  ++

Имена
 Иван  Хуан Себастьян  Мария  Кристоф  Виктор  Юлия  Люпита  Вашингтон

Фамилии
 да Марья  Верон  Мирабелла  Вальц  Онопко  Топольницкая  Нионго  Ирвинг

coatColor, строка — случайный цвет мантии на выбор из следующих:
 rgb(101, 137, 164)  rgb(241, 43, 107)  rgb(146, 100, 161)  rgb(56, 159, 117)  rgb(215, 210, 55)  rgb(0, 0, 0)

eyesColor, строка — случайный цвет глаз персонажа на выбор из следующих:
black  red  blue  yellow  green


3. На основе данных, созданных в предыдущем пункте и шаблона #similar-wizard-template создайте DOM-элементы,
соответствующие случайно сгенерированным волшебникам и заполните их данными из массива:
o Имя персонажа name запишите как текст в блок .setup-similar-label;
o Цвет мантии coatColor задайте как цвет заливки fill в стилях элемента .wizard-coat;
o Цвет глаз eyesColor задайте как цвет заливки fill в стилях элемента .wizard-eyes.

4. Отрисуйте сгенерированные DOM-элементы в блок .setup-similar-list.
Для вставки элементов используйте DocumentFragment.

5. Покажите блок .setup-similar, удалив у него CSS-класс hidden.
Требования к коду
Код должен быть разделен на отдельные функции. Стоит отдельно объявить функцию генерации случайных данных,
функцию создания DOM-элемента на основе JS-объекта, функцию заполнения блока DOM-элементами на основе массива JS-объектов.
Пункты задания примерно соответствуют функциям, которые вы должны создать.
*/
