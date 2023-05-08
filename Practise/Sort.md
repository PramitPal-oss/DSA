### Sorting Algo:

**What is Sorting Algorithms??**

Sorting is the process of rearranging the items in a collection (e.g. an array) so that the items are in some kind of order.
Examples:
1.Sorting numbers from smallest to largest.
2.Sorting names alphabetically.
3.Sorting movies based on release year.
4.Sorting movies based on revenue.

**Why do we need to learn this?**

1.Sorting is an incredibly common task, so it's good to know how it works.
2.There are many different ways to sort things, and different techniques have their own advantages and disadvantages.
3.Sorting sometimes has quirks, so it's good to understand how to navigate them.

**How JavaScript BuildIn Sort Algorithms Works?**

```js
//1.Example for Strings:
['Steele', 'Colt', 'Data Structures', 'Algorithms'].sort();
// [ "Algorithms", "Colt", "Data Structures", "Steele" ]

//2.Example for Number:
[6, 4, 15, 10].sort();
// [ 10, 15, 4, 6 ]
```

> complexity of buildIn Sort method: o(n log n)

_Behind the Scene Sort Works_ :

1. The built-in sort method accepts an optional comparator function
2. You can use this comparator function to tell JavaScript how you want it to sort
3. The comparator looks at pairs of elements (a and b), determines their sort order based on the return value
   .If it returns a negative number, a should come before b
   .If it returns a positive number, a should come after b,
   .If it returns 0, a and b are the same as far as the sort is concerned

Example:1

```js
function numberCompare(num1, num2) {
  return num1 - num2;
}

[6, 4, 15, 10].sort(numberCompare);
// [ 4, 6, 10, 15 ]
```

Example:2

```js
function compareByLen(str1, str2) {
  return str1.length - str2.length;
}

['Steele', 'Colt', 'Data Structures', 'Algorithms'].sort(compareByLen);
// [ "Colt", "Steele", "Algorithms", "Data Structures" ]
```
