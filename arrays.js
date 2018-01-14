var chocolateBars = ['snickers','hundred grand','kitkat','skittles'];

function addElementToBeginningOfArray (array1,elem){
  return [elem , ...array1];
}

function destructivelyAddElementToBeginningOfArray(array2,elem2){
  return array2.unshift(elem2);
}