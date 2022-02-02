/* Tic-tac-toe
Write a function ticTacToe() that accepts one argument, a string representation of a tic-tac-toe grid,
and returns an array of 2 numbers: the number of ways in which X or O can instantly make a winning
move.

The 0th index of the returned array should be the number of ways X can win if it is currently X's turn. The
other element in the array should be the number of ways O can win if it is currently O's turn.
The input grid will be provided as a string containing only the characters 'X', 'O', ' ', or '\n'.

For example, the following input corresponds to the following tic-tac-toe grid:
"X X\n OO\nXOO"
X| |X
-----
|O|O
-----
X|O|O

For that input, we would expect the function to return the array [2, 2]. This is because if it was X's
turn, they can win by making their next move in either the middle cell of the top row or the left cell of
the middle row. If it was O's turn, they could make a move in either of those same 2 spaces to also win.
If the input grid represents a board for which either X or O has already won, the return array should simply be [0,0].
*/

//define function with one argument
//return an array of 2 numbers