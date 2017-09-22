function cheer(arr) {
  return _.map(arr, function (a) {
    return (`${a} ${a} ${a} !!!`).toUpperCase();
  });
}

console.log(cheer(['foo', 'bar']));

