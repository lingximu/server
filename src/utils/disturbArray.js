// 打乱数组
function disturbArray (array) {
  var len = array.length;
  for (var i = 0; i < len - 1; i++) {
    var idx = Math.floor(Math.random() * (len - i));
    var temp = array[idx];
    array[idx] = array[len - i - 1];
    array[len - i - 1] = temp;
  }
  return array;
}

module.exports = disturbArray;
