function compareArrays(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((element, index) => arr2[index] === element);
}

function getUsersNamesInAgeRange(users, gender) {
  return users
    .filter(user => user.gender === gender)
    .reduce((acc, user, index, array) => 
      index === array.length - 1 ? ((acc + user.age) / array.length) : (acc + user.age)
    , 0);
}