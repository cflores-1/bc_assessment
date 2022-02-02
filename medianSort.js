/*
Median Sort
Write a function medianSort() that accepts one argument: an array. The elements of this array can be either numbers or arrays of numbers. 
The function should return the initial array sorted by the numbers or the median values of the arrays of numbers.

For example:
medianSort([3, [-2, 4, 9]]) à [3, [-2, 4, 9]]
The median of [-2, 4, 9] is 4, so we should sort that array after the 3.
medianSort([[12, 9, 1, 25], 4]) à [4, [12, 9, 1, 25]] The median of [12, 9, 1, 25] is 10.5, and 10.5 is greater than 4.
medianSort([[2.4, 0.2, 9.8], 0, [-1], [-9, -4]]) à [[-9, -4], [-1], 0, [2.4, 0.2, 9.8]]
The median of [2.4, 0.2, 9.8] is 2.4. The median of [-1] is -1. The median of [-9, -4] is -6.5. 
Therefore, the sorted order of these medians is [-6.5, -1, 0, 2.4]
*/