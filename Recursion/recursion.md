### What is Recursion ?

A process (a function in our case) that calls itself

**Have You Used It before??**

YES...

1. JSON.parse / JSON.stringify
2. document.getElementById and DOM traversal algorithms
3. Object traversal
4. Very common with more complex algorithms
5. It's sometimes a cleaner alternative to iteration

**What is callStack??**

In almost all programming language, there is a built in data structure that manages what happens when functions are invoked. It is called **CallStack** in Javascript.

1. It is a stack data structure.
2. Anytime a function is invoked it is placed (**pushed**) on the top of the call stack.
3. When javaScript sees the return keyword or when the function ends, the compailer will remove (**pop**).

**How Recursion Work??**

1. Invoke the same function with a different input until you reach your base case.

2. Base Case : The condition when the recursion ends.
   This is the most important concept to understand.

3. different Input : The recursvie call each time called with different input no.
