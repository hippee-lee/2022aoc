import fs from 'fs';
// import { Elf } from './elf';
export class Elf {
  constructor(public calories: number) {}
}

try {
  const input = fs.readFileSync('./day01/elf-calories.txt', 'utf8');
  let elves: Elf[] = [];
  const lines = input.split(/r?\n/);
  // assume there is an elf to start
  let calories = 0;
  lines.forEach(line => {
    if(!line) {
      elves.push(new Elf(calories));
      calories = 0;
    } else {
      calories += parseInt(line);
    }
  });
  const sortedElves = elves.sort((elf1: Elf, elf2: Elf) => { return elf2.calories - elf1.calories});
  console.log(sortedElves[0]); // answer
} catch  (err) {
  console.log(err);
}