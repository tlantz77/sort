import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([10, 333, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charCollection = new CharactersCollection('XaazbqG');
charCollection.sort();
console.log(charCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(0);
linkedList.add(324.33);
linkedList.sort();
linkedList.print();