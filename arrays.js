var chocolateBars = ['snickers','hundred grand','kitkat','skittles'];

function addElementToBeginningOfArray (array1,elem){
  return [elem , ...array1];
}

function destructivelyAddElementToBeginningOfArray(array2,elem2){
  return array2.unshift(elem2);
}

function addElementToEndOfArray(array3,elem3){
  return [...array3 , elem3];
}

function destructivelyAddElementToEndOfArray(array4, elem4){
  return array4.push(elem4);
}

