function randomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  
  const who = ['The dog', 'My cat', 'My neighbor', 'The weather'];
  const action = ['ate', 'broke', 'hid', 'deleted'];
  const what = ['my homework', 'the keys', 'the report', 'the project'];
  const when = ['last night', 'this morning', 'a while ago', 'just now'];
  
  console.log(`¡Sorry! ${randomItem(who)} ${randomItem(action)} ${randomItem(what)} ${randomItem(when)}.`);
