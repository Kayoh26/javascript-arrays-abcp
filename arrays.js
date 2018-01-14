var chocolateBars = ['snickers','hundred grand','kitkat','skittles'];

function addElementToBeginningOfArray (array,elem){
  return [elem , ...array];
}

function destructivelyAddElementToBeginningOfArray(array,elem){
  return array.unshift(elem);
}

function addElementToEndOfArray(array,elem){
  return [...array , elem];
}

function destructivelyAddElementToEndOfArray(array, elem){
  return array.push(elem);
}

function accessElementInArray(array,index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1);
}

