# Code Challenge
Follow a path of characters & collect letters:

- Start at the character `@`
- Follow the path
- Collect letters
- Stop when you reach the character `x`

## Assignment

Write a piece of code that takes a map of characters as an input and outputs the collected letters and the list of characters of the travelled path.

Input:

- a map (2-dimensional array) of characters in a data format of your choice (can even be hard-coded as a global constant)

Output:

- Collected letters
- Path as characters

#### A basic example

```
  @---A---+
          |
  x-B-+   C
      |   |
      +---+
```

Expected result: 
- Letters ```ACB```
- Path as characters ```@---A---+|C|+---+|+-B-x```


### Installation
Install [NPM and Node](https://nodejs.org/en/download/)

Open Command Line Terminal:

Clone down Git Repo `git clone https://github.com/ivag/collect-characters.git`. Browse to `collect-characters` folder.
 
Install packages using NPM `npm install`

Run project `npm run start`

Run tests using Jest `npm run test`


### Tools & Technologies
* Language: Typescript - https://www.typescriptlang.org/
* Environment: Node - https://nodejs.org
* Package Manager: NPM  -https://www.npmjs.com/
* Test Suite: Jest - https://facebook.github.io/jest/en/
