import Team from './team';
import Bowman from './bowman';
import Daemon from './daemon';

const bowman = new Bowman('Bowman');
const daemon = new Daemon('Daemon');
const iterator = new Team([bowman, daemon]);

for (const value of iterator) {
  console.log(value);
}
