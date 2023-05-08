let rep = 1;

while (rep <= 10) {
  console.log(`Lifting wights repetations ${rep}`);
  rep++;
}

//
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log('loop is about to end...');
}
