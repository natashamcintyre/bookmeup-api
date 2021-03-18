Deployed:
Using [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/efficiency?utm_source=google&utm_campaign=gs_emea_united_kingdom_search_core_brand_atlas_desktop&utm_term=mongodb%20atlas&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=12212624581&gclid=CjwKCAiA4rGCBhAQEiwAelVtizDjHx5031X3IqmRZghUTNn7V9t8X_S8bDyDob2mWKmhQcbf3ukDnRoCDgkQAvD_BwE) to host cloud database. Connected to backend by setting a heroku config variable MONGODB_URI to the connection string retrieved from MongoDB (NM as database user), and updated config/config.js to call on this environment variable. Needed to access port from Heroku configs as well.

Lessons:
I accidentally pushed a username and password to GitHub so I had to use bfg to remove the offending file. (I tried to use bfg --replace-text but ended up in a pickle, so just removed the file and then afterwards committed the correct file with the sensitive info omitted). Bfg accesses and edits every commit in git history so is useful for removing info from previous commits. How to use: [This blog is helpful](https://medium.com/@rhoprhh/removing-keys-passwords-and-other-sensitive-data-from-old-github-commits-on-osx-2fb903604a56)

* ```$ brew install bfg``` install bfg
* ```git clone --mirror git://this-repo...``` creates a copy of the repo
* Create a text file with the text you want to find and replace, and optional replace text. eg:

In password.txt file | Result
-|-
PASSWORD1                      | #Replace string 'PASSWORD1' with '***REMOVED***' (default)
PASSWORD2==>examplePass        | # replace with 'examplePass' instead
PASSWORD3==>                   | # replace with the empty string
regex:password=\w+==>password= | # Replace, using a regex
regex:\r(\n)==>$1              | # Replace Windows newlines with Unix newlines

* Add this file to .gitignore # don't commit your sensitive data again!
* ```bfg --replace-text password.txt```
* Run the git commands it provides at end of process
* git push

  # Book Me Up
  A web application to allow users to offer books to share with the community.

  ## Motivation
  To demonstrate the ability to build a high quality single page web app, in a new framework as part of a team practising agile development that is focused on thorough test driven development process. Also, to enjoy ourselves.

  ## Build status
  [![Build Status](https://travis-ci.com/argy-bargy/book_swap.svg?branch=main)](https://travis-ci.com/argy-bargy/book_swap)

  ## Code style
  [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)

  ## Screenshots
  ![Home Screen](https://github.com/argy-bargy/book_swap/blob/main/screenshots/Screenshot%202021-03-01%20at%2015.28.59.png)

  ## Tech/framework used
  **Built with**
  - [React](https://reactjs.org)
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
  Frontend App.JS:
  ```
  Refactors needed:
  * Remove individual title, author, isbn variables from APP.js - DONE :)
  * Rename bookSearchToo - DONE :)
  * Refactoring a User object - DONE :)
  * Combine all three header components (possibly through composition: https://reactjs.org/docs/composition-vs-inheritance.html) - DONE :)
  * Create generic get request function with URL parameters
  * Error Handling Front End Set Up??
  * Refactor out BookHandler.js and UserHandler.js out of APP.js as modules?
  * Is there a better way of positioning API calls in the file structure?
  ```

  Backend app.js:
  ```
  Refactors needed:
  ```

  ## Installation
  To use locally, clone this repo, then:
  ```
  $ cd book_swap/backend
  $ npm install
  $ cd ../frontend
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

  Run the following to for frontend test coverage:
  ```
  $ npm test -- --coverage --watchAll=false
  ```
  Run the following to open the test runner for end to end testing:
  ```
  $ cd backend
  $ npm start
  $ cd ../frontend
  $ npm start
  $ npx cypress open
  ```
  ### Linting
  We are using ESlint for frontend and backend linting.

  To run from each of the project directories:

  `$ npx eslint .`

  ## How to use?
  The frontend and backend run independently on separate servers, only in the local environment.

  To use Book Me Up:

  Terminal 1:
  ```
  $ cd backend
  $ npm start
  ```

  Terminal 2:
  ```
  $ cd frontend
  $ npm start
  ```

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
  [Natasha McIntyre](https://github.com/natashamcintyre")
  [Will Dixon](https://github.com/WillDixon93)
