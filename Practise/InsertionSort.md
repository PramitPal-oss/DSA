### What is Insertion Sort?

Builds up the sort by gradually creating a larger left half which is always sorted.

**How It Works**
Let try Insertion Sort with this array:
[5,3,4,1,2]

1. [5,3,4,1,2] It starts with 3 (index 1) so where 3 should go?

[5,3,4,1,2] is 3 < 5? yes..
[3,5,4,1,2] What about 4 Now? is 4 < 5? Yes..
[3,4,5,1,2] what about 1 ? 1 < 5 ? yes.. 1 < 4? yes... 1 < 3? yes...
[1,3,4,5,2] Now What about 2 ? 2 < 5? Yes.. 2 <4 ? Yes... 2 < 3 ? yes.. 2<1 ? No.. so..
[1,2,3,4,5]

Basically we have seen how gradually insertion sort sorted one side of array. It just pick one element and compair with previous elements.
