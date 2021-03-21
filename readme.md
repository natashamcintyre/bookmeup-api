<h2 align=center><a href="https://book-me-up.herokuapp.com/">Book Me Up</a></h2>

<h4 align=center><a href="https://github.com/natashamcintyre/bookmeup-api#screenshots">Screenshots</a> | <a href="https://github.com/natashamcintyre/bookmeup-api#tech/framework-used">Tech Stack</a> | <a href="https://github.com/natashamcintyre/bookmeup-api#features">Features</a> | <a href="https://github.com/natashamcintyre/bookmeup-api#installation">Installation</a> | <a href="https://github.com/natashamcintyre/bookmeup-api#tests">Testing</a> | <a href="https://github.com/natashamcintyre/bookmeup-api#how-to-use">How To Use</a> | <a href="https://github.com/natashamcintyre/bookmeup-api#credits">Credits</a></h4>

A web application to allow users to offer books to share with the community. This is the backend API application. Please find the frontend [here](https://github.com/natashamcintyre/bookmeup)

## Motivation
To demonstrate the ability to build a high quality single page web app, in a new framework as part of a team practising agile development that is focused on thorough test driven development process. Also, to enjoy ourselves.

## Build status
[![Build Status](https://travis-ci.com/argy-bargy/book_swap.svg?branch=main)](https://travis-ci.com/argy-bargy/book_swap)

## Code style
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)

## Screenshots
![Home Screen](https://github.com/argy-bargy/book_swap/blob/main/screenshots/Screenshot%202021-03-01%20at%2015.28.59.png)

## Tech/framework used
**Built with** (backend)
- [Node.JS](https://nodejs.org)
- [Express](https://expressjs.com)
- [MongoDB](https://www.mongodb.com)
- [Atom](https://atom.io)
- [Visual Studio Code](https://code.visualstudio.com)

## Features
Key Features:

* Add a book to lend with a barcode scanner
* Search for books by any keyword in the free search field.
* See details of each book
* See 'virtual library card' of prior readers
* Request to borrow a book from the community library

## Code Example
Backend app.js:
```
Refactors needed:
```

## Installation
To use locally you will also need to follow the instructions [here](https://github.com/natashamcintyre/bookmeup/blob/main/readme.md#installation) to set up the front end. For the back end, clone this repo, then:
```
$ cd bookmeup-api
$ npm install
```
You will need npm, which is installed with Node.js. Please visit the [Node.js website](https://nodejs.org/en/download/) to download.


### Database Installation
You will need homebrew, if you don't please install [Homebrew](https://brew.sh/).

* ```$ brew tap mongodb/brew```
* ```$ brew install mongodb-community```

If you have not yet upgraded to MacOs Catalina or above:
* ```$ sudo mkdir -p /data/db```
* ```$ sudo chown -R `id -un` /data/db```

If you do have Catalina or above:
* ```$ sudo mkdir -p /System/Volumes/Data/data/db```
* ```$ sudo chown -R `id -un` /System/Volumes/Data/data/db```


## API Reference
This project utilizes the OpenLibrary Books API: https://openlibrary.org/dev/docs/api/books, to request all related book information.

## Tests
Cypress for feature tests, Enzyme for React unit tests, and Mocha-Chai for Node.js tests.

For end to end testing, the backend will need to be up and running. Please follow the instruction below first, then read the instructions in the [frontend readme](https://github.com/natashamcintyre/bookmeup/blob/main/readme.md#tests) to run the tests:
```
$ npm start
```

### Linting
We are using ESlint for frontend and backend linting.

To run from each of the project directories:

`$ npx eslint .`

## How to use?
The frontend and backend run independently on separate servers.

First, [ensure the database is running](https://github.com/natashamcintyre/bookmeup-api/blob/main/readme.md#database-setup)

To use Book Me Up, start the backend server:

  Terminal 1:
  ```
  $ npm start
  ```

then follow the instructions in the bookmeup [frontend readme](https://github.com/natashamcintyre/bookmeup/blob/main/readme.md#how-to-use)

Before either, ensure the mongodb is running in the background as well.

### Database Setup
Mongodb needs to be running for the app to work:
* ```$ brew services run mongodb-community```

To check it's working:
* ```$ brew services list```

To Stop:
* ```$ brew services stop mongodb-community```

## Credits

  Team argy-bargy:  
  [Aman Tank](https://github.com/AmanTank187)  
  [Cathal Lavelle](https://github.com/calavell)  
  [Chris Whitehouse](https://github.com/chriswhitehouse)  
  [Kiki Dawson](https://github.com/kikidawson)  
  [Natasha McIntyre](https://github.com/natashamcintyre)  
  [Will Dixon](https://github.com/WillDixon93)  
