### What is Selection SOrt?

Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position.

**Lets see How sorted algo works in this array**

**LOOP 1**

1. [5,3,4,1,2] so we start with 5 here. Is 5 < 3 ? No..
2. [5,3,4,1,2] so 3 is our new smaller value now is 3 < 4 yes
3. [5,3,4,1,2] still in 3 Now is 3 < 1 ? No..
4. [5,3,4,1,2] so 1 is new smaller value. is 1 < 2 ? Yes..

_So Now we started from 5 and now we got our 1st sorted small value which is 1. So Now the array will look like :_

> [1,3,4,5,2] So 1 is interchange position with 5. As we started from 5 and end with smallest value 1.

**LOOP 2**

1. [1,3,4,5,2] Now lets start with 3. because leftmost part (1) is already sorted. so.. is 3 < 4 ?? Yes..
2. [1,3,4,5,2] 3 is now smaller value Now is 3 < 5 ? yes..
3. [1,3,4,5,2] Still 3 is smaller value Now is 3 < 2 ?? Yes..

_We start with 3 and end with 2, the new smallest value so again the position will change._

> [1,2,4,5,3] New sorted value.

**LOOP 3**

1. [1,2,4,5,3] Now starts with 4. So is 4< 5 ? Yes..
2. [1,2,4,5,3] 4 is new Smallest value. is 4 < 3 ? No..

_So 3 will be new smallest value a this point. And we started with 4 and end with 2,The New Shortest Value. SO Now the array will look like_

> [1,2,3,5,4] New sorted Value

**LOOP 4**

1. [1,2,3,5,4] Now start with 5. Because other sides are already sorted. So 5 < 4 ? No...

_So again we started with 5 and end with 4 so New smallest value will be 4. And the array will look like:_

> [1,2,3,4,5] New Sorted value .

So the Array is Sorted. In this way the Selection Sort Worked.
