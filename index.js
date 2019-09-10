// Write your solution in this file!
const driver = {};


function updateDriverWithKeyAndValue(obj, key, value){
  const newDriver = {...obj};
  newDriver[key] = value;
  return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value){
    obj[key] = value;
    return obj;
}
function deleteFromDriverByKey(driver, key){
  return Object.assign({}, driver.key);
}

function destructivelyDeleteFromDriverByKey(driver, key){
  return delete driver[key];
}