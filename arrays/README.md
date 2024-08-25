# Métodos de Array

Arrays utilizados

```js
const numbersArr = [8, 1, 9, 16, 25, 34, 29, 36, 45, 80, 96, 102, 113, 71];
const stringArr = [
  "Violão",
  "Itaquaquecetuba",
  "Francisco",
  "Reduce",
  "Gatos",
  "Sim",
  "Independência",
];
```

## Filter

Filtra os elementos do array com base em uma condição

```js
numberArr.filter((e) => e >= 100);
```

> Retornará os elementos maiores ou iguais (>=) a 100: **102, 113**

---

```js
stringArr.filter((e) => e.startsWith("I"));
```

> Retornará os elementos que comecem com a letra I: **Itaquaquecetuba, Independência**

## Every

Mostra se **todos** os elementos correspondem a uma condição.
Retorna _true_ ou _false_

```js
numbersArr.every((e) => e > 0);
```

> Diz se todos os elementos são maiores que 0: **true**

---

```js
stringArr.every((e) => e.includes("a"));
```

> Diz se todos os elementos possuem a letra A: **false**

## Some

Mostra se **algum** elemento corresponde a uma condição.
Retorna _true_ ou _false_

```js
numbersArr.some((e) => e >= 113);
```

> Diz se algum elemento é maior ou igual a 113: **true**

---

```js
stringArr.some((e) => e.includes("G"));
```

> Diz se algum elemento possui a letra G: **true**

## Find

Busca o primeiro elemento que satisfaça a condição

```js
numberArr.find((e) => e <= 30);
```

> Retornará o primeiro elemento do array que seja menor ou igual a 30: **8**

---

```js
stringArr.find((e) => e.endsWith("s"));
```

> Retornará o primeiro elemento do array que termine com a letra S: **Gatos**

## Map

Percorre cada elemento do array

```js
numbersArr.map(e => {
    console.log(e*2);
})
```
> Multiplica todos os valores do array por 2
---
```js
stringArr.map((e, index) => {
    console.log(`Elemento: ${e} - posição no array: ${index}`);
})
```
> Mostra o elemento e sua posição no array:
* Elemento: Violão - posição no array: 0
* Elemento: Itaquaquecetuba - posição no array: 1
* Elemento: Francisco - posição no array: 2
* Elemento: Reduce - posição no array: 3
* Elemento: Gatos - posição no array: 4
* Elemento: Sim - posição no array: 5
* Elemento: Independência - posição no array: 6
## forEach

Percorre cada elemento do array

```js
numbersArr.forEach((e) => {
  console.log(e + 4);
});
```

> Somou o valor **4** a cada elemento: **12, 5, 13, 20, 29, 38, 33, 40, 49, 84, 100, 106, 117, 75**

---

```js
stringArr.forEach((e) => {
  console.log(e);
});
```

> Mostra cada elemento do array
