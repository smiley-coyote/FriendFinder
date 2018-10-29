# Movie Finder

## Welcome to Movie Finder!

This is an app that helps a user determine what movie they should watch by asking them a series of questions. The app uses Node and Express servers to handle the back-end.

## How does it work?

Each question answer requires a value of 1 to 10, and once submited that value is stored into an array. There is an array of stored movie objects that have pre-determined values taken from the same questions on the survey. Both the user values and movie values are compared and the difference of each question's value is stored into a new array (for example, on the first survey question if the user answers 4 and the movie's stored value for the question is 6, then the difference would be 2). From that new array, all of those values are then added up, and the movie with the smallest total sum becomes the movie match.

### Link
https://fast-fortress-45572.herokuapp.com/

### List of technology used:
* Node.js
* Express package
* OMDB api




