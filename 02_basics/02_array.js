const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(marvel_heros);
// console.log(dc_heros);
// console.log(allHeros);

// *** Spread ***
const allHerosInSpread = [...marvel_heros, ...dc_heros]
// console.log(allHerosInSpread);

const anotherArray = [1, 2, 3 , [4, 5], 6, 7, [8, 9 , [10, 11, [12, 13]]]];
// const usuableAnotherArray = anotherArray.flat(Infinity);
// console.log(usuableAnotherArray);



/*
1. push but not merge,
2. concat
3. spread better than concat
4. flat
5. isArrray
6. from
7. of

*/