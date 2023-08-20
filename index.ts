import { from } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

//https://www.learnrxjs.io/learn-rxjs/operators/filtering/distinctuntilchanged
// Example 1: distinctUntilChanged with basic values

// only output distinct values, based on the last emitted value
const source$ = from([0, 1, 22, 0, 1, 1, 2, 2, 3, 3]);

source$.pipe(distinctUntilChanged()).subscribe(console.log);
// output: 1,2,3
