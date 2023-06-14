function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i]);
      }
    } else {
      const keys = Object.keys(collection);
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        callback(collection[key]);
      }
    }
    return collection;
  }
  
  
  function myMap(collection, callback) {
    const result = [];
    myEach(collection, function (element) {
      result.push(callback(element));
    });
    return result;
  }
  
  function myReduce(collection, callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : collection[0];
    const startingIndex = initialValue !== undefined ? 0 : 1;
    myEach(collection.slice(startingIndex), function (element) {
      accumulator = callback(accumulator, element, collection);
    });
    return accumulator;
  }
  
//   function myFind(collection, predicate) {
//     let foundElement;
//     myEach(collection, function (element) {
//       if (predicate(element) && foundElement === undefined) {
//         foundElement = element;
//       }
//     });
//     return foundElement;
//   }
  function myFind(collection, callback) {
  for (let i = 0; i < collection.length; i++) {
    if (callback(collection[i])) {
      return collection[i]; // Return the value if the condition is met
    }
  }

  return undefined; // Return undefined if the value is not found
}
  function myFilter(collection, predicate) {
    const result = [];
    myEach(collection, function (element) {
      if (predicate(element)) {
        result.push(element);
      }
    });
    return result;
  }
  
  function mySize(collection) {
    if (Array.isArray(collection) || typeof collection === "string") {
      return collection.length;
    } else {
      return Object.keys(collection).length;
    }
  }
  
//   function myFirst(collection, n = 1) {
//     return collection.slice(0, n);
//   }
function myFirst(collection, n) {
    if (n === undefined) {
      // If n is not provided, return the first element
      return collection[0];
    } else {
      // Return the first n elements using array slicing
      return collection.slice(0, n);
    }
  }
//   function myLast(collection, n = 1) {
//     return collection.slice(collection.length - n);
//   }
function myLast(collection, n) {
    if (n === undefined) {
      // If n is not provided, return the last element
      return collection[collection.length - 1];
    } else {
      // Return the last n elements using array slicing and negative indices
      return collection.slice(-n);
    }
  }
  function myKeys(object) {
    return Object.keys(object);
  }
  
  function myValues(object) {
    return Object.values(object);
  }
  
  
  

//   function arraysEqual(arrA, arrB) {
//     if (arrA.length !== arrB.length) return false;
//     for (let idx = 0; idx < arrA.length; idx++) {
//       if (Array.isArray(arrA[idx]) && Array.isArray(arrB[idx])) {
//         if (!arraysEqual(arrA[idx], arrB[idx])) return false;
//       } else if (arrA[idx] !== arrB[idx]);
//       }
//     }