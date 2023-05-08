### Why we use merge Sort ?

1. There is a family of sorting algorithms that can improve time complexity from O(n^2) to O(n log n).
2. There's a tradeoff between efficiency and simplicity
   The more efficient algorithms are much less simple, and generally take longer to understand Let's dive in!

3. It's a combination of two things - merging and sorting!
4. Exploits the fact that arrays of 0 or 1 element are always sorted
5. Works by decomposing an array into smaller arrays of 0 or 1 elements then building up a newly sorted array.

**How It Works**

[8,3,5,4,7,6,1,2]
Divide This array in a two equal parts.
[8,3,5,4] [7,6,1,2] Divide this two more equal parts
[8,3] [5,4] [7,6] [1,2]
[8] [3] [5] [4] [7] [6] [1] [2]
