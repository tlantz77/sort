import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';


const numbersCollection = new NumbersCollection([10, 333, -5, 0]);
const numberSorter = new Sorter(numbersCollection);
numberSorter.sort();
console.log(numbersCollection.data);

const charCollection = new CharactersCollection('XaazbqG');
const charSorter = new Sorter(charCollection);
charSorter.sort();
console.log(charCollection.data);