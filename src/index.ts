import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([10, 333, -5, 0]);
const numberSorter = new Sorter(numbersCollection);
numberSorter.sort();
console.log(numbersCollection.data);

const charCollection = new CharactersCollection('XaazbqG');
const charSorter = new Sorter(charCollection);
charSorter.sort();
console.log(charCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(0);
linkedList.add(324);
const linkedListSorter = new Sorter(linkedList);
linkedListSorter.sort();
linkedList.print();