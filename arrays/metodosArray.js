const numbersArr = [8, 1, 9, 16, 25, 34, 29, 36, 45, 80, 96, 102, 113, 71]
const stringArr = ['Violão', 'Itaquaquecetuba', 'Francisco', 'Reduce', 'Gatos', 'Sim', 'Independência']

// console.log(`Filter: ${numbersArr.filter(e => e >= 100)}`); // 102, 113
// console.log(`Filter: ${stringArr.filter(e => e.startsWith('I'))}`); // Itaquaquecetuba, Independência
// console.log(`Find: ${numbersArr.find(e => e <= 30)}`); // 8
// console.log(`Find: ${stringArr.find(e => e.endsWith("s"))}`); // 8

// numbersArr.forEach(e => {
//     console.log(e+4);
// })

// stringArr.forEach(e => {
//     console.log(e);
// })

// console.log(`Every: ${numbersArr.every(e => e > 0)}`);
// console.log(`Every: ${stringArr.every(e => e.includes("a"))}`);

// console.log(`Some: ${numbersArr.some(e => e >= 113)}`);
// console.log(`Some: ${stringArr.some(e => e.includes('G'))}`);

// console.log(`Map: ${numbersArr.map(e => e >= 113)}`);

stringArr.map((e, index) => {
    console.log(`Elemento: ${e} - posição no array: ${index}`);
})




