// * ===============================1========================================

/*
 ? look at the code below:
 ? make a sentence by concatenating the object keys 
*/
const object1 = {
    ali: 'name',
    writes: 'does what',
    novels: 'kind of book',
  };
  
  // output => 'ali writes novels'

  const keys = Object.keys(object1)
  const sentnce = keys.join(' ')
  console.log(sentnce);
  