function rangeOfAnArray() {
    var array = [9, 3, -3, -9, 11, -6, 5, 10, -9, 1];
    
      var min = array[0];
      var max = array[0];
      for (var i = 0; i < array.length; i++) {
        if (array[i] < min) {
          min = array[i];
        }
        if (array[i] > max) {
          max = array[i];
        }
      }
      return max - min;
    }
    
    console.log(rangeOfAnArray())