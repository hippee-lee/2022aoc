import fs from 'fs';
import { validateHeaderName } from 'http';
import { Elf } from './elf';

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
  console.log('Puzzle 1:', sortedElves[0]);
  const topThreeElves = sortedElves.slice(0,3);
  const topThreeCalories = topThreeElves.reduce((total, elf) => total + elf.calories, 0)
  console.log('Puzzle 2: ', topThreeCalories);
} catch  (err) {
  console.log(err);
}