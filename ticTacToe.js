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

//completed

//taken from example above:
const str = `X X
\n OO
\nXOO`;

//define function take in the string as a parameter
const ticTacToe = (str) => {
    let split_ = str.split('\n').join('');
    let winners = [ 0, 0 ]; //this is what will be returned

    let wBoard = [
        //R
        [0,1,2],
        [3,4,5],
        [6,7,8],
        //C
        [0,3,6],
        [1,4,7],
        [2,5,8],
        //
        [0,4,8],
        [2,4,6]
    ];

    //loop through the winning board
    for (let arr of wBoard) {
        let x = 0;
        let o = 0;
        let z = 0;

        //loop through array
        for (let i of arr) {
            if (split_[i] === 'X') {
                x += 1;
            } else if (split_[i] === 'O') {
                o += 1;
            } else if (split_[i] === ' ') {
                z +=1;
            }
        }
        //if both conditions met add to winners
        if (x === 2 && z === 1) {
            winners[0] += 1;
        }

        if (o === 2 && z === 1) {
            winners[1] += 1;
        }
    }
    return winners;
}
console.log(ticTacToe(str));