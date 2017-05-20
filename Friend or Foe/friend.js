function friend(friends){
  let result = friends.filter((fr) => {
    if (fr.length === 4) {
      return fr;
    }
  })

  return result;
}