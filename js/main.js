// Функция, возвращающая случайное целое число из переданного диапазона включительно (https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
function getRandomInt(min, max) {
  min = Math.ceil(min) //округление вверх
  max = Math.floor(max) //округление вниз

  return Math.floor(Math.random() * (max - min +1)) + min; //максимум и минимум вкючены
}

//Функция для проверки максимальной длины строки.
function getLenght (string, maxstring) {
  if(string <= maxstring) {
    return true;
  }
  else {
    return false
  }
}
getLenght(5,12);


