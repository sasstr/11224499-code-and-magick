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

var createSimilarList = function (randomWizards) {
var fragment = document.createDocumentFragment();

for (var j = 0; j < randomWizards.length ; j++) {
  fragment.appendChild(renderWizard(randomWizards[j]));
}

setupSimilarList.appendChild(fragment);
};

createSimilarList(randomWizards);

document.querySelector('.setup-similar').classList.remove('hidden');
