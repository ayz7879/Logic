// find vovels

const findVovels = (char) => {
  let vovels = "aeiouAEIOU";
  let list = [];
  for (let index = 0; index < char.length; index++) {
    for (let j = 0; j < vovels.length; j++) {
      if (char[index] == vovels[j]) {
        list = list + char[index];
      }
    }
  }
  console.log(list)
};
findVovels("jkl");
